import React from "react";
import styles from "./Sidebar.module.css";
import SideBarList from "./sidebar-list/SideBarList";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className={`${styles.container} dark:bg-gray-900 bg-gray-100`}>
      <div className="flex gap-2 p-3 items-center text-gray-900 m-1 rounded-lg">
        <div
          className={`${styles.logo} w-12 aspect-square rounded-full flex-initial bg-gray-100 overflow-clip relative`}
        >
          <Image src="/logo.png" fill sizes="30px" alt="Superate logo" />
        </div>
        <h1 className={`${styles.title} text-2xl font-semibold`}>
          <Link href="/">Superate</Link>
        </h1>
      </div>
      <SideBarList />
    </aside>
  );
};

export default Sidebar;
