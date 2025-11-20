import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import amazon from "../src/assets/brands/amazon.png";
import amazon_vector from "../src/assets/brands/amazon_vector.png";
import casio from "../src/assets/brands/casio.png";
import moonstar from "../src/assets/brands/moonstar.png";
import randstad from "../src/assets/brands/randstad.png";
import star from "../src/assets/brands/star.png";
import start_people from "../src/assets/brands/start_people.png";

const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people
];

const Brands = () => {
  return (
    <div className="w-full py-6 bg-transparent overflow-hidden">

      <div>
        <h2 className="font-extrabold text-[32px] text-center">We've helped thousands of sales teams</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={false}
        allowTouchMove={false}
        slidesPerView={2}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        className="mySwiper flex items-center mt-5 lg:mt-10"
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brandLogos.concat(brandLogos).map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt="brand logo"
              className="w-24 h-auto opacity-80 hover:opacity-100 transition-all"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
