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
import { RotatingLines } from "react-loader-spinner";

const formSchema = z.object({
  declination_reason: z.string().min(8, {
    message: "Declination must be at least 8 characters.",
  }),
});

type DeclinationFormProps = z.infer<typeof formSchema>;

export default function DeclinationReasonForm() {
  const form = useForm<DeclinationFormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      declination_reason: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: DeclinationFormProps) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-4/5 mx-auto"
      >
        <FormField
          control={form.control}
          name="declination_reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Declination reason</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter declination reason"
                  {...field}
                  type="text"
                  autoFocus
                />
              </FormControl>
              <FormDescription>
                This will be your reason disapproval
              </FormDescription>
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
          {isSubmitting ? "Submitting in..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
