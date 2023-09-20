import React, { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#ECF0F3]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
