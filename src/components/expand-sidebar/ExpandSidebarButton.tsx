"use client";
import React, { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface SideBarExpandProps {
    expandSidebar: boolean,
    toggleSidebarExpansion?: () => void
}


export const SideBarContext = React.createContext<SideBarExpandProps>({
    expandSidebar: false
});

export function useExpandSidebar() {
    return useContext(SideBarContext)
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);

  const toggleSidebarExpansion = () => setExpandSidebar(prev => !prev);

  const value: SideBarExpandProps = {
    expandSidebar,
    toggleSidebarExpansion
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
}

const ExpandSidebarButton = () => {
    const {toggleSidebarExpansion, expandSidebar} = useContext(SideBarContext)
  return (
    <button
      type="button"
      className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg cursor-pointer -right-3 top-10 absolute z-50"
      onClick={toggleSidebarExpansion}
      title="Expand sidebar"
    >
      <FaAngleRight className={`text-xs ${expandSidebar && "rotate-180"}`}/>
    </button>
  );
};

export default ExpandSidebarButton;
