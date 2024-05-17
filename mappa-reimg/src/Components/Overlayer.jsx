import React from 'react'
import Details from "./Details"

const Overlayer = () => {


  return (
    <div className="overlay fixed z-40 left-0 top-0 w-full h-full bg-[#151414a9] flex">
    <div className=' w-1/2 h-full bg-red-500 '>
        
    </div>
    <div className=' w-1/2 h-full bg-green-500 '>
         <div>
            <img src="" alt="" />
         </div>
    </div>
    </div>
  )
}

export default Overlayer