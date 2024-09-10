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
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { disapproveUser } from "@/utils/dataFetch";
import { toast } from "sonner";

type DeclinationFormProps = {
  setFormShowStatus: Dispatch<SetStateAction<boolean>>;
  roleId: string;
  accessToken: string;
  role: string;
};

// set reason words limit
const maxLength = 150;

const FormSchema = z.object({
  declination_reason: z
    .string()
    .min(10, {
      message: "Declination reason must be at least 10 characters.",
    })
    .max(maxLength, {
      message: "Declination reason must not be longer than 30 characters.",
    }),
});

export default function DeclinationReasonForm({
  setFormShowStatus,
  roleId,
  accessToken,
  role
}: DeclinationFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const declination_reason = data.declination_reason;
    console.log(declination_reason);
    await disapproveUser(accessToken!, role!, roleId, declination_reason);
    toast.success('Hello')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="declination_reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Declination Reason</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-1">
                  <Textarea
                    placeholder="Enter declination reason here..."
                    className="resize-none"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                This will be your reason disapproval
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="inline-flex items-center font-medium gap-1 px-4 tracking-widest"
          >
            {form.formState.isSubmitting && (
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
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setFormShowStatus(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
