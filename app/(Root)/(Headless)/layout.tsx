import "../../../styles/globals.css";
import SessionProvider from "../../../components/providers/SessionProvider";
import { unstable_getServerSession } from "next-auth/next";
// import {useRouter} from "next/navigation"
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  // console.log(session?.user);
  if (session?.user !== undefined || null) {
    redirect("/");
  }
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
