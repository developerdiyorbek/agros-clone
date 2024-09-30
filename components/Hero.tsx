"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

function Hero() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full h-[600px] object-cover"
            loading="lazy" // Lazy load image
            alt="Nature 1" // Adding alt for accessibility
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-full h-[600px] object-cover"
            loading="lazy" // Lazy load image
            alt="Nature 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full h-[600px] object-cover"
            loading="lazy" // Lazy load image
            alt="Nature 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full h-[600px] object-cover"
            loading="lazy" // Lazy load image
            alt="Nature 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
