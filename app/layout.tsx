/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head key="Home">
        <title key="sdd">Airbnb</title>
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
        <section id="header" className="sticky top-0 z-20">
          <Header />
        </section>
        {/* Shared Category panel */}
        <section id="category" className="mt-4 sticky top-[80px] z-10 ">
          <Categories />
        </section>

        <section id="footer" className="fixed bottom-[0px] z-50 self-end">
          <Footer />
        </section>
        {/* Other child pages */}
        {children}
      </body>
    </html>
  );
}
