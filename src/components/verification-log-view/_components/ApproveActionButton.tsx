import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { approveUser } from "@/utils/dataFetch";
import { IActionButtonProps } from "@/types/app-type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const ApproveActionButton: React.FC<IActionButtonProps> = ({
  title,
  description,
  dialogTrigger,
  roleId,
  accessToken,
  role,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Initiate new query client
  const queryClient = useQueryClient();

  // Query mutation to handle approval of user
  const mutation = useMutation({
    mutationFn: () => approveUser(accessToken, role, roleId),
    onSuccess: () => {
      // Invalidate query to refetch in the bg
      queryClient.invalidateQueries({
        queryKey: [role, "verification-details"],
      });

      // Show success toast message
      toast.success(`Approved ${role} successfully`);
    },
    onError: () => {
      // Close the dialog
      setIsOpen(false);
      // SHow error message for failed disapproval
      toast.error(`Failed to approve ${role}, try again`);
    },
  });

  // Function to handle userApproval
  async function handleApproval() {
    mutation.mutate();
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {dialogTrigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            disabled={mutation.isPending}
            onClick={handleApproval}
          >
            {mutation.isPending ? "Approving..." : "Yes, Confirm"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApproveActionButton;
