import React, {useRef} from "react";
import Vedio from "../assets/bcvedio.mp4";
import Vedio2 from "../assets/2nd.mp4";
import Vedio3 from "../assets/3rd.mp4";
import Scroll from "../assets/scroll.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'



const Hero = () => {
  const videos = [Vedio2, Vedio, Vedio3];

  gsap.registerPlugin(ScrollTrigger);
   const tl = useRef()

   useGSAP(()=>{
    gsap.to(tl.current,{ 
     scaleX:3,
     scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 2,

     }
    })
  })

  return (
    <>
      <main className="h-[100vh] text-white bg-black relative overflow-hidden">
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
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={index}
                
                className="swiperSlide flex justify-center items-center"
              >
                

                <video
                  className="w-full h-full transform transition-transform duration-300"
                  src={video}
                  
                  autoPlay
                  loop
                  muted
                ></video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <section className=" absolute z-40 top-8 items-center w-full h-[100vh] pl-6 flex">
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

        <footer className="flex w-full h-[10vh] px-6 mt-6 items-center justify-between z-50">
          <div className="scroll h-7">
            <img src={Scroll} alt="" className=" w-16" />
          </div>
          <div className=" flex items-center gap-4 rounded-xl bg-[#c4c3c339] py-2 px-4">
            <h3 className="text-center font-medium text-lg ">RECRUITING</h3>
            <button className="bg-[#006837b7] py-2 px-5 font-thin rounded-xl">
              APPLY NOW
            </button>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Hero;
