import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div>
      <Button
        variant="link"
        asChild
        className="text-gray-600 mb-5 flex items-center font-semibold hover:underline w-fit"
      >
        <Link href="/admin-dashboard/verifications-overview">
          &larr; Back to all verifications
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
