import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import DeclinationReasonForm from "@/components/decline-reason-form/DeclinationReasonForm";
import { IActionButtonProps } from "@/types/app-type";

const DisapproveActionButton: React.FC<IActionButtonProps> = ({
  title,
  description,
  dialogTrigger,
  roleId,
  accessToken,
  role,
}) => {
  const [showDeclinationForm, setShowDeclinationForm] =
    useState<boolean>(false);

  // State to handle dialog closing and opening
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {dialogTrigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 flex-col w-full md:mr-auto md:flex-row">
              <Button
                type="button"
                variant="destructive"
                disabled={showDeclinationForm}
                onClick={() => {
                  setShowDeclinationForm(true);
                }}
              >
                Yes, Confirm
              </Button>
              <DialogClose
                asChild
                onClick={() => setShowDeclinationForm(false)}
              >
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </div>
            {showDeclinationForm && (
              <DeclinationReasonForm
                roleId={roleId}
                setFormShowStatus={setShowDeclinationForm}
                accessToken={accessToken}
                role={role}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisapproveActionButton;
