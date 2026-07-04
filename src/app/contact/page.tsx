"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleWhatsAppSubmit = () => {
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !message) {
      alert("Please enter at least your first name and a message.");
      return;
    }
    const text = `Hello Varna Properties,\n\nMy name is ${firstName} ${lastName}.\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedText = encodeURIComponent(text);
    // Using the India number provided (+91 63029 38595)
    const whatsappUrl = `https://wa.me/916302938595?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 md:pt-48 px-6 md:px-12 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-base/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-midnight blur-[150px] pointer-events-none rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="max-w-7xl w-full relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center md:text-left mb-16">
          <p className="text-gradient-gold text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Connect with us</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            Get in <span className="text-gradient-gold italic">Touch</span>
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight mx-auto md:mx-0" />
        </motion.div>
        
        <motion.div 
          variants={zoomIn}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 bg-[#0a0a0a]/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          
          {/* Left Panel: Contact Form */}
          <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
            <motion.h3 variants={fadeInUp} className="text-3xl font-serif text-white mb-2">Send an Inquiry</motion.h3>
            <motion.p variants={fadeInUp} className="text-white/50 font-light mb-10">Our dedicated team of luxury real estate experts is ready to assist you.</motion.p>
            
            <motion.form variants={staggerContainer} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="relative group">
                  <input type="text" id="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-4 top-4 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                    First Name
                  </label>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative group">
                  <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-4 top-4 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                    Last Name
                  </label>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="relative group">
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="Email Address" />
                <label htmlFor="email" className="absolute left-4 top-4 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                  Email Address
                </label>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative group">
                <textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer resize-none" placeholder="Message" />
                <label htmlFor="message" className="absolute left-4 top-4 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                  How can we help you?
                </label>
              </motion.div>
              
              <motion.button 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppSubmit}
                type="button" 
                className="w-full py-4 bg-gradient-to-r from-gold-base to-gold-light text-midnight font-bold tracking-widest uppercase text-xs rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow duration-300 relative overflow-hidden group"
              >
                {/* Button shine effect */}
                <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
          
          {/* Right Panel: Image & Details */}
          <div className="lg:col-span-5 relative min-h-[500px] overflow-hidden">
             <motion.img 
               animate={{ scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
               src="/images/skyline_tower.png" 
               alt="Corporate Office" 
               className="absolute inset-0 w-full h-full object-cover origin-center" 
             />
             <div className="absolute inset-0 bg-midnight/80 backdrop-blur-[4px]" />
             
             <motion.div 
               variants={staggerContainer}
               className="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-10"
             >
               <div>
                  <motion.h4 variants={fadeInUp} className="text-white font-serif text-3xl mb-8">Global Headquarters</motion.h4>
                  <div className="space-y-6">
                    <motion.div variants={fadeInUp} className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-inner shadow-white/20">
                        <span className="text-gold-light text-sm">📍</span>
                      </div>
                      <div>
                        <p className="text-white/90 font-light leading-relaxed">
                          1-522, Pedagadi, Near Paradesiamma Temple<br/>
                          Vuda Colony, 531173<br/>
                          Visakhapatnam, Andhra Pradesh
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner shadow-white/20">
                        <span className="text-gold-light text-sm">📞</span>
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <p className="text-white/90 font-light">+91 63029 38595 <span className="text-white/50 text-xs ml-1 tracking-widest">(INDIA)</span></p>
                        <p className="text-white/90 font-light">+65 8483 3901 <span className="text-white/50 text-xs ml-1 tracking-widest">(SINGAPORE)</span></p>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner shadow-white/20">
                        <span className="text-gold-light text-sm">✉️</span>
                      </div>
                      <p className="text-white/90 font-light">info@varna-properties.com</p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner shadow-white/20">
                        <span className="text-gold-light text-sm">🌐</span>
                      </div>
                      <p className="text-white/90 font-light">www.varna-properties.com</p>
                    </motion.div>
                  </div>
               </div>
               
               <motion.div variants={fadeInUp}>
                 <p className="text-gold-light text-xs uppercase tracking-[0.3em] mb-4">Connect Socially</p>
                 <div className="flex gap-4">
                   {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                     <motion.a 
                       whileHover={{ scale: 1.1, y: -2 }}
                       whileTap={{ scale: 0.95 }}
                       key={social} 
                       href="#" 
                       className="px-4 py-2 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest hover:border-gold-base hover:text-gold-light hover:bg-gold-base/10 transition-colors duration-300 backdrop-blur-sm"
                     >
                       {social}
                     </motion.a>
                   ))}
                 </div>
               </motion.div>
             </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
