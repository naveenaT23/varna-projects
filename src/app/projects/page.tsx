"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
          Featured <span className="text-gradient-gold italic">Projects</span>
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.5 }}
                className="group relative h-96 w-full overflow-hidden bg-transparent border border-white/10 rounded-sm cursor-pointer"
              >
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                
                <div className="absolute inset-0 bg-transparent/40 group-hover:bg-transparent/20 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <div>
                    <p className="text-gradient-gold text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                    <h3 className="text-3xl font-serif text-white mb-2">{project.name}</h3>
                    <div className="overflow-hidden mt-2">
                      <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 inline-flex items-center gap-2 bg-gradient-to-r from-gold-base to-gold-light text-midnight px-6 py-2 rounded-full font-semibold text-xs uppercase tracking-widest shadow-lg">
                        View Details <span>→</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/50 font-light mb-5">{project.year}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
