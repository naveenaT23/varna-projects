"use client";

import { motion } from "framer-motion";



export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-base/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl w-full px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight">
            About <span className="text-gradient-gold italic">Varna</span>
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mb-12" />
          
          <p className="text-xl md:text-3xl text-white/80 font-light leading-relaxed mb-8 max-w-4xl">
            Varna Projects Pvt. Ltd. was founded on a singular vision: to redefine the landscape of luxury construction and premium real estate. We don't just build structures; we craft environments that inspire, elevate, and endure.
          </p>
        </motion.div>
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:border-gold-base/50 transition-colors duration-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-base/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-light transition-colors duration-500 relative z-10">Our Vision</h3>
            <p className="text-white/70 font-light leading-relaxed text-lg relative z-10">
              To be the benchmark of architectural excellence and sustainable development, creating landmarks that define the skyline of tomorrow and leave a lasting legacy for generations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:border-gold-base/50 transition-colors duration-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-base/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-light transition-colors duration-500 relative z-10">Our Mission</h3>
            <p className="text-white/70 font-light leading-relaxed text-lg relative z-10">
              Delivering uncompromising quality through innovative engineering, meticulous attention to detail, and a relentless pursuit of perfection in every single aspect of development.
            </p>
          </motion.div>
        </div>

        {/* Our Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="mt-32 pt-16 border-t border-white/10"
        >
           <h3 className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">Our History</h3>
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">The <span className="italic">Journey</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
               <p>
                 Starting over 15 years ago with a small team of passionate architects and engineers, Varna Projects embarked on a journey to challenge the status quo in the real estate sector.
               </p>
               <p>
                 Today, we have grown into a multidisciplinary powerhouse, completing over 50 prestige projects across the nation. From boutique luxury villas to sprawling commercial ecosystems, our legacy is built on trust, transparency, and a deeply ingrained culture of excellence.
               </p>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-midnight/80 to-transparent z-10 mix-blend-overlay" />
                <img src="/hero-frames/ezgif-frame-040.jpg" alt="Varna Journey" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
           </div>
        </motion.div>
        
        {/* Leadership Team */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="mt-32 pt-16 border-t border-white/10"
        >
           <h3 className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">Leadership</h3>
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">The <span className="italic">Visionaries</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                   <img src="/images/founder.png" alt="Bhanu Varma" className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-midnight via-midnight/80 to-transparent pt-32">
                   <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold-light transition-colors duration-500">Bhanu Varma</h3>
                   <p className="text-white/70 uppercase tracking-widest text-xs font-medium">Founder</p>
                </div>
             </div>
             
             <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl md:mt-16">
                <div className="aspect-[4/5] overflow-hidden">
                   <img src="/images/ceo.jpg" alt="Naveena Varma" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-midnight via-midnight/80 to-transparent pt-32">
                   <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold-light transition-colors duration-500">Naveena Varma</h3>
                   <p className="text-white/70 uppercase tracking-widest text-xs font-medium">Chief Executive Officer</p>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Core Values */}
        <div className="mt-32">
          <div className="mb-16 text-center">
             <h3 className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">What Drives Us</h3>
             <h2 className="text-4xl md:text-5xl font-serif text-white">Our Core <span className="italic">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every transaction." },
              { title: "Innovation", desc: "Embracing technology to build smarter and faster." },
              { title: "Sustainability", desc: "Eco-friendly practices for a greener future." },
              { title: "Excellence", desc: "Unmatched quality in design and construction." }
            ].map((value, i) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-500"
               >
                 <h4 className="text-xl font-serif text-white mb-3 text-gradient-gold">{value.title}</h4>
                 <p className="text-white/60 font-light text-sm">{value.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}




