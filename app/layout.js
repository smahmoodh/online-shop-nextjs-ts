"use client";

import { useEffect } from "react";
import AuthProvider from "@/app/context/Auth/AuthProvider";
import CartState from "@/app/context/Cart/CartState";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";

import "../styles/global.css";
// import "tw-elements/dist/css/tw-elements.min.css";

export const metadata = {
  title: "فروشگاه اینترنتی لوازم جانبی",
  description:
    "فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث",
};

const RootLayout = ({ children }) => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <html lang="fa" dir={"rtl"} className="">
      <body className="text-color-base bg-gray-50">
        <AuthProvider>
          <CartState>
            <Header />
            <div className="mt-[137px] md:mt-[125px] pt-6">
              <div className="pt-0 bg-gray-50">
                <div className="xl:container px-4 mx-auto">{children}</div>
              </div>
            </div>
            <Footer />
          </CartState>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
