"use client";
import React, { useState } from "react";
import TopNav from "@/components/dashboard-topnav/TopNav";
import RoleSwitcher from "@/components/role-switcher/RoleSwitcher";
import PageText from "@/components/page-text/PageText";
import BrandsVerificationLogsView from "@/components/verification-log-view/VerificationLogsView";

const AllVerificationsPage = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <>
      <TopNav
        pageText="Verifications Panel"
        query={query}
        setQuery={setQuery}
      />
      <div className="flex items-center justify-between mr-5 mx-auto">
        <PageText />
        <RoleSwitcher />
      </div>
      {/* <VerificationLog selfieImage="/logo.png" fullLegalName="Emmanuel Ameyaw" location="Tamale, Ghana"/> */}
      <BrandsVerificationLogsView query={query} />
    </>
  );
};

export default AllVerificationsPage;
