import React from "react";
import Arrow from "../assets/rightArrow.png";

function Card({title, img, top}) {
  return (
    <div className="">
      {top && (
        <div className=" flex items-baseline gap-3 ">
          <h1 className=" font-semibold text-lg uppercase">{title}</h1>{" "}
          <img src={Arrow} alt="" className=" w-10 " />
        </div>
      )}
      <img src={img} alt="" className=" h-[75vh] w-[25vw]" />

      
      {!top && (
        <div className=" flex items-top gap-3 ">
          <h1 className=" font-semibold text-lg uppercase">{title}</h1>{" "}
          <img src={Arrow} alt="" className=" w-10 pt-1 " />
        </div>
      )}
    </div>
  );
}

export default Card;
