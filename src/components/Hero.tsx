"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // Set canvas dimensions with device pixel ratio for HD/4K clarity
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.scale(dpr, dpr);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 288;
    const currentFrame = (index: number) =>
      `/hero-frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const videoState = { frame: 0 };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      const frameIndex = Math.round(videoState.frame);
      if (images[frameIndex] && images[frameIndex].complete) {
        // Draw image covering the canvas (object-fit: cover equivalent)
        const img = images[frameIndex];
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        const hRatio = w / img.width;
        const vRatio = h / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (w - img.width * ratio) / 2;
        const centerShift_y = (h - img.height * ratio) / 2;
        
        context.clearRect(0, 0, w, h);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
        
        // Add a dark overlay for better text contrast
        context.fillStyle = "rgba(17, 17, 17, 0.4)";
        context.fillRect(0, 0, w, h);
      }

      // Update text based on frame chunk
      if (titleRef.current && descRef.current) {
        const chunk = Math.floor(frameIndex / 24);
        let newTitle = "";
        
        switch (chunk) {
          case 0: newTitle = `Building Tomorrow's <span class="text-gradient-gold italic">Landmarks</span>`; break;
          case 1:
          case 2: newTitle = ""; break;
          case 3:
          case 4: newTitle = `Premium <span class="text-gradient-gold italic">Office Space</span>`; break;
          case 5: newTitle = `Luxury <span class="text-gradient-gold italic">Shopping Malls</span>`; break;
          case 6:
          case 7: newTitle = `World-Class <span class="text-gradient-gold italic">Restaurants & Hotels</span>`; break;
          case 8: newTitle = `Exclusive <span class="text-gradient-gold italic">Residential Houses</span>`; break;
          case 9:
          case 10: newTitle = `Master-Planned <span class="text-gradient-gold italic">Layouts</span>`; break;
          case 11:
          default: newTitle = `Building Tomorrow's <span class="text-gradient-gold italic">Landmarks</span>`; break;
        }

        if (titleRef.current.innerHTML !== newTitle) {
          titleRef.current.style.opacity = "0";
          setTimeout(() => {
            if (titleRef.current) {
              titleRef.current.innerHTML = newTitle;
              titleRef.current.style.opacity = newTitle === "" ? "0" : "1";
            }
            if (descRef.current) {
              descRef.current.style.opacity = chunk > 0 ? "0" : "1";
            }
          }, 300); // 300ms fade transition
        }
        
        if (buttonsRef.current) {
          if (chunk > 0) {
            buttonsRef.current.style.opacity = "0";
            buttonsRef.current.style.pointerEvents = "none";
          } else {
            buttonsRef.current.style.opacity = "1";
            buttonsRef.current.style.pointerEvents = "auto";
          }
        }
      }
    };

    // Draw first frame on load
    images[0].onload = render;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%", // 200% of viewport height to scroll through the animation
        scrub: 1, // Smooth scrub
        pin: true,
      },
    });

    tl.to(videoState, {
      frame: frameCount - 1,
      ease: "none",
      onUpdate: render,
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-transparent overflow-hidden" id="home">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl transition-opacity duration-300"
        >
          <motion.h1 
            ref={titleRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white mb-6 drop-shadow-2xl transition-opacity duration-300"
            dangerouslySetInnerHTML={{ __html: `Building Tomorrow's <span class="text-gradient-gold italic">Landmarks</span>` }}
          />
          
          <motion.p 
            ref={descRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto mb-10 drop-shadow-lg transition-opacity duration-300"
          >
            Premium Real Estate <span className="text-gradient-gold mx-2">•</span> Luxury Construction <span className="text-gradient-gold mx-2">•</span> Sustainable Development
          </motion.p>

          <motion.div 
            ref={buttonsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto transition-opacity duration-300"
          >
            <Link href="/projects" className="px-8 py-4 bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight hover:brightness-110 transition-all duration-300 rounded-sm font-semibold tracking-widest uppercase text-sm w-full sm:w-auto text-center">
              Explore Projects
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/50 text-white hover:bg-white/10 transition-colors duration-500 rounded-sm font-semibold tracking-widest uppercase text-sm w-full sm:w-auto text-center backdrop-blur-sm">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}


