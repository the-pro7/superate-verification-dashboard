import Card from "@/components/card/Card";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Verification Dashboard",
  description: "Verifications dashboard",
};

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

const Page = async () => {
  const data: object[] = await getData(process.env.API_ADMIN_BASE_URL);
  // console.log("Data received" + JSON.stringify(data))
  const dataLength: number | null = data?.length;

  return (
    <main className="p-4">
      <div className="w-max">
        <Link href={".."} className="btn text-sky-600 text-lg">
          Back
        </Link>{" "}
        <span>&gt; Verifications Dashboard</span>
      </div>
      <Card dataLength={dataLength} text="Brands Joined" linkText="View All"/>
    </main>
  );
};

export default Page;
