'use client'
import {useEffect} from "react";
import AuthProvider from "@/app/context/Auth/AuthProvider";
import Header from "@/components/Header/header";
import CartState from "@/app/context/Cart/CartState";

import '../styles/global.css';

export const metadata = {
    title: 'فروشگاه اینترنتی لوازم جانبی',
    description: 'فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث',
}

const RootLayout = ({children}) => {

    useEffect(() => {
        import('preline')
    }, [])
    return (
            <html lang="fa" dir={'rtl'} className=''>

                <body className='text-color-base bg-gray-100'>
                    <AuthProvider>
                        <CartState>
                            <Header />
                            {children}
                        </CartState>
                    </AuthProvider>
                    <script src="./node_modules/preline/dist/preline.js"></script>
                </body>
            </html>
    )
}

export default RootLayout;

