"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center pt-32">
        <h1 className="text-4xl font-serif text-white mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-gradient-gold uppercase tracking-widest text-sm">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end pb-16 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image src={project.image} alt={project.name} fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full uppercase tracking-widest text-xs transition-all duration-300 mb-8 w-fit">
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gradient-gold text-sm uppercase tracking-[0.3em] mb-4">{project.category} — {project.year}</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">
              {project.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-6 md:px-12 pt-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl font-serif text-white mb-6">About The <span className="italic">Project</span></h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-gold-base to-transparent mb-8" />
            <p className="text-xl text-white/70 font-light leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Right Column: Key Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm h-fit"
          >
            <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4">Project Highlights</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Total Area Size</p>
                <p className="text-2xl font-serif text-gold-light">{project.areaSize}</p>
              </div>
              
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Estimated Cost</p>
                <p className="text-2xl font-serif text-gold-light">{project.projectCost}</p>
              </div>
              
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Development Timeline</p>
                <p className="text-2xl font-serif text-gold-light">{project.timeline}</p>
              </div>
            </div>
            
            <button className="mt-12 w-full py-4 border border-gold-base/50 text-gold-light hover:bg-gold-base hover:text-midnight transition-colors duration-500 uppercase tracking-widest text-xs font-semibold rounded-full">
              Download Brochure
            </button>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
