import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./global.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Trafalgar",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mulish.variable}>
      <body>{children}</body>
    </html>
  );
}
