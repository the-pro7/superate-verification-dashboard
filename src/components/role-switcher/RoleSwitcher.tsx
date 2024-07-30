"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export type RoleSwitchType = {
  role: string;
  switchRole: (role: "brand" | "influencer") => void;
};

export const RoleSwitchContext = React.createContext<RoleSwitchType>({
  role: "brand",
  switchRole: () => "",
});

export const RoleSwitchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [role, setRole] = useState<"brand" | "influencer">("brand");

  const switchRole = (role: "brand" | "influencer") => {
    setRole(role);
  };

  return (
    <RoleSwitchContext.Provider value={{ role, switchRole }}>
      {children}
    </RoleSwitchContext.Provider>
  );
};

const RoleSwitcher: React.FC = () => {
  const { role, switchRole } = useContext(RoleSwitchContext);
  return (
    <div className="flex items-center justify-center border-2 rounded-lg w-max border-collapse overflow-clip">
      <button
        title="Brands"
        type="button"
        onClick={() => switchRole("brand")}
        className={`p-3 hover:bg-gray-200 border-r ${
          role === "brand" && "bg-gray-200"
        }`}
      >
        <Link
          href={{
            pathname: "/admin/dashboard/verification-overview",
            query: { role: "brand" },
          }}
        >
          Brands
        </Link>
      </button>
      <button
        title="View for influencer"
        type="button"
        onClick={() => switchRole("influencer")}
        className={`p-3 hover:bg-gray-200 border-l ${
          role == "influencer" && "bg-gray-200"
        }`}
      >
        <Link
          href={{
            pathname: "/admin/dashboard/verification-overview",
            query: { role: "influencer" },
          }}
        >
          Influencers
        </Link>
      </button>
    </div>
  );
};

export default RoleSwitcher;
