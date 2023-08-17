import React from "react";
import Link from "next/link";

const AppBox = () => {
  return (
    <>
      <div className="footer__app-box float-right w-1/2 h-auto md:w-full md:clear-both md:float-none md:relative md:h-[233px] md:bg-footer-app md:bg-no-repeat md:bg-contain md:bg-left-bottom ">
        <span className="app-box__title block mb-3 text-xs font-bold leading-6 md:text-base">
          دریافت اپلیکیشن
        </span>
        <div className="app-box-links md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2">
          <Link
            className="block mb-4 leading-10 h-10 w-full min-w-[168px] pl-3 rounded-sm shadow-[0_3px_5px_0_rgba(0,0,0,0.05)] border-[1px] border-gray-100 bg-white transition-all duration-[0.2s] ease-in-out"
            href="#"
          >
            <i className="float-right h-10 overflow-hidden text-gray-400 text-base w-[18px] leading-10 text-center ml-[10px] mr-[14px] bg-android bg-no-repeat bg-center bg-contain"></i>
            <span className="text-gray-500 text-xs">
              دانلود اپلیکیشن اندروید
            </span>
          </Link>
          <Link
            className="block mb-4 leading-10 h-10 w-full min-w-[168px] pl-3 rounded-sm shadow-[0_3px_5px_0_rgba(0,0,0,0.05)] border-[1px] border-gray-100 bg-white transition-all duration-[0.2s] ease-in-out"
            href="#"
          >
            <i className="float-right h-10 overflow-hidden text-gray-400 text-base w-[18px] leading-10 text-center ml-[10px] mr-[14px] bg-ios bg-no-repeat bg-center bg-contain"></i>
            <span className="text-gray-500 text-xs">دانلود اپلیکیشن ios</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppBox;
