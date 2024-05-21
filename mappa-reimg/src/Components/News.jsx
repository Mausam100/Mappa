import React from 'react'
import GroupText from "../assets/Group.svg";


const News = () => {
  return (
    <section className='w-full h-full bg-black text-white p-6'>
     <div className="main flex">
          <div className="">
            <img src={GroupText} alt="" className="w-28" />
          </div>
          <h1 className="heading text-4xl border-b-2 mb-10 ml-6 pb-1 flex items-end">
            NEWS
          </h1>
        </div>

        <div className=' mx-20 p-10'>
          <div className='flex uppercase items-center justify-between border-t-[1px] p-8  '>
            <h2 className=''>date</h2>
            <h2 className=''>welcome to news section</h2>
            <button className=''>date</button>
          </div>
          <div className='flex uppercase items-center justify-between border-t-[1px] p-8'>
            <h2 className=''>date</h2>
            <h2 className=''>welcome to news section</h2>
            <button className=''>date</button>
          </div>
        </div>
     
    </section>
  )
}

export default News