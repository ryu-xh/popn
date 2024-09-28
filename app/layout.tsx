import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider, useTheme} from "styled-components";

export const metadata: Metadata = {
  title: "pop'n music Calculator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  return (
    <html lang={'en'}>
    <head>
      <link rel="manifest" href="/manifest.json"/>
    </head>
    <body>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </body>
    </html>
  );
}
