import '../styles/global.css';


export const metadata = {
  title: 'فروشگاه اینترنتی لوازم جانبی',
  description: 'فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="fa">
      <body className=''>{children}</body>
    </html>
  )
}

export default RootLayout;