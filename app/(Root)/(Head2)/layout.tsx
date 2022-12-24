import Header_Logged2 from "../../../components/Header_Logged2";
import "../../../styles/globals.css";
export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header id="header" className="fixed top-0 z-20">
          <Header_Logged2 />
        </header>
        {children}
      </body>
    </html>
  );
}
