import Header_Logged3 from "../../../components/Header_Logged3";
import "../../../styles/globals.css";
import { Quicksand } from "@next/font/google";
import Footer from "../../../components/Footer";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={`overflow-hidden ${Qs.className}`}>
        <header id="header" className="fixed top-0 z-20">
          <Header_Logged3 />
        </header>
        <footer
          id="footer"
          className="fixed bottom-[0px] z-50 self-end md:hidden"
        >
          <Footer />
        </footer>
        <section className="mobile:mt-20">{children}</section>
      </body>
    </html>
  );
}
