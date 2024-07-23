import React, { useRef, useEffect, useState } from "react";

function getCurrentFrame(index) {
  // return new URL(`./img/${index.toString().padStart(4, "0")}.png`, import.meta.url).href;
  return `./img/${index.toString().padStart(4, "0")}.png`;
}

const CanvasAnim = ({ scrollHeight, numFrames, width, height }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);

  // Step 1: Load images
  function preloadImages() {
    const tempImages = [];
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      img.onerror = () => {
        console.error(`Failed to load image ${imgSrc}`);
      };
      tempImages.push(img);
    }
    setImages(tempImages);
  }

  // Step 2: Handle scroll events
  const handleScroll = () => {
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }

    setFrameIndex(index);
  };

  // Step 3: Set up canvas
  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
  };

  // Step 4: Render images to canvas
  useEffect(() => {
    preloadImages();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId;

    const render = () => {
      if (images[frameIndex] && images[frameIndex].complete) {
        context.clearRect(0, 0, width, height);
        context.drawImage(images[frameIndex], 0, 0);
      }
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <div style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasAnim;
