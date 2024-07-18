import React, { useState } from "react";
import GroupText from "../assets/images/icons/Group.svg";
import Arrow from "../assets/images/icons/rightArrow.png";
import Scroll from "../assets/images/icons/Scroll.png";
import Cards from "./Card";
import Overlayer from "./Overlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Scrollbar } from "swiper/modules";
import cardData from "/src/constant/CardDetails.js";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Work = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleOverlay = (card) => {
    setSelectedCard(card);
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <Element name="section2" className=" w-full h-full text-white">
        <section
          id="work"
          className="relative maven w-full h-full flex-col items-center justify-center bg-black text-white rounded-t-3xl"
        >
          {showOverlay && (
            <Overlayer
              card={selectedCard}
              toggleOverlay={() => toggleOverlay(null)}
            />
          )}
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            keyboard={true}
            modules={[Keyboard]}
            className="mySwiper mx-24 pt-24 overflow-x-hidden rounded-md relative"
          >
            <h1 className="text-white text-[8vw] absolute top-16 left-0 z-50">NEW WORKS</h1>
            {cardData.map((card, index) => (
              <SwiperSlide
                key={index}
                onClick={() => toggleOverlay(card)}
                className="cursor-pointer"
              >
                <Cards
                  img={card.image}
                  title={card.title}
                  top={index % 2 === 0}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide className=" h-[70vh] w-[25vw] cursor-pointer flex items-center justify-center hover:border-2 border-[#006837] rounded-md">
              <div className="">
                <div className="flex gap-3">
                  <h1 className="font-semibold text-lg uppercase">
                    Explore All
                  </h1>
                  <img src={Arrow} alt="" className=" w-6" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <img src={Scroll} alt="" className="p-6 w-28" />
        </section>
      </Element>
    </>
  );
};

export default Work;
