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
import {
  IBrandVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";
import isbrandVerification from "@/utils/switchType";
import formatDate from "@/utils/dateFormatter";

interface UserDetailsProps {
  id: string;
  role: "brand" | "influencer";
  adminAccessToken: string;
  data: IBrandVerificationType | IInfluencerVerificationType;
}

const UserDetails = ({
  id,
  role,
  adminAccessToken,
  data,
}: UserDetailsProps) => {
  return (
    <div className="border-2 border-slate-100 bg-slate-100 p-7 rounded-lg">
      {/* User (brand/Influencer) */}
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
                    src={data?.selfie_image || "/selfie2.jpeg"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="brand Selfie Image"
                    className="object-cover"
                  />
                </DialogTrigger>
              }
              title={`Selfie Image for ${role} ${id}`}
              description="Showing full selfie image"
              imgSrc={data?.selfie_image || "/selfie2.jpeg"}
              altText="hello"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl md:font-5xl lg:font-7xl font-semibold mb-2">
              {isbrandVerification(data)
                ? data?.full_legal_name || "None"
                : data?.full_name || "None"}
            </h1>
            <p className="text-gray-500">
              {data?.country || data?.location || "None"}
            </p>
          </div>
        </div>
        <span className="inline-block bg-yellow-400 text-black ml-3 py-1 px-2 rounded mb-5 capitalize">
          {role}
        </span>
      </div>

      {/* Details */}
      {role === "influencer" ? (
        <div className="flex gap-3 flex-col md:flex-col">
          <div className="text-gray-700 mb-2">
            <strong>Joined:</strong> {formatDate(data.created_at)}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Government ID Number:</strong>{" "}
            {(!isbrandVerification(data) && data.government_issued_id_number) ||
              "None"}
          </div>
          <div className="text-gray-700 mb-10">
            <strong>Country:</strong> {data.country}
          </div>
        </div>
      ) : (
        // For brand
        <div className="flex gap-3 flex-col md:flex-col">
          <div className="text-gray-700 mb-2">
            <strong>Joined:</strong> {formatDate(data.created_at)}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Phone:</strong>{" "}
            {isbrandVerification(data) && data.phone_number}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Government ID Number:</strong>{" "}
            {isbrandVerification(data) &&
              data.government_issued_business_id_number}
          </div>
          <div className="text-gray-700">
            <strong>Website:</strong>{" "}
            {isbrandVerification(data) && data.website !== "" ? (
              <a
                href={data.website}
                target="_blank"
                type="link"
                // rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {data.website}
              </a>
            ) : (
              "None"
            )}
          </div>
          <div className="text-gray-700 mb-1">
            <strong>Address:</strong>{" "}
            {(isbrandVerification(data) && data.address) || "None"}
          </div>
          <div className="text-gray-700 mb-3">
            <strong>Location:</strong>{" "}
            {(isbrandVerification(data) && data.location) || "None"}
          </div>
        </div>
      )}

      {/* Logic to show or not to show buttons if user is denied */}
      <div className="flex flex-col">
        <div className="flex gap-3 flex-col md:flex-row">
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
            title={`Disapprove brand '${
              isbrandVerification(data) ? data.full_legal_name : data.full_name
            }'`}
            description={`Confirm disapproval of '${
              isbrandVerification(data) ? data.full_legal_name : data.full_name
            }'`}
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
