"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleVerificationDetail } from "@/utils/dataFetch";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import BackButton from "../../_components/BackButton";
import GovImage from "../../_components/GovImage";
import UserDetails from "../../_components/UserDetails";
import isBrandVerification from "@/utils/switchType";

const SingleBrandVerificationPage = ({
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

  console.log(data);
  // console.log(`The error is : ${error}`)

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="p-5 h-screen relative">
      {/* Back button */}
      <BackButton />
      <div className="flex flex-col-reverse h-[80%] overflow-y-auto md:h-fit md:overflow-y-hidden gap-6 md:flex-row md:gap-6 justify-around items-center pt-0 md:pt-10">
        <GovImage
          imgSrc={
            (isBrandVerification(data!) &&
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

export default SingleBrandVerificationPage;
