import React from "react";
import "./bento.css";
import { AiOutlineShop } from "react-icons/ai";

function Bento() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center lg:flex-row px-20 py-28 relative maven w-screen h-full bg-black text-white">

        <div className="border-2 rounded-2xl border-gray-600 max-w-sm sm:max-w-md h-full p-6 relative maven flex flex-col gap-5 sm:gap-5 ">
        <h1 className="absolute text-9xl -top-[18%] left-[0%] text-shadow-stroke text-transparent">
          GOODS
        </h1>

          <div className="flex flex-col sm:flex-row justify-start gap-5 sm:gap-10 items-center h-full">
            <div className="top-left-content">
              <div className="text-gray-400 text-sm mb-2">CATEGORY</div>
              <h2 className="text-2xl font-bold mb-4">PACKAGE</h2>
              <h3 className="text-sm text-wrap font-bold mb-2">
                TITLE: CAMPFIRE COOKING IN ANOTHER WORLD WITH MY ABSURD SKILL
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                とんでもスキルで異世界放浪メシ Blu-ray 第1巻
              </p>
              <button className="bg-white text-black py-1 px-3 sm:py-2 sm:px-4 rounded-md mb-6">
                <span className="text-md sm:text-xs font-bold text-nowrap">
                  MAPPA ONLINE SHOP にて販売中
                </span>
              </button>
            </div>

            <div className="top-right-image flex justify-center items-center w-72 h-auto">
              <img
                src="/src/assets/images/products/campfire_cooking.png"
                alt="Anime Cover"
                className="rounded-md object-cover overflow-hidden w-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-center  rounded-md overflow-hidden">
            <p className="text-sm leading-relaxed">
              オーバーラップ原作、MAPPA制作のTVアニメ「とんでもスキルで異世界放浪メシ」のBlu-rayが発売決定！
              各巻4話収録の全3巻はそれぞれ、キャラクターデザイン・大津直の描き下ろしボックス＆ジャケットと超豪華仕様！さらに各巻には、原作・江口連
              書き下ろし小説＆キャラクター原案・雅
              描き下ろし表紙イラスト、スペシャル異世界レシピブックレット、1巻の初回生産分には2023年開催予定のイベント優先販売申込券が封入されます。
            </p>
          </div>
        </div>

        <div
          id="bento-grid"
          className="flex p-6 relative maven rounded-md my-auto"
        >
          {/*  */}
          <div id="grid-box" className="container gap-4">
            <div className="first border-blue-400 border-2 p-5 flex rounded-2xl w-full h-full">
              <div className="card-content flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-center items-start">
                  <h6 className="uppercase">catagory</h6>
                  <h2 className="uppercase">PACKAGE</h2>
                  <h4>TITLE : Jujutsu Kaisen</h4>
                </div>
                <p>link here</p>
              </div>
              <div className="card-img">
                <img
                  src="/src/assets/images/products/jujutsu_kaisen.png"
                  className="w-full h-full object-cover overflow-visible"
                  alt=""
                />
              </div>
            </div>
            <div className="second border-2 border-pink-400 p-5 flex flex-col rounded-2xl w-full h-full gap-3">
              <div className="card-content flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-center items-start">
                  <h6 className="uppercase">catagory</h6>
                  <h2 className="uppercase">PACKAGE</h2>
                  <h4>TITLE : Jujutsu Kaisen</h4>
                </div>
                <p>link here</p>
              </div>
              <div className="card-img flex justify-center items-center">
                <img
                  src="/src/assets/images/products/jujutsu_kaisen.png"
                  className="w-3/4 h-full object-cover overflow-visible"
                  alt=""
                />
              </div>
            </div>
            <div className="third">
              <button className="border-2 border-[#006837] rounded-2xl w-full h-full flex flex-col justify-center items-center gap-4">
                <div>
                  <h6 className="uppercase text-sm">visit</h6>
                  <h1 className="uppercase text-lg">mappa online shop</h1>
                </div>
                <span className="text-4xl">
                  <AiOutlineShop />
                </span>
              </button>
            </div>
            <div className="fourth border-2 border-amber-500 p-5 flex flex-col rounded-2xl w-full h-full gap-3">
              <div className="card-content flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-center items-start">
                  <h6 className="uppercase">catagory</h6>
                  <h2 className="uppercase">PACKAGE</h2>
                  <h4>TITLE : Jujutsu Kaisen</h4>
                </div>
                <p>link here</p>
              </div>
              <div className="card-img flex items-center justify-center">
                <img
                  src="/src/assets/images/products/jujutsu_kaisen.png"
                  className="w-3/4 h-full object-cover overflow-visible"
                  alt=""
                />
              </div>
            </div>
            <div className="fifth border-2 border-violet-500 p-5 flex rounded-2xl w-full h-full">
              <div className="card-content flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-center items-start">
                  <h6 className="uppercase">catagory</h6>
                  <h2 className="uppercase">PACKAGE</h2>
                  <h4>TITLE : Jujutsu Kaisen</h4>
                </div>
                <p>link here</p>
              </div>
              <div className="card-img">
                <img
                  src="/src/assets/images/products/jujutsu_kaisen.png"
                  className="w-full h-full object-cover overflow-visible"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Bento;
