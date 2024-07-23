import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const MouseFollower = ({ hoverText, containerRef }) => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [text, setText] = useState("");

  const initialPosition = { x: -100, y: -100 }; 

  const xPrev = useRef(0);
  const yPrev = useRef(0);
  const animationRef = useRef(null);

  const xScaleFactor = 0.10;
  const yScaleFactor = 0.10;
  const minScale = 0.8;
  const maxScale = 1.5;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xDiff = x - xPrev.current;
      const yDiff = y - yPrev.current;

      const xScale = gsap.utils.clamp(minScale, maxScale, 1 + xDiff * xScaleFactor);
      const yScale = gsap.utils.clamp(minScale, maxScale, 1 + yDiff * yScaleFactor);
      const newScale = Math.max(xScale, yScale);

      setScale(newScale);
      setPosition({ x, y });

      xPrev.current = x;
      yPrev.current = y;

      cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(() => {
        gsap.to({}, {
          duration: 0.1,
          onComplete: () => {
            setScale(1);
            setText("");
          },
        });
      });
    };

    const handleMouseLeave = () => {
      setPosition(initialPosition);
      setScale(1);
      setText("");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [containerRef]); 

  useEffect(() => {
    setText(hoverText || "");
  }, [hoverText]);

  return (
    <div
      id="minicircle"
      className="absolute w-6 h-6 px-8 py-2 bg-white rounded-full pointer-events-none z-[99999] flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transition: 'cubic-bezier(0.19, 1, 0.22, 1) 0.8s',
      }}
    >
      <p className=" text-black">Click</p>
    </div>
  );
};

export default MouseFollower;
