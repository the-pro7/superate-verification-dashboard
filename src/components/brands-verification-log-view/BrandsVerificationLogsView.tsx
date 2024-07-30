"use client";
import React from "react";
import VerificationLog from "../verification-log/VerificationLog";
import { getBrandsVerificationDetails } from "@/utils/dataFetch";
import useSWR from "swr";
import { IBrandVerificationType } from "@/types/brand-verification-type";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

const BrandsVerificationLogsView = () => {
  const { data, error } = useSWR<IBrandVerificationType>(
    `${process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL}/brands-verification-details`,
    fetcher
  );

  if (error) console.log(error);

  console.log(data);

  return <div>BrandsVerificationLogsView</div>;
};

export default BrandsVerificationLogsView;
