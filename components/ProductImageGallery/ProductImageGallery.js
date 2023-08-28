"use client";

import React, { useRef, useState } from 'react';

import Image from "next/image";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'swiper/css/thumbs';


const ProductImageGallery = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <div>
          <Swiper
              pagination
              loop
              modules={[Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
          >
              {images.map((image) => (
                  <SwiperSlide>
                          <Image src={image} width={800} height={800} />
                  </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="mySwiper !hidden invisible md:!block md:visible"
          >
              {images.map((image) => (
                  <SwiperSlide>
                      <Image src={image} width={800} height={800} />
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default ProductImageGallery