import React from 'react';
import {useState} from 'react';
import logo from '../assets/brand_assets/logo.svg';
import { IoMenu, IoClose } from 'react-icons/io5';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-5 ibm-normal">
      <img src={logo} alt="logo" className="w-28 h-auto" />

      <nav className="flex items-center gap-4 p-4 bg-black text-white">
        {['HOME', 'ABOUT', 'WORKS', 'CONTACT'].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="hidden relative md:inline-block group hover:text-green-600 hover:ease-in-out"
          >
            <span className="absolute left-0 transform transition-transform duration-300 group-hover:-translate-x-2 hover:ease-in-out">
              [
            </span>
            <span className="relative mx-2">{link}</span>
            <span className="absolute right-0 transform transition-transform duration-300 group-hover:translate-x-2 hover:ease-in-out">
              ]
            </span>
          </a>
        ))}
        <a href="#" className="inline-block md:hidden text-2xl" onClick={toggleMenu}>
          <IoMenu />
          <div></div>
        </a>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black text-white p-5 transform z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-5">
          <button onClick={toggleMenu} className="text-3xl">
            <IoClose />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {['HOME', 'ABOUT', 'WORKS', 'CONTACT'].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="block text-2xl hover:text-green-600"
              onClick={toggleMenu} // Close menu on link click
            >
              {link}
            </a>
          ))}
        </nav>
      </div>


    </header>
  );
}

export default NavBar;
