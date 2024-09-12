"use client";
import React, { useContext, useState, useEffect } from "react";
import { RoleType } from "@/types/app-type";
import { isOnClientSide } from "../verification-log-view/VerificationLogsView";

// Type setup for role switch
export type RoleSwitchType = {
  role: RoleType;
  switchRole: (role: RoleType) => void;
};

// Context for role switching
export const RoleSwitchContext = React.createContext<RoleSwitchType>({
  role: "brand",
  switchRole: () => "",
});

// Provider for accessing role context
export const RoleSwitchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Setup role state using RoleType type declaration
  //const [role, setRole] = useState<RoleType>("brand");
  const [role, setRole] = useState<RoleType>(() =>
    isOnClientSide ? sessionStorage.getItem("role")! || "brand" : "brand"
  );

  // Check if there is already a stored role in ls
  useEffect(() => {
    // Check if there is already a stored role in ls
    const storedRole =
      typeof window !== "undefined" ? sessionStorage.getItem("role") : null;

    // Make sure typeof storedRole is not null
    if (typeof storedRole === "string") {
      setRole(storedRole);
    }
  }, []);

  // Role setter function
  const switchRole = (role: RoleType) => {
    // Set role to role argument passed
    setRole(role);
    // Store in local storage
    sessionStorage.setItem("role", role);
  };

  return (
    <RoleSwitchContext.Provider value={{ role, switchRole }}>
      {children}
    </RoleSwitchContext.Provider>
  );
};

const RoleSwitcher: React.FC = () => {
  // Use context provided by role switch provider
  const { role, switchRole } = useContext(RoleSwitchContext);

  return (
    <div className="flex items-center justify-center gap-1 border-2 border-sky-500 rounded-lg w-max overflow-clip mr-8 p-1">
      <button
        title="View for Brands"
        type="button"
        onClick={() => switchRole("brand")}
        className={`px-2 py-[.25rem] rounded-sm hover:bg-gray-200 ${
          role === "brand" && "bg-sky-500 text-white"
        }`}
      >
        Brands
      </button>
      <button
        title="View for Influencers"
        type="button"
        onClick={() => switchRole("influencer")}
        className={`px-2 py-[.25rem] rounded-sm hover:bg-gray-200 ${
          role == "influencer" && "bg-sky-500 text-white"
        }`}
      >
        Influencers
      </button>
    </div>
  );
};

export default RoleSwitcher;
