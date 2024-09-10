import React from "react";
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

const ApproveActionButton: React.FC<IActionButtonProps> = ({
  title,
  description,
  dialogTrigger,
  roleId,
  accessToken,
  role,
}) => {
  return (
    <Dialog>
      {dialogTrigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            onClick={async () => approveUser(accessToken, role, roleId)}
          >
            Yes, Confirm
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
