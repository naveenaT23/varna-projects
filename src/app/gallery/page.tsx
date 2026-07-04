"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/gallery_skyline.png", alt: "Skyline Architecture", height: "h-96" },
    { src: "/images/realestate_penthouse.png", alt: "Luxury Penthouse", height: "h-64" },
    { src: "/images/construction_hero.png", alt: "Engineering Progress", height: "h-80" },
    { src: "/images/skyline_tower.png", alt: "Commercial Tower", height: "h-64" },
    { src: "/images/realestate_villa.png", alt: "Coastal Villa", height: "h-96" },
    { src: "/images/realestate_meridian.png", alt: "Executive Suite", height: "h-80" },
    { src: "/images/lumina_estates.png", alt: "Estate Overview", height: "h-96" },
    { src: "/images/varna_techpark.png", alt: "Tech Campus", height: "h-64" },
    { src: "/images/layout.png", alt: "Master Layout", height: "h-80" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gold-base/10 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
          The <span className="text-gradient-gold italic">Gallery</span>
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-16" />
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.2 }}
              className={`relative bg-[#0a0a0a] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/5 hover:border-gold-base/30 hover:shadow-gold-base/10 transition-all duration-700 w-full inline-block ${img.height}`}
            >
              <img 
                 src={img.src} 
                 alt={img.alt} 
                 className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="overflow-hidden">
                   <motion.span 
                     initial={{ y: 20, opacity: 0 }}
                     whileHover={{ y: 0, opacity: 1 }}
                     className="text-white text-lg font-serif mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 block"
                   >
                     {img.alt}
                   </motion.span>
                </div>
                <div className="overflow-hidden">
                   <motion.span className="text-gold-light text-xs uppercase tracking-widest font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 block opacity-0 group-hover:opacity-100">
                     View Details
                   </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
