"use client";
import Image from "next/image";
import React from "react";
// Icon imports
import { LuEye } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import IconButton from "../icon-button/IconButton";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { isOnClientSide } from "../verification-log-view/VerificationLogsView";
import { approveUser } from "@/utils/dataFetch";
import ImageFullView from "@/app/admin-dashboard/[verifications-overview]/brand/_components/ImageFullView";
import { DialogTrigger } from "@/components/ui/dialog";
import DisapproveActionButton from "../verification-log-view/_components/DisapproveActionButton";
import ApproveActionButton from "../verification-log-view/_components/ApproveActionButton";

type IVerificationLogType = {
  id?: string;
  selfieImage: string;
  fullLegalName: string;
  location: string;
};

// This UI component displays the synopsis details of brands/influencer
const VerificationLog = ({
  selfieImage,
  fullLegalName,
  location,
  id,
}: IVerificationLogType) => {
  const role: string | null = isOnClientSide
    ? sessionStorage.getItem("role")
    : null;
  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  // JSX
  return (
    <div className="flex items-center justify-between flex-col gap-3 md:gap-0 md:flex-row px-4 rounded-lg shadow-xl py-4 md:py-2 bg-white w-[95%] mx-auto mt-5">
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
        <Link href={`verification-overview/${role}/${id!}`}>
          <IconButton
            color="text-sky-800 bg-sky-300"
            title={`View ${fullLegalName}`}
            buttonText="View"
            icon={<LuEye className="text-2xl text-sky-800" />}
          />
        </Link>

        {/* This button when clicked, should send a patch request to approve user */}
        {/* <IconButton
          title="Approve"
          buttonText="Approve"
          color="text-green-800 bg-green-300"
          onClick={() => {
            setterFn(true);
            toast.custom(
              (t) => (
                <div className="bg-white border-neutral-500 border w-full p-6 rounded-lg relative flex items-center flex-col gap-3 shadow-lg isolate">
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
                    <Button
                      className="px-5 bg-green-500 hover:bg-neutral-300"
                      onClick={async () =>
                        await approveUser(accessToken!, role!, id!)
                      }
                    >
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
        /> */}
        <ApproveActionButton
          dialogTrigger={
            <DialogTrigger>
              <Button className="inline-flex items-center gap-3 bg-green-300 text-green-800 hover:!opacity-90">
                <FaCheck className="text-xl text-green-800" />
                Approve
              </Button>
            </DialogTrigger>
          }
          title={`Confirm approval of '${fullLegalName}'`}
          description={`This action will approve this ${role}`}
          roleId={id!}
          accessToken={accessToken!}
          role={role!}
        />
        {/* This button when clicked, should send a patch request to disapprove user */}
        <DisapproveActionButton
          dialogTrigger={
            <DialogTrigger asChild>
              <Button className="inline-flex items-center gap-3 bg-red-300 text-red-800 hover:!opacity-90">
                <RxCross2 className="text-2xl text-red-800" />
                Disapprove
              </Button>
            </DialogTrigger>
          }
          title={`Confirm disapproval of '${fullLegalName}'`}
          description={`This action will disapprove this ${role}`}
          roleId={id!}
          accessToken={accessToken!}
          role={role!}
        />
      </div>
    </div>
  );
};

export default VerificationLog;
