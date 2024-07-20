import React from "react";
import './bento.css';

function Bento() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center lg:flex-row px-20 py-28 relative maven w-screen h-full bg-black text-white">
        <div className="max-w-md h-full rounded-md p-6 relative maven flex flex-col gap-5 items-stretch">
          <div className="flex flex-row flex-nowrap justify-start gap-10 items-center h-full">
            <div className="top-left-content">
              <div className="text-gray-400 text-sm mb-2">CATEGORY</div>
              <h2 className="text-2xl font-bold mb-4">PACKAGE</h2>
              <h3 className="text-sm text-wrap font-bold mb-2">
                TITLE: CAMPFIRE COOKING IN ANOTHER WORLD WITH MY ABSURD SKILL
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                とんでもスキルで異世界放浪メシ Blu-ray 第1巻
              </p>
              <button className="bg-white text-black py-2 px-4 rounded-md mb-6">
                <span className="text-xs font-bold text-nowrap">
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
          <div id="grid-box" className="container">
            <div className="first bg-blue-400">hello</div>
            <div className="second bg-pink-400">second</div>
            <div className="thrid bg-red-500">thuird</div>
            <div className="fourth bg-amber-500">dourth</div>
            <div className="fifth bg-violet-500">fifth</div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Bento;
