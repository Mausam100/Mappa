import { useState } from 'react';
import Hero from './Components/Hero';
import Work from './Components/Work';
import News from './Components/News';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    
      <main className='app  text-white bg-black w-full overflow-hidden'>
        
          <Navbar />
          <div>
            <Hero/>
            <Work/>
            <News/>
            <Footer/>
          </div>
        
      </main>
    
  );
}

export default App;
