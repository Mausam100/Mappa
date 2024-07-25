import React from "react";

import OblivionTrailer from "../assets/videos/oblivion-battery-trailer.mp4";
import BucchigiriTrailer from "../assets/videos/bucchigiri-trailer.mp4";
import AOTTrailer from "../assets/videos/attack-on-titan-s4p4-trailer.mp4";
import JJKTrailer from "../assets/videos/jujutsu-kaisen-trailer.mp4";
import ChainsawTrailer from "../assets/videos/chainsawman-rezearc-trailer.mp4";


import { motion, useScroll, useTransform } from "framer-motion";



const Hero = () => {
  const videos = [
    OblivionTrailer,
    JJKTrailer,
    AOTTrailer,
    BucchigiriTrailer,
    ChainsawTrailer,
    // MaboroshiTrailer,
  ];
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <>
    
    <section className="main text-white bg-black md:pb-10">
    
      <motion.div
        initial={{ x: -2000 }}
        
        animate={{ x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          type: "spring",
          stiffness: 50,
          delay: 1.5,
        }}
        id="home"
        className="h-full w-full relative overflow-hidden"
      >
    
          <motion.div 
          style={{
            scale: scale,
           
          }}
          className=" flex gap-10 items-center justify-center rounded-md w-full ">
            {videos.map((vedio, index) => (
              
                <video
                  className="w-[60vw] transform transition-transform duration-300 rounded-md object-contain"
                  src={vedio}
                  autoPlay
                  muted
                  loop
                ></video>
            ))}
          </motion.div>

        <section className=" hidden absolute z-40 top-6 items-center w-full h-[100vh] pl-16 md:flex">
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
              TV ANIMATION : APRIL 2024
            </h3>
          </div>
        </section>
        <footer className="flex w-full h-[40vh] px-6 items-center justify-between">
          <div className="flex items-center gap-4 rounded-xl bg-[#c4c3c339] py-2 px-4">
            <h3 className="text-center font-medium text-lg">RECRUITING</h3>
            <button className="bg-[#006837b7] py-2 px-5 font-thin rounded-xl">
              APPLY NOW
            </button>
          </div>
        </footer>
        
      </motion.div>
    </section>
    

    </>
  );
};

export default Hero;
