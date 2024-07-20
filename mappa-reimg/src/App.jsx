import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Updates from "./Components/Updates";
import ProfileVision from "./Components/ProfileVision";
import BentoGrid from "./Components/BentoGrid";
import BentoGridItem from "./Components/BentoGridItem";

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
        <Work />
        <Updates />
        <BentoGrid>
          <BentoGridItem
            title="Item 1"
            description="This is the description for item 1."
            header={<div>Header 1</div>}
            icon={<div>Icon 1</div>}
          />
          <BentoGridItem
            title="Item 2"
            description="This is the description for item 2."
            header={<div>Header 2</div>}
            icon={<div>Icon 2</div>}
          />
          
        </BentoGrid>
        <Footer />
      </div>
    </main>
  );
}

export default App;
