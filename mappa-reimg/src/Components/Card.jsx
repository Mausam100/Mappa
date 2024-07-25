import React from "react";
import Arrow from "../assets/images/icons/rightArrow.png";
import MouseFollower from "./MouseFollower";

function Card({title, img, top}) {
  
  return (
    <div className="">
      
      {top && (
        <div className=" flex items-center gap-3  ">
          <h1 className=" font-semibold text-sm text-nowrap uppercase ibm-normal">{title}</h1>
          <img src={Arrow} alt="" className=" w-8 " />
        </div>
      )}
      
      <img src={img} alt="" className="md:w-full md:h-auto" />

      
      {!top && (
        <div className=" flex items-center gap-3 ">
          <h1 className=" font-semibold text-sm text-nowrap uppercase ibm-normal">{title}</h1>
          <img src={Arrow} alt="" className=" w-8 pt-1 " />
        </div>
      )}
    </div>
  );
}

export default Card;
