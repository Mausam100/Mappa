import React, { useState } from "react";
import GroupText from "../assets/Group.svg";
import Line from "../assets/Line7.png";
import Arrow from "../assets/rightArrow.png";
import Scroll from "../assets/scroll.png";
import Cards from "./Card";
import Overlayer from "./Overlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard } from "swiper/modules";
import cardData from "/src/constant/CardDetails.js"; 

const Work = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleOverlay = (card) => {
    setSelectedCard(card);
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <section id="work" className="w-full h-full bg-black text-white p-6">
        {showOverlay && (
          <Overlayer
            card={selectedCard}
            toggleOverlay={() => toggleOverlay(null)}
          />
        )}
        <div className="main flex relative">
          <div className="">
            <img src={GroupText} alt="" className="w-28" />
          </div>
          <h1 className="heading text-4xl border-b-2 mb-10 ml-6 pb-1 flex items-end">
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
          <SwiperSlide className="cursor-pointer flex items-center justify-center top-52">
            <div className="">
              <div className="flex items-center gap-3">
                <h1 className="font-semibold text-lg uppercase">Explore All</h1>
                <img src={Arrow} alt="" className=" w-5" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <img src={Scroll} alt="" className="p-6 w-28" />
      </section>
    </>
  );
};

export default Work;
