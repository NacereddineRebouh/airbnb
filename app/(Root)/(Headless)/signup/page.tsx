"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
type Props = {};

export default function page({}: Props) {
  const [Success, setSuccess] = useState(false);
  const [Failure, setFailure] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirmation, setpasswordConfirmation] = useState("");
  const router = useRouter();
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      //@ts-ignore
      passwordConfirmationRef.current.className =
        //@ts-ignore
        passwordConfirmationRef.current.className + " bg-red-50 border-red-400";

      setpassword("");
      setpasswordConfirmation("");
    } else {
      console.log(
        "Submiting..",
        name,
        email + " " + password + " " + passwordConfirmationRef
      );

      fetch(process.env.NEXT_PUBLIC_BACKEND_API + "/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const result2 = await response.json();
          console.log(JSON.stringify(result2));
          console.log(result2.success);
          if (result2.success) {
            setSuccess(true);
            setFailure(false);
            router.push("/login");
          } else {
            setFailure(true);
            setSuccess(false);
          }
        })
        .catch(() => {
          setFailure(true);
          setSuccess(false);
        });
    }
  };

  return (
    <section className="flex h-screen w-screen items-center overflow-hidden bg-gray-50 pb-28 text-sm sm:text-base">
      <div className="mx-auto w-full p-8 sm:w-[600px]">
        <h2 className="pb-6 text-center text-4xl font-bold text-rose-500">
          Airbnb
        </h2>
        <div className="text-center text-2xl text-gray-600">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-100 py-2 px-4 text-gray-700 transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-[3px] focus:ring-zinc-300"
              type={"text"}
              required
              value={name}
              onChange={(e) => setname(e.currentTarget.value)}
              placeholder={"Username"}
            />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email Address
            </label>
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-100 py-2 px-4 text-gray-700 transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-[3px] focus:ring-zinc-300"
              type={"email"}
              required
              onChange={(e) => setemail(e.currentTarget.value)}
              value={email}
              autoComplete="off"
              placeholder={"Email Address"}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password
              </label>
            </div>
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-100 py-2 px-4 text-gray-700 transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-[3px] focus:ring-zinc-300"
              type="password"
              required
              value={password}
              autoComplete="off"
              onChange={(e) => setpassword(e.currentTarget.value)}
              placeholder={"Password"}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password confirmation
              </label>
            </div>
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-100 py-2 px-4 text-gray-700 transition-all duration-300 focus:border-gray-400 focus:outline-none focus:ring-[3px] focus:ring-zinc-300"
              type="password"
              required
              ref={passwordConfirmationRef}
              value={password_confirmation}
              onChange={(e) => setpasswordConfirmation(e.currentTarget.value)}
              placeholder={"Password Confirmation"}
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className={`duration-400 relative flex w-full flex-row rounded py-2 px-4 font-bold text-white transition-all  ${
                Success
                  ? "bg-green-600"
                  : `${
                      Failure ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                    }`
              } `}
            >
              <div className="absolute top-0 left-[8px] z-0 h-full w-7 items-center justify-center p-1">
                <BsFillCheckCircleFill
                  fill="white"
                  color="red"
                  className={`absolute left-0 top-0 z-10 h-full w-full transition-all duration-200 ${
                    Success ? "opacity-100" : "opacity-0"
                  }`}
                />
                <BsFillXCircleFill
                  fill="white"
                  className={`absolute left-0 top-0 h-full w-full transition-all duration-200 ${
                    Failure ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="mx-auto">Signup</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}