"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/utils/dataFetch";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/navigation";

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

type UserForm = z.infer<typeof formSchema>

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null | unknown>("");

  const router = useRouter()

  async function onSubmit(values: UserForm) {
   if(navigator.onLine) {
    try {
      setLoading(true);
      const { access, refresh, user } = await login(values);

      console.log(user?.email);

      if (access && refresh && user) {
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        router.push("/admin-dashboard")
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error)
    } finally {
      setLoading(false);
      setError("")
    } 
   } else {
    alert("You're not online, connect to a network")
   }
  }

  const form = useForm<UserForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5 mx-auto">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} type="text" autoFocus />
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
        <Button type="submit" disabled={loading} className="inline-flex items-center font-medium gap-1 px-4 tracking-widest">
          {loading && (
            <RotatingLines
              visible={true}
              height="20"
              width="20"
              color="white"
              strokeWidth="2"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              // wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
