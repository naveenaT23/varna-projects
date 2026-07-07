"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "CEO, TechNova Solutions",
    text: "Varna Projects delivered our corporate headquarters ahead of schedule. The precision and attention to luxury details are unparalleled in the industry.",
    image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=d4af37&color=fff"
  },
  {
    name: "Priya Patel",
    role: "Investor",
    text: "Investing in Varna's commercial layouts has been my best financial decision. The locations are prime and the infrastructure is truly world-class.",
    image: "https://ui-avatars.com/api/?name=Priya+Patel&background=1a1a1a&color=d4af37"
  },
  {
    name: "Rohan Kapoor",
    role: "Homeowner",
    text: "Living in a Varna property is an experience of pure elegance. The sustainable features combined with modern luxury make it a perfect home.",
    image: "https://ui-avatars.com/api/?name=Rohan+Kapoor&background=d4af37&color=fff"
  },
  {
    name: "Nandini Reddy",
    role: "Retail Director",
    text: "The Galleria Mall project showcases their visionary approach. Their spaces are designed not just to house stores, but to create experiences.",
    image: "https://ui-avatars.com/api/?name=Nandini+Reddy&background=1a1a1a&color=d4af37"
  },
  {
    name: "Vikram Singh",
    role: "Architectural Partner",
    text: "Collaborating with Varna Projects is seamless. Their dedication to uncompromising quality makes them a leader in luxury real estate development.",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=d4af37&color=fff"
  }
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create a 3D parallax depth effect tied to the user's scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section ref={sectionRef} className="py-32 bg-midnight relative overflow-hidden border-t border-white/5 perspective-[1200px]">
      
      {/* 3D Parallax Real Estate Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          style={{ 
            y: backgroundY,
            scale: backgroundScale,
            rotateX: rotateX,
            transformOrigin: "center center"
          }}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
        >
          <img 
            src="/images/skyline_tower.png" 
            alt="Varna Projects Architecture" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen"
          />
        </motion.div>
        
        {/* Seamless blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/50 to-midnight opacity-90" />
        
        {/* Subtle gold accent lighting in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Client <span className="italic text-gradient-gold">Testimonials</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-gold-base to-gold-light mx-auto" />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex z-10">
        {/* Left Edge Fade */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-midnight to-transparent z-20 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-8 px-4 w-max hover:[animation-play-state:paused]"
        >
          {duplicatedTestimonials.map((item, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex-shrink-0 flex flex-col justify-between hover:bg-white/[0.05] hover:border-gold-base/20 backdrop-blur-xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group cursor-pointer"
            >
              <div className="mb-8">
                <span className="text-gold-base text-4xl font-serif leading-none opacity-40 group-hover:opacity-100 transition-opacity">"</span>
                <p className="text-white/90 font-light text-lg italic mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
              
              <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-base rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border border-white/10 group-hover:border-gold-base/50 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl group-hover:text-gold-light transition-colors">{item.name}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Edge Fade */}
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-midnight to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
