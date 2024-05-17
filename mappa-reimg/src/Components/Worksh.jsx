import React, { useRef, useState } from "react";
import GroupText from "../assets/Group.svg";
import Line from "../assets/Line7.png";

import Card1 from "../assets/card5.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card1.png";
import Card4 from "../assets/card3.png";
import Card5 from "../assets/card4.png";
import Arrow from "../assets/rightArrow.png";
import Scroll from "../assets/scroll.png";
import Work_img from "./WorkImg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Keyboard } from "swiper/modules";

const Work = () => {
  return (
    <>
      <section className="w-full h-full bg-black text-white p-6 ">
        <div className="main flex relative">
          <div className="">
            <img src={GroupText} alt="" srcset="" className=" w-28" />
            <img
              src={Line}
              className=" hidden lg:block absolute left-14 top-14 h-32 "
            />
          </div>

          <h1 className="heading text-4xl border-b-2 mb-10 ml-6 pb-1 flex items-end ">
            NEW WORKS
          </h1>
        </div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          keyboard={true}
          modules={[Keyboard]}
          className="mySwiper -mt-6 ml-36 "
        >
          <SwiperSlide className=" cursor-pointer">
            <Work_img img_src={Card1} img_title={"OBLIVION BATTERY"} top={true}/>
          </SwiperSlide>
          <SwiperSlide className="   cursor-pointer">
            <Work_img img_src={Card2} img_title={"OBLIVION "} top={false} />
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <Work_img img_src={Card3} img_title={"OBLIVION "} top={true} />
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <Work_img img_src={Card4} img_title={"OBLIVION "} top={false} />
          </SwiperSlide>
        </Swiper>

        <img src={Scroll} alt="" className=" p-6 w-28" />
      </section>
    </>
  );
};

export default Work;
