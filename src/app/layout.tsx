import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nnureach Hong",
  description: "My Portfolio",
};

const myFont = localFont({
  src: "/font/myFont.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
