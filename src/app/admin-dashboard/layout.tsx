"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css";
import React, { useEffect } from "react";
import { SidebarProvider } from "@/components/expand-sidebar/ExpandSidebarButton";
import { RoleSwitchProvider } from "@/components/role-switcher/RoleSwitcher";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isOnClientSide } from "@/components/verification-log-view/VerificationLogsView";
import { useRouter } from "next/navigation";

export const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const accessToken = isOnClientSide
    ? sessionStorage.getItem("accessToken")
    : null;
    const router = useRouter()


  // Protect route if user is not authenticated
  if (!accessToken) {
    return router.push("/");
  }

  return (
    <div
      className={`${styles.container} justify-between md:flex-col-reverse lg:flex-row relative overflow-hidden`}
      suppressHydrationWarning
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
