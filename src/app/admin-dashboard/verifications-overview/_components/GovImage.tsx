import Image from "next/image";

const GovImage = ({imgSrc}: {imgSrc: string}) => {
  return (
    <div className="w-[80%] max-h-full md:h-auto md:w-1/2 md:aspect-square rounded-md overflow-clip relative shadow-xl grid">
      <Image
        src={imgSrc}
        alt="Government ID"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg object-cover shadow-lg col-span-1 row-span-1"
      />
      <span className="text-xs tracking-wider col-span-1 row-span-1 z-10 rounded-full bg-white font-semibold p-3 shadow-lg m-5 w-fit h-fit">
        Government ID Image
      </span>
    </div>
  );
};

export default GovImage;
