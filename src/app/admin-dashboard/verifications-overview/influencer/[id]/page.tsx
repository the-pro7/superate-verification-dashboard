"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleVerificationDetail } from "@/utils/dataFetch";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import BackButton from "../../_components/BackButton";
import GovImage from "../../_components/GovImage";
import UserDetails from "../../_components/UserDetails";
import isBrandVerification from "@/utils/switchType";

const SingleInfluencerVerificationPage = ({
  params: { id },
}: {
  params: { id: string | number };
}) => {
  const role: string | null = isOnClientSide
    ? localStorage.getItem("role")
    : null;
  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["influencer-verification"],
    queryFn: () =>
      getSingleVerificationDetail(accessToken!, role!, id as string),
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="p-5 h-screen">
      {/* Back button */}
      <BackButton />

      <div className="flex flex-col-reverse h-[80%] overflow-y-auto md:h-max md:pt-0 md:overflow-y-hidden gap-6 md:flex-row md:gap-6 justify-around items-center pt-0 lg:pt-5">
        <GovImage
          imgSrc={
            (!isBrandVerification(data!) &&
              data?.government_issued_id_image) as string
          }
        />
        <UserDetails
          id={id as string}
          role="influencer"
          adminAccessToken={accessToken!}
          data={data!}
        />
      </div>
    </div>
  );
};

export default SingleInfluencerVerificationPage;
