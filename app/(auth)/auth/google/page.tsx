/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import path from "node:path/win32";
import { usePathname, useSearchParams } from "next/navigation";
import Cookies from "universal-cookie";
import React, { useEffect, useState } from "react";
// import protectedRoutes from "../../../components/protected.js";

type Props = {};
type userInfo = {
  id: string;
  name: string;
  email: string;
};

type loginResponse = {
  user: userInfo;
  error?: string;
  AccessToken: string;
};
export default function Page({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [user, setuser] = useState<loginResponse>();
  useEffect(() => {
    const UrlFetch = async () => {
      const res2 = await fetch(
        `${process.env.NEXT_PUBLIC_api_url}/sanctum/csrf-cookie`,
        {
          headers: new Headers({
            accept: "application/json",
          }),
        }
      ).then(async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_api_url}/api/login/google/callback?${searchParams}`,
          {
            headers: new Headers({ accept: "application/json" }),
          }
        );
        const data = await res.json();
        setuser(data);
      });
    };
    UrlFetch();
  }, []);

  useEffect(() => {
    if (user?.user) {
      // let js = JSON.parse(user.user);
      const cookies = new Cookies();
      cookies.set("accessToken", user.AccessToken, { path: "/" });
      console.log("Authed successfuly!");
      console.log("User:" + JSON.stringify(user.user));
      router.push("/");
    } else if (user?.error) {
      router.push("/login");
    }

    // const cookies = new Cookies();
    // cookies.set("myCat", "Pacman", { path: "/" });
  }, [user]);

  return (
    <div className="mx-auto flex w-screen h-screen bg-gray-50 items-center justify-center">
      <div className="grid grid-cols-4 bg-rose-500 w-56 h-11 rounded-lg text-white font-bold hover:bg-rose-400 hover:cursor-not-allowed duration-[500ms,800ms]">
        <div className="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
        <div className="grid-2 my-auto mr-2 animate-ping-nofade text-center">
          Authenticating...
        </div>
      </div>
    </div>
  );
}
