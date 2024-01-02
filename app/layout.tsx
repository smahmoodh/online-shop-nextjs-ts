"use client";

import { useEffect } from "react";
import AuthProvider from "@/app/context/Auth/AuthProvider";
import { CartProvider } from "@/app/context/Cart/CartContext";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import PrelineScript from "@/components/Preline/PrelineScript";

import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/components/Toast/Toast.css"


// import "tw-elements/dist/css/tw-elements.min.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fa" dir={"rtl"} className="">
      <body className="text-color-base bg-gray-50">
        <AuthProvider>
          <CartProvider>
            {/* <NotificationBox />  */}
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
      <PrelineScript />
    </html>
  );
};

export default RootLayout;
