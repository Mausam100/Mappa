import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProfileVision = () => {
  return (
    <div className=" w-full h-full relative rounded-t-3xl pt-8 pb-32 maven flex flex-col md:flex-row gap-5 bg-[#e6e6e6] text-black">
      <div className="text-black p-10 w-full md:w-2/3 flex flex-col">
        <h2 className="text-lg ibm-normal">|PROFILE</h2>
        <p className="mt-4 w-full md:w-2/3 jap text-2xl font-light">
          テレビアニメを中心に、映画、CM、Webムービー等、ジャンルにとらわれない様々な映像作品の企画・制作を行っています。また、自社で権利を保有するIPの窓口権を運用し、国内外でのライツ事業も展開しています。
        </p>
        <div className="mt-8 self-center w-fit flex gap-2 flex-row justify-start items-center bg-black text-[#e6e6e6] px-6 py-2 rounded-full">
          <button className="flex text-2xl gap-1 group items-center">
            company
            <IoIosArrowRoundForward className=" text-3xl transition-transform duration-300 group-hover:-rotate-45" />
          </button>
        </div>
      </div>

      <div className="p-10 flex flex-col w-full md:w-1/3">
        <h2 className="text-lg bg-black text-[#e6e6e6] pl-5 flex items-center h-12 ibm-normal rounded-md">
          |VISION
        </h2>
        <h3 className="text-xl font-bold text-left mt-6 pl-5 jap">
          いつまでも心に残るアニメを届けたい
        </h3>
        <p className="mt-4 text-md jap font-light pl-5 w-full">
          私たちが何よりも大切にしたいのは、作品を楽しみにしてくださっているファンの皆様のことです。泣いたり笑ったり、心を震わせたり……。画面の向こう側にいる一人ひとりの顔を思い浮かべながら、何度も観返したくなるような、「出会えてよかった」と思ってもらえるようなアニメを創りたいと考えています。
          <br />
          <br />{" "}
          型にとらわれず、様々なジャンルの作品や新たな表現技法にチャレンジしながら、
          “心に残るアニメを届けられるスタジオ”を目指します。
        </p>
      </div>
    </div>
  );
};

export default ProfileVision;
