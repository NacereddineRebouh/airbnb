import Header_Logged from "../../components/Header_Logged";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header id="header" className="fixed top-0 z-20">
          <Header_Logged />
        </header>
        {children}
      </body>
    </html>
  );
}
