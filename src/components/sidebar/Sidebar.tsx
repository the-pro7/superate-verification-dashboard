"use client";
import React, { useEffect, useState } from "react";
import SideBarList from "./sidebar-list/SideBarList";
import Image from "next/image";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { SlRefresh } from "react-icons/sl";
import Link from "next/link";
import { toast } from "sonner";
import { logout, refreshToken } from "@/utils/dataFetch";
import { useQuery } from "@tanstack/react-query";
import formatDate from "@/utils/dateFormatter";

const Sidebar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const userRefreshToken = sessionStorage.getItem("refreshToken");
  const [refreshAccessToken, setRefreshAccessToken] = useState<boolean>(false);

  const router = useRouter();

  const { data, isFetching, error } = useQuery({
    queryKey: ["refresh-token"],
    queryFn: () => refreshToken(userRefreshToken!),
    enabled: refreshAccessToken,
  });

  useEffect(() => {
    if (data && data?.access) {
      toast.message("Access token refreshed", {
        description: `New access token expires: ${formatDate(
          data?.access_expiration
        )}`,
      });
      sessionStorage.setItem("accessToken", data?.access);
      setRefreshAccessToken(false);
    }
  }, [data, data?.access]);

  // Logout logic
  async function handleLogout() {
    try {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Could not log you out, try again!");
    }
  }
  return (
    <aside
      className={`lg:mb-0 lg:shadow-none lg:w-[9.35%] lg:h-dvh transition-all z-50 bg-gray-200 p-4 flex items-center flex-row lg:flex-col md:flex-row w-4/5 mx-auto bottom-0 justify-between mb-3 rounded-lg !max-w-none gap-3 shadow-lg absolute inset-x-0 lg:relative ${
        collapse && "sm:translate-y-28 lg:translate-y-0"
      }`}
    >
      <button
        type="button"
        title={`${collapse ? "Expand navigation" : "Collapse navigation"}`}
        className={`absolute transition-all -top-12 shadow-xl border border-slate-200 flex items-center justify-center h-10 w-10 rounded-full bg-white z-10 cursor-pointer lg:hidden `}
        onClick={() => setCollapse((prev) => !prev)}
      >
        <FaAngleRight
          className={`text-xs rotate-90 ${collapse && "!-rotate-90"}`}
        />
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Superate logo"
            className="object-cover"
          />
        </Link>
      </div>
      <SideBarList />
      {/* Side bar buttons */}
      <div className="flex gap-2 lg:gap-7 flex-col md:flex-row lg:flex-col items-center justify-center lg:mb-10">
        <button
          type="button"
          title="Refresh token"
          onClick={() => setRefreshAccessToken(true)}
        >
          <SlRefresh className="text-xl" />
        </button>
        {/* Separator */}
        <div className="w-full h-[0.1rem] bg-neutral-400" />
        <button
          title="logout"
          type="button"
          className={`rotate-180`}
          onClick={handleLogout}
        >
          <RxExit className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
