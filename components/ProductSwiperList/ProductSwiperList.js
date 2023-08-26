"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "@/components/ProductItem/Product";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductSwiperList.css";
import Link from "next/link";

const ProductSwiperList = ({ products, title, url }) => {
  return (
    <section className="widget clear-both text-justify mb-[10px] md:rounded-sm md:bg-white md:mb-8 md:shadow-[0_1px_2px_0_rgba(0,0,0,.15)]">
      <div
        className="
          widget__header relative h-6 pr-8 mb-[10px]
          md:h-20 md:mb-0 md:pt-8 md:pr-16 md:pl-8 md:leading-6 "
      >
        <span
          className="
            h1 w-auto text-sm leading-6 float-right
            md:text-lg md:leading-7 font-semibold"
        >
          {title}
        </span>
        <span className="w-auto m-0 float-left leading-6 text-xs text-primary text-left md:text-base md:leading-[26px]">
          <Link className="text-primary" href={url}>
            مشاهده همه
          </Link>
        </span>
      </div>
      <div>
        <div className="swiper-products mt-5">
          {products.length > 0 && (
            <Swiper
              slidesPerView={1.5}
              spaceBetween={12}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 12,
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
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div
                    className="product-slide price_on"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <ProductItem product={product} slider={true} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSwiperList;

{
  /*

*/
}
