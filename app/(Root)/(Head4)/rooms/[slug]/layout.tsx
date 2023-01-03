import { Quicksand } from "@next/font/google";
import { unstable_getServerSession } from "next-auth";
import HeaderRooms from "../../../../../components/HeaderRooms";
import "../../../../../styles/globals.css";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head key="main">
        <title key="title">Airbnb</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body className={Qs.className}>
        <header id="header" className="z-20">
          {session ? <HeaderRooms /> : <HeaderRooms />}
        </header>
        <section>{children}</section>
      </body>
    </html>
  );
}
