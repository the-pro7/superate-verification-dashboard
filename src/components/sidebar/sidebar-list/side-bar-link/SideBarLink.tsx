"use client";
import Link from "next/link";
import React, { useState } from "react";

type SideBarLinkProps = {
  path: string;
  title?: string;
  linkText: string;
  icon?: React.ReactNode;
};

const SideBarLink = ({ path, title, linkText, icon }: SideBarLinkProps) => {
  return (
    <li className="mx-2 mt-1 border p-2 rounded-sm flex items-center">
      <Link href={path} title={title} className="inline-flex items-center justify-center gap-3">
        {icon}
        {linkText}
      </Link>
    </li>
  );
};

export default SideBarLink;
