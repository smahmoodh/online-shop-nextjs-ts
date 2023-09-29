"use client"
import React, { useContext, useState } from 'react';

import { CartContext } from "@/app/context/Cart/CartContext";
import BoxTitleBar from '@/components/BoxTitleBar/BoxTitleBar';
// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

import './page.css'
import Image from 'next/image';
import Link from 'next/link';
import { calcDiscount, seperatNumber } from '@/utils/Utilities';
import ChangeQuantity from '@/components/ChangeQualtity/ChangeQuantity';

const ShoppingCart = () => {
    const { state } = useContext(CartContext);
    console.log('state');
    console.log(state);
    const { items } = state;

    const totalDiscount = items.reduce((total, item) => {
        // اگر محصول تخفیف دار است، مقدار تخفیف به مجموع تخفیف‌ها اضافه شود
        if (item.hasDiscount) {
            total += item.price - item.discountPrice;
        }
        return total;
    }, 0);
    const totalPrice = items.reduce((total, item) => {
        // اگر محصول تخفیف دار است، مقدار تخفیف به مجموع تخفیف‌ها اضافه شود
        total += item.price;
        return total;
    }, 0);

    return (
        <>
            {/* <Breadcrumbs id={''} type={"cart"} /> */}
            <div className='grid grid-cols-12'>

                {items.length > 0 ? (
                    <>
                        <div className='col-span-12 lg:col-span-9 -mx-[15px] md:m-0 lg:px-[15px]'>
                            <div className='cart__box py-[10px] px-[15px] md:p-0'>
                                <div className='cart__box--header'>
                                    <BoxTitleBar title={'سبد خرید'} icon={true} type={'box'} />
                                </div>
                                <div className='cart__box--body'>
                                    <div>
                                        <table className='w-auto md:w-full m-0 border-collapse bg-transparent '>
                                            <thead className='hidden invisible md:table-header-group md:visible'>
                                                <tr className='border-b border-gray-200 [&>th]:text-gray-500 [&>th]:text-xs [&>th]:font-normal [&>th]:leading-[48px] [&>th]:text-right'>
                                                    <th className='w-[52%] pr-[30px]'> محصول </th>
                                                    <th className='w-[12%]'> قیمت واحد </th>
                                                    <th className='w-[22%]'> تعداد </th>
                                                    <th className='w-[14%]'> مجموع </th>
                                                </tr>
                                            </thead>
                                            <tbody className='block md:table-row-group'>
                                                {items.map(item => (
                                                    <tr className='
                                                    block mb-5
                                                    border-b border-gray-200 transition-all duration-[0.3s] ease-in-out 
                                                    [&>td]:pt-[15px] [&>td]:pb-[5px]
                                                    md:[&>td]:py-6 md:[&>td]:px-0 
                                                    md:table-row md:mb-0
                                                    hover:bg-blue-50
                                                    last:border-b-0 last:mb-0
                                                    '>
                                                        <td className='item-product p-0 md:!pr-[30px] '>
                                                            <div className='thumb w-[100px] h-[100px] ml-[10px] relative border bg-white float-right md:w-[136px] md:h-[136px] md:ml-[18px]'>
                                                                <Image src={item.images[0]} width={136} height={136} alt={item.title}
                                                                    className='absolute top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2' />
                                                            </div>
                                                            <Link
                                                                className='mb-[5px] md:mb-4 text-sm leading-[25px] overflow-hidden h-[50px] text-right block'
                                                                href={`/product/${item._id}`} title={item.title}>
                                                                {item.title}
                                                            </Link>
                                                            {/* {item?.properties.map(property => (
                                                                <p className='item-varient mb-2 text-xs leading-[18px] overflow-hidden h-auto text-right block'>
                                                                    <span>{property.name}</span>: <span>{property.values}</span>
                                                                </p>
                                                            ))} */}
                                                        </td>
                                                        <td className='item-price w-[50%] float-right clear-right md:clear-none md:float-none md:w-auto [&>span]:font-dana-fanum'>
                                                            <span className='h-full block visible text-sm mb-2 md:hidden md:invisible'>قیمت: </span>
                                                            {item.hasDiscount ?
                                                                <>
                                                                    <span className='price__percent py-0 px-[5px] pt-1 ml-[5px] mb-[7px] h-[20px] inline-block text-primary bg-blue-100 text-xs rounded dir-ltr '>
                                                                        {calcDiscount(
                                                                            item.price,
                                                                            item.discountPrice,
                                                                            1,
                                                                        )}{" "}
                                                                        %
                                                                    </span>
                                                                    <span className='price__old pt-0.5 text-sm font-normal text-gray-400 line-through'>
                                                                        {seperatNumber(item.price)}
                                                                    </span>
                                                                    <br />
                                                                    <span className='price__main text-base inline-block ml-[5px]'>
                                                                        {seperatNumber(item.discountPrice)}
                                                                    </span>
                                                                </>
                                                                :
                                                                <span className='price__main text-base inline-block ml-[5px]'>
                                                                    {seperatNumber(item.price)}
                                                                </span>
                                                            }
                                                            <span className='price__curency text-xs'>
                                                                تومان
                                                            </span>
                                                        </td>
                                                        <td className='item-count w-[45%] float-right md:float-none md:w-auto [&>span]:font-dana-fanum'>
                                                            <span className='h-full block visible text-sm mb-2 md:hidden md:invisible'>تعداد: </span>
                                                            <div className='h-8 leading-8 w-[100px] mb-[10px] md:m-0 md:float-right'>
                                                                
                                                                <ChangeQuantity />
                                                            </div>
                                                            <span className='leading-8 float-right text-sm mr-0 cursor-pointer md:mr-[20px]'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 inline-block ml-1">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>

                                                                حذف
                                                            </span>
                                                        </td>
                                                        <td className='item-sum py-[10px] block clear-both md:table-cell [&>span]:font-dana-fanum'>
                                                            <span className='h-full inline visible text-sm mb-2 ml-2 md:hidden md:invisible'>مجموع: </span>
                                                            <span className='price__main text-base inline-block ml-[5px]'>
                                                                {item.hasDiscount ?
                                                                    seperatNumber(item.discountPrice * item.quantity)
                                                                    :
                                                                    seperatNumber(item.price * item.quantity)
                                                                }
                                                            </span>
                                                            <span className='price__curency text-xs'>
                                                                تومان
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3 p-0 -mx-[15px] md:m-0 lg:px-[15px]'>
                            <div className='side_inner'>
                                <div className='box mb-5 md:rounded bg-white shadow-sm'>
                                    <div
                                        className='body
                                        p-[15px] md:p-6 
                                        [&>div]:flex [&>div]:flex-wrap [&>div]:-mx-[15px] [&>div]:mb-4 [&>div]:text-sm [&>div]:font-normal [&>div]:leading-6
                                        [&>div>div]:flex-grow-0 [&>div>div]:shrink-0 [&>div>div]:basis-1/2 [&>div>div]:max-w-[50%] [&>div>div]:px-[15px] [&>div>div]:text-gray-500 [&>div>div]:font-dana-fanum                        
                                    '>
                                        <div className=''>
                                            <div className=''>
                                                <span className=''>قیمت کالاها ({items.length})</span>
                                            </div>
                                            <div className='text-right'>
                                                {seperatNumber(totalPrice)} تومان
                                            </div>
                                        </div>
                                        {totalDiscount && totalDiscount > 0 ?
                                            <div>
                                                <div>تخفیف ها</div>
                                                <div className='!text-primary'>
                                                    ({calcDiscount(
                                                        totalPrice,
                                                        state.total,
                                                        1,
                                                    )*(-1)}{" "}%)
                                                    {" "}
                                                    {seperatNumber(totalDiscount)}{" "} تومان
                                                </div>
                                            </div>  
                                            :
                                        ''    
                                        }
                                        <hr className='my-4 md:hidden md:invisible block visible' />
                                        <div>
                                            <div>مبلغ قابل پرداخت</div>
                                            <div>
                                                {seperatNumber(state.total)}{" "} تومان
                                            </div>
                                        </div>  
                                        <hr className='my-4 hidden invisible md:block md:visible' />
                                        <button className="hidden invisible md:block md:visible w-full btn btn-primary btn-lg btn-block !rounded shadow-[0_3px_5px_0_rgba(0,137,255,.32)]">
                                            ادامه فرآیند خرید
                                        </button>
                                        <div
                                            className='flex justify-between fixed bottom-0 left-0 w-full !m-0 p-4 overflow-hidden bg-white shadow-[0_-1px_0_0_#e6e6e6] z-[1001] md:hidden md:invisible'
                                        >
                                            <button className="w-auto min-w-auto py-0 px-6 btn btn-primary btn-lg btn-block !rounded shadow-[0_3px_5px_0_rgba(0,137,255,.32)]">
                                                ادامه فرآیند خرید
                                            </button>
                                            <div className='!p-0 w-full text-left [&>span]:leading-6 [&>span]:block [&>span]:text-left [&>span]:text-xs  [&>span]:first:text-gray-300'>
                                                <span>مبلغ قابل پرداخت</span>
                                                <span>
                                                    {seperatNumber(state.total)}{" "} تومان
                                                </span>
</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='md:col-span-12 px-[15px]'>
                        <div className='cart__box'>
                            <div className='cart__box--header'>
                                <BoxTitleBar title={'سبد خرید'} icon={true} type={'box'} />
                            </div>
                            <div className='cart__box--body'>
                                <div className='text-center mb-10'>
                                    <span className="content-[''] bg-emptyCart bg-no-repeat bg-contain relative p-20 h-44 w-40 block my-7 mx-auto"></span>
                                    <span className='inline-block mb-6 leading-6 text-base text-gray-400'>
                                        سبد خرید شما خالیست !
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShoppingCart