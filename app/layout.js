"use client";

import { useEffect } from "react";
import AuthProvider from "@/app/context/Auth/AuthProvider";
import { CartProvider } from "@/app/context/Cart/CartContext";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";

import "@/styles/global.css";
import "@/styles/fonts.css";
// import "tw-elements/dist/css/tw-elements.min.css";



const RootLayout = ({ children }) => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <html lang="fa" dir={"rtl"} className="">
      <body className="text-color-base bg-gray-50">
        <AuthProvider>
          <CartProvider >
            <Header />
            <div className="mt-[137px] md:mt-[125px] pt-6">
              <div className="pt-0 bg-gray-50">
                <div className="xl:container px-4 mx-auto">{children}</div>
              </div>
            </div>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
