'use client'
import React, { useState } from 'react';
import ProductInfoBox from '../ProductInfoBox/ProductInfoBox'
import './ProductInfoTabs.css'
import FiveRatingStar from '../FiveRatingStar/FiveRatingStar';
import ProductCommentList from '../ProductCommentList/ProductCommentList';

const ProductInfoTabs = ({ product, productProperties }) => {
    const comments = [
        {
            "id": '1',
            "name": "علی",
            "date": "سه شنبه 9 خرداد 1402 - 13:14",
            "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
            "hasReply": true,
            "reply":
                [{
                    "id": '11',
                    "name": "مدیر",
                    "date": "سه شنبه 9 خرداد 1402 - 15:14",
                    "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
                    "hasReply": false
                },
                    {
                        "id": '12',
                    "name": "مدیر",
                    "date": "سه شنبه 9 خرداد 1402 - 15:14",
                    "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
                    "hasReply": false
                }]
        },
        {
            "id": '2',
            "name": "علی",
            "date": "سه شنبه 9 خرداد 1402 - 13:14",
            "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
            "hasReply": true,
            "reply": [{
                "id": '21',
                "name": "مدیر",
                "date": "سه شنبه 9 خرداد 1402 - 15:14",
                "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
                "hasReply": false
            }]
        },
        {
            "id": '3',
            "name": "علی",
            "date": "سه شنبه 9 خرداد 1402 - 13:14",
            "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
            "hasReply": true,
            "reply": [{
                "id": '31',
                "name": "مدیر",
                "date": "سه شنبه 9 خرداد 1402 - 15:14",
                "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
                "hasReply": false
            }]
        }
    ];
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="product-bottom ">
            <div className="tabs-container">
                <div className='tabs hidden invisible md:block md:visible'>
                    <ul className="tab-list">
                        <li
                            className={`tab ${activeTab === 0 ? 'active' : ''}`}
                            onClick={() => handleTabClick(0)}
                        >
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                </i>
                                <span>توضیحات محصول</span>
                            </p>
                        </li>
                        <li
                            className={`tab ${activeTab === 1 ? 'active' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </i>
                                <span>مشخصات فنی</span>
                            </p>
                        </li>
                        <li
                            className={`tab ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                </i>
                                <span>نظرات کاربران</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">

                    <ProductInfoBox className={`desc`} show={activeTab === 0 ? 'show' : ''} title={'توضیحات محصول'}>
                            <p className="text-justify text-sm">{product?.description}</p>
                        </ProductInfoBox>

                    <ProductInfoBox className={`attributes`} show={activeTab === 1 ? 'show' : ''} title={'مشخصات فنی'}>
                            <ul className="">
                                {productProperties && Object.entries(productProperties).map(([key, value], index) => (
                                    <li key={index}>
                                        <span className="mr-0.5 text-gray-400">{key}:&nbsp;</span><span>{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </ProductInfoBox>

                    <ProductInfoBox className={`comments`} show={activeTab === 2 ? 'show' : ''} title={'نظرات کاربران'}>
                            <div className="rate flex flex-row-reverse gap-x-4 justify-between pb-3 border-b text-left" title="امتیاز 4.5 از 5 توسط 2 کاربر">
                                <div className="rating-container h-[18px] overflow-hidden leading-[18px]">
                                    <FiveRatingStar score={4.5} />
                                </div>
                                <span className="text-sm">امتیاز 4.5 از 5 توسط 2 کاربر</span>
                            </div>
                            <div className="product-comments mb-5 font-dana-fanum">
                                <ProductCommentList comments={comments} />
                            </div>
                        </ProductInfoBox>

                </div>
            </div>
            {/* <ProductInfoBox className={'features'} title={'ویژگی های محصول'}>
                <ul>
                    {productProperties && Object.entries(productProperties).map(([key, value], index) => (
                        <li key={index}>
                            <span>{key}:&nbsp;</span><span>{value}</span>
                        </li>
                    )

                    )}
                </ul>
            </ProductInfoBox> */}



        </div>
    )
}

export default ProductInfoTabs