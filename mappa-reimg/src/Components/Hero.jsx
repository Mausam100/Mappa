import React from "react";
import Logo from "../assets/logo.png";
import Vedio from "../assets/bcvedio.mp4";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { BsChevronCompactDown } from "react-icons/bs";

const Hero = () => {
  return (
    <main className=" h-[100vh] text-white ">
      {/* <video
        className=" fixed -z-10 w-[100vw] h-[100vh] object-fill"
        autoPlay
        muted
        loop
      >
        <source src={Vedio} />
      </video> */}
      <section className="hero items-center bg-blue-00 w-full h-[70vh] pl-6 flex">
        <div className="  text-3xl mt-24">
          <FaXTwitter />
          <RiYoutubeLine className="mt-2" />
        </div>
        <div className=" bg-[#006837b7] w-60 h-auto rounded-xl mt-16 ml-20 p-5">
          <h3 className=" text-end font-thin leading-tighter tracking-tighter">
            4月9日（火）深夜24時
            <br />
            よりテレ東系列にて放送開
            <br />
            始！
            <br />
            放送直後より Prime Video <br /> にて最速配信！
          </h3>
          <button className=" border-2 rounded-lg p-1 mt-6 ml-10">
            OBLIVION BATTERY
          </button>
          <h3 className="text-end leading-tighter tracking-tighter font-thin">
            {" "}
            TV ANIMATION : APRIL 2024
          </h3>
        </div>
      </section>
      <footer className="flex w-full h-[10vh] px-6 mt-6 items-center justify-between">
        <div className="scroll h-7 ">
          <div className="">
            <a href="" className="text-lg">
              SCROLL
              <BsChevronCompactDown className=" text-6xl" />
            </a>
          </div>
        </div>
        <div>
          <h3 className=" text-center font-medium text-lg">RECRUITING</h3>
          <button className="bg-[#006837b7] py-3 px-4 font-bold rounded-xl">
            APPLY NOW
          </button>
        </div>
      </footer>
    </main>
  );
};

export default Hero;
