"use client";
import React, { useContext } from "react";
import { RoleSwitchContext } from "../role-switcher/RoleSwitcher";

const PageText = () => {
  const { role } = useContext(RoleSwitchContext);
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-medium">All verifications submitted</h3>
      <p>
        Showing for: <b className="capitalize">{role + "s"}</b>
      </p>
    </div>
  );
};

export default PageText;
