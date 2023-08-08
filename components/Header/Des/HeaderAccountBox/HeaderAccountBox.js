'use client'

import React, { useState, useEffect } from "react";
// import { getServerSession } from "next-auth/next"
import {
    useSession } from "next-auth/react"
import Link from "next/link";

import './HeaderAccountBox.css'

// import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import Dropdown from "@/components/DropdownMenu/Dropdown";

let items;
const HeaderAccountBox = () => {
    const [activeAccountMenu, setActiveAccountMenu] = useState(false);
    const { data: session } = useSession();
    {/*
    const session = await getServerSession(authOptions);
    */}
    useEffect(() => {
        const guestMenuItems = [
            {
                label: <div title='ورود / ثبت نام' >ورود / ثبت نام</div>,
                type: 'string',
                key: '0',
            },
            {
                type: 'divider',
            },
            {
                label: <div>کاربر جدید هستید؟<div title='ثبت نام' >ثبت نام</div></div>,
                type: 'string',
                key: '1',
            }
        ];

        const registeredMenuItems = [
            {
                label: <Link href='/profile' title='پروفایل'>
                    پروفایل
                </Link>,
                type: 'string',
                key: '0',
            },
            {
                label: <Link href='/orders' title='سفارش‌های من'>
                    سفارش‌های من
                </Link>,
                type: 'string',
                key: '1',
            },
            {
                type: 'divider',
            },
            {
                label: <div title='خروج'>
                    خروج
                </div>,
                type: 'string',
                key: '2',
            }
        ];
        if (session) {
            items = [...registeredMenuItems];
        } else {
            items = [...guestMenuItems];
        }
    }, []);

    const toggleAccountMenuHandler = () =>{
        setActiveAccountMenu(!activeAccountMenu);
    }

    return (
        <div className="user-area w-auto float-left relative pl-7">
            <div className="user-toggle flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div className="user-menu">
                    <div className='inline-flex gap-2'  onClick={()=>toggleAccountMenuHandler()}>
                        <div className="nickname-section">
                            <div className="welcome">خوش آمدی!</div>
                            <div className="nickname-title">
                                {
                                    session ?
                                        `${session?.user?.name}`
                                        :
                                        'پروفایل'

                                }
                            </div>
                        </div>
                    </div>
                    <Dropdown  items={ items } show={activeAccountMenu} />
                </div>
            </div>

        </div>
    )
}

export default HeaderAccountBox


