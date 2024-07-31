"use client";
import React, { useContext, useState, useEffect } from "react";

type RoleType = "brand" | "influencer" | string

export type RoleSwitchType = {
  role: string;
  switchRole: (role: RoleType) => void;
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
  const [role, setRole] = useState<RoleType>("brand");

  useEffect(() => {
    const storedRole = localStorage.getItem("role")

    if(typeof storedRole === "string") {
      setRole(storedRole)
    }


  }, [])

  const switchRole = (role: RoleType) => {
    setRole(role);
    localStorage.setItem("role", role)
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
