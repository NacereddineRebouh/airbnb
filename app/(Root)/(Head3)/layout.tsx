import Header_Logged2 from "../../../components/Header_Logged2";
import "../../../styles/globals.css";
import SessionProvider from "../../../components/providers/SessionProvider";
import { unstable_getServerSession } from "next-auth/next";
import { Quicksand } from "@next/font/google";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });

export default async function Header3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head></head>
      <body className={Qs.className}>
        <header id="header" className="fixed top-0 z-20">
          <Header_Logged2 width="[1200px]" marginX="30px" />
        </header>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
