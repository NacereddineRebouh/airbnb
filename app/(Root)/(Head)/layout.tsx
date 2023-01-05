/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Categories from "../../../components/Categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import "../../../styles/globals.css";
import { unstable_getServerSession } from "next-auth";
import Header_Logged from "../../../components/Header_Logged";
import SessionProvider from "../../../components/providers/SessionProvider";
import { Quicksand } from "@next/font/google";
import FooterLogged from "../../../components/FooterLogged";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html className="scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
      <head key="main">
        <title key="title">Airbnb</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>

      <body className={` ${Qs.className}`}>
        {/* Shared Header */}
        <header id="header" className="fixed top-0 z-20">
          {session ? <Header_Logged /> : <Header />}
        </header>
        {/* Shared Category panel */}
        <section id="category">
          <Categories />
        </section>

        <footer id="footer" className="fixed bottom-[0px] z-50 self-end">
          {session ? <FooterLogged /> : <Footer />}
        </footer>
        {/* Other child pages */}
        <section className="z-0 mx-auto mt-[200px] mb-20" id="Content">
          <SessionProvider>{children}</SessionProvider>
        </section>
      </body>
    </html>
  );
  // div
  //     className={
  //       dettach
  //         ? "fixed top-[80px] z-10 bg-white"
  //         : "mt-4 absolute top-[80px] z-10 bg-white"
  //     }
  //   >
}
