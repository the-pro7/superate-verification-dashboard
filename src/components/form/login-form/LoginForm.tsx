"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/utils/dataFetch";
import { useRouter } from "next/navigation";
import { ILoginDataProps } from "@/types/app-type";
import { toast } from "sonner";
import BeatLoader from "react-spinners/BeatLoader";

const formSchema = z.object({
  username: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  email: z.string().email({
    message: "An email is required to continue",
  }),
  password: z.string().min(8, {
    message: "You need to provide a password to continue",
  }),
});

type UserForm = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<UserForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Destructure goodies from form declaration
  const {
    formState: { isSubmitting, errors },
    setError,
    handleSubmit,
  } = form;

  async function onSubmit(values: UserForm) {
    if (navigator.onLine) {
      try {
        const data: ILoginDataProps = await login(values);

        if (!data) {
          setError("root", {
            message: "Failed to login, Check your network and try again.",
          });
        }

        if (data.access && data.refresh && data.user) {
          sessionStorage.setItem("accessToken", data.access);
          sessionStorage.setItem("refreshToken", data.refresh);
          router.push("/admin-dashboard/verifications-overview");
          toast.success("Signed in successfully!");
        }
      } catch (error: any) {
        console.error(`This is the error: ${error}`);
      }
    } else {
      setError("root", {
        message: "You're not online, connect to a network",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-4/5 mx-auto"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  {...field}
                  type="text"
                  autoFocus
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display username.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center font-medium gap-1 px-4 tracking-widest"
        >
          {isSubmitting && (
            <BeatLoader
              loading={isSubmitting}
              aria-label="Loading Spinner"
              size={6}
              color="#fff"
            />
          )}
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {errors.root && (
          <div className="text-red-500 tracking-wide">
            {errors.root.message}
          </div>
        )}
      </form>
    </Form>
  );
}
