import '../styles/global.css';
import AuthProvider from "@/app/context/Auth/AuthProvider";


export const metadata = {
    title: 'فروشگاه اینترنتی لوازم جانبی',
    description: 'فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث',
}

const RootLayout = ({children}) => {
    return (
        <html lang="fa" dir={'rtl'} className=''>
            <body className='text-color-base bg-gray-100'>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout;