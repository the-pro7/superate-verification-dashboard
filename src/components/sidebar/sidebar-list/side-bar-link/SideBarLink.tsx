"use client";
import Link from "next/link";
import React, { useState } from "react";

type SideBarLinkProps = {
  path: string;
  title?: string;
  linkText: string;
  className: string,
  children: React.ReactNode
};

const SideBarLink = ({ path, title, linkText, className, children }: SideBarLinkProps) => {
  return (
    <Link
      href={path}
      title={title}
      className={className}
    >
      {children}
      {linkText}
    </Link>
  );
};

export default SideBarLink;
