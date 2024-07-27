// import Image from 'next/image'
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

type PropTypes = {
  dataLength: number;
  text: string;
  linkText: string;
  imgSrc: string;
};

const InfoCard = ({ dataLength, text, linkText, imgSrc }: PropTypes) => {
  return (
    <div
      className={`${styles.container} flex items-center gap-3 p-5 rounded-lg`}
    >
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-bold">{text}</h4>
        <div className="text-3xl font-bold">{dataLength}</div>
        <Link
          href="/"
          className={`${styles.button} bg-green-400 px-5 py-2 text-white rounded-md`}
        >
          {linkText}
        </Link>
      </div>
      <div className={`${styles.imgContainer}`}>
        <Image
          src={imgSrc}
          alt=""
          width={150}
          height={150}
          className={`${styles.img}`}
        />
      </div>
    </div>
  );
};

export default InfoCard;
