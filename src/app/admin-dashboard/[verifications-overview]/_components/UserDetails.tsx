import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import ImageFullView from "./ImageFullView";
import { DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import ApproveActionButton from "@/components/verification-log-view/_components/ApproveActionButton";
import DisapproveActionButton from "@/components/verification-log-view/_components/DisapproveActionButton";

interface UserDetailsProps {
  id: string;
  role: "brand" | "influencer";
  adminAccessToken: string;
}

const UserDetails = ({ id, role, adminAccessToken }: UserDetailsProps) => {
  return (
    <div className="border-2 border-slate-100 bg-slate-100 p-7 rounded-lg">
      {/* User (Brand/Influencer) */}
      <div className="flex items-start">
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* Image container */}
          <div
            className="relative overflow-clip w-20 h-20 rounded-full shadow-lg cursor-pointer hover:opacity-80"
            title="Click to view full selfie image"
          >
            <ImageFullView
              dialogTrigger={
                <DialogTrigger asChild>
                  <Image
                    src="/selfie2.jpeg"
                    fill
                    alt="Brand Selfie Image"
                    className="object-cover"
                  />
                </DialogTrigger>
              }
              title={`Selfie Image for ${role} ${id}`}
              description="Showing full selfie image"
              imgSrc="/selfie2.jpeg"
              altText="hello"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl md:font-5xl lg:font-7xl font-semibold mb-2">
              John Doe {id}{" "}
            </h1>
            <p className="text-gray-500">Tema, Ghana</p>
          </div>
        </div>
        <span className="inline-block bg-yellow-400 text-black ml-3 py-1 px-2 rounded mb-5 capitalize">
          {role}
        </span>
      </div>

      {/* Details */}
      <div className="flex gap-3 flex-col">
        <div className="text-gray-700 mb-2">
          <strong>Joined:</strong> 1st August, 2024
        </div>
        <div className="text-gray-700 mb-2">
          <strong>Phone:</strong> 0559911770
        </div>
        <div className="text-gray-700 mb-2">
          <strong>Website:</strong>{" "}
          <Link
            href="http://www.example.com"
            target="_blank"
            // rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.example.com
          </Link>
        </div>
        <div className="text-gray-700 mb-10">
          <strong>Address:</strong> VQ-20 Crimson Road
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col ">
        <div className="flex gap-3">
          <ApproveActionButton
            dialogTrigger={
              <DialogTrigger asChild>
                <Button className="btn rounded-xl p-6 text-sm bg-green-300 text-green-800 text-[1em]">
                  <FaCheckCircle className="mr-2" />
                  Approve
                </Button>
              </DialogTrigger>
            }
            title="Approve"
            description="Approve"
            role={role}
            roleId={id}
            accessToken={adminAccessToken}
          />
          <DisapproveActionButton
            dialogTrigger={
              <DialogTrigger asChild>
                <Button className="btn rounded-xl p-6 text-sm bg-red-300 text-red-800 text-[1em]">
                  <FaTimesCircle className="mr-2" /> Decline
                </Button>
              </DialogTrigger>
            }
            title="Disapprove"
            description="Disapprove"
            role={role}
            roleId={id}
            accessToken={adminAccessToken}
          />
        </div>
        <span className="mt-6 text-gray-700 inline-flex gap-3 items-center">
          <IoWarningOutline className="text-xl" />
          <b>Note:</b>Any of these actions are not reversible
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
