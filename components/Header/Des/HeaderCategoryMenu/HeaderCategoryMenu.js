'use client'

import React, {useEffect, useState} from "react";
import Link from "next/link";

import './HeaderCategoryMenu.css';

const HeaderCategoryMenu = () => {
    {/*const [categories, setCategories] = useState([]);
    const [tmpcategories, settmpCategories] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/categories");
        const data = await response.json();
        console.log(data);
        makeCategoryTree(data.data);
        settmpCategories(data.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const makeCategoryTree = (categoryList) => {
        console.log("makeCategoryTree");
        console.log(categoryList);
        let catList = [];
        categoryList.length > 0 && (
            categoryList.map((category) => {
                if (category.parent_id === null) {

                    category.children = [];
                    category.hasSub = false;
                    catList.push(category);
                } else {
                    let upd_obj = categoryList.findIndex((obj => obj.id == category.parent_id));
                    catList[upd_obj].hasSub = true;
                    catList[upd_obj].children.push(category);
                }
            })
        )
        console.log(catList);
        setCategories(catList);

    }

    const makeMenu = (catList) => {
        console.log("makeMenu");
        let res = catList.map(cat => {
            <p>{cat.name}</p>
        });
        return res;
    }*/}
    const categories = [
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

    if (categories.length === 0) {
        return <div>Loading...</div>;
    }
    return (

        <>
            {categories.length > 0 && (
                <ul
                    className="menu-21 menu-custom1 menu-21 mega1 three-level1
                    min-w-[185px] float-right bg-white border-l-[1px]
                    "
                    id="menu_header">
                    {categories.map((category, index) => (
                        <li className={`p-0 ${category.hasSub ? 'deep-3' : ''}`} key={index}>
                            <Link
                                title={category.title}
                                className="relative pl-6 text-sm font-normal text-right text-gray-500 px-3 py-2 leading-6 transition-all delay-[0.2s] ease-in-out flex justify-between"
                                href={category.url}>
                                <p>{category.title}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-2 top-3 leading-[1.5em] w-4 h-4 transition-all delay-[0.3s]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>
                            {category.hasSub ?
                                category.children.length > 0 && (
                                    <ul className='absolute top-0 left-0 bottom-0 right-[185px] w-[500px] lg:w-[600px] bg-white px-6 py-[6px] opacity-0 invisible transition-all delay-[0.2s] ease-in-out overflow-y-hidden z-30 '>
                                        <div className="ul-title flex items-center justify-between border-b-[1px] border-gray-200 mb-[14px] pb-1 pt-2">
                                            <span className="link-title text-sm font-bold leading-4 text-right text-gray-500"> {category.name}</span>
                                            <Link
                                                href={category.url}
                                                className="more-items text-[12px] font-normal text-right text-gray-500 px-[14px] py-[7.5px] leading-6 transition-all delay-[0.2s] ease-in-out flex gap-2 items-center hover:text-primary">
                                                <span>مشاهده همه محصولات {category.title}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <li className='float-right w-[33%] relative p-0 '>
                                            <Link title="دسته بندی محصولات"
                                               className="mb-1 "
                                               href="#">دسته بندی محصولات</Link>
                                            <ul className='right-0 left-0 w-full p-0 top-[23px]'>
                                                {category.children.map((subCategory, index) =>
                                                    <li
                                                        key={index}
                                                        className='block w-full m-0'
                                                    >
                                                        <Link
                                                            title={subCategory.title}
                                                            className="!font-normal !py-[5px]"
                                                              href={subCategory.url}>{subCategory.title}</Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                )
                                :
                                ''
                            }
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default HeaderCategoryMenu


