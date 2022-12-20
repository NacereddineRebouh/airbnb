export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
