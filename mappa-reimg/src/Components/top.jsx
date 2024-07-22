import React from "react";
import AOTTrailer from "../assets/videos/attack-on-titan-s4p4-trailer.mp4";

function Top() {
  return (
    <section className="w-full h-fit  bg-black relative">
      <div className="text-center relative h-fit p-12">
        <h1 className="text-9xl text-shadow-stroke text-transparent ibm-normal uppercase relative z-10">
          Top Works
        </h1>
        <p className="text-2xl text-white ibm-normal relative z-20 -mt-14">
          OUR TOP-WORKS WHICH EVERY ANIME-LOVER HAS SEEN <br />
          AND HAS PRODUCED GREAT PROFITS FOR US AND OUR PARTNERS
        </p>
      </div>
      <video
        className="h-full w-full duration-300 rounded-md object-cover"
        src={AOTTrailer}
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
}

export default Top;
