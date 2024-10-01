"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import Image from "next/image";
import { heroInformation } from "@/constants";

function Hero() {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <Swiper
          spaceBetween={30}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectFade]}
          className="mySwiper"
        >
          {heroInformation.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="w-full min-h-[600px] bg-no-repeat bg-cover flex items-center"
                style={{
                  backgroundImage: `url('/bg${item.id}.jpg')`,
                }}
              >
                <div className="container mx-auto">
                  <h1 className="text-[#2A9E43] max-w-[600px] text-center mb-[10px] text-[28px] font-normal">
                    {item.title}
                  </h1>
                  <p className="max-w-[600px] w-full text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide
              key={item}
              className="relative min-h-[280px] sm:min-h-[340px] w-full"
            >
              <Image src={"/bgMobile.png"} fill alt="mobilebg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
