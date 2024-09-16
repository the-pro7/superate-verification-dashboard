"use client";
import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import SideBarList from "./sidebar-list/SideBarList";
import Image from "next/image";
import { RxExit } from "react-icons/rx";
import { redirect } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "sonner";
import { logout } from "@/utils/dataFetch";
// import { CgMore } from "react-icons/cg";

const Sidebar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  console.log(`Collapse ${collapse}`);
  async function handleLogout() {
    try {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      toast.success('Logged out successfully')
      redirect("/login");
    } catch (error) {
      toast.error('Could not log you out, try again!')
    }
  }
  return (
    <aside
      className={`${
        styles.container
      }  lg:mb-0 lg:shadow-none lg:w-[9.35%] lg:h-dvh transition-all z-50 bg-gray-200 p-4 flex items-center flex-row lg:flex-col md:flex-row w-4/5 mx-auto bottom-0 justify-between mb-3 rounded-lg !max-w-none gap-3 shadow-lg md:relative absolute inset-x-0 ${
        collapse && "translate-y-28"
      }`}
    >
      <button
        type="button"
        title={`${collapse ? "Expand navigation" : "Collapse navigation"}`}
        className={`absolute transition-all -top-12 shadow-xl border border-slate-200 flex items-center justify-center h-10 w-10 rounded-full bg-white z-10 cursor-pointer lg:hidden `}
        onClick={() => setCollapse((prev) => !prev)}
      >
        <FaAngleRight className={`text-xs rotate-90 ${collapse && "!-rotate-90"}`} />
      </button>
      <div
        className={`flex gap-2 items-center justify-start`}
        title="Superate App logo"
      >
        <Link
          href="/"
          className={`w-16 h-16 rounded-full overflow-clip bg-white relative `}
        >
          <Image
            src="/logo.png"
            fill
            alt="Superate logo"
            className="object-cover"
          />
        </Link>
      </div>
      <SideBarList />
      <button
        title="logout"
        type="button"
        className={`mt-auto p-5 rounded-lg hover:bg-white rotate-180`}
        onClick={handleLogout}
      >
        <RxExit className="text-xl" />
      </button>
    </aside>
  );
};

export default Sidebar;
