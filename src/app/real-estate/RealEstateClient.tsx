"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { realEstateData } from "@/data/realEstateData";

export default function RealEstateClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
          Our <span className="text-gradient-gold italic">Services</span>
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-16" />
        
        <div className="flex flex-col gap-12">
          {realEstateData.map((service, i) => (
            <motion.div 
              key={service.slug}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Link href={`/real-estate/${service.slug}`} className="group flex flex-col md:flex-row items-stretch bg-transparent border border-white/10 rounded-sm overflow-hidden hover:border-gold-base/30 transition-colors duration-700 cursor-pointer w-full h-full">
                <div className="w-full md:w-2/5 h-64 md:h-[400px] bg-[#e5e5e5] relative overflow-hidden group/img">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <div className="flex w-[300%] h-full group-hover/img:animate-[slideImages_4s_infinite_ease-in-out]">
                    {service.images?.map((img, idx) => (
                      <div key={idx} className="w-1/3 h-full relative">
                        <img src={img} alt={`${service.title} ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative">
                  <p className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">{service.tag}</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 group-hover:text-gradient-gold transition-colors duration-500">{service.title}</h3>
                  <p className="text-white/60 font-light text-lg mb-8 line-clamp-2">
                    {service.desc}
                  </p>
                  <div className="flex justify-between items-center mt-auto border-t border-white/10 pt-6">
                    <span className="text-white/80 font-sans tracking-wide">Explore Service</span>
                    <span className="text-xs uppercase tracking-widest text-white hover:text-gradient-gold transition-colors group-hover:translate-x-2 transform duration-500">View Details →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Master Layouts Section */}
      <section className="w-full max-w-6xl mx-auto py-24 border-t border-white/10 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Master <span className="italic text-gradient-gold">Layouts</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">Explore our meticulously crafted floor plans, designed to maximize space, natural light, and aesthetic flow.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { name: "3BHK Premium Suite", size: "2,400 Sq.Ft.", type: "Residential", images: ["/images/layout.png", "/images/interior.png", "/images/architecture.png"] },
            { name: "4BHK Luxury Villa", size: "4,500 Sq.Ft.", type: "Villa", images: ["/images/lumina_estates.png", "/images/luxury_villa_exterior.png", "/images/luxury_mansion_pool.png"] },
          ].map((layout, i) => (
            <motion.div
              key={layout.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500 group cursor-pointer"
            >
              <div className="w-full h-64 mb-8 overflow-hidden rounded-xl bg-midnight border border-white/5 relative group/layoutImg">
                 <div className="flex w-[300%] h-full group-hover/layoutImg:animate-[slideImages_4s_infinite_ease-in-out]">
                    {layout.images.map((img, idx) => (
                      <div key={idx} className="w-1/3 h-full relative">
                        <img src={img} alt={`${layout.name} ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gradient-gold text-xs uppercase tracking-widest mb-2">{layout.type}</p>
                  <h3 className="text-2xl font-serif text-white">{layout.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-sm mb-1">Super Built-up Area</p>
                  <p className="text-xl text-white font-light">{layout.size}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
