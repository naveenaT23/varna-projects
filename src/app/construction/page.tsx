"use client";

import { motion } from "framer-motion";



export default function Construction() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 text-center md:text-left">
          Engineering <span className="text-gradient-gold italic">Excellence</span>
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-16 mx-auto md:mx-0" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
              At Varna, construction is more than assembly—it is the precise orchestration of materials, technology, and master craftsmanship. We employ cutting-edge methodologies to ensure structural integrity that outlasts generations.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
              Every project begins with a relentless pursuit of perfection. From the deepest foundations to the highest spires, our engineering teams push the boundaries of what is possible in modern real estate development. We view every site as a blank canvas where architectural vision meets robust structural engineering.
            </p>
            <ul className="space-y-6 mt-12">
              {['Advanced BIM 3D Modeling', 'Sustainable Green-Certified Materials', 'Rigorous International Safety Standards', 'Seismic & Climate-Resistant Engineering'].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="flex items-center text-white/90 text-lg font-light tracking-wide"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight rounded-full mr-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[600px] w-full border border-white/10 rounded-3xl overflow-hidden group shadow-2xl">
             <img src="/images/construction_hero.png" alt="Engineering Render" className="absolute inset-0 w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
             {/* Decorative lines */}
             <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
             <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
             <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5" />
             <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-white/5" />
          </div>
        </div>
      </motion.div>

      {/* Core Methodologies Section */}
      <section className="w-full max-w-7xl mx-auto py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our <span className="italic text-gradient-gold">Methodology</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">We combine decades of hands-on field experience with the latest innovations in construction technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Foundation & Structure",
              desc: "Deep pile foundations and high-grade steel reinforcement ensure our buildings withstand extreme environmental stressors and time itself.",
              img: "/images/construction_foundation.png"
            },
            {
              title: "Precision Engineering",
              desc: "Utilizing 3D laser scanning, automated drones, and AI-assisted planning for millimeter-perfect site execution and progress tracking.",
              img: "/images/construction_precision.png"
            },
            {
              title: "Sustainable Practices",
              desc: "Integrating solar-ready infrastructure, advanced rainwater harvesting systems, and low-carbon cement in every premium development.",
              img: "/images/construction_sustainable.png"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="h-56 overflow-hidden relative border-b border-white/10">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-midnight/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-light transition-colors">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Quality Measures Section */}
      <section className="w-full max-w-7xl mx-auto py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Uncompromising <span className="italic text-gradient-gold">Quality</span></h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-12">
              Quality is not an afterthought; it is built into the fabric of our process. We enforce the strictest quality control measures in the industry to guarantee that every Varna property is a masterpiece of durability and design.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "500-Point Inspection Protocol", desc: "Every unit undergoes a rigorous 500-point checklist before handover." },
                { title: "Independent Third-Party Audits", desc: "We invite global engineering firms to audit our structural integrity at key milestones." },
                { title: "On-Site Material Testing Labs", desc: "Concrete and steel are tested on-site daily to ensure they meet international ISO standards." }
              ].map((measure, i) => (
                <div key={measure.title} className="flex items-start">
                  <div className="text-gradient-gold font-serif text-2xl mr-6 mt-1">0{i + 1}</div>
                  <div>
                    <h4 className="text-xl text-white mb-2">{measure.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{measure.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="/images/construction_quality.png" alt="Quality Assurance" className="absolute inset-0 w-full h-full object-cover brightness-[0.8]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-midnight/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
               <p className="text-white font-serif text-3xl">Zero <span className="italic text-gold-light">Compromise</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
