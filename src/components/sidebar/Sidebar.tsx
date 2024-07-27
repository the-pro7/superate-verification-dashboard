import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={`${styles.container} bg-gray-100`}>
      <div className="flex item-center justify-center flex-col gap-1">
        <h1 className={`${styles.title}`}>Superate</h1>
        <span className={`${styles.subtext} text-center text-slate-600 text-sm font-light`}>- ADMIN VERIFICATIONS -</span>
      </div>
      <ul className={`${styles.actionList}`}>
        <li className={styles.listItem}>
          <Link href="verification/brands/add-verification-info" className="py-4">
            Add Brand Verification
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
