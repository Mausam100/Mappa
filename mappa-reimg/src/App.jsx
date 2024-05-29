import { useState } from 'react';
import Hero from './Components/Hero';
import Work from './Components/Work';
import News from './Components/News';
import Navbar from './Components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    
      <main className='text-white'>
        
          <Navbar />
          <div>
            <Hero/>
            <Work/>
            <News/>
          </div>
        
      </main>
    
  );
}

export default App;
