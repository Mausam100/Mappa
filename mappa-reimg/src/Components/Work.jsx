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
          className="mySwiper -mt-6 ml-36"
        >
          <SwiperSlide className=" cursor-pointer">
            <div
             className=""
             >
              <div className=" flex items-baseline gap-3">
                <h1 className=" font-semibold text-lg">OBLIVION BATTERY</h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
              <img src={Card1} alt="" className=" h-[75vh] w-[25vw]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="   cursor-pointer">
            <div>
              <img src={Card2} alt="" className=" h-[75vh] w-[25vw]" />
              <div className=" flex items-top gap-3">
                <h1 className=" font-semibold text-lg uppercase">
                  Attack on Titan
                </h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <div>
              <div className=" flex items-baseline gap-3">
                <h1 className=" font-semibold text-lg uppercase">
                  Jujutsu Kaisen
                </h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
              <img src={Card3} alt="" className=" h-[75vh] w-[25vw]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <div>
              <img src={Card4} alt="" className=" h-[75vh] w-[25vw]" />
              <div className=" flex items-top gap-3">
                <h1 className=" font-semibold text-lg">MABOROSHI</h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <div>
              <div className=" flex items-baseline gap-3">
                <h1 className=" font-semibold text-lg uppercase">
                  ChainSaw man
                </h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
              <img src={Card5} alt="" className=" h-[75vh] w-[25vw]" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" cursor-pointer">
            <div className="flex">
              <h1 className=" items-center">Click to watch all</h1>
            </div>
          </SwiperSlide>
        </Swiper>

        <img src={Scroll} alt="" className=" p-6 w-28" />
      </section>
    </>
  );
};

export default Work;



