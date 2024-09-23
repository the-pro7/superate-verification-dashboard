"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleVerificationDetail } from "@/utils/dataFetch";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import BackButton from "../../_components/BackButton";
import GovImage from "../../_components/GovImage";
import UserDetails from "../../_components/UserDetails";
import isbrandVerification from "@/utils/switchType";

const SinglebrandVerificationPage = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const role: string | null = isOnClientSide
    ? localStorage.getItem("role")
    : null;
  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["brand-verification"],
    queryFn: () =>
      getSingleVerificationDetail(
        accessToken as string,
        role as string,
        id as string
      ),
  });

  // If an error occurs with fetching the data
  if(error) {
    return <div className="text-center text-2xl font-semibold mt-10">An error occurred: &#40;</div>;
  }

  // If data is in loading state
  if (isLoading) {
    return <div className="text-center text-2xl font-semibold mt-10">Loading...</div>;
  }

  return (
    <div className="p-5 lg:h-screen">
      {/* Back button */}
      <BackButton />
      <div className="flex flex-col-reverse h-[80%] overflow-y-auto md:h-fit md:overflow-y-hidden gap-6 md:flex-row md:gap-6 justify-around items-center pt-0 md:pt-10">
        <GovImage
          imgSrc={
            (isbrandVerification(data!) &&
              data.government_issued_business_id_image) as string
          }
        />
        <UserDetails
          id={id as string}
          role="brand"
          adminAccessToken={accessToken!}
          data={data!}
        />
      </div>
    </div>
  );
};

export default SinglebrandVerificationPage;
