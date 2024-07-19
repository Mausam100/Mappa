import React from "react";
import { CgMenuOreos } from "react-icons/cg";
import { RiInboxArchiveLine } from "react-icons/ri";

function Updates() {
  return (
    <>
      <section
        id="updates"
        className="relative maven flex items-center justify-center w-full h-full bg-black text-white"
      >
        <div className="w-2/3 h-full flex flex-col items-center">
          <div
            id="updates_title"
            className="bg-[#e6e6e6] text-black w-full h-16 rounded-t-md flex flex-row justify-between items-center px-5 text-xl maven"
          >
            <h3 className="uppercase">updates</h3>
            <CgMenuOreos className="rotate-90" />
          </div>
          <div className="flex flex-col">
            <div className="px-5 text-md 2-full h-fit py-2 flex flex-row justify-between gap-20 items-center">
              <span className="flex flex-col md:flex-row gap-10">
                <span id="updates_date" className="uppercase">
                  {}11/11/11
                </span>
                <span id="updates_title">
                  {}helleo this is some description of the news updates this
                  will be replaced by map function
                </span>
              </span>
              <span id="updates_catagory" className="uppercase">
                {}corporate
              </span>
            </div>
          </div>
          <div
            id="archives"
            className="bg-[#e6e6e6] self-end text-black flex text-nowrap flex-row px-6 py-1 rounded-full items-center justify-between gap-5"
          >
            <h3 className="lowercase">archives</h3>
            <RiInboxArchiveLine />
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
