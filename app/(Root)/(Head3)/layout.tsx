import Header_Logged2 from "../../../components/Header_Logged2";
import "../../../styles/globals.css";
import SessionProvider from "../../../components/providers/SessionProvider";
import { unstable_getServerSession } from "next-auth/next";

export default async function Header3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head></head>
      <body>
        <header id="header" className="fixed top-0 z-20">
          {session ? <Header_Logged2 /> : ""}
        </header>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
