"use client";
import TopNav from "@/components/dashboard-topnav/TopNav";
import PageText from "@/components/page-text/PageText";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import RoleSwitcher, {
  RoleSwitchContext,
} from "@/components/role-switcher/RoleSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import { useVerificationDetails } from "@/hooks/query";
import {
  IBrandVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";
import isBrandVerification from "@/utils/switchType";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ApprovedVerificationsPage = () => {
  const [query, setQuery] = useState<string>("");
  const { role } = useContext(RoleSwitchContext);

  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;

  // const { data, error, isLoading } = useVerificationDetails<IBrandVerificationType, IInfluencerVerificationType>(accessToken!, role!)
  const { data, error, isLoading } = useVerificationDetails<
    IBrandVerificationType,
    IInfluencerVerificationType
  >(accessToken!, role!);

  const filteredData = data?.filter((item) => item.is_approved === true);
  const showableData = query
    ? filteredData?.filter((item) =>
        isBrandVerification(item)
          ? item.full_legal_name.toLocaleLowerCase().includes(query)
          : item.full_name.toLocaleLowerCase().includes(query)
      )
    : filteredData;

  // In case there ain't no approved verifications data
  if (filteredData?.length === 0) {
    return <h1>No approved verifications found for {role}</h1>;
  }

  return (
    <div>
      <TopNav
        pageText="Approved Verifications"
        query={query}
        setQuery={setQuery}
      />
      <div className="flex justify-between items-center">
        <PageText />
        <RoleSwitcher />
      </div>
      {query && (
        <div className="font-semibold text-xl mt-2">
          Search results for &apos;{query}&apos;
        </div>
      )}
      {/* Something for loading UI */}
      <section className="h-[500px] overflow-y-scroll py-4 md:h-full md:overflow-y-hidden grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {showableData && showableData.length !== 0 ? (
          showableData.map((item) => (
            // <VerificationLog />
            <Card key={item.id} className="mt-4 w-full overflow-clip shadow-lg">
              <CardHeader className="relative h-40 grid">
                <Image
                  src={
                    isBrandVerification(item)
                      ? item.government_issued_business_id_image
                      : item.government_issued_id_image
                  }
                  fill
                  alt="Government issued ID image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover col-span-1 row-span-1"
                />
                <span className="col-span-1 row-span-1 z-10 bg-white h-fit w-fit py-1 px-4 rounded-full text-sm shadow-xl font-semibold">
                  Government ID Image
                </span>
              </CardHeader>
              <CardContent className="mt-2 flex flex-col justify-start items-start">
                <div className="flex gap-2 items-center">
                  <div className="relative w-14 h-14 rounded-full shadow-lg overflow-clip">
                    <Image
                      src={item.selfie_image}
                      alt={`${role} selfie image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="flex gap-2">
                    <div>
                      {isBrandVerification(item)
                        ? item.full_legal_name
                        : item.full_name}
                    </div>
                    <span>
                      <RiVerifiedBadgeFill />
                    </span>
                  </CardTitle>
                </div>
                <CardDescription className="mt-2">
                  {isBrandVerification(item)
                    ? `Location - ${item.location}`
                    : `Country - ${item.country}`}
                </CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <div suppressHydrationWarning>
            {isLoading ? "Loading verification data" : "No data to be shown"}
          </div>
        )}
      </section>
    </div>
  );
};

export default ApprovedVerificationsPage;
