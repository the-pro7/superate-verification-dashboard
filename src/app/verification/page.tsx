import { Metadata } from "next";
import Link from "next/link";
import React from "react";
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

  return (
    <main className="p-4 w-full col-span-4">
      <div className="">
        <h2 className="font-semibold text-xl">Hello Admin</h2>
        <span className="text-xs text-slate-500 font-light">Admin Dashboard</span>
      </div>
    </main>
  );
};

export default Page;
