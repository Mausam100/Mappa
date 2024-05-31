import React from "react";
import Logo from "../assets/whiteLogo.png";
import line from "../assets/Line8.png";
import { motion, useAnimate, stagger } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("#navlinks a,span", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
    });
  });

  return (
    <nav className="flex p-6 items-center justify-between bg-[#000] nav-font text-md">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src={Logo} alt="logo" />
      </motion.div>

      <div id="navlinks" className="flex gap-8 fixed right-6 z-50">
        <a className="bg-[#006837] px-2 rounded-sm " href="#home">
          HOME
        </a>
        <a
          href="#work"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          NEW WORK
        </a>
        <a
          href="#news"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          NEWS
        </a>
        <a
          href="#"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          MERCH
        </a>
        <span className="py-3 w-16 h-1">
          <img src={line} alt="line" />
        </span>
        <a
          href="#"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          WORKS
        </a>
        <a
          href="#"
          className="relative hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out"
        >
          CAREERS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
