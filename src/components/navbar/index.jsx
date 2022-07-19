import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import img from "./bg.jpg";
import img2 from "./maldive.jpg";
import img3 from "./sma.jpg";

function Navbar() {
  return (
    <div className="relative">
      <div className="overlay"></div>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="asad" />
          <div className="content">
            <h1 className="text-[70px] text-white">Unique Turkey</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="asad" />
          <div className="content">
            <h1 className="text-[70px] text-white">Miraculous Beaches</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="asad" />
          <div className="content">
            <h1 className="text-[70px] text-white">City of Samarkand</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Navbar;
