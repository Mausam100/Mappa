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
// import cards
import Cards from './WorkImg'
import Overlayer from "./Overlayer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Keyboard } from "swiper/modules";

const Work = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <section className="w-full h-full bg-black text-white p-6 ">
        {showOverlay && (
          <div
            onClick={toggleOverlay}
          >
            <Overlayer />
          </div>
        )}
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
          <SwiperSlide onClick={toggleOverlay} className=" cursor-pointer">
          
            <Cards img={Card1} title={"OBLIVION BATTERY"} top={true} />
            
          </SwiperSlide>
          <SwiperSlide onClick={toggleOverlay} className=" cursor-pointer">
          
            <Cards img={Card2} title={"attack on titan"} top={false} />
            
          </SwiperSlide>
          <SwiperSlide onClick={toggleOverlay} className=" cursor-pointer">
          
            <Cards img={Card3} title={"Jujutsu Kaisen"} top={true} />
            
          </SwiperSlide>
          <SwiperSlide onClick={toggleOverlay} className=" cursor-pointer">
          
            <Cards img={Card4} title={"Maboroshi"} top={false} />
            
          </SwiperSlide>
          <SwiperSlide onClick={toggleOverlay} className=" cursor-pointer">
          
            <Cards img={Card5} title={"Chainsaw Man"} top={true} />
            
          </SwiperSlide>
          
          <SwiperSlide className=" cursor-pointer">
            <div className="flex items-center justify-center">
            <div className=" flex items-center gap-3">
                <h1 className=" font-semibold text-lg uppercase">
                  Explore All
                </h1>{" "}
                <img src={Arrow} alt="" className=" w-10" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <img src={Scroll} alt="" className=" p-6 w-28" />
      </section>
    </>
  );
};

export default Work;

