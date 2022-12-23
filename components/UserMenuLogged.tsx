"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

type Props = {};

export default function UserMenuLogged({}: Props) {
  const router = useRouter();

  // const logOut = async () => {
  //   const cookies = new Cookies();
  //   const token = cookies.get("accessToken");
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_api_url}/api/logout`, {
  //     method: "POST",
  //     headers: new Headers({
  //       accept: "application/json",
  //       Credentials: "include",
  //       Authorization: `Bearer ${token}`,
  //     }),
  //   })
  //     .then(async (response) => {
  //       const data = await response.json();

  //       if (data.message === "Logged out successfully") {
  //         const cookies = new Cookies();
  //         cookies.remove("accessToken");
  //         console.log(data.message);
  //         router.refresh();
  //       } else {
  //         router.push("/");
  //       }
  //     })
  //     .catch(() => console.log("Failed"));
  // };
  return (
    <div>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button>
            <div className="relative h-11 border-[1.5px] rounded-full flex items-center justify-center w-[79px] cursor-pointer gap-1 transition-shadow duratiobun-300 hover:shadow-md">
              <Bars3Icon className="rounded-full text-gray-700 font-bold cursor-pointer h-6" />
              <UserCircleIcon className="rounded-full text-gray-500 fill-slate-600 bg-gray-300 font-bold cursor-pointer h-9" />
            </div>
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white py-2 shadow-lg shadow-black/30 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="divide-y">
              <div className="mb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/messages"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Messages
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  {({ active, disabled }) => (
                    <button
                      onClick={() => console.log("")}
                      className={` ${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } ${
                        disabled ? "text-gray-400" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                    >
                      Notifications
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/trips"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Trips
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/wishlists"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Wishlists
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div>
                <div className="my-2">
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Airbnb your home
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Host an experience
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/account"}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Account
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Help
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
