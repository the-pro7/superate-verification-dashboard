"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css";
import React, { useContext } from "react";
import { SidebarProvider } from "@/components/expand-sidebar/ExpandSidebarButton";
import { RoleSwitchProvider } from "@/components/role-switcher/RoleSwitcher";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { redirect } from "next/navigation";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";

export const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const accessToken = isOnClientSide
    ? localStorage.getItem("accessToken")
    : null;

  // Protect route if user is not authenticated
  // if(!accessToken) {
  //   return redirect("/")
  // }
  return (
    <div
      className={`${styles.container} justify-between md:flex-col-reverse lg:flex-row relative`}
    >
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
            <RoleSwitchProvider>
              <Sidebar />
              <main className="w-full h-full px-8">{children}</main>
            </RoleSwitchProvider>
        </SidebarProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
