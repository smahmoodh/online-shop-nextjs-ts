import "./Footer.css";
import ServiceBox from "@/components/Footer/ServiceBox/ServiceBox";
import FooterMenu from "@/components/Footer/FooterMenu/FooterMenu";
import AppBox from "@/components/Footer/AppBox/AppBox";
import Link from "next/link";
import Nemads from "@/components/Footer/Nemads/Nemads";

const Footer = () => {
  return (
    <div className="footer bg-white clear-both text-gray-500 text-sm">
      <div className="footer__top pt-[72px] pb-[64px] bg-footer bg-center bg-auto bg-no-repeat hidden invisible md:visible md:block">
        <div className="container mx-auto">
          <ServiceBox />
        </div>
      </div>

      <div className="footer__center pt-[30px] md:p-0">
        <div className="container mx-auto">
          <div className="section-top border-b-[1px] border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-12 ">
              <div className="md:col-span-8 px-[15px]">
                <FooterMenu />
                <div className="md:hidden md:invisible">
                  <AppBox />
                </div>
              </div>
              <div className="hidden invisible md:visible md:block md:col-span-4 px-[15px]">
                <AppBox />
              </div>
            </div>
          </div>
          <div className="section-bottom py-4 md:py-14">
            <div className="row grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:px-[15px]">
                <div className="footer__contact text-xs mb-4 pb-4 font-[300] border-b-[1px] border-gray-300 md:pb-8 md:mb-8 md:text-base lg:border-none lg:pb-0 lg:mb-0">
                  <div className="contact__content text-xs text-center mb-[10px] leading-6 md:text-base md:mb-6 lg:mb-6 lg:text-right">
                    <span>پاسخگوی شما هستیم : </span>
                    <span>شنبه تا چهارشنبه </span>
                    <span className="text-green-500 font-[600]">۹-۱۷ </span>
                    <span>. پنج شنبه </span>
                    <span className="text-green-500 font-[600]">۹-۱۴</span>
                  </div>
                  <div className="contact__data block lg:flex lg:items-center">
                    <div className="data__information ">
                      <ul
                        className="
                          h-10 flex items-center justify-center gap-x-10 pl-0 mb-4
                          lg:gap-[62px] lg:pl-[62px] lg:border-l-[1px] lg:border-gray-300 lg:mb-0
                          [&>li]:text-xs [&>li]:flex [&>li]:items-center [&>li]:gap-x-[6px]  [&>li]:whitespace-nowrap
                           [&>li]:md:gap-3 [&>li]:md:text-base
                          "
                      >
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          <Link href="tel:989354889210">09354889210</Link>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                          <Link href="mailto:test@test.test">
                            test@test.test
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="data__social text-right flex justify-center items-center gap-x-6 pr-0 md:gap-[22px] md:pr-[36px]">
                      <li>
                        <Link
                          href="#"
                          className="relative text-gray-300 hover:text-primary"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6 -rotate-[30deg] relative -top-[2px]"
                          >
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:px-[15px]">
                <Nemads />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom pt-4 bg-gray-100 md:pt-10">
        <div className="container px-4 mx-auto">
          <div className="bottom__text text-sm border-b-[1px] pb-4 md:pb-10">
            <p
              className="
                  text-xs leading-5 max-h-[initial] overflow-hidden whitespace-pre-line font-[300] text-justify m-0
                  md:text-sm md:leading-[26px] md:max-h-[78px]
              "
            >
              فروشگاه اینترنتی تخصصی React زمان یکی از با ارزش ترین سرمایه های
              انسانی است که باید از آن به بهترین نحو ممکن استفاده شود. اهمیت
              زمان آنقدر برای بشر شناخته شده بود که همواره سعی داشته و دارد، تا
              برای رسیدن به اهداف خود کوتاه ترین مسیر را انتخاب کند. مسیری که او
              را زودتر به هدف مورد نظر خود برساند. در سال های اخیر با فراگیر شدن
              گجت های هوشمند مثل موبایل، تبلت و یا ابزارهای الکترونیکی دیگر مثل
              لپ تاپ، دوربین، کنسول بازی و... سبب شد شاخه ای جدید در بازار شکل
              بگیرد که هدف از آن رفع نیازهای React از گروه محصولات باشد{" "}
            </p>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="row grid grid-cols-1 lg:grid-cols-12">
            <div className="md:col-span-9 md:px-[15px]">
              <div className="py-4 leading-5 text-xs border-b-[1px] lg:leading-[66px]">
                استفاده از مطالب{" "}
                <Link href="#" title="تست" className="text-primary">
                  فروشگاه اینترنتی React
                </Link>{" "}
                فقط برای مقاصد غیر تجاری و با ذکر منبع بلامانع است. کليه حقوق
                اين سايت محفوظ می‌باشد
              </div>
            </div>
            <div className="md:col-span-3 md:px-[15px]">
              <div className="text-xs flex items-center gap-[10px] justify-center leading-8 py-4 lg:leading-[66px] lg:justify-end">
                <span>فروشگاه ساخته شده با </span>
                <Link
                  target="_blank"
                  title="react"
                  href="#"
                  className="text-primary"
                >
                  React
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
