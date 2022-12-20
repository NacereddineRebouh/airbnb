"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {};

export default function UserMenu({}: Props) {
  return (
    <div>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="relative h-11 border-[1.5px] rounded-full flex items-center justify-center w-[79px] cursor-pointer gap-1 transition-shadow duratiobun-300 hover:shadow-md ">
            <Bars3Icon className="rounded-full text-gray-700 font-bold cursor-pointer h-6" />
            <UserCircleIcon className="rounded-full text-gray-500 font-bold cursor-pointer h-9" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-2xl bg-white py-2 shadow-lg shadow-white/40 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="divide-y">
              <div className="mb-2">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-2 text-sm`}
                    >
                      Sign up
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/login"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-2 text-sm font-normal`}
                    >
                      Log in
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="mt-2">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-2 text-sm font-normal mt-2`}
                    >
                      Airbnb your home
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => console.log("")}
                      className={` ${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-2 text-sm font-normal`}
                    >
                      Host an experience
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => console.log("")}
                      className={` ${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-2 text-sm font-normal`}
                    >
                      Help
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
