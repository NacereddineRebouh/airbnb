import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import { Menu } from "@headlessui/react";
import UserMenu from "./UserMenu";
import UserMenuLogged from "./UserMenuLogged";
import { unstable_getServerSession } from "next-auth";
type Props = {};

export default async function Header({}: Props) {
  // const nextCookies = cookies();
  // const token = nextCookies.get("accessToken");
  const session = await unstable_getServerSession();

  return (
    <div className="w-screen border-[1px] bg-white">
      {/* Desktop and tablets */}
      <div className="grid grid-cols-[30px_40px_minmax(360px,_1fr)_265px_30px] md:grid-cols-[30px_2fr_350px_minmax(265px,_2fr)_30px] lg:grid-cols-[70px_2fr_350px_minmax(265px,_2fr)_70px] gap-0 collapse mobile:visible h-0 mobile:h-20 self-center max-w-[2500px] mx-auto">
        <div className="relative col-start-2 flex items-center justify-left md:mt-1 md:p-2 mr-2">
          <Image
            className="cursor-pointer collapse md:visible"
            src={"/images/airbnb2.png"}
            alt={""}
            width={100}
            height={50}
          />
          <Image
            className="absolute cursor-pointer w-20 collapse mobile:visible md:collapse"
            src={"/images/airbnb_small.png"}
            alt={""}
            width={100}
            height={50}
          />
        </div>
        <div className="relative col-start-3 flex items-center justify-center  md:mx-0 font-semibold">
          <div className="flex flex-row w-[350px] h-12 border-[1.5px] rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg hover:drop-shadow-sm items-center justify-start text-[15px] ">
            <div className="flex border-r-[1.2px] px-4 pl-5 cursor-pointer truncate">
              Anywhere
            </div>
            <div className="flex border-r-[1.2px] px-4 cursor-pointer truncate">
              Any week
            </div>
            <div className="flex flex-row justify-center items-center pl-4 text-gray-400 font-normal cursor-pointer gap-2">
              <span className="truncate">Add guests</span>
              <MagnifyingGlassCircleIcon className="rounded-full text-[#ff385c] font-bold cursor-pointer h-9 ml-1" />
            </div>
          </div>
        </div>
        <div className="relative col-start-4 flex flex-row gap-4 items-center justify-end mx-3 font-semibold ">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className=" rounded-full transition-colors duration-200 hover:bg-gray-100 flex items-center font-semibold cursor-pointer h-11 px-2 text-[14px] truncate">
              Become a Host
            </div>
            <div className="transition-colors duration-200 h-8 w-8 hover:bg-gray-100 rounded-full flex items-center justify-center">
              <GlobeAltIcon className="rounded-full font-bold cursor-pointer h-5" />
            </div>
          </div>
          <div>
            <UserMenuLogged />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="visible mobile:collapse h-20 mobile:h-0 flex items-end justify-center font-semibold">
        Mobile Search Bar
      </div>
    </div>
  );
}
