"use client";
import React, { useContext } from "react";
import styles from "../Sidebar.module.css";
import SideBarLink from "./side-bar-link/SideBarLink";
import { HiHome } from "react-icons/hi";
import { SideBarContext } from "@/components/expand-sidebar/ExpandSidebarButton";
import { FaUserCheck, FaUserXmark } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";



const SideBarList = () => {
  // Use sidebar context from provider
  const { expandSidebar } = useContext(SideBarContext);

  return (
    <div
      className={`flex flex-col items-center ${
        !expandSidebar && "items-center justify-center ml-0"
      } gap-6 mt-3 -ml-7`}
    >
      <button
        type="button"
        title="Dashboard"
        className={`flex items-center gap-2 w-full ${!expandSidebar && "w-fit"} rounded-lg overflow-clip`}
      >
        <SideBarLink
          path="/admin-dashboard"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Dashboard"}`}
          className={`inline-flex items-center flex-row gap-3 p-3 hover:bg-purple-500 hover:text-white transition-all bg-white w-full`}
        >
          <HiHome className={`text-xl ${!expandSidebar && "text-center text-2xl"}`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center gap-2 rounded-lg overflow-clip transition-all w-full ${!expandSidebar && "w-fit"}`}
      >
        <SideBarLink
          path="/admin-dashboard/verification-overview"
          title="Overview"
          linkText={`${!expandSidebar ? "" : "Overview"}`}
          className={`inline-flex items-center flex-row gap-3 bg-white w-full p-3 hover:bg-purple-500 hover:text-white`}
        >
          <GoChecklist className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center justify-center gap-2 rounded-lg overflow-clip w-full ${!expandSidebar && "w-fit"}`}
      >
        <SideBarLink
          path="/verification"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Approved Verifications"}`}
          className={`inline-flex items-center flex-row justify-center gap-3  p-3 bg-white hover:bg-purple-500 hover:text-white transition-all w-full`}
        >
          <FaUserCheck className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center  gap-2 rounded-lg overflow-clip w-full ${!expandSidebar && "w-fit"}`}
      >
        <SideBarLink
          path="/verification"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Unapproved Verifications"}`}
          className={`inline-flex items-center flex-row gap-3 p-3  bg-white hover:bg-purple-500 hover:text-white transition-all w-full`}
        >
          <FaUserXmark className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
    </div>
  );
};

export default SideBarList;
