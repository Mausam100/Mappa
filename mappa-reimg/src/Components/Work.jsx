import React, { useState, useRef, useEffect } from "react";
import GroupText from "../assets/images/icons/Group.svg";
import Scroll from "../assets/images/icons/Scroll.png";
import Cards from "./Card";
import Overlayer from "./Overlayer";
import cardData from "/src/constant/CardDetails.js";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import MouseFollower from "./MouseFollower";

const Work = () => {
 
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const sliderRef = useRef(null);

  const toggleOverlay = (card) => {
    setSelectedCard(card);
    setShowOverlay(!showOverlay);
  };

  const scrollToSlide = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.querySelector(".slide").offsetWidth;
    const scrollAmount = direction === "left" ? -slideWidth : slideWidth;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      scrollToSlide("right");
    } else {
      scrollToSlide("left");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      scrollToSlide("left");
    } else if (e.key === "ArrowRight") {
      scrollToSlide("right");
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* <Element name="section2" className="w-full h-full text-white">
        < MouseFollower/>
        <section
          id="work"
          className="relative w-full h-full flex-col items-center justify-center bg-black text-white rounded-t-3xl"
        >
          {showOverlay && (
            <Overlayer
              card={selectedCard}
              toggleOverlay={() => toggleOverlay(null)}
            />
          )}
          <div className="relative mx-24 pt-20 overflow-hidden rounded-md">
            <div
              className="w-full overflow-y-hidden overflow-x-scroll scrollbarnone flex"
              ref={sliderRef}
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() => toggleOverlay(card)}
                  className="flex-none w-3/12 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Cards
                   
                    img={card.image}
                   
                    title={card.title}
                   
                    top={index % 2 === 0}
                 
                  />
                </motion.div>
              ))}
              <motion.div
                className="flex-none w-[25%] p-4 h-[70vh] cursor-pointer flex items-center justify-center hover:border-2 border-[#006837] rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-semibold text-lg uppercase">
                      
                      Explore All
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <img src={Scroll} alt="" className="p-6 w-28" />
        </section>
      </Element> */}

      <Element name="section2" className="w-full h-full text-white">
        <section
          id="work"
          className="relative w-full h-full flex-col items-center justify-center bg-black text-white rounded-t-3xl"
        >
          {showOverlay && (
            <Overlayer
              card={selectedCard}
              toggleOverlay={() => toggleOverlay(null)}
            />
          )}
          <div className="relative mx-4 pt-20 overflow-hidden rounded-md">
            <div
              className="w-full overflow-x-scroll scrollbarnone flex"
              ref={sliderRef}
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() => toggleOverlay(card)}
                  className="flex-none w-full md:w-3/12 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ scrollSnapAlign: "start", minWidth: "320px" }}
                >
                  <Cards
                    img={card.image}
                    title={card.title}
                    top={index % 2 === 0}
                  />
                </motion.div>
              ))}
              <motion.div
                className="flex-none w-full md:w-3/12 p-4 h-[70vh] cursor-pointer flex items-center justify-center hover:border-2 border-[#006837] rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ minWidth: "320px", scrollSnapAlign: "start" }}
              >
                <div>
                  <div className="flex gap-3">
                    <h1 className="font-semibold text-lg uppercase">
                      Explore All
                    
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <img src={Scroll} alt="" className="p-6 w-28" />
        </section>
      </Element>
    </>
  );
};

export default Work;
