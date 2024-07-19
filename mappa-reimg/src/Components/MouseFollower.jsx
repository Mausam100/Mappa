import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const MouseFollower = ({ hoverText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [text, setText] = useState("");

  const xprev = useRef(0);
  const yprev = useRef(0);
  const timeout = useRef(null);

  const xScaleFactor = 0.10;
  const yScaleFactor = 0.10;
  const minScale = 0.8;
  const maxScale = 1.5;

  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(timeout.current);

      const xdiff = e.clientX - xprev.current;
      const ydiff = e.clientY - yprev.current;

      const xscale = gsap.utils.clamp(minScale, maxScale, 1 + xdiff * xScaleFactor);
      const yscale = gsap.utils.clamp(minScale, maxScale, 1 + ydiff * yScaleFactor);

      setScale(xscale);
      setPosition({ x: e.clientX, y: e.clientY });

      xprev.current = e.clientX;
      yprev.current = e.clientY;

      timeout.current = setTimeout(() => {
        setScale(1);
        setText("");
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout.current);
    };
  }, []);

  useEffect(() => {
    if (hoverText) {
      setText(hoverText);
    } else {
      setText("");
    }
  }, [hoverText]);

  return (
    <div
      id="minicircle"
      className="fixed top-0 left-0 w-6 h-6 px-8 py-2 bg-white rounded-full pointer-events-none z-[99999] flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transition: 'cubic-bezier(0.19, 1, 0.22, 1) 0.8s',
      }}
    >
      {text && <span className="text-black text-xs">{text}</span>}
    </div>
  );
};

export default MouseFollower;
