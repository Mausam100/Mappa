import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = ({ hoverElement }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [showText, setShowText] = useState(false);

  const xprev = useRef(0);
  const yprev = useRef(0);
  const timeout = useRef(null);

  const xScaleFactor = 0.10;
  const yScaleFactor = 0.10;
  const minScale = 0.8;
  const maxScale = 1.2;

  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(timeout.current);

      const xdiff = e.clientX - xprev.current;
      const ydiff = e.clientY - yprev.current;

      const xscale = gsap.utils.clamp(minScale, maxScale, 1 + xdiff * xScaleFactor);
      const yscale = gsap.utils.clamp(minScale, maxScale, 1 + ydiff * yScaleFactor);

      setScale({ x: xscale, y: yscale });
      setPosition({ x: e.clientX, y: e.clientY });

      xprev.current = e.clientX;
      yprev.current = e.clientY;

      timeout.current = setTimeout(() => {
        setScale({ x: 1, y: 1 });
        setShowText(false);
      }, 100);
    };

    const handleMouseOver = () => {
      setScale({ x: 1.5, y: 1.5 }); // Increase scale
      setShowText(true); // Show text
    };

    const handleMouseOut = () => {
      setScale({ x: 1, y: 1 }); // Reset scale
      setShowText(false); // Hide text
    };

    window.addEventListener('mousemove', handleMouseMove);

    if (hoverElement.current) {
      hoverElement.current.addEventListener('mouseover', handleMouseOver);
      hoverElement.current.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hoverElement.current) {
        hoverElement.current.removeEventListener('mouseover', handleMouseOver);
        hoverElement.current.removeEventListener('mouseout', handleMouseOut);
      }
      clearTimeout(timeout.current);
    };
  }, [hoverElement]);

  return (
    <div
      id="minicircle"
      className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[99999] flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale.x}, ${scale.y})`,
        transition: 'cubic-bezier(0.19, 1, 0.22, 1) 0.8s',
      }}
    >
      {showText && <span className="text-white text-xs">Click</span>}
    </div>
  );
};

export default MouseFollower;
