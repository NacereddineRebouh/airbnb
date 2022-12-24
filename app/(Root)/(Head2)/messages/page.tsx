"use client";
import { Tab } from "@headlessui/react";
import {
  XMarkIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import React, { MouseEventHandler, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="w-screen h-screen ">
      {/* desktop-tablet */}
      <div className="mobile:flex flex-row w-full h-full hidden">
        <div className="h-full w-[690px] border-[1px] border-t-0 border-r-1 flex flex-col">
          <div className="h-20 border-b-[1px] flex items-center justify-between text-start px-6">
            <p className="text-lg font-bold">Messages</p>
            <ChatBubbleBottomCenterTextIcon className="w-9 h-9 cursor-pointer p-[5px] transition-all rounded-full duration-100 hover:bg-gray-100" />
          </div>
          <div className="text-center text-lg font-bold items-center p-5 flex flex-col gap-y-2">
            <div>You have no unread messages</div>
            <div className="font-normal text-base text-gray-500 leading-5">
              When you book a trip or experience, messages from your host will
              show up here.
            </div>
            <div className="border-[1px] hover:bg-gray-100 items-center justify-center cursor-pointer select-none border-black h-14 transition-all duration-200 flex rounded-3xl p-3 mt-5">
              Explore Airbnb
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col w-full">
          <div className="h-20 border-b-[1px]"></div>
        </div>
        <div className="h-full w-[690px] border-[1px] border-t-0 hidden flex-col lg:flex">
          <div className="h-20 border-b-[1px] flex items-center justify-between text-start px-6">
            <p className="text-lg font-bold">Details</p>
            <XMarkIcon className="w-9 h-9 cursor-pointer p-[5px] transition-all rounded-full duration-100 hover:bg-gray-100 " />
          </div>
        </div>
      </div>

      {/* mobile and small devices */}
      <div className="flex flex-col w-full h-full mx-auto px-3 mobile:hidden">
        <div className="h-32 flex items-center justify-between text-4xl font-semibold mx-3 pt-6">
          <div>Inbox</div>
          <ChatBubbleBottomCenterTextIcon className="w-9 h-9 cursor-pointer p-[5px] transition-all rounded-full duration-100 hover:bg-gray-100" />
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-start space-x-1 rounded-xl border-b-[1px]">
            <Tab key={"Messages"} className="outline-none">
              {({ selected }) => (
                <div className="outline-none">
                  <div
                    className={`duration-100 flex transition-all rounded-lg py-3.5 px-3 text-sm font-semibold leading-5 text-gray-400 outline-none ${
                      selected
                        ? "text-gray-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    Messages
                  </div>
                  <div
                    className={`rounded-full h-[2px] flex transition-all duration-500 mx-3 ${
                      selected ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                </div>
              )}
            </Tab>
            <Tab key={"Notifications"} className="outline-none">
              {({ selected }) => (
                <div>
                  <div
                    className={`duration-100 flex transition-all rounded-lg py-3.5 px-3 text-sm font-semibold leading-5 text-gray-400 outline-none  ${
                      selected
                        ? "text-gray-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    Notifications
                  </div>
                  <div
                    className={`rounded-full h-[2px] flex transition-all duration-500 mx-3 ${
                      selected ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              key={"MessagesPanel"}
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 outline-none"
              }
            >
              <div className="text-center text-lg font-bold items-center p-5 flex flex-col gap-y-2">
                <div>You have no unread messages</div>
                <div className="font-normal text-base text-gray-500 leading-5">
                  When you book a trip or experience, messages from your host
                  will show up here.
                </div>
                <div className="border-[1px] hover:bg-gray-100 items-center justify-center cursor-pointer select-none border-black h-14 transition-all duration-200 flex rounded-3xl p-3 mt-5">
                  Explore Airbnb
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel
              key={"NotificationPanel"}
              className={
                "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 outline-none"
              }
            >
              <div className="font-medium text-sm text-gray-700 leading-5">
                You're all caught up
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
