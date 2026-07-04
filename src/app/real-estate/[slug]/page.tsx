"use client";

import { realEstateData } from "@/data/realEstateData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function RealEstateDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = realEstateData.find((item) => item.slug === slug);

  if (!service && slug) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center pt-32 px-6">
        <h1 className="text-4xl text-white">Service Not Found</h1>
        <Link href="/real-estate" className="text-gold-base mt-4 hover:underline">Return to Real Estate</Link>
      </main>
    );
  }

  if (!service) return null; 

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <Link href="/real-estate" className="text-white/60 hover:text-gold-base transition-colors mb-8 inline-block uppercase tracking-widest text-xs">
          ← Back to Services
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          {service.title}
        </h1>
        <p className="text-gradient-gold text-sm uppercase tracking-[0.3em] mb-12">{service.tag}</p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[400px] md:h-[600px] bg-[#e5e5e5] relative overflow-hidden rounded-sm mb-16"
        >
          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-4xl">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="text-3xl font-serif text-white mb-6"
          >
            Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 font-light text-lg mb-8 leading-relaxed"
          >
            {service.desc}
          </motion.p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-gold-base to-transparent my-12" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-serif text-white mb-6"
          >
            Detailed Brief
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/80 font-light text-lg mb-8 leading-relaxed whitespace-pre-wrap"
          >
            {service.detailedBrief}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Key Specifications</h3>
              <div className="space-y-6">
                {service.specs?.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-white/60 font-light">{spec.label}</span>
                    <span className="text-white font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Premium Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold-base to-gold-light" />
                    <span className="text-white/80 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
