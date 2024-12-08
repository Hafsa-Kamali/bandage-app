"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavMobile from "./Homepage/MobileNav";
import Navbar from "./Homepage/Navbar";
import { useState } from "react";
import Footer from "./Homepage/Footer";


const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNav, setShowNav] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-y-scroll overflow-x-hidden`}
      >
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
      <Navbar openNav={() => setShowNav(true)} />
        {children}
<Footer />
      </body>
   
    </html>
  );
}
