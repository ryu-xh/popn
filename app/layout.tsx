import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {useTranslation} from "react-i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pop'n music Calculator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
