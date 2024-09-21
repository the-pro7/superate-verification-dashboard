"use client";
import React, { useContext, useRef, useState } from "react";
import {
  IModeratorVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";
// import { RotatingLines } from "react-loader-spinner";
import { useVerificationDetails } from "@/hooks/query";
import { RoleSwitchContext } from "../role-switcher/RoleSwitcher";
import { RotatingLines } from "react-loader-spinner";
import VerificationLog from "../verification-log/VerificationLog";
import isModeratorVerification from "@/utils/switchType";

// Check if user is on client
export const isOnClientSide: boolean = typeof window !== "undefined";

const VerificationLogsView = ({ query }: { query?: string }) => {
  const { role } = useContext(RoleSwitchContext);
  // Role state
  const accessToken: string | null = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  // Testing the custom query hook
  const { data, error, isLoading } = useVerificationDetails<
    IModeratorVerificationType,
    IInfluencerVerificationType
  >(accessToken!, role!);

  if (isLoading)
    return (
      <h1 className="inline-flex items-center gap-2 text-2xl">
        {" "}
        Loading verification data...
      </h1>
    );

  const filteredData:
    | (IModeratorVerificationType | IInfluencerVerificationType)[]
    | undefined = data?.filter(
    (item: IModeratorVerificationType | IInfluencerVerificationType) =>
      item.is_approved === false && item.is_denied === false
  );

  const searchedData = query
    ? filteredData?.filter((item) =>
        isModeratorVerification(item)
          ? item.full_legal_name.toLowerCase().includes(query)
          : item.full_name.toLowerCase().includes(query)
      )
    : filteredData;

  return (
    <div className="h-[65%] my-3 py-3 overflow-y-auto" suppressHydrationWarning>
      {query && (
        <div className="text-xl font-semibold">
          Showing search results for &apos;{query}&apos;
        </div>
      )}
      {searchedData && searchedData?.length != 0 ? (
        searchedData.map(
          (item: IModeratorVerificationType | IInfluencerVerificationType) => (
            <VerificationLog
              key={item.id}
              id={String(item.id)}
              fullLegalName={
                isModeratorVerification(item)
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
    </div>
  );
};

export default VerificationLogsView;
