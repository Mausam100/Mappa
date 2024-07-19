import { useState } from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Updates from "./Components/Updates";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="app  text-white bg-black w-full overflow-hidden">
      <Navbar />
      <div>
        <div className=" fixed z-0">
          <Hero />
        </div>
        <div className="w-full h-[100vh] bg-transparent"></div>

        <Work />
        <News />
        <Updates />

        <Footer />
      </div>
    </main>
  );
}

export default App;
