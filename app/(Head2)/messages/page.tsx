"use client";
import React, { MouseEventHandler, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [list, setlist] = useState();
  const [prod, setprod] = useState();
  const handleclick = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_api_url}/api/Products/list`,
      {
        headers: new Headers({ accept: "application/json" }),
      }
    );
    const data = await res.json();
    console.log(data);
    setlist(data);
  };
  const handleclick2 = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_api_url}/api/Products/getProduct/1`,
      {
        headers: new Headers({ accept: "application/json" }),
      }
    );
    const data2 = await res.json();
    setprod(data2);
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-row ">
        <div
          onClick={handleclick}
          className="flex items-center transition-all duration-200 justify-center mt-4 hover:text-gray-200 text-gray-600 rounded-lg shadow-md cursor-pointer hover:bg-[#DB4437]"
        >
          <h1 className="py-3 w-5/6 text-center font-bold">list::</h1>
          <div className="w-14"></div>
        </div>
        <div
          onClick={handleclick2}
          className="flex items-center transition-all duration-200 justify-center mt-4 hover:text-gray-200 text-gray-600 rounded-lg shadow-md cursor-pointer hover:bg-[#3763db]"
        >
          <h1 className="py-3 w-5/6 text-center font-bold">get prod::</h1>
          <div className="w-14"></div>
        </div>
      </div>
      list:{JSON.stringify(list)}
      prod:{JSON.stringify(prod)}
    </div>
  );
}
