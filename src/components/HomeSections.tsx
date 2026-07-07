"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function HomeSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Popup state and ref
  const section2Ref = useRef<HTMLDivElement>(null);
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSection2InView && !popupDismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSection2InView, popupDismissed]);

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Construct WhatsApp message
    const message = `*New Real Estate Enquiry*
Name: ${formData.get('name')}
Phone: ${formData.get('phone')}
Email: ${formData.get('email')}
Location: ${formData.get('location') || 'Not specified'}
Property Type: ${formData.get('type')}
Budget: ${formData.get('budget')}
Timeline: ${formData.get('timeline')}
Preferred Contact: ${formData.get('contact')}
Message: ${formData.get('message') || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "6584833901"; // Exact Singapore WhatsApp number provided
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    
    setIsSubmitted(true);
    
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF', '#F3E5AB'] // Gold and white
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
      setPopupDismissed(true);
    }, 5000);
  };

  // Parallax setup for the entire sections container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div ref={containerRef} className="w-full bg-transparent relative z-10">
      {/* 2. Philosophy & Introduction */}
      <section ref={section2Ref} className="w-full py-32 md:py-48 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Building beyond architecture. <span className="text-gradient-gold italic">Crafting environments</span> that inspire, elevate, and endure.
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto mt-12 mb-12" />
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Varna Projects represents the pinnacle of luxury development, seamlessly blending cutting-edge engineering with timeless design.
          </p>
        </motion.div>
      </section>

      {/* 3. Featured Portfolio Highlight */}
      <section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h3 className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Featured <span className="italic">Landmarks</span></h2>
          </div>
          <Link href="/projects" title="Explore Luxury Real Estate Projects in Visakhapatnam" className="hidden md:inline-block text-xs uppercase tracking-widest hover:text-gradient-gold transition-colors">
            Explore Luxury Projects Portfolio →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <Link href="/projects">
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#0a0a0a] rounded-2xl relative cursor-pointer shadow-2xl border border-white/5">
                 <motion.div style={{ y: yImage1, scale: 1.15 }} className="absolute inset-0 w-full h-full">
                   <Image 
                     src="/images/architecture.png" alt="The Skyline Tower" 
                     fill
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-cover origin-center group-hover:scale-[1.2] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                   />
                 </motion.div>
                 <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                 
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="overflow-hidden mb-2">
                       <motion.p className="text-gradient-gold text-xs uppercase tracking-[0.2em] transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500">Commercial</motion.p>
                    </div>
                    <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-md">The Skyline Tower</h3>
                    <p className="text-white/80 font-light text-sm backdrop-blur-sm bg-white/5 inline-block px-3 py-1 rounded-full border border-white/10">Metropolis Financial District</p>
                 </div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative lg:mt-32"
          >
            <Link href="/projects">
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#0a0a0a] rounded-2xl relative cursor-pointer shadow-2xl border border-white/5">
                 <motion.div style={{ y: yImage2, scale: 1.15 }} className="absolute inset-0 w-full h-full">
                   <Image 
                     src="/images/interior.png" alt="Aura Residences" 
                     fill
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-cover origin-center group-hover:scale-[1.2] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                   />
                 </motion.div>
                 <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                 
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="overflow-hidden mb-2">
                       <motion.p className="text-gradient-gold text-xs uppercase tracking-[0.2em] transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500">Residential</motion.p>
                    </div>
                    <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-md">Aura Residences</h3>
                    <p className="text-white/80 font-light text-sm backdrop-blur-sm bg-white/5 inline-block px-3 py-1 rounded-full border border-white/10">Coastal Front Escapes</p>
                 </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        <Link href="/projects" title="Explore Luxury Real Estate Projects in Visakhapatnam" className="md:hidden block text-center mt-16 text-xs uppercase tracking-widest hover:text-gradient-gold transition-colors">
          Explore Luxury Projects Portfolio →
        </Link>
      </section>



      {/* 4. Excellence By The Numbers - Bento Box Grid */}
      <section className="w-full py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yImage4, scale: 1.2 }}
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        >
          <Image src="/hero-frames/ezgif-frame-010.jpg" alt="Legacy Background" fill sizes="100vw" className="object-cover grayscale" />
          <div className="absolute inset-0 bg-midnight/60 mix-blend-overlay" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h3 className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4">By The Numbers</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our <span className="italic">Legacy</span></h2>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-base/20 blur-[100px] rounded-full group-hover:bg-gold-base/30 transition-colors duration-700" />
            <h4 className="text-7xl lg:text-8xl font-serif text-white mb-4 font-bold tracking-tighter">
              <AnimatedNumber value={50} suffix="" /><span className="text-gradient-gold">+</span>
            </h4>
            <p className="text-white/70 text-sm uppercase tracking-[0.3em] font-medium">Projects Completed</p>
            <p className="text-white/50 mt-6 font-light max-w-sm">Delivering architectural excellence across residential and commercial sectors for over a decade.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 flex flex-col justify-center"
          >
            <h4 className="text-5xl font-serif text-white mb-2">
              <AnimatedNumber value={15} />
            </h4>
            <p className="text-white/60 text-xs uppercase tracking-widest">Years of Excellence</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl bg-[#1a1f2c] border border-white/5 shadow-inner p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/hero-frames/ezgif-frame-020.jpg')] opacity-20 bg-cover bg-center grayscale mix-blend-overlay" />
            <div className="relative z-10">
               <h4 className="text-5xl font-serif text-gold-light mb-2">
                 <AnimatedNumber value={100} suffix="" /><span className="text-white">%</span>
               </h4>
               <p className="text-white/80 text-xs uppercase tracking-widest leading-relaxed">Client Satisfaction<br/>Rate</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-gold-base/10 border border-gold-base/20 backdrop-blur-md p-8 flex flex-col justify-center"
          >
            <h4 className="text-5xl font-serif text-white mb-2">
              <AnimatedNumber value={2} suffix="" />M<span className="text-gold-light">+</span>
            </h4>
            <p className="text-white/80 text-xs uppercase tracking-widest">SqFt Developed</p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* 4.5 The Varna Standard - Parallax Split Section */}
      <section className="w-full py-32 px-6 md:px-12 bg-transparent relative mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:w-1/2 relative z-20"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
               <h3 className="text-gold-light text-[10px] uppercase tracking-[0.3em] font-medium">The Varna Standard</h3>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
              Uncompromising <span className="italic text-gradient-gold">Quality</span> in Every Detail.
            </h2>
            <p className="text-white/70 text-lg font-light mb-8 max-w-lg leading-relaxed">
              We don't just build structures; we curate lifestyles. From the foundation to the finishing touches, our dedication to excellence ensures that every project becomes a timeless masterpiece.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 relative aspect-square md:aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-gold-base/30 via-transparent to-transparent z-10 mix-blend-overlay pointer-events-none" />
             <motion.div style={{ y: yImage3, scale: 1.2 }} className="absolute inset-0 w-full h-full pointer-events-none">
               <Image 
                 src="/hero-frames/ezgif-frame-030.jpg" alt="Quality Detail" 
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover origin-center hover:scale-105 transition-transform duration-1000" 
               />
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="w-full py-32 px-6 md:px-12 relative mt-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 text-white drop-shadow-xl">Ready to build the extraordinary?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with Varna Projects to bring your visionary real estate and construction projects to life with unparalleled precision.
            </p>
            <Link href="/contact" className="inline-block px-12 py-5 bg-white text-midnight hover:bg-gold-light transition-all duration-500 rounded-full font-semibold uppercase tracking-widest text-xs shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(252,246,186,0.5)] transform hover:-translate-y-1">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Enquire Popup */}
      <AnimatePresence>
        {showPopup && !popupDismissed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-20 md:pt-24 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md relative shadow-2xl overflow-hidden"
            >
              {/* Fixed Close Button */}
              <button 
                onClick={() => { setShowPopup(false); setPopupDismissed(true); }}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20 bg-black/40 backdrop-blur-md p-2 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar relative z-10">
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-base to-gold-dark flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-serif text-white mb-4">Welcome to <span className="text-gradient-gold">Varna Projects</span></h2>
                  <p className="text-white/60 font-light text-sm">Your enquiry has been received and sent via WhatsApp. One of our luxury property consultants will be in touch with you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-gold-light text-[10px] uppercase tracking-[0.3em] font-medium mb-2">Exclusive Access</h3>
                    <h2 className="text-3xl font-serif text-white">Enquire Now</h2>
                    <p className="text-white/60 text-sm mt-2 font-light">Register your interest in our upcoming luxury properties.</p>
                  </div>
                  
                  <form className="space-y-4" onSubmit={handleEnquirySubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input name="name" type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-base/50 transition-colors" />
                      </div>
                      <div>
                        <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-base/50 transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-base/50 transition-colors" />
                      </div>
                      <div>
                        <input name="location" type="text" placeholder="Preferred Location / City" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-base/50 transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select name="type" defaultValue="" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-gold-base/50 transition-colors appearance-none">
                        <option value="" disabled>Property Type</option>
                        <option value="residential">Luxury Villas & Residential</option>
                        <option value="commercial">Commercial Spaces</option>
                        <option value="layout">Layout Ventures (Plots)</option>
                        <option value="township">Integrated Townships</option>
                        <option value="other">Other / Advisory</option>
                      </select>
                      
                      <select name="budget" defaultValue="" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-gold-base/50 transition-colors appearance-none">
                        <option value="" disabled>Budget Range</option>
                        <option value="below-1m">Below $1M</option>
                        <option value="1m-3m">$1M - $3M</option>
                        <option value="3m-5m">$3M - $5M</option>
                        <option value="above-5m">Above $5M</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select name="timeline" defaultValue="" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-gold-base/50 transition-colors appearance-none">
                        <option value="" disabled>Purchase Timeline</option>
                        <option value="immediate">Immediately</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="just-looking">Just Exploring</option>
                      </select>
                      
                      <select name="contact" defaultValue="" required className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-gold-base/50 transition-colors appearance-none">
                        <option value="" disabled>Preferred Contact Method</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                    
                    <div>
                      <textarea name="message" placeholder="Tell us more about your requirements (optional)..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-base/50 transition-colors resize-none"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full py-4 mt-4 bg-gradient-to-r from-gold-base to-gold-dark text-midnight font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-90 transition-opacity">
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedNumber({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString() + suffix;
          }
        }
      });
    }
  }, [isInView, value, duration, motionValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

