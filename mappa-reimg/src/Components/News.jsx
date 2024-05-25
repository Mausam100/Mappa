import React, { useState } from 'react';
import GroupText from "../assets/Group.svg";

const newsData = [
  { date: "01/01/2024", title: "Welcome to news section 1", details: "Detailed news content for section 1.", button:"Corporate" },
  { date: "02/01/2024", title: "Welcome to news section 2", details: "Detailed news content for section 2.", button:"INFO" },
  { date: "03/01/2024", title: "Welcome to news section 3", details: "Detailed news content for section 3.", button:"INFO" },
  { date: "04/01/2024", title: "Welcome to news section 4", details: "Detailed news content for section 4.", button:"INFO" },
  { date: "05/01/2024", title: "Welcome to news section 5", details: "Detailed news content for section 5.", button:"INFO" },
];

const News = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeadlineClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className='w-full h-full bg-black text-white p-6'>
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
            className={`flex flex-col uppercase items-center justify-between border-t-[1px] p-8 cursor-pointer transition-all duration-300 ${expandedIndex === index ? 'h-auto' : 'h-16 overflow-hidden'}`}
            onClick={() => handleHeadlineClick(index)}
          >
            <div className="flex w-full justify-between">
              <div className='flex gap-20'>
              <h2 className='text-sm sm:text-lg'>{news.date}</h2>
              <h2 className='text-sm sm:text-lg'>{news.title}</h2>
              </div>
              <button className='text-sm border sm:text-lg'>{news.button}</button>
            </div>
            {expandedIndex === index && <div className="mt-4 text-sm sm:text-lg">{news.details}</div>}
          </div>
        ))}
        <div className='flex uppercase items-center justify-center border-t-[1px] p-8'>
          <button className='text-lg font-semibold'>Explore All</button>
        </div>
      </div>
    </section>
  );
}

export default News;
