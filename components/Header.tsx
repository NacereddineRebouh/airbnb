import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className=" bg-white">
      {/* Desktop and tablets */}
      <div className="border-b-[1px]">
        <div className="grid grid-cols-[30px_40px_minmax(0px,_360px)_minmax(265px,_2fr)_30px] md:grid-cols-[30px_2fr_350px_minmax(265px,_2fr)_30px] lg:grid-cols-[70px_2fr_350px_minmax(265px,_2fr)_70px] gap-0 collapse mobile:visible h-0 mobile:h-20 self-center max-w-[2500px] mx-auto">
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
          <div className="relative col-start-3 flex items-center justify-start md:justify-center  md:mx-0 font-semibold">
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
                <GlobeAltIcon className="rounded-full  font-bold cursor-pointer h-4" />
              </div>
            </div>
            <div className="h-11 border-[1.5px] rounded-full flex items-center justify-center w-[79px] cursor-pointer gap-1 transition-shadow duration-300 hover:shadow-md ">
              <Bars3Icon className="rounded-full text-gray-700 font-bold cursor-pointer h-6" />
              <UserCircleIcon className="rounded-full text-gray-500 font-bold cursor-pointer h-9" />
            </div>
            <div className="flex justify-center">
              <div>
                <div className="dropdown relative">
                  <button
                    className="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          
          m-0
          bg-clip-padding
          border-none
        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="visible mobile:collapse h-20 mobile:h-0 flex items-end justify-center font-semibold">
          Mobile Search Bar
        </div>
      </div>
    </div>
  );
}
