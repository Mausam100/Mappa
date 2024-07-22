import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Updates from "./Components/Updates";
import ProfileVision from "./Components/ProfileVision";
import Bento from "./Components/Bento";
import Top from "./Components/top";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.app'),
      smooth: true
    });
    return () => locomotiveScroll.destroy(); // Cleanup on unmount
  }, []);

  return (
    <main className="app text-white bg-black w-full overflow-hidden">
      <Navbar />
      <div>
        <div className="fixed z-0">
          <Hero />
        </div>
        <div className="w-full h-[100vh] bg-transparent"></div> 
        <ProfileVision />
        <Top/>
        <Work />
        <Updates />
        <Bento />
        <Footer />
      </div>
    </main>
  );
}

export default App;
