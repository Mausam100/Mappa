import React from 'react';

const Overlayer = ({ card, toggleOverlay }) => {
  if (!card) return null;

  return (
    <div className="overlay fixed z-40 left-0 top-0 w-full h-full bg-[#000000dc] flex" onClick={toggleOverlay}>
      <div className='w-1/2 h-full justify-center items-center mt-16'>
        <h1 className="text-white text-4xl">{card.title}</h1>
        <p className="text-white mt-4">{card.description}</p>
        <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Watch Now
          </a>
      </div>
      <div className='w-1/2 h-full flex justify-center items-center'>
        <div>
          <img src={card.image} alt={card.title} className=" h-[70vh] mt-10 w-[20vw]" />
          
          
        </div>
      </div>
    </div>
  );
};

export default Overlayer;