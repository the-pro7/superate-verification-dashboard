"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

type TopNavProps = {
  pageText: string;
  showSearchInput?: boolean;
  query?: string
  setQuery?: Dispatch<SetStateAction<string>>
};

const TopNav = ({ pageText, showSearchInput = true, query, setQuery }: TopNavProps) => {
  return (
    <nav className={`flex justify-between w-full items-center py-6 md:flex-row md:gap-0`}>
      <h1 className="text-2xl font-bold tracking-wider">{pageText}</h1>
      {showSearchInput && (
        <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-full py-2 px-5">
          <input
            type="search"
            name="verification-searchbox"
            placeholder="Search something..."
            value={query}
            onChange={(e) => setQuery && setQuery(e.target.value)}
            title="Search something..."
            className="[all:unset] py-2 px-5 placeholder:font-light border-2 border-gray-5"
          />
          <FaMagnifyingGlass className="text-gray-600 text-xl" />
        </div>
      )}
    </nav>
  );
};

export default TopNav;
