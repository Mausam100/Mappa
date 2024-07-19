import React from "react";
import Arrow from "../assets/images/icons/rightArrow.png";

function Card({title, img, top}) {
  return (
    <div className="">
      {top && (
        <div className=" flex items-baseline gap-3 ">
          <h1 className=" font-semibold text-sm text-nowrap uppercase">{title}</h1>
          <img src={Arrow} alt="" className=" w-10 " />
        </div>
      )}
      
      <img src={img} alt="" className="md:w-full md:h-auto" />

      
      {!top && (
        <div className=" flex items-top gap-3 ">
          <h1 className=" font-semibold text-sm text-nowrap uppercase">{title}</h1>
          <img src={Arrow} alt="" className=" w-10 pt-1 " />
        </div>
      )}
    </div>
  );
}

export default Card;
