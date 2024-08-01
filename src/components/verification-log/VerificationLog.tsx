"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

interface IVerificationLogType {
  id?: number,
  selfieImage: string,
  fullLegalName: string, 
  location: string
}

interface IDeclinationPopupType {
  showDeclinationPopup: boolean,
  toggleShowDeclinationPopup: () => void
}

const DeclinationPopupContext = React.createContext<IDeclinationPopupType>({
  showDeclinationPopup: false,
  toggleShowDeclinationPopup: () => {}
})

const DeclinationPopupProvider = (children: {children: React.ReactNode}) => {
  const [showDeclinationPopup, setShowDeclinationPopup] = useState<boolean>(false)

  const toggleShowDeclinationPopup = (value: boolean) => setShowDeclinationPopup(value)
  
  return <DeclinationPopupContext.Provider value={{showDeclinationPopup, toggleShowDeclinationPopup}}>
    {children}
  </DeclinationPopupContext.Provider>
}

const VerificationLog = ({selfieImage, fullLegalName, location}: IVerificationLogType) => {
  return (
    <div className="flex items-center justify-between px-4 rounded-lg shadow-xl py-2 bg-white w-11/12 mt-5 transition-all hover:-translate-y-2 hover:scale-75">
      <div className="flex gap-3 items-center">
      <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-clip">
        <Image src={selfieImage} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl tracking-wide">{fullLegalName}</h3>
        <span className="text-slate-500 text-sm font-light">{location}</span>
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
