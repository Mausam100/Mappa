import React, { useRef } from "react";
import OblivionTrailer from "../assets/videos/oblivion-battery-trailer.mp4";
import BucchigiriTrailer from "../assets/videos/bucchigiri-trailer.mp4";
import MaboroshiTrailer from "../assets/videos/maboroshi-trailer.mp4";
import AOTTrailer from "../assets/videos/attack-on-titan-s4p4-trailer.mp4";
import JJKTrailer from "../assets/videos/jujutsu-kaisen-trailer.mp4";
import ChainsawTrailer from "../assets/videos/chainsawman-rezearc-trailer.mp4";

import Scroll from "../assets/scroll.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const Hero = () => {
  const videos = [
    OblivionTrailer,
    BucchigiriTrailer,
    MaboroshiTrailer,
    AOTTrailer,
    JJKTrailer,
    ChainsawTrailer,
  ];

  gsap.registerPlugin(ScrollTrigger);
  const tl = useRef();
  const hide = useRef();

  useGSAP(() => {
    gsap.to(hide.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top -30%",
        end: "top 40%",
        scrub: true,
        pin: true,
      },
    });
  });

  useGSAP(() => {
    gsap.to(tl.current, {
      scaleX: 1.9,
      scaleY: 1.9,

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div className="text-white bg-black">
        <motion.main
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeIn",
            duration: 1.5,
            type: "spring",
            stiffness: 50,
            delay: 1.5,
          }}
          id="home"
          className="h-full w-full relative overflow-hidden"
        >
          <div>
            <Swiper
              ref={tl}
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              speed={2000}
              slidesPerView={1.6}
              centeredSlides={true}
              spaceBetween={30}
              slideToClickedSlide={true}
              grabCursor={true}
              className=" h-[80vh]"
            >
              {videos.map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="swiperSlide flex justify-center items-center"
                >
                  <video
                    className="w-full h-full transform transition-transform duration-300 rounded-md object-contain"
                    src={video}
                    autoPlay
                    loop
                    muted
                  ></video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <section
            ref={hide}
            className=" absolute z-40 top-6 items-center w-full h-[100vh] pl-16 flex"
          >
            <div className="bg-[#006837b7] w-60 h-auto rounded-xl mt-16 ml-20 p-5">
              <h3 className="text-end font-thin leading-tighter tracking-tighter">
                4月9日（火）深夜24時
                <br />
                よりテレ東系列にて放送開
                <br />
                始！
                <br />
                放送直後より Prime Video <br /> にて最速配信！
              </h3>
              <button className="border-2 rounded-lg p-1 mt-6 ml-10">
                OBLIVION BATTERY
              </button>
              <h3 className="text-end leading-tighter tracking-tighter font-thin">
                {" "}
                TV ANIMATION : APRIL 2024
              </h3>
            </div>
          </section>

          <footer
            ref={hide}
            className="flex w-full h-[40vh] px-6 mt-6 items-center justify-between z-50"
          >
            <div className="scroll h-7">
              <img src={Scroll} alt="" className=" w-16" />
            </div>
            <div className=" flex items-center gap-4 rounded-xl bg-[#c4c3c339] py-2 px-4 z-50">
              <h3 className="text-center font-medium text-lg">RECRUITING</h3>
              <button className="bg-[#006837b7] py-2 px-5 font-thin rounded-xl">
                APPLY NOW
              </button>
            </div>
          </footer>
        </motion.main>
      </div>
    </>
  );
};

export default Hero;
