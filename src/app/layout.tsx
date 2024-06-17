import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";
import Template from "./template";
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
      <body className={myFont.className}>
        <Template>
          {children}
        </Template>
        </body>
    </html>
  );
}
