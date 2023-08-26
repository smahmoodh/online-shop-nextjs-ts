"use client";
import { useState, useEffect, useRef } from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./Slideshow.css";

import slide1 from "@/public/assets/img/slideshow/slideshow1.jpg";
import slide2 from "@/public/assets/img/slideshow/slideshow2.jpg";
import slide3 from "@/public/assets/img/slideshow/slideshow3.jpg";
import slide4 from "@/public/assets/img/slideshow/slideshow4.jpg";

const Slideshow = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  //
  return (
    <Swiper
      dir="rtl"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      navigation
      pagination={{ dynamicBullets: true, clickable: true }}
      className="slideshow rounded"
    >
      <SwiperSlide>
        <Image src={slide1} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide2} alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide3} alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide4} alt="slide 4" />
      </SwiperSlide>
      {/**/}
      <div className="autoplay-progress" slot="container-end">
        <svg className="" viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Slideshow;
