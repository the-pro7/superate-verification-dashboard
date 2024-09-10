"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleVerificationDetail } from "@/utils/dataFetch";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import BackButton from "../../_components/BackButton";
import GovImage from "../../_components/GovImage";
import UserDetails from "../../_components/UserDetails";

const SingleInfluencerVerificationPage = ({
  params: { id },
}: {
  params: { id: string | number };
}) => {
  const role: string | null = isOnClientSide
    ? localStorage.getItem("role")
    : null;
  const accessToken = isOnClientSide
    ? localStorage.getItem("accessToken")
    : null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["influencer-verification"],
    queryFn: () =>
      getSingleVerificationDetail(accessToken!, role!, id as string),
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="p-5 h-screen relative">
      {/* Back button */}
      <BackButton />
      <div className="flex flex-col gap-6 md:flex-row md:gap-0 justify-around items-center pt-10">
        <GovImage />
        <UserDetails id={id as string} role="influencer" adminAccessToken={accessToken!}/>
      </div>
    </div>
  );
};

export default SingleInfluencerVerificationPage;
