import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css";
import React from "react";
import { SidebarProvider } from "@/components/expand-sidebar/ExpandSidebarButton";
import { RoleSwitchProvider } from "@/components/role-switcher/RoleSwitcher";


const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={`${styles.container} justify-between md:flex-col-reverse lg:flex-row relative`}>
      <SidebarProvider>
        <RoleSwitchProvider>
          <Sidebar />
          <main className="w-full px-8">{children}</main>
        </RoleSwitchProvider>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
