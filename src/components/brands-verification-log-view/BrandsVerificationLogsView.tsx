"use client";
import React, { useEffect, useState } from "react";
import VerificationLog from "../verification-log/VerificationLog";
import { getBrandsVerificationDetails } from "@/utils/dataFetch";
// import useSWR from "swr";
import { IBrandVerificationType } from "@/types/brand-verification-type";

const BrandsVerificationLogsView = () => {
  const accessToken: string | null = localStorage.getItem("accessToken");

  // State
  const [data, setData] = useState<IBrandVerificationType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof accessToken === "string") {
        try {
          const dataReceived =
            await getBrandsVerificationDetails<IBrandVerificationType>(
              accessToken
            );

          if (dataReceived !== undefined) {
            setData(dataReceived);
          } else {
            throw new Error("No data was returned from the server");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [accessToken]);

  // console.log(data);

  return (
    <div>
      {data && data.length != 0 ? (
        data.map((item: IBrandVerificationType) => (
          <VerificationLog
            key={item.id}
            fullLegalName={item.full_legal_name}
            selfieImage={item.selfie_image}
            location={item.location}
          />
        ))
      ) : (
        <h1>No brands verifications to view</h1>
      )}
    </div>
  );
};

export default BrandsVerificationLogsView;
