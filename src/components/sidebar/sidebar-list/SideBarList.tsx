"use client";
import React, { useContext } from "react";
import SideBarLink from "./side-bar-link/SideBarLink";
import { HiHome } from "react-icons/hi";
import { SideBarContext } from "@/components/expand-sidebar/ExpandSidebarButton";
import { FaUserCheck, FaUserXmark } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { usePathname } from "next/navigation";

const SideBarList = () => {
  // Use sidebar context from provider
  const { expandSidebar } = useContext(SideBarContext);
  const pathname = usePathname();

  // Helper function to get active link
  const isActive = (path: string): boolean => pathname === path;

  return (
    <div
      className={`flex lg:flex-col md:flex-row items-center ${
        !expandSidebar && "items-center justify-center ml-0"
      } gap-6 md:gap-8 mt-3 -ml-7`}
    >
      <button
        type="button"
        title="Dashboard"
        className={`flex items-center gap-2 w-full ${
          !expandSidebar && "w-fit"
        } rounded-lg overflow-clip`}
      >
        <SideBarLink
          path="/admin-dashboard"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Dashboard"}`}
          className={`inline-flex items-center flex-row gap-3 p-3 hover:bg-purple-500 hover:text-white ${isActive('/admin-dashboard') && 'bg-purple-500 text-white'} transition-all bg-white w-full`}
        >
          <HiHome
            className={`text-xl ${!expandSidebar && "text-center text-2xl"}`}
          />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center gap-2 rounded-lg overflow-clip transition-all w-full ${
          !expandSidebar && "w-fit"
        }`}
      >
        <SideBarLink
          path="/admin-dashboard/verifications-overview"
          title="Overview"
          linkText={`${!expandSidebar ? "" : "Overview"}`}
          className={`inline-flex items-center flex-row gap-3 bg-white w-full p-3 hover:bg-purple-500 hover:text-white ${isActive('/admin-dashboard/verifications-overview') && 'bg-purple-500 text-white'}`}
        >
          <GoChecklist
            className={`${!expandSidebar && "text-2xl text-center"} text-xl`}
          />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center justify-center gap-2 rounded-lg overflow-clip w-full ${
          !expandSidebar && "w-fit"
        }`}
      >
        <SideBarLink
          path="/admin-dashboard/approved-verifications"
          title="View all approved verification details"
          linkText={`${!expandSidebar ? "" : "Approved Verifications"}`}
          className={`inline-flex items-center flex-row justify-center gap-3  p-3 bg-white hover:bg-purple-500 hover:text-white ${isActive('/admin-dashboard/approved-verifications') && 'bg-purple-500 text-white'}`}
        >
          <FaUserCheck
            className={`${!expandSidebar && "text-2xl text-center"} text-xl`}
          />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="View all disapproved verification details"
        className={`flex items-center  gap-2 rounded-lg overflow-clip w-full ${
          !expandSidebar && "w-fit"
        }`}
      >
        <SideBarLink
          path="/admin-dashboard/disapproved-verifications"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Unapproved Verifications"}`}
          className={`inline-flex items-center flex-row gap-3 p-3  bg-white hover:bg-purple-500 hover:text-white ${isActive('/admin-dashboard/disapproved-verifications') && 'bg-purple-500 text-white'}`}
        >
          <FaUserXmark
            className={`${!expandSidebar && "text-2xl text-center"} text-xl`}
          />
        </SideBarLink>
      </button>
    </div>
  );
};

export default SideBarList;
