"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const upcomingProjects = [
  {
    title: "Varma Mall",
    type: "Commercial Retail",
    status: "Upcoming",
    desc: "A massive, ultra-modern shopping and lifestyle destination featuring premium global brands, expansive entertainment zones, and a state-of-the-art rooftop multiplex.",
    image: "/images/varma_mall.jpg"
  },
  { 
    title: "Grand Galleria Mall", 
    type: "Commercial Retail", 
    status: "Pre-Launch", 
    desc: "A massive, ultra-modern shopping destination featuring over 300 premium global brands, indoor botanical gardens, and an immersive entertainment plaza.",
    image: "/images/mall.png"
  },
  { 
    title: "Varna Green Layouts", 
    type: "Residential Layout", 
    status: "Planning Phase", 
    desc: "Premium, master-planned residential plots surrounded by lush landscapes, complete with world-class clubhouse amenities and smart infrastructure.",
    image: "/images/layout.png"
  },
  { 
    title: "Varna Tech Park 2.0", 
    type: "Infrastructure", 
    status: "Breaking Ground Q4", 
    desc: "A futuristic tech ecosystem designed for AI and biotech firms, featuring state-of-the-art labs and recreational zones.",
    image: "/images/construction.png"
  }
];

export default function Upcoming() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gold-base/10 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
          Upcoming <span className="text-gradient-gold italic">Projects</span>
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-12" />
        
        <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mb-24 leading-relaxed">
          Get an exclusive preview of our future landmarks. We are pushing the boundaries of architecture and sustainability in our next wave of developments.
        </p>
        
        <div className="space-y-32">
          {upcomingProjects.map((project, i) => (
            <div key={project.title} className="flex flex-col md:flex-row gap-12 items-center group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-midnight/50 to-transparent z-10 mix-blend-overlay pointer-events-none" />
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gold-light text-[10px] uppercase tracking-[0.3em] font-medium border border-gold-base/30 px-3 py-1 rounded-full bg-gold-base/5">{project.type}</span>
                  <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-medium">{project.status}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white font-light leading-tight">
                  {project.title}
                </h2>
                <p className="text-white/70 font-light leading-relaxed text-lg max-w-lg">
                  {project.desc}
                </p>
                <Link href="/contact" className="inline-block mt-8">
                  <button className="px-8 py-3 bg-white/5 border border-white/20 text-white hover:bg-gold-base hover:border-gold-base hover:text-midnight transition-all duration-500 rounded-full font-semibold uppercase tracking-widest text-xs">
                    Register Interest
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}




