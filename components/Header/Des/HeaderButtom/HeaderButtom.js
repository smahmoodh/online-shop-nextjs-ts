import React from 'react';
import HeaderCategoryMenu from "@/components/Header/Des/HeaderCategoryMenu/HeaderCategoryMenu";

const HeaderButtom = () => {
    return (
        <div className="header-bottom text-right clearfix">
            <div className="lg:container mx-auto px-3">
                <nav className="inline float-right relative bg-primary rounded-t-md h-[40px] m-0 p-0">
                    <div className="cats-menu group inline-block">
                        <a
                            className="cat-menu-toggle w-fit h-10 flex items-center py-2 pr-[11px] pl-[15px] cursor-pointer text-white"
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rotate-180 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                            <span className='font-normal text-sm leading-4 text-right'>دسته بندی محصولات</span>
                        </a>
                        <div
                            className="
                            absolute bg-white w-[740px] min-h-[280px] top-[62px] right-0 invisible opacity-0 z-40 [box-shadow: 0 3px 20px 0 rgba(94, 100, 114, 0.08)] rounded-b-md transition-all delay-0 ease-in-out
                            group-hover:top-10 group-hover:opacity-100 group-hover:visible group-hover:transition-duration-200 group-hover:transition-delay-200
                            "
                        >
                            {/*
                                group-hover:(top-10,opacity-100,visible,transition-duration-200,transition-delay-200)
                                hover:top-10 hover:opacity-100 hover:visible hover:transition-duration-200 hover:transition-delay-200
                             */}
                            <HeaderCategoryMenu />
                        </div>
                    </div>
                </nav>
                <div className="px-3 py-2 inline-block">
                    <ul className='text-right [&>li]:inline-block gap-2 [&>li>a]:text-right [&>li>a]:px-6 [&>li>a]:text-gray-500'>
                        <li>
                            <a href="#">پیشنهاد ویژه</a>
                        </li>
                        <li>
                            <a href="#">پرفروش ترین</a>
                        </li>
                        <li>
                            <a href="#">جدیدترین ها</a>
                        </li>
                        <li>
                            <a href="#">وبلاگ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderButtom


