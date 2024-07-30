"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

type TopNavProps = {
  pageText: string;
};

const TopNav = ({ pageText }: TopNavProps) => {
  return (
    <nav className="flex justify-between w-11/12 mx-auto items-center py-4">
      <h1 className="text-2xl font-bold tracking-wide">{pageText}</h1>
      <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-full py-2 px-5">
        <input
          type="search"
          name="verification-searchbox"
          placeholder="Search Verifications..."
          title="Search a verification detail"
          className="[all:unset] px-5 placeholder:font-light"
        />
        <FaMagnifyingGlass className="text-gray-600 text-xl" />
      </div>
    </nav>
  );
};

export default TopNav;
