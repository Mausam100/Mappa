import React from "react";
import Arrow from "../assets/rightArrow.png";

function Work_img(props) {
  return (
    <div className="">
      {props.top && (
        <div className=" flex items-baseline gap-3 ">
          <h1 className=" font-semibold text-lg uppercase">{props.title}</h1>{" "}
          <img src={Arrow} alt="" className=" w-10 " />
        </div>
      )}
      <img src={props.img} alt="" className=" h-[75vh] w-[25vw]" />

      
      {!props.top && (
        <div className=" flex items-top gap-3 ">
          <h1 className=" font-semibold text-lg uppercase">{props.title}</h1>{" "}
          <img src={Arrow} alt="" className=" w-10 pt-1 " />
        </div>
      )}
    </div>
  );
}

export default Work_img;
