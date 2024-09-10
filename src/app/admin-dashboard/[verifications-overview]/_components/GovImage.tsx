import Image from "next/image";

const GovImage = () => {
  return (
    <div className="w-1/2 aspect-square rounded-md overflow-clip relative shadow-lg grid">
      <Image
        src="/gov.png"
        alt="Government ID"
        fill
        className="rounded-lg object-cover shadow-lg col-span-1 row-span-1"
      />
      <span className="text-xs tracking-wider col-span-1 row-span-1 z-10 rounded-full bg-white font-semibold p-3 shadow-lg m-5 w-fit h-fit">
        Government ID Image
      </span>
    </div>
  );
};

export default GovImage;
