"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Animated skyline silhouette background */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-10 pointer-events-none flex items-end">
        <motion.div 
          initial={{ x: "-10%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[200%] h-full flex"
        >
          {/* Simple abstract skyline created with blocks */}
          <div className="flex-1 flex items-end">
             {Array.from({ length: 40 }).map((_, i) => {
                // Use deterministic values for SSR hydration instead of Math.random
                const height = (Math.abs(Math.sin(i * 0.5)) * 80 + 20).toFixed(2);
                const width = (Math.abs(Math.cos(i * 0.7)) * 40 + 20).toFixed(2);
                
                return (
                  <div 
                    key={i} 
                    className="bg-white/10 mx-1"
                    style={{ 
                      height: `${height}%`, 
                      width: `${width}px` 
                    }}
                  />
                );
             })}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img 
              src="/images/logo.png" 
              alt="Varna Projects" 
              className="h-20 md:h-28 w-auto object-contain -ml-4 -mt-4 mb-2"
              style={{ filter: "hue-rotate(-135deg) saturate(1.5) brightness(1.2) contrast(1.1)" }}
            />
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Building tomorrow's landmarks with uncompromising quality, innovative engineering, and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-r from-gold-base via-gold-light to-gold-dark text-midnight hover:text-charcoal hover:border-gold-base transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gradient-gold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about', title: 'Learn About Varna Projects Construction Legacy' },
                { name: 'Our Projects', href: '/projects', title: 'Explore Our Real Estate Projects in Vizag' },
                { name: 'Luxury Real Estate', href: '/real-estate', title: 'View Luxury Villas & Properties' },
                { name: 'Upcoming Ventures', href: '/upcoming', title: 'Register for Upcoming Real Estate Projects' },
                { name: 'Contact Us', href: '/contact', title: 'Contact Our Property Consultants' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} title={link.title} className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gradient-gold mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Luxury Villas', href: '/real-estate' },
                { name: 'Commercial Spaces', href: '/projects' },
                { name: 'Integrated Townships', href: '/real-estate' },
                { name: 'Premium Construction', href: '/construction' },
                { name: 'NRI Property Investment', href: '/contact' }
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.href} title={`Varna Projects - ${service.name} in Visakhapatnam`} className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gradient-gold mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li className="flex flex-col">
                <span className="text-white/40 mb-1 text-xs uppercase tracking-wider">Address</span>
                <span>1-522, Pedagadi, Near Paradesiamma<br/>Temple, Vuda Colony, 531173,<br/>Visakhapatnam, Andhra Pradesh.</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 mb-1 text-xs uppercase tracking-wider">Phone</span>
                <span>+91 63029 38595 (INDIA)<br/>+65 8483 3901 (SINGAPORE)</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 mb-1 text-xs uppercase tracking-wider">Email & Web</span>
                <span>info@varna-properties.com<br/>www.varna-properties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Varna Projects Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


