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
import { Dispatch, SetStateAction } from "react";
import { RotatingLines } from "react-loader-spinner";
import { disapproveUser } from "@/utils/dataFetch";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type DeclinationFormProps = {
  setFormShowStatus: Dispatch<SetStateAction<boolean>>;
  roleId: string;
  accessToken: string;
  role: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
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
  role,
  setIsOpen,
}: DeclinationFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Initiate a new query client
  const queryClient = useQueryClient();

  // Function to mutate data
  const mutation = useMutation({
    mutationFn: (params: { declination_reason: string }) => {
      return disapproveUser(
        accessToken,
        role,
        roleId,
        params.declination_reason
      );
    },
    onSuccess: () => {
      // Invalidate the query to fetch the path
      queryClient.invalidateQueries({
        queryKey: [role, "verification-details"],
      });
      // Show a success toast for the successful disapproval
      toast.success(`Disapproved ${role} successfully!`);
      // Close the dialog
      setIsOpen(false);
    },
    onError: () => {
      toast.error(`Failed to disapprove this ${role}. Try again!`);
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const declination_reason = data.declination_reason;

    try {
      // Asynchronously mutate with the declination reason from the form
      await mutation.mutateAsync({ declination_reason: declination_reason });
    } catch (error) {
      // Just do something with the error IDK
      console.log(`An error stopped everything! -> ${error}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 md:w-2/3">
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
            disabled={mutation.isPending}
            className="inline-flex items-center font-medium gap-1 px-4 tracking-widest"
          >
            {mutation.isPending && (
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
            {mutation.isPending ? "Submitting..." : "Submit"}
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
