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
      className={`flex flex-col items-start ${
        !expandSidebar && "items-center justify-center ml-0"
      } gap-6 mt-3 -ml-7`}
    >
      <button
        type="button"
        title="sdsds"
        className={`flex items-center gap-2 w-full ${!expandSidebar && "w-fit"} rounded-lg p-3 hover:bg-purple-500 hover:text-white transition-all bg-white`}
      >
        <SideBarLink
          path="/admin/dashboard"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Dashboard"}`}
          className={`inline-flex items-center flex-row-reverse gap-3`}
        >
          <HiHome className={`text-xl ${!expandSidebar && "text-center text-2xl"}`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center gap-2 rounded-lg p-3 hover:bg-purple-500 hover:text-white transition-all w-full ${!expandSidebar && "w-fit"} bg-white`}
      >
        <SideBarLink
          path="/admin/dashboard/verification-overview?role=brand"
          title="Overview"
          linkText={`${!expandSidebar ? "" : "Overview"}`}
          className={`inline-flex items-center flex-row-reverse justify-center gap-3 `}
        >
          <GoChecklist className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center justify-center gap-2 rounded-lg p-3 hover:bg-purple-500 hover:text-white transition-all w-full ${!expandSidebar && "w-fit"} bg-white`}
      >
        <SideBarLink
          path="/verification"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Unapproved Verifications"}`}
          className={`inline-flex items-center flex-row-reverse justify-center gap-3 `}
        >
          <FaUserCheck className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
      <button
        type="button"
        title="sdsds"
        className={`flex items-center  gap-2 rounded-lg p-3 hover:bg-purple-500 hover:text-white transition-all w-full ${!expandSidebar && "w-fit"} bg-white`}
      >
        <SideBarLink
          path="/verification"
          title="Dashboard"
          linkText={`${!expandSidebar ? "" : "Approved Verifications"}`}
          className={`inline-flex items-center flex-row-reverse gap-3 `}
        >
          <FaUserXmark className={`${!expandSidebar && "text-2xl text-center"} text-xl`} />
        </SideBarLink>
      </button>
    </div>
  );
};

export default SideBarList;
