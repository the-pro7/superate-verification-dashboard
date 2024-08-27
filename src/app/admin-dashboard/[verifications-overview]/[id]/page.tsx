import TopNav from "@/components/dashboard-topnav/TopNav";
import ImageDisplay from "@/components/image-component/ImageDisplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaAngleLeft} from "react-icons/fa"

// const getData = async ({ id }: { id: string | number }) => {};

const SingleVerificationDetail = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  return (
    <main >
      <div className="w-full flex items-center justify-between p-4">
        <Link href={'.'} className="inline-flex items-center gap-2"><FaAngleLeft className="text-xl"/> Back home</Link>
      </div>
      <div className="relative w-[200px] aspect-square rounded-lg shadow-lg overflow-clip">
        <span className="p-3 rounded-pill shadow-xl">Selfie Image</span>
        <Image src='/logo.png' alt='Hello Image' fill/>
      </div>
    </main>
  );
};

export default SingleVerificationDetail;
