import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

import { ChartComponent } from "@/components/chart-component/ChartComponent";
import TopNav from "@/components/dashboard-topnav/TopNav";

// GET data
const getData = async (base_url = "") => {
  try {
    const response = await fetch(`${base_url}/brand-data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("An error occurred when trying to fetch your data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const metadata: Metadata = {
  title: "Verification Dashboard",
  description: "Verifications dashboard",
};

const Page: React.FC = async () => {
  return (
    <>
      <TopNav pageText="Control Panel" />
      <div className="h-11/12 flex items-center justify-center">
        <h1 className="text-4xl font-semibold tracking-wider">
          Nothing to see here
        </h1>
      </div>
    </>
  );
};

export default Page;
