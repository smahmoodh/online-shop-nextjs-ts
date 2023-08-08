import Link from "next/link";
import {Logo} from "@/components/Logo/logo";

import './HeaderSideMenu.css'
import HeaderCategoryMenu from "@/components/Header/Mob/HeaderCategoryMenu/HeaderCategoryMenu";

const HeaderSideMenu = () => {

    return (
        <div id="docs-sidebar" className="dir-rtl hs-overlay hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform hidden fixed top-0 right-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:left-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 flex-none text-xl font-semibold dark:text-white">
                <Logo cssClass='w-[50%] block mx-auto' />
            </div>

            <div className="sidemenu__item">
                <div className="sidemenu__item-inner user-area">
                    <div className="user-area__toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <div className="user-area__nickname-section">
                            <div className="user-area__welcome">
                                خوش آمدی!
                            </div>
                            <div className="user-area__nickname-title">
                                username
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sidemenu__item'>
                <div className='sidemenu__item-inner'>
                    <ul className='w-full text-right [&>li]:block [&>li]:pt-4 [&>li>a]:text-sm [&>li>a]:leading-4 [&>li>a]:text-gray-500 [&>li>a]:p-0 [&>li>a]:block '>
                        <li>
                            <Link href="#">پیشنهاد ویژه</Link>
                        </li>
                        <li>
                            <Link href="#">پرفروش ترین</Link>
                        </li>
                        <li>
                            <Link href="#">جدیدترین ها</Link>
                        </li>
                        <li>
                            <Link href="#">وبلاگ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
                <HeaderCategoryMenu />
            </nav>
        </div>
    )
}

export default HeaderSideMenu


