import Image from "next/image";
import React from "react";
import { LuEye } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const VerificationLog = () => {
  return (
    <div className="flex items-center justify-between px-4 rounded-lg shadow-xl py-2 bg-white w-11/12 mx-auto mt-5">
      <div className="flex gap-3 items-center">
      <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-clip">
        <Image src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl tracking-wide">John Doe</h3>
        <span className="text-slate-500 text-sm font-light">Tamale, Ghana</span>
      </div>
      </div>
      <div className="flex gap-2">
        {/* Optionally rendered */}
        <button type="button" title="View" className="w-12 h-12 rounded-full flex items-center justify-center bg-sky-300">
          <LuEye className="text-2xl text-sky-800"/>
        </button>
        {/* Optionally rendered */}
        <button type="button" title="Approve" className="w-12 h-12 rounded-full flex items-center justify-center bg-green-300">
          <FaCheck className="text-2xl text-green-800"/>
        </button>
        <button type="button" title="Disapprove" className="w-12 h-12 rounded-full flex items-center justify-center bg-red-300">
          <RxCross2 className="text-2xl text-red-800"/>
        </button>
      </div>
    </div>
  );
};

export default VerificationLog;
