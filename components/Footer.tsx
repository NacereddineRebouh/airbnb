import React from "react";
import { MapIcon } from "@heroicons/react/24/outline";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen gap-4"
      style={{ fontFamily: "roboto" }}
    >
      {/* show map */}
      <div className=" h-12 w-auto rounded-full bg-zinc-800 flex flex-row gap-2 justify-center items-center transition-all text-white px-3 font-medium hover:scale-105 hover:shadow-md cursor-pointer">
        Show map
        <MapIcon width={20} />
      </div>
      <footer></footer>
    </div>
  );
}
