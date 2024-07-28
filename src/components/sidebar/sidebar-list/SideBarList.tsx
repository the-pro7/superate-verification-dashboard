"use client"
import React from "react";
import styles from "../Sidebar.module.css";
import SideBarLink from "./side-bar-link/SideBarLink";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";


// function shortenText(text: string = ""): string {
//   if (text.length > 30) {
//     return text.substring(0, 30) + "...";
//   }

//   return text;
// }

const SideBarList = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <ul
      className={`${styles.actionList} flex flex-col gap-4 list-none p-0 w-full`}
    >
      <SideBarLink path="/verification" linkText="Overview" />

      <SideBarLink
        path="/verification/add-verification-detail"
        linkText="Add Verification Detail"
        icon={<Plus />}
      />
    </ul>
  );
};

export default SideBarList;
