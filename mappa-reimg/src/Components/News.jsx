import React, { useState } from 'react';
import GroupText from "../assets/Group.svg";

const newsData = [
  { date: "2024.04.01", title: "新経営体制に関するお知らせ", details: "", link:false, tag:"CORPORATE" },
  { date: "2024.03.24", title: "『ぶっちぎり?!』クライマックスPV公開！", details: "https://twitter.com/bucchigiri_PR/status/1771731709777858974", link:true, tag:"INFO" },
  { date: "2024.03.23", title: "『忘却バッテリー』放送直前ビジュアル公開！", details: "Detailed news content for section 3.", link:false, tag:"INFO" },
  { date: "2024.03.22", title: "『全修。』制作決定！ティザービジュアル＆PV公開！", details: "Detailed news content for section 4.", link:false, tag:"INFO" },
  { date: "2023.12.29", title: "『呪術廻戦』続編「死滅回游」制作決定！", details: "Detailed news content for section 5.", link:false, tag:"INFO" },
];

const News = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeadlineClick = (currentindex) => {
    return (
      <div>
        {newsData.map((item,index) => {
          if (item.link && index === currentindex) {
            window.location.href = item.details;
            setExpandedIndex(null);
            return null;
          } else {
            return <div className='absolute z-100 top-1/2 left-1/2 w-3/4 h-3/4 bg-sky-400' key={item.id}><p>{item.content}</p></div>;
          }
        })}
      </div>
    );
  };

  return (
    <section id="news" className='maven w-full h-full bg-black text-white p-6'>
      <div className="main flex items-center flex-col lg:flex-row">
        <div className="">
          <img src={GroupText} alt="" className="w-28" />
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
              <tag className='text-sm border px-3 rounded-full sm:text-lg'>{news.tag}</tag>
            </div>
          </div>
        ))}
        <div className='flex uppercase items-center justify-center border-t-[1px] p-8'>
          <tag className='text-lg font-semibold'>Explore All</tag>
        </div>
      </div>
    </section>
  );
}

export default News;
