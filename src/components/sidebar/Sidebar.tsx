"use client";
import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import SideBarList from "./sidebar-list/SideBarList";
import Image from "next/image";
import ExpandSidebarButton, {
  SideBarContext,
  useExpandSidebar,
} from "../expand-sidebar/ExpandSidebarButton";
import { RxExit } from "react-icons/rx";

const Sidebar = () => {
  const { expandSidebar } = useContext(SideBarContext);
  return (
    <aside
      className={`${styles.container} !max-w-[100px] lg:mb-0 lg:shadow-none lg:w-[12.35%] ${
        expandSidebar && "lg:!w-[35%] md:w-1/2 lg:!max-w-none"
      } z-50 bg-gray-200 p-4 flex items-center lg:flex-col md:flex-row md:w-4/5 md:mx-auto md:justify-between md:mb-3 md:rounded-lg md:!max-w-none gap-3 md:shadow-lg lg:relative md:absolute inset-x-0`}
    >
      <ExpandSidebarButton />
      <div
        className={`flex gap-2 items-center justify-start mr-auto ${
          !expandSidebar && "gap-0 justify-center !mr-0"
        }`}
      >
        <div
          className={`w-16 h-16 rounded-full overflow-clip bg-white relative `}
        >
          <Image
            src="/logo.png"
            fill
            alt="Superate logo"
            className="object-cover"
          />
        </div>
        {expandSidebar && (
          <h1 className="text-2xl font-black tracking-wider">Superate</h1>
        )}
      </div>
      <SideBarList />
      <button
        title="logout"
        type="button"
        className={`mt-auto p-5 rounded-lg hover:bg-white rotate-180 ${
          expandSidebar && "ml-auto"
        }`}
      >
        <RxExit className="text-xl" />
      </button>
    </aside>
  );
};

export default Sidebar;
