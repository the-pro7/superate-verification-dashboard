
import TopNav from "@/components/dashboard-topnav/TopNav";
import RoleSwitcher from "@/components/role-switcher/RoleSwitcher";
import React from "react";
import PageText from "@/components/page-text/PageText";
import VerificationLog from "@/components/verification-log/VerificationLog";
import BrandsVerificationLogsView from "@/components/brands-verification-log-view/BrandsVerificationLogsView";

const page = () => {
  return (
    <main className="col-span-4">
      <TopNav pageText="Verifications Panel" />
      <div className="flex items-center justify-between mr-5 mx-auto">
        <PageText />
        <RoleSwitcher />
      </div>
      {/* <VerificationLog /> */}
      <BrandsVerificationLogsView />
    </main>
  );
};

export default page;
