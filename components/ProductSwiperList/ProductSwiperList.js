'use client'
import {Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from "@/components/ProductItem/Product";

import 'swiper/css';
import 'swiper/css/navigation';

import './ProductSwiperList.css'

const ProductSwiperList = ({products}) => {
    return (
        <div className='swiper-products mt-5'>
            {products.length > 0 && (
            <Swiper
                slidesPerView={1.5}
                spaceBetween={0}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3.5,
                    },
                    1200: {
                        slidesPerView: 4.5,
                    },
                    1400: {
                        slidesPerView: 5.5,
                    },
                }}
                rewind={true}
                navigation
                modules={[Navigation]}
            >
                {products.map(product => (
                    <SwiperSlide key={product._id}>
                        <div className="product-slide price_on" style={{ width: "100%", display: "inline-block" }}>
                            <ProductItem product={product} slider={true} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            )}
        </div>
    )
}

export default ProductSwiperList


