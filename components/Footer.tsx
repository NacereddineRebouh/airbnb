import React from "react";
import { MapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen gap-10"
      style={{ fontFamily: "roboto" }}
    >
      {/* show map */}
      <div className=" h-12 w-auto rounded-full bg-zinc-800 flex flex-row gap-2 justify-center items-center transition-all text-white px-3 font-medium hover:scale-105 hover:shadow-md cursor-pointer">
        Show map
        <MapIcon width={20} />
      </div>
      <footer className="w-screen border-[1px] bg-white">
        <div
          className="h-12 flex flex-row justify-between mx-24 items-center text-[14px]"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex flex-row">
            <Link href={"#"}>© 2022 Airbnb, Inc.</Link>
            <p>&nbsp; · &nbsp;</p>
            <Link href={"#"} className="hover:underline">
              Privacy
            </Link>
            <p>&nbsp; · &nbsp;</p>
            <Link href={"#"} className="hover:underline">
              Terms
            </Link>
            <p>&nbsp; · &nbsp;</p>
            <Link href={"#"} className="hover:underline">
              Sitemap
            </Link>
            <p>&nbsp; · &nbsp;</p>
            <Link href={"#"} className="hover:underline">
              Destinations
            </Link>
          </div>
          <div>
            {/* language */}
            <div className="flex-row gap-2">
              <GlobeAltIcon className="h-5" />
              <Link href={"#"} className="hover:underline">
                English
              </Link>
            </div>

            {/* Currency */}

            {/* support and ressource */}
          </div>
        </div>
      </footer>
    </div>
  );
}
