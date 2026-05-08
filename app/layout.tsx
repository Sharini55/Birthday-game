import "./globals.css";

export const metadata = {
  title: "Birthday Pixel Racer",
  description: "Retro arcade birthday racing game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
