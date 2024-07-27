import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import InfoCard from "@/components/card/Card";
import styles from "./page.module.css"
import { ChartComponent } from "@/components/chart-component/ChartComponent";

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
  const data: object[] = await getData(process.env.API_ADMIN_BASE_URL);
  // console.log("Data received" + JSON.stringify(data))
  const dataLength: number | null = data?.length;

  return (
    <main className="p-4 w-full col-span-3">
      <div className="w-max bg-gray-100 hover:bg-gray-200 px-3 py-2 flex items-center gap-3 rounded-md">
        <Link href={".."} className="btn text-sky-600 text-lg">
          Back
        </Link>{" "}
        <span>&gt; Verifications Dashboard</span>
      </div>
      <div className={`${styles.cardContainer} mt-5`}>
        <InfoCard
          dataLength={dataLength}
          text="Brands Joined"
          linkText="Verification Details"
          imgSrc="/brands.svg"
        />
        <InfoCard
          dataLength={dataLength}
          text="Influencers Joined"
          linkText="Verification Details"
          imgSrc="/influencer.svg"
        />
      </div>
      {/* <ChartComponent /> */}
    </main>
  );
};

export default Page;
