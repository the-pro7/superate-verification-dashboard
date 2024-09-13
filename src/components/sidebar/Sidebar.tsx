"use client";
import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import SideBarList from "./sidebar-list/SideBarList";
import Image from "next/image";
import ExpandSidebarButton, {
  SideBarContext,
} from "../expand-sidebar/ExpandSidebarButton";
import { RxExit } from "react-icons/rx";
import { logout } from "@/utils/dataFetch";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { expandSidebar } = useContext(SideBarContext);
  const router = useRouter()

  function handleLogout() {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')

    router.push('/login')
    
  }
  return (
    <aside
      className={`${
        styles.container
      } !max-w-[100px] lg:mb-0 lg:shadow-none lg:w-[7.35%] ${
        expandSidebar && "lg:!w-[25%] md:w-1/2 lg:!max-w-none"
      } z-50 bg-gray-200 p-4 flex items-center flex-row lg:flex-col md:flex-row w-4/5 mx-auto bottom-0 justify-between mb-3 rounded-lg !max-w-none gap-3 shadow-lg lg:relative absolute inset-x-0`}
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
        onClick={handleLogout}
      >
        <RxExit className="text-xl" />
      </button>
    </aside>
  );
};

export default Sidebar;
