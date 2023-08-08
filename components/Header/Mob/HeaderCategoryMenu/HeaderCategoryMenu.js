import Link from "next/link";

const HeaderCategoryMenu = () => {
    const items = [
        {'title': 'کالای دیجیتال', 'url':'#','hasSub': true,
            'children':[
                {'title': 'گوشی موبایل', 'url':'/category/goshy-mobayl','hasSub': false,'children': null},
                {'title': 'تبلت', 'url':'/category/tblt','hasSub': false,'children': null},
                {'title': 'لپتاپ', 'url':'/category/lptap','hasSub': false,'children': null},
                {'title': 'کامپیوتر شخصی', 'url':'/category/kampyotr-shkhsy','hasSub': false,'children': null},
            ]
        },
        {'title': 'لباس', 'url':'#','hasSub': true,
            'children':[
                {'title': 'پیراهن مردانه', 'url':'/category/pyrahn-mrdanh','hasSub': false,'children': null},
                {'title': 'شلوار مردانه', 'url':'/category/shloar-mrdanh','hasSub': false,'children': null},
                {'title': 'لباس بچه گانه', 'url':'/category/lbas-bchh-ganh','hasSub': false,'children': null},
            ]
        },
        {'title': 'کیف و کفش', 'url':'#','hasSub': true,
            'children':[
                {'title': 'کیف زنانه',  'url':'/category/kyf-znanh','hasSub': false,'children': null},
                {'title': 'کفش زنانه',  'url':'/category/kfsh-znanh','hasSub': false,'children': null},
                {'title': 'کیف مردانه', 'url':'/category/kyf-mrdanh','hasSub': false,'children': null},
                {'title': 'کفش مردانه', 'url':'/category/kfsh-mrdanh','hasSub': false,'children': null},
            ]
        },
    ];
    return (
        <ul className="space-y-1.5">
            <li className='flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 rounded-md hover:bg-gray-100 dark:bg-gray-900'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <Link
                    href="/"
                    className=" font-bold text-sm text-gray-600 dark:text-white"
                >
                    صفحه اصلی
                </Link>
            </li>
            {items.length > 0 && items.map((item,index)=>(
                item.hasSub ?
                    <li className="hs-accordion" key={index}>
                        <Link
                            href={item.url}
                            className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm font-bold text-gray-600 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        >
                            {item.title}

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:block mr-auto hidden w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hs-accordion-active:hidden mr-auto block w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </Link>
                        <div id="users-accordion" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                            <ul className="pt-2 pl-2">
                                {item?.children?.length > 0 && item.children.map((subItem,index)=>(

                                    <li key={index}>
                                        <Link
                                            href={subItem.url}
                                            className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                            >
                                            {subItem.title}
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </li>
                    :
                    <li key={index}>
                        <Link
                            href={item.url}
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                        >
                            {item.title}
                        </Link>
                    </li>
                )
            )}
        </ul>
    )
}

export default HeaderCategoryMenu


