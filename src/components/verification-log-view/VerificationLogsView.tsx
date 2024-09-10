"use client";
import React, { useContext, useRef, useState } from "react";
import {
  IBrandVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";
// import { RotatingLines } from "react-loader-spinner";
import { useVerificationDetails } from "@/hooks/query";
import { RoleSwitchContext } from "../role-switcher/RoleSwitcher";
import { RotatingLines } from "react-loader-spinner";
import VerificationLog from "../verification-log/VerificationLog";

// Check if user is on client
export const isOnClientSide: boolean = typeof window !== "undefined";

const VerificationLogsView = ({ query }: { query?: string }) => {
  const { role } = useContext(RoleSwitchContext);
  // Role state
  const accessToken: string | null = isOnClientSide
    ? localStorage.getItem("accessToken")
    : null;

  // Testing the custom query hook
  const { data, error, isLoading } = useVerificationDetails<
    IBrandVerificationType,
    IInfluencerVerificationType
  >(accessToken!, role!);

  if (isLoading)
    return (
      <h1 className="inline-flex items-center gap-2 text-2xl">
        {" "}
        Loading verification data...
      </h1>
    );

  // Type guard to check if the item is of type IBrandVerificationType
  function isBrandVerification(
    item: IBrandVerificationType | IInfluencerVerificationType
  ): item is IBrandVerificationType {
    return (item as IBrandVerificationType).full_legal_name !== undefined;
  }

  const filteredData:
    | (IBrandVerificationType | IInfluencerVerificationType)[]
    | undefined = data?.filter(
    (item: IBrandVerificationType | IInfluencerVerificationType) =>
      item.is_approved === false
  );


  return (
    <div className="h-[65%] my-3 py-3 overflow-y-scroll custom-scrollbar">
      {filteredData && filteredData?.length != 0 ? (
        filteredData.map(
          (item: IBrandVerificationType | IInfluencerVerificationType) => (
            <VerificationLog
              key={item.id}
              id={String(item.id)}
              fullLegalName={
                isBrandVerification(item)
                  ? item.full_legal_name
                  : item.full_name
              }
              selfieImage={item.selfie_image}
              location={item.location ?? item.country}
            />
          )
        )
      ) : (
        <h1>No {role} verifications to view</h1>
      )}
      <VerificationLog
        fullLegalName="Emma"
        location="Tuobodom"
        selfieImage="/logo.png"
      />
    </div>
  );
};

export default VerificationLogsView;
