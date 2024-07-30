import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css";
import React from "react";
import { SidebarProvider } from "@/components/expand-sidebar/ExpandSidebarButton";
import { RoleSwitchProvider } from "@/components/role-switcher/RoleSwitcher";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <SidebarProvider>
        <RoleSwitchProvider>
          <Sidebar />
          {children}
        </RoleSwitchProvider>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
