import React, { useState } from 'react';
// import GroupText from "../assets/images/icons/Group.svg";
import { Element } from 'react-scroll';


const newsData = [
  { date: "2024.04.01", title: "新経営体制に関するお知らせ", details: "株式会社MAPPA（代表取締役社長：大塚 学、本社：東京都杉並区）は、2024年4月より下記の通り新経営体制となりましたので、お知らせいたします。", link:false, tag:"CORPORATE" },
  { date: "2024.03.24", title: "『ぶっちぎり?!』クライマックスPV公開！", details: "https://twitter.com/bucchigiri_PR/status/1771731709777858974", link:true, tag:"INFO" },
  { date: "2024.03.23", title: "『忘却バッテリー』放送直前ビジュアル公開！", details: "Detailed news content for section 3.", link:false, tag:"INFO" },
  { date: "2024.03.22", title: "『全修。』制作決定！ティザービジュアル＆PV公開！", details: "Detailed news content for section 4.", link:false, tag:"INFO" },
  { date: "2023.12.29", title: "『呪術廻戦』続編「死滅回游」制作決定！", details: "Detailed news content for section 5.", link:false, tag:"INFO" },
];

const Popup = ({ news, onClose }) => (
  <div className="fixed w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex items-center justify-center bg-black z-550 border-2 rounded-md border-zinc-700">
    <div className="p-10 w-full h-full overflow-x-hidden overflow-y-scroll relative flex flex-col items-center">
    <button className="absolute top-2 right-4 text-white text-xl" onClick={onClose}>✖</button>
    <div className='flex flex-row items-center justify-between gap-6'>
      <tag className='border-2 py-1 px-5 border-[#006837] rounded-full sm:text-lg'><span className='text-md'>{news.tag}</span></tag>
      <h2 className='text-md inline-block'>{news.date}</h2>
    </div>
      <h2 className="text-xl mt-4">{news.title}</h2>
      <p className='text-md mt-4'> {news.details}</p>
    </div>
  </div>
);

const News = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeadlineClick = (index) => {
    const newsItem = newsData[index];
    if (newsItem.link) {
      window.open(newsItem.details, "_blank");
    } else {
      setExpandedIndex(index);
    }
  };

  const handleClosePopup = () => {
    setExpandedIndex(null);
  };


  return (
    <Element name='news' id="news" className=' maven w-full h-full bg-black text-white p-6'>
      <div className="main flex items-center flex-col lg:flex-row">
        <div className="">
          {/* <img src={GroupText} alt="" className="w-28" /> */}
        </div>
        <h1 className="heading text-4xl border-b-2 mb-10 lg:mb-0 ml-6 pb-1 flex items-end">
          NEWS
        </h1>
      </div>

      <div className='mx-auto lg:mx-20 p-10'>
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`flex flex-col uppercase items-center justify-center border-t-[1px] px-6 cursor-pointer transition-all duration-300 h-16 overflow-hidden`}
            onClick={() => handleHeadlineClick(index)}
          >
            <div className="flex w-full justify-between items-center">
              <div className='flex gap-20'>
              <h2 className='text-sm sm:text-lg'>{news.date}</h2>
              <h2 className='text-sm sm:text-lg'>{news.title}</h2>
              </div>
              <tag className='text-sm border-2 border-[#006837] px-3 rounded-full sm:text-lg'>{news.tag}</tag>
            </div>
          </div>
        ))}
        <div className='flex uppercase items-center justify-end border-t-[1px] p-8'>
          <button className='text-lg border-2 border-[#006837] px-4 py-1'>ARCHIVE</button>

        {expandedIndex !== null && (
        <Popup news={newsData[expandedIndex]} onClose={handleClosePopup} />
        )}
        </div>
      </div>
    </Element>
  );
}

export default News;
