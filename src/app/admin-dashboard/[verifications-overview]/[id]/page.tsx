import TopNav from "@/components/dashboard-topnav/TopNav";
import React from "react";

// const getData = async ({ id }: { id: string | number }) => {};

const SingleVerificationDetail = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  return (
    <main>
      <div>
        <TopNav pageText="Single Verification" showSearchInput={false} />
      </div>
    </main>
  );
};

export default SingleVerificationDetail;
