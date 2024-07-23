import React from "react";
import CanvasAnim from "../Components/CanvasAnim";
import AOTTrailer from "../assets/videos/attack-on-titan-s4p4-trailer.mp4";

function Top() {
  const scrollHeight = 10000; // Example scroll height
  const numFrames = 50; // Number of frames in the animation
  const width = 1920; // Width of the canvas
  const height = 1080; // Height of the canvas

  return (
    <section className="w-full   bg-black relative">
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
        className="h-[100vh] w-full duration-300 rounded-md object-fit"
        src={AOTTrailer}
        autoPlay
        muted
        loop
      ></video>

      <div>
        <ImageCanvas
          scrollHeight={scrollHeight}
          numFrames={numFrames}
          width={width}
          height={height}
        />
      </div>
    </section>
  );
}

export default Top;
