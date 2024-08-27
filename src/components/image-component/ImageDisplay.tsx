import Image from "next/image";
import React from "react";

interface ImageDisplayProps extends React.HTMLAttributes<HTMLImageElement> {
  imageSrc: string;
  typeOfImage: string;
  alt: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  imageSrc,
  typeOfImage,
  alt,
}) => {
  return (
    <div className="relative">
      <span>{typeOfImage}</span>
      <Image src={imageSrc} alt={alt} fill/>
    </div>
  );
};

export default ImageDisplay;
