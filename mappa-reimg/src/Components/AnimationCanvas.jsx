import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimationCanvas.module.css'; // Import the CSS Module

gsap.registerPlugin(ScrollTrigger);

const AnimationCanvas = () => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const imageSeq = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 300;
    imageSeq.current.frame = 0;

    const loadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.current.push(img);
      }
    };

    const render = () => {
      if (images.current[imageSeq.current.frame]) {
        scaleImage(images.current[imageSeq.current.frame], context);
      }
    };

    loadImages();

    gsap.to(imageSeq.current, {
      frame: frameCount - 1,
      snap: 'frame',
      scrollTrigger: {
        scrub: 0.1,
        trigger: '#animation-canvas',
        start: 'top top',
        end: '600% top',
        // pin:true,
      },
      onUpdate: render,
    });

    images.current[0].onload = render;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    return () => {
      window.removeEventListener('resize', render);
    };
  }, []);

  const files = (index) => {
    return `/canvasRender/${index.toString().padStart(4, '0')}.png`;
  };

  const scaleImage = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  return (
    <section id="animation-canvas" className={styles.animationCanvas}>
      

      <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </section>
  );
};

export default AnimationCanvas;
