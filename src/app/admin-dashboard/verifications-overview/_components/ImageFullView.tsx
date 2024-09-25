"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface IImageFullViewProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  dialogTrigger: ReactNode;
}

const ImageFullView: React.FC<IImageFullViewProps> = ({
  imgSrc,
  altText,
  title,
  description,
  dialogTrigger,
}) => {
  return (
    <Dialog>
      {dialogTrigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-square w-full overflow-clip rounded-lg">
          <Image
            src={imgSrc}
            fill
            alt={altText}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageFullView;
