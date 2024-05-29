import React from 'react'
import Logo from '../assets/whiteLogo.png'
import line from '../assets/Line8.png'

const Navbar = () => {
  return (
    <nav className='flex p-6 items-center justify-between bg-black'>
       <div> 
        <img src={Logo} alt="logo" /></div>
       <div className='flex gap-8 fixed right-6 z-50'>
        <a className=' bg-[#006837b7] px-1 rounded-sm' href="#home">HOME</a>
        <a href="#work">NEW WORK</a>
        <a href="#news">NEWS</a>
        <a href="#">MERCH</a>
        {/* line */}
        <span className=' py-3 w-16 h-1'><img src={line} alt="" /></span>
        <a href="#">ABOUT</a>
        <a href="#">WORKS</a>
        <a href="#">CAREERS</a>
       </div>
    </nav>
  )
}

export default Navbar