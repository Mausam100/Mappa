import React from 'react';
import web_icon from '../assets/images/icons/web-icon-overlay.svg';
import x_icon from '../assets/images/icons/x-icon-overlay.svg';


const Overlayer = ({ card, toggleOverlay }) => {
  if (!card) return null;

  return (
    <>
    <div className="overlay fixed z-40 left-0 top-0 w-[100%] h-[100%] bg-[#000000] flex" onClick={toggleOverlay}>
      <div className='flex items-center justify-between w-full h-full p-20'>
        <div className='w-[70%] h-full flex items-center justify-between flex-col'>
          <div className='w-full h-[15%]'>
            <h1 className='text-xl'>忘却バッテリー ({card.title} )</h1>
            <h5 className='text-xs'>TV ANIMATION / 2024 4</h5>
          </div>
          <div className='w-full h-[85%] flex flex-row justify-between'>
            <div className='w-[30%] h-full'>
              <h3 className='inline-block mb-2 border-b-2 border-spacing-y-11'>STAFF</h3>
              <div className='divscroller w-full h-36 pr-3 mt-2 mb-2 text-sm'>
                <p>
                  原作：みかわ絵子（集英社「少年ジャンプ＋」連載）<br />
                  試合制作：高嶋栄充 <br />
                  監督：中園真登 <br />
                  シリーズ構成：横手美智子 <br />
                  キャラクターデザイン：：長谷川ひとみ <br />
                  アクション作画監督：立中順平 / 徳丸昌大 <br />
                  美術監督：船隠雄貴 <br />
                  色彩設計：中野尚美 <br />
                  撮影監督：川下裕樹 <br />
                  ３D監督：小川耕平 <br />
                  編集：吉武将人 <br />
                  音楽：菊谷知樹 / 山崎寛子 <br />
                  音響監督：名倉靖 <br />
                  音響効果：長谷川卓也 <br />
                  制作：MAPPA
                </p>
              </div>
              <h3 className='inline-block mt-4 mb-2 border-b-2 border-spacing-y-11'>CAST</h3>
              <div className='divscroller w-full h-36 pr-3 mt-2 mb-2 text-sm'>
                <p>
                清峰葉流火：増田俊樹 <br />
                要 圭：宮野真守 <br />
                藤堂 葵：阿座上洋平 <br />
                千早瞬平：島﨑信長 <br />
                山田太郎：梶 裕貴 <br />
                土屋和季：山谷祥生 <br />
                国都英一郎：大塚剛央 <br />
                巻田広伸：石井マーク <br />
                桐島秋斗：河西健吾   
                </p>
              </div>
            </div>
            <div className='w-[65%] h-full'>
              
              <h3 className='inline-block mb-2 border-b-2 border-spacing-y-11'>OVERVIEW</h3>
              <div className='divscroller w-full h-36 pr-12 mt-2 mb-16 text-md'>
                <p>
                天才投手・清峰遥と敏腕捕手・要慧による名打者たちの物語。<br />
                シニアリーグ時代、彼らは勝つだけでなく、対戦した多くの中学生選手たちの夢と希望を打ち砕くほどの才能を持っていた。  <br />
                しかし、かなめは記憶を失っており、二人は無名公立高校・小手指高校に入学する。同じ学校で、彼らは中学で対戦して野球を辞めた才能ある選手たちと出会う。<br />
                これは、彼らが新設の野球部に集まり、再び野球をする物語です。
                </p>
              </div>
              <div className='flex flex-col gap-5 ml-10 mr-10'>
                <button>
                  <div className='flex flex-row bg-[#006837] items-center justify-start p-4 gap-4'>
                    <img src={web_icon} alt={card.title} className="w-[25px] h-[25px] object-contain text-left"/>
                    <span className=''>Official Website - {card.title}</span>
                  </div>
                </button>
                <button>
                  <div className='flex flex-row bg-[#006837] items-center justify-start p-4 gap-4 text-left'>
                    <img src={x_icon} alt={card.title} className="w-[25px] h-[25px] object-contain"/>
                    <span>Official X (twitter) Handle - {card.title}</span>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="w-[30%] h-full relative overflow-visible content-center">
          <img src={card.image} alt={card.title} className='p-5 rounded-md absolute top-0 left-0 w-full h-full object-contain'/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Overlayer;
