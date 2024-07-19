// import React, { useState } from "react";
// import GroupText from "../assets/images/icons/Group.svg";
// import Arrow from "../assets/images/icons/rightArrow.png";
// import Scroll from "../assets/images/icons/Scroll.png";
// import Cards from "./Card";
// import Overlayer from "./Overlayer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Keyboard, Scrollbar } from "swiper/modules";
// import cardData from "/src/constant/CardDetails.js";
// import { motion } from "framer-motion";
// import { Element } from "react-scroll";

// const Work = () => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const toggleOverlay = (card) => {
//     setSelectedCard(card);
//     setShowOverlay(!showOverlay);
//   };

//   return (
//     <>
//       <Element name="section2" className=" w-full h-full text-white">
//         <section
//           id="work"
//           className="relative maven w-full h-full flex-col items-center justify-center bg-black text-white rounded-t-3xl"
//         >
//           {showOverlay && (
//             <Overlayer
//               card={selectedCard}
//               toggleOverlay={() => toggleOverlay(null)}
//             />
//           )}
//           <Swiper
//             slidesPerView={3.5}
//             spaceBetween={30}
//             keyboard={true}
//             modules={[Keyboard]}
//             className="mySwiper mx-24 pt-24 overflow-x-hidden rounded-md relative"
//           >
//             <h1 className="text-white text-[8vw] absolute top-16 left-0 -z-50">NEW WORKS</h1>
//             {cardData.map((card, index) => (
//               <SwiperSlide
//                 key={index}
//                 onClick={() => toggleOverlay(card)}
//                 className="cursor-pointer z-50"
//               >
//                 <Cards
//                   img={card.image}
//                   title={card.title}
//                   top={index % 2 === 0}
//                 />
//               </SwiperSlide>
//             ))}
//             <SwiperSlide className=" h-[70vh] w-[25vw] cursor-pointer flex items-center justify-center hover:border-2 border-[#006837] rounded-md">
//               <div className="">
//                 <div className="flex gap-3">
//                   <h1 className="font-semibold text-lg uppercase">
//                     Explore All
//                   </h1>
//                   <img src={Arrow} alt="" className=" w-6" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>

//           <img src={Scroll} alt="" className="p-6 w-28" />
//         </section>
//       </Element>
//     </>
//   );
// };

// export default Work;

import React, { useState, useRef, useEffect } from "react";
import GroupText from "../assets/images/icons/Group.svg";
import Scroll from "../assets/images/icons/Scroll.png";
import Arrow from "../assets/images/icons/rightArrow.png";
import Cards from "./Card";
import Overlayer from "./Overlayer";
import cardData from "/src/constant/CardDetails.js";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Work = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const toggleOverlay = (card) => {
    setSelectedCard(card);
    setShowOverlay(!showOverlay);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);
    slider.addEventListener("touchmove", handleTouchMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <>
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
          <div className="relative mx-24 pt-24 overflow-hidden rounded-md">
            <h1 className="text-white text-[8vw] absolute top-16 left-0 -z-50">
              NEW WORKS
            </h1>
            <div
              className="w-full overflow-hidden flex"
              ref={sliderRef}
              style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() => toggleOverlay(card)}
                  className="flex-none w-[25%] p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Cards img={card.image} title={card.title} top={index % 2 === 0} />
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
                    <h1 className="font-semibold text-lg uppercase">Explore All</h1>
                    <img src={Arrow} alt="" className="w-6" />
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
