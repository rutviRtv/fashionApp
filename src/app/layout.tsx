"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import Favorite from "@/components/Favorite"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const metadata: Metadata = {
  title: "Fashion App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <HeaderTop />
          <HeaderMain setShowCart={setShowCart} setShowFavorite={setShowFavorite} />
          {showCart && <Cart setShowCart={setShowCart} />}
          {showFavorite && <Favorite  setShowFavorite={setShowFavorite}/>}
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}