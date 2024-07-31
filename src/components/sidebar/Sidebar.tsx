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
      className={`${styles.container} ${
        expandSidebar && "w-3/4 col-span-2"
      } z-50 dark:bg-gray-900 bg-gray-200  w-2/5 p-4 flex items-center flex-col gap-3 relative`}
    >
      <ExpandSidebarButton />
      <div
        className={`flex gap-2 items-center justify-start mr-auto ${
          !expandSidebar && "gap-0 justify-normal"
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
