/* eslint-disable @next/next/no-img-element */
import React from "react";
import house4 from "../public/images/house1.jpg";
import Image, { StaticImageData } from "next/image";
type Props = {
  source: StaticImageData;
  alt?: string;
};

export default function Card({ source }: Props) {
  return (
    <div className="relative bg-gray-100/0 rounded-2xl text-left grid grid-rows-[2fr,1fr] p-2 cursor-pointer transition-all duration-500 ease-out hover:bg-gray-100 border-gray-300/0 hover:border-gray-300 border-[1px] hover:scale-[103%] hover:shadow-lg overflow-visible">
      <div className="h-auto w-auto rounded-xl overflow-clip">
        <Image
          src={source}
          style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
          alt=""
          quality={60}
          width={1000}
          height={1000}
          placeholder="blur"
          className="rounded-xl w-auto h-auto transition-all duration-300 ease-out hover:scale-110"
        />
      </div>

      {/* info about house */}
      <div className="mt-5">
        <div className="font-bold text-[15px]">Salobrena-Spain</div>
        <div className="text-gray-500">500 kilometers away</div>
        <div className="text-gray-500">jun 9-11</div>
        <div className="font-semibold">
          $4510 <span className="font-normal text-[15px]">night</span>
        </div>
      </div>
    </div>
  );
}
