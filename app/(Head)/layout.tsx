/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";
import { unstable_getServerSession } from "next-auth";
import Header_Logged from "../../components/Header_Logged";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head key="Home">
        <title key="title">Airbnb</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        {/* <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
            rel="stylesheet"
          />
        </Head> */}
      </head>

      <body>
        {/* Shared Header */}
        <header id="header" className="fixed top-0 z-20">
          {session ? <Header_Logged /> : <Header />}
        </header>
        {/* Shared Category panel */}
        <section id="category">
          <Categories />
        </section>

        <section id="footer" className="fixed bottom-[0px] z-50 self-end">
          <Footer />
        </section>
        {/* Other child pages */}
        <section className="mt-[200px] mb-20 z-0 mx-auto" id="Content">
          {children}
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
