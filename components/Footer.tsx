"use client";
import React from "react";
import {
  MapIcon,
  GlobeAltIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import MyModal from "./Modal";

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
        {/* desktop and tables */}
        <div className="max-w-[2500px] mx-auto">
          <div
            className="h-12 hidden md:flex flex-row justify-between mx-16 lg:mx-24 items-center text-[14px]"
            style={{ fontFamily: "roboto" }}
          >
            <div className="flex flex-wrap mr-5">
              <Link href={"#"}>© 2022 Airbnb, Inc.</Link>
              <span className="mx-1"> · </span>
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
            <div className="flex flex-row gap-4 justify-center items-center">
              {/* language */}
              <MyModal sizeX={"full"} sizeY={"[1000px]"} content={"Languages"}>
                <div className="flex flex-row gap-2 hover:underline cursor-pointer font-medium">
                  <GlobeAltIcon className="h-5" />
                  <div className="font-medium hover:underline">English(US)</div>
                </div>
              </MyModal>

              {/* Currency */}
              <MyModal sizeX={"full"} sizeY={"[1000px]"} content={"Currency"}>
                <div className="flex flex-row gap-2 hover:underline cursor-pointer font-medium truncate">
                  <div className="font-medium hover:underline">$ USD</div>
                </div>
              </MyModal>

              {/* support &Rs */}
              {/* <div className="flex flex-row gap-2 hover:underline cursor-pointer font-medium truncate">
                <Link href={"#"}>Support & ressources</Link>
                <ChevronUpIcon className="h-4 stroke-[2px] font-bold" />
              </div> */}

              <MyModal
                sizeX={"full"}
                sizeY={"[800px]"}
                content={"Support and ressources"}
              >
                <div className="flex flex-row gap-2 hover:underline cursor-pointer font-medium truncate">
                  <p className="hover:underline">Support & ressources</p>
                  <ChevronUpIcon className="h-4 stroke-[2px] font-bold " />
                </div>
              </MyModal>
            </div>
          </div>

          {/* Phones and small devices */}
          <div
            className="h-14 flex md:hidden flex-row justify-between mx-10 items-center text-[14px] sm:gap-x-8 transition-all duration-200"
            style={{ fontFamily: "roboto" }}
          >
            <div className="mx-5 sm:mx-8">
              <input
                type="radio"
                id={"radio_MagnifyingGlassIcon"}
                name="Radio1"
                value={"radio_MagnifyingGlassIcon"}
                className="hidden peer"
                required
                defaultChecked={true}
              />
              <label
                htmlFor={"radio_MagnifyingGlassIcon"}
                className="flex flex-col justify-center items-center cursor-pointer peer-checked:cursor-default text-gray-400 peer-checked:text-rose-600"
              >
                <MagnifyingGlassIcon
                  className="text-[2.5px] "
                  width={26}
                ></MagnifyingGlassIcon>
                <p className="truncate text-gray-600 text-[11px] font-bold">
                  Explore
                </p>
              </label>
            </div>
            <div className="mx-5 sm:mx-8">
              <input
                type="radio"
                id={"radio_HeartIcon"}
                name="Radio1"
                value={"radio_HeartIcon"}
                className="hidden peer"
                required
              />
              <label
                htmlFor={"radio_HeartIcon"}
                className="flex flex-col justify-center items-center cursor-pointer peer-checked:cursor-default text-gray-400 peer-checked:text-rose-600"
              >
                <HeartIcon width={26}></HeartIcon>
                <p className="truncate text-gray-600 text-[11px] font-bold">
                  WishList
                </p>
              </label>
            </div>
            <div className="mx-5 sm:mx-8">
              <input
                type="radio"
                id={"radio_UserCircleIcon"}
                name="Radio1"
                value={"radio_UserCircleIcon"}
                className="hidden peer group"
                required
              />
              <label
                htmlFor={"radio_UserCircleIcon"}
                className="flex flex-col justify-center items-center cursor-pointer peer-checked:cursor-default text-gray-400 peer-checked:text-rose-600"
              >
                <UserCircleIcon width={26}></UserCircleIcon>
                <p className="truncate text-gray-600 text-[11px] font-bold">
                  Log in
                </p>
              </label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
