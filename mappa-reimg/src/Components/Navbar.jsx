<<<<<<< HEAD
import React, { useState, useRef } from "react";
import Logo from "../assets/images/icons/logo.svg";
=======
import React, { useState } from "react";
import Logo from "../assets/brand_assets/logo.svg";
>>>>>>> 4ac7f6d068814e383f70d6cb32e2a7fba2723d19
import line from "../assets/images/icons/Line8.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Link } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  useGSAP(() => {
    gsap.from("#navlinks a,span", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
    });
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className="nav flex p-6 items-center justify-between bg-[#000] nav-font text-md">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src={Logo} alt="logo" />
      </motion.div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <IoMdClose  className=" text-4xl" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <IoIosMenu  className=" text-4xl" />
            </motion.div>
          )}
        </button>
      </div>
      <div
        id="navlinks"
        className={` right-6 z-50 lg:static lg:flex gap-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "flex flex-col items-center bg-[#006837] p-4 top-16 left-0 w-full"
            : "hidden"
        } lg:flex lg:gap-8 lg:bg-transparent lg:p-0`}
      >
        <Link
          className="sm:bg-[#006837] px-2 rounded-sm cursor-pointer"
          to="home"
          onClick={toggleMenu}
        >
          HOME
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          NEW WORK
        </Link>
        <Link
          to="news"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          NEWS
        </Link>
        <Link
          to="#"
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          MERCH
        </Link>
        <span className="py-3 w-16 h-1">
          <img src={line} alt="line" />
        </span>
        {/* <span className="py-3 w-16 h-1 flex items-center justify-center"> */}
          {/* <div className="w-[9vw] h-[1px] bg-white"></div> */}
        {/* </span> */}
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          ABOUT
        </Link>
        <Link
          href="#"
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          WORKS
        </Link>
        <Link
          href="#"
          className="cursor-pointer relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
          onClick={toggleMenu}
        >
          CAREERS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
