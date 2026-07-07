"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
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
    // Using the India number provided in contact
    const whatsappUrl = `https://wa.me/916302938595?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
          >
            <div className="p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-6">
                <div>
                  <motion.h3 variants={fadeInUp} className="text-3xl font-serif text-white mb-2">Send an Inquiry</motion.h3>
                  <motion.p variants={fadeInUp} className="text-white/50 font-light">Our dedicated team of luxury real estate experts is ready to assist you.</motion.p>
                </div>
                
                <motion.form variants={staggerContainer} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp} className="relative group">
                      <input type="text" id="modal-firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="First Name" />
                      <label htmlFor="modal-firstName" className="absolute left-4 top-3 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                        First Name
                      </label>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative group">
                      <input type="text" id="modal-lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="Last Name" />
                      <label htmlFor="modal-lastName" className="absolute left-4 top-3 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                        Last Name
                      </label>
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp} className="relative group">
                    <input type="email" id="modal-email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer" placeholder="Email Address" />
                    <label htmlFor="modal-email" className="absolute left-4 top-3 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                      Email Address
                    </label>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="relative group">
                    <textarea id="modal-message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-gold-base focus:bg-white/10 transition-all peer resize-none" placeholder="Message" />
                    <label htmlFor="modal-message" className="absolute left-4 top-3 text-white/50 text-sm font-light transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-gold-light peer-focus:text-xs peer-focus:bg-[#111] peer-focus:px-2 -top-2.5 text-xs bg-[#111] px-2 rounded">
                      How can we help you?
                    </label>
                  </motion.div>
                  
                  <motion.button 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppSubmit}
                    type="button" 
                    className="w-full py-4 bg-gradient-to-r from-gold-base to-gold-light text-midnight font-bold tracking-widest uppercase text-xs rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow duration-300 relative overflow-hidden group mt-4"
                  >
                    <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
                    Send Message
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
