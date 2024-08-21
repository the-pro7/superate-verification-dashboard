"use client";
import React, { useContext, useState, useEffect } from "react";

// Type for roles
type RoleType = "brand" | "influencer" | string

// Type setup for role switch
export type RoleSwitchType = {
  role: string;
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
  const [role, setRole] = useState<RoleType>("brand");

  // Check if there is already a stored role in ls
  useEffect(() => {
  // Check if there is already a stored role in ls
    const storedRole = localStorage.getItem("role")

    // Make sure typeof storedRole is not null
    if(typeof storedRole === "string") {
      setRole(storedRole)
    }

  }, [])

  // Role setter function
  const switchRole = (role: RoleType) => {
    // Set role to role argument passed
    setRole(role);
    // Store in local storage
    localStorage.setItem("role", role)
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
    <div className="flex items-center justify-center border-2 rounded-lg w-max border-collapse overflow-clip mr-8">
      <button
        title="View for Brands"
        type="button"
        onClick={() => switchRole("brand")}
        className={`p-3 hover:bg-gray-200 border-r ${
          role === "brand" && "bg-gray-200"
        }`}
      >
        Brands
      </button>
      <button
        title="View for Influencers"
        type="button"
        onClick={() => switchRole("influencer")}
        className={`p-3 hover:bg-gray-200 border-l ${
          role == "influencer" && "bg-gray-200"
        }`}
      >
        Influencers
      </button>
    </div>
  );
};

export default RoleSwitcher;
