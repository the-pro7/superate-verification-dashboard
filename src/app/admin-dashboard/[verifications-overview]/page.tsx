
import React from "react";
import TopNav from "@/components/dashboard-topnav/TopNav";
import RoleSwitcher from "@/components/role-switcher/RoleSwitcher";
import PageText from "@/components/page-text/PageText";
import VerificationLog from "@/components/verification-log/VerificationLog";
import BrandsVerificationLogsView from "@/components/verification-log-view/VerificationLogsView";

const page = () => {
  return (
    <>
      <TopNav pageText="Verifications Panel"/>
      <div className="flex items-center justify-between mr-5 mx-auto">
        <PageText />
        <RoleSwitcher />
      </div>
      {/* <VerificationLog selfieImage="/logo.png" fullLegalName="Emmanuel Ameyaw" location="Tamale, Ghana"/> */}
      <BrandsVerificationLogsView />
    </>
  );
};

export default page;
