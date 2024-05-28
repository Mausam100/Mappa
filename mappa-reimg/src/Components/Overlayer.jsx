import React from 'react';


const Overlayer = ({ card, toggleOverlay }) => {
  if (!card) return null;

  return (
    <>
    <div className="overlay fixed z-40 left-0 top-0 w-[100%] h-[100%] bg-[#000000] flex" onClick={toggleOverlay}>
      <div className='flex items-center justify-between  w-full h-full'>
        <div className='w-[70%] p-20 h-full bg-pink-300'>hello</div>
        <div className="w-[30%] h-full bg-sky-300 relative">
          <img src={card.image} alt={card.title} className='w-[600px] h-[578px] absolute'/>hello
        </div>
      </div>
    </div>
    </>
  );
};

export default Overlayer;
