"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
// Icon imports
import { LuEye } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import IconButton from "../icon-button/IconButton";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "../ui/button";

type IVerificationLogType = {
  id?: number;
  selfieImage: string;
  fullLegalName: string;
  location: string;
  setterFn: Dispatch<SetStateAction<boolean>>;
  value?: boolean;
};

// This UI component displays the synopsis details of brands/influencers
const VerificationLog = ({
  selfieImage,
  fullLegalName,
  location,
  id,
  setterFn,
  value,
}: IVerificationLogType) => {
  return (
    <div className="flex items-center justify-between px-4 rounded-lg shadow-xl py-2 bg-white w-[95%] mx-auto mt-5 transition-all hover:-translate-y-2">
      <div className="flex gap-3 items-center">
        <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-clip">
          <Image src={selfieImage} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl tracking-wide">{fullLegalName}</h3>
          <span className="text-slate-500 text-sm font-light">{location}</span>
        </div>
      </div>
      <div className="flex gap-2">
        {/* Optionally rendered */}
        <Link href={`verification-overview/${id!}`}>
          <IconButton
            color="text-sky-800 bg-sky-300"
            title={`View ${fullLegalName}`}
            buttonText="View"
            icon={<LuEye className="text-2xl text-sky-800" />}
          />
        </Link>
        {/* This button when clicked, should send a patch request to approve user */}
        <IconButton
          title="Approve"
          buttonText="Approve"
          color="text-green-800 bg-green-300"
          onClick={() => {
            setterFn(true);
            toast.custom(
              (t) => (
                <div className="bg-white border-neutral-500 border w-full max-w-80 p-6 rounded-lg relative flex items-center flex-col gap-3 shadow-lg isolate">
                  <button
                    onClick={() => {
                      setterFn(false);
                      toast.dismiss(t);
                    }}
                    title="Close popup"
                    className="absolute right-0 top-0 w-fit h-fit rounded-full border-2 m-1"
                  >
                    <RxCross2 />
                  </button>
                  <h1 className="font-semibold text-xl capitalize text-center">
                    Confirm approval of &apos;{fullLegalName}&apos;
                  </h1>
                  <div className="flex gap-2 items-center justify-center">
                    <Button className="px-5 bg-green-500 hover:bg-neutral-300">
                      Confirm
                    </Button>
                    <Button
                      className="px-5 bg-slate-800 hover:bg-neutral-300"
                      onClick={() => {
                        setterFn(false);
                        toast.dismiss(t);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ),
              { onDismiss: () => setterFn(false), duration: Infinity }
            );
          }}
          icon={<FaCheck className="text-xl text-green-800" />}
        />
        {/* This button when clicked, should send a patch request to disapprove user */}
        <IconButton
          title="Disapprove"
          icon={<RxCross2 className="text-2xl text-red-800" />}
          color="text-red-800 bg-red-300"
          onClick={() => {
            setterFn(true);

            toast.custom(
              (t) => (
                <div className="bg-white border-neutral-500 border w-full max-w-80 p-6 rounded-lg relative flex items-center flex-col gap-3 shadow-lg isolate">
                  <button
                    onClick={() => {
                      toast.dismiss(t);
                      setterFn(false);
                    }}
                    title="Close popup"
                    className="absolute right-0 top-0 w-fit h-fit rounded-full border-2 m-1"
                  >
                    <RxCross2 />
                  </button>
                  <h1 className="font-semibold text-xl capitalize text-center">
                    Confirm disapproval of &apos;{fullLegalName}&apos;
                  </h1>
                  <div className="flex gap-2 items-center justify-center">
                    <Button className="px-5 bg-red-400 hover:bg-neutral-300">
                      Confirm
                    </Button>
                    <Button
                      className="px-5 bg-slate-800 hover:bg-neutral-300"
                      onClick={() => {
                        setterFn(false);
                        toast.dismiss(t);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ),
              { onDismiss: () => setterFn(false), duration: Infinity }
            );
          }}
          buttonText="Disapprove"
        />
      </div>
    </div>
  );
};

export default VerificationLog;
