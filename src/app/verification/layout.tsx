import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css";
import React from "react";
import FormProvider from "@/contexts/FormProvider";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <FormProvider>
        <Sidebar />
        {children}
      </FormProvider>
    </div>
  );
};

export default Layout;
