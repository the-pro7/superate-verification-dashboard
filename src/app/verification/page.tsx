import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import InfoCard from "@/components/card/Card";


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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
];

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
      <div className="w-max">
        <Link href={".."} className="btn text-sky-600 text-lg">
          Back
        </Link>{" "}
        <span>&gt; Verifications Dashboard</span>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:gap-0 lg:grid-cols-3 w-full mt-4">
        <InfoCard
          dataLength={dataLength}
          text="Brands Joined"
          linkText="View All"
        />
        <InfoCard
          dataLength={dataLength}
          text="Influencers Joined"
          linkText="View All"
        />
      </div>
    </main>
  );
};

export default Page;
