import Link from "next/link";
import Image from "next/image";
import {calcDiscount, seperatNumber} from "@/utils/Utilities";

import './Product.css'

const ProductItem = ({product}) => {
    return (
        <div className='
        min-w-[270px] relative bg-white m-0 mb-2 mr-4 p-4 text-right rounded-md border-0 transition-all duration-[0.3s] shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
        md:p-6 md:!pt-[30px] md:border-[1px] md:border-transparent md:shadow-none
        hover:md:border-gray-300 hover:md:shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]
        '>
            <ul
                className='
                mb-2 [&>li]:text-white
                md:absolute md:top-7 md:left-auto md:right-6 md:w-full md:m-0
            '>
                <li
                    className="
                        badge-special bg-right py-1 px-[6px] bg-badge bg-no-repeat bg-contain w-[95px]
                        after:leading-3 after:text-right after:text-sm after:content-[var(--special-text)]
                    "></li>
                <li></li>
            </ul>
            <div className='flex items-start justify-start md:flex-col md:justify-between'>
                <Link
                    className='basis-[70%] w-[50%] md:w-full md:basis-auto md:max-h-[275px] md:min-h-[275px]'
                    href={`/product/${product._id}`}>
                    <Image
                        src={product.images?.[0]}
                        alt={product.title}
                        width={400} height={300}
                        className='!h-[unset] max-h-[inherit] w-auto'
                    />
                </Link>
                <Link
                    className='h2 md:basis-auto md:w-full md:h-[67px] md:py-2 md:m-0 md:mt-6 md:text-sm md:text-gray-500 md:leading-5 md:block'
                    href={`/product/${product._id}`}>
                    {product.title}
                </Link>
            </div>

            <div className='flex items-end justify-between h-[55px] mt-[10px] md:flex-row-reverse'>
                <div className='pt-[3px] flex items-center gap-1 md:flex-row-reverse'>
                    <span className='-top-[2px] relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" fill="currentColor" className="w-4 h-4 text-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                        </svg>
                    </span>

                    <span className='text-xs leading-4 text-gray-400'>3.4</span>
                    <span className='text-xs leading-4 text-gray-400'>(386)</span>
                </div>
                <div className=''>
                    <span className='m-0 mb-1 block'>
                        <span className='text-right block'>
                            <span
                                className='w-[35px] h-[20px] ml-[6px] rounded-[4px] bg-blue-500 bg-opacity-[0.1] text-xs font-bold font-dana-fanum leading-4 whitespace-normal text-center text-primary inline-block pt-1'>
                                {calcDiscount(product.price, product.price * 1.8, 1)}%
                            </span>
                            <span
                                className='text-sm font-dana-fanum font-normal leading-4 text-right text-gray-400 line-through'>
                                {seperatNumber(product.price * 1.8)}
                            </span>
                        </span>
                    </span>
                    <span>
                        <span
                            className='mt-[5px] ml-1 text-[18px] text-right text-gray-500 font-dana-fanum font-bold leading-6'>
                            {seperatNumber(product.price)}
                        </span>
                        <span className='m-1 ml-0 text-sm text-right text-gray-500 font-normal leading-4'>
                            تومان
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem


