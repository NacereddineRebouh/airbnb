/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import CategoryIcons from "./CategoryIcons";

type Props = {};

export default function Categories() {
  const IconSlider = useRef(null!);
  const Container = useRef(null!);
  const left = useRef(null!);
  const right = useRef(null!);
  const [goLeft, setGoLeft] = useState<boolean>(false);
  const [offset, setoffset] = useState(300);
  const [Scrolled, setScrolled] = useState(0);

  const [dettach, setDettach] = useState(false);

  const slideVariants = {
    GoLeft: {
      x: Scrolled,
    },
    GoRight: {
      x: Scrolled,
    },
  };
  const listenToScroll = () => {
    let heightToHideFrom = 16;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // to limit setting state only the first time
      setDettach(true);
    } else {
      setDettach(false);
    }
  };
  const [hideRight, setHideRight] = useState(true);
  //on mount && on unmount(cleanup)
  useEffect(() => {
    setHideRight(
      IconSlider.current["offsetWidth"] - Container.current["offsetWidth"] <= 0
        ? true
        : false
    );
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      className={
        dettach
          ? "fixed left-0 top-[80px] z-10 bg-white w-screen mx-auto duration-100 transition-all"
          : "pt-4 fixed left-0 top-[80px] z-10 bg-white w-screen mx-auto duration-100 transition-all"
      }
    >
      <div
        className={
          dettach
            ? "hidden sm:grid grid-cols-[40px,4fr,40px,100px] px-9 lg:px-20 gap-2 justify-center items-center shadow-md shadow-black/5 max-w-[2500px] mx-auto"
            : "hidden sm:grid grid-cols-[40px,4fr,40px,100px] px-9 lg:px-20 gap-2 justify-center items-center max-w-[2500px] mx-auto "
        }
      >
        {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
      </style> */}
        <button
          ref={left}
          hidden={true}
          key="GoLeft"
          className="border-[1.5px] border-gray-300 shadow-sm rounded-full cursor-pointer col-start-1 w-7 h-7 transition-all hover:scale-[113%] hover:shadow-xl ease-in-out duration-150"
          onClick={(e) => {
            let off = offset;
            if (Math.abs(Scrolled) < offset) {
              off = Math.abs(Scrolled);
            }
            //Move div to the right
            let newScrolled = Scrolled + off;
            setScrolled(Scrolled + off);
            setGoLeft(true);

            //used bcz setState needs time to update

            console.log("//Move div to the right and scrolled :", newScrolled);
            //--------------------------------------------------------------------------------//
            //-------------------------------- 2-Check --Hide or Show ---------------------------------------//
            //--------------------------------------------------------------------------------//

            //

            if (newScrolled == 0) {
              // @ts-ignore
              // e.currentTarget.style.visibility = "hidden";
              left.current["hidden"] = true;
            }
            if (
              Math.abs(newScrolled) !=
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            ) {
              //show
              if (right.current["hidden"]) {
                // @ts-ignore
                right.current["hidden"] = false;
              }
            }
            // @ts-ignore
            // left.current["disabled"] = false;
          }}
        >
          <ChevronLeftIcon className="w-4 h-4 font-bold ml-1" />
        </button>
        <div
          className="relative h-[80px] bg-white overflow-hidden items-center justify-start flex mx-1 col-start-2 "
          ref={Container}
        >
          <motion.div
            ref={IconSlider}
            initial={false}
            variants={slideVariants}
            animate={goLeft ? "GoLeft" : "GoRight"}
            transition={{ duration: 0.5, type: "spring", bounce: 0, delay: 0 }}
            className="flex flex-row gap-4 items-center justify-end text-[#888888] tracking-wide flex-shrink-0 font-medium h-full"
            style={{ fontFamily: "Roboto" }}
          >
            {/* <div className="bg-white flex flex-col justify-center gap-2 items-center self-end rounded-lg group transition-all duration-500 hover:text-black/80 ">
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="flex flex-col justify-center gap-2 items-center cursor-pointer peer-checked:cursor-default peer-checked:text-black group"
            >
              <HomeModernIcon className="w-6 h-6 " />
              <p className="text-[12.5px]">Amazing pools</p>
            </label>
            <div className="rounded-full h-[2.8px] w-full transition-all bg-white duration-500 group-hover:bg-[#888888]/40 peer-checked:bg-black " />
          </div> */}
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools1"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools2"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools22"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools3"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools4"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools5"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools6"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools7"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools8"}
            />
          </motion.div>
        </div>
        <button
          ref={right}
          hidden={hideRight ? true : false}
          key="GoRight"
          className="border-[1.5px] border-gray-300 shadow-sm rounded-full cursor-pointer col-start-3 w-7 h-7 transition-all hover:scale-[113%] hover:shadow-xl ease-in-out duration-150"
          onClick={() => {
            let off = offset;
            //make sure the last sliding is precise
            console.log(
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            );
            if (
              Math.abs(
                Math.abs(Scrolled - offset) -
                  Math.abs(
                    IconSlider.current["offsetWidth"] -
                      Container.current["offsetWidth"]
                  )
              ) < offset
            ) {
              //new offset
              off =
                offset -
                (Math.abs(Scrolled - offset) -
                  Math.abs(
                    IconSlider.current["offsetWidth"] -
                      Container.current["offsetWidth"]
                  ));
            }
            //Move div to the left
            let newScrolled = Scrolled - off;
            setScrolled(Scrolled - off);
            setGoLeft(true);

            //used bcz setState needs time to update

            console.log(
              "//Move div to the left and scrolled :",
              newScrolled,
              IconSlider.current["offsetWidth"],
              Container.current["offsetWidth"]
            );
            //--------------------------------------------------------------------------------//
            //-------------------------------- 2-Check --Hide or Show ---------------------------------------//
            //--------------------------------------------------------------------------------//

            //
            if (
              Math.abs(newScrolled) ==
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            ) {
              // @ts-ignore
              right.current["hidden"] = true;
            }

            if (Math.abs(newScrolled) != 0) {
              //show
              if (left.current["hidden"]) {
                // @ts-ignore
                left.current["hidden"] = false;
              }
            }
          }}
        >
          <ChevronRightIcon className="w-4 h-4 font-bold ml-1" />
        </button>
        <div className="flex flex-row gap-2 items-center hover:shadow-md cursor-pointer transition-all duration-200 justify-center bg-white text-center rounded-xl border-[1px] col-start-4 h-12 self-center mx-1">
          <AdjustmentsHorizontalIcon className="h-5" />
          <p className="text-[14px] mb-1">Filters</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex group/scroll  shadow-md shadow-black/10 border-b-[1px]">
        <div className="relative h-[80px] bg-white overflow-x-scroll items-center justify-start flex col-start-2 scrollbar-none mx-2 ">
          <motion.div
            initial={false}
            transition={{ duration: 0.5, type: "spring", bounce: 0, delay: 0 }}
            className="flex flex-row gap-4 items-center justify-end text-[#888888] tracking-wide flex-shrink-0 font-medium h-full"
            style={{ fontFamily: "Roboto" }}
          >
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools10"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools11"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools12"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools122"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools13"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools14"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools15"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools16"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools17"}
            />
            <CategoryIcons
              icon={<HomeModernIcon className="w-6 h-6 " />}
              title={"Amazing pools18"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
