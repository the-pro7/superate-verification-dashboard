"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useRef } from "react";
type ApprovalProps = {
  id?: string | number;
  name?: string;
};

const ConfirmAction: React.FC<ApprovalProps> = ({ name, id }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      className="flex items-center justify-center flex-col gap-4"
      ref={dialogRef}
    >
      <h1>Confirm Approval of {`"${name}"`}</h1>
      <button>X</button>
      <div className="flex">
        <Button className="bg-neutral-300 px-4">Cancel</Button>
        <Button className="bg-sky-500 px-4">Yes</Button>
      </div>
    </dialog>
  );
};

export default ConfirmAction;
