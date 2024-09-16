import { Metadata } from "next";
import React from "react";

import TopNav from "@/components/dashboard-topnav/TopNav";

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
