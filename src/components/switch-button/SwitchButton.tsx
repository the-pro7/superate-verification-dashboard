"use client";
import React, { useState } from "react";

type Props = {
  onClick: () => void
}

const SwitchButton = ({onClick}: Props) => {
  const [select, setSelect] = useState<"brand" | "influencer">("brand");
  return (
    <div className="flex mt-4 border rounded-md border-collapse">
      <button
        type="button"
        onClick={() => {
          setSelect("brand")
          onClick()
        }}
        className={`p-3 rounded-l-md ${
          select == "brand" && "bg-white"
        }`}
      >
        Brand Verification
      </button>
      <button
        type="button"
        onClick={() => {
          setSelect("influencer")
          onClick()
        }}
        className={`p-3 rounded-r-md ${
          select == "influencer" && "bg-white"
        }`}
      >
        Influencer Verification
      </button>
    </div>
  );
};

export default SwitchButton;
