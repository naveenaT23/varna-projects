"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Construction", href: "/construction" },
  { name: "Real Estate", href: "/real-estate" },
  { name: "Gallery", href: "/gallery" },
  { name: "Upcoming", href: "/upcoming" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "py-4 bg-transparent/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group -ml-2 -my-2 md:-ml-4 md:-my-6">
          <img 
            src="/images/logo.png" 
            alt="Varna Projects" 
            className="h-16 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105"
            style={{ filter: "hue-rotate(-135deg) saturate(1.5) brightness(1.2) contrast(1.1)" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                title={`Varna Projects - ${link.name} | Luxury Real Estate & Construction`}
                className={clsx(
                  "text-[11px] uppercase tracking-widest relative group py-1 transition-colors",
                  isActive ? "text-gold-light" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-base to-gold-light transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
          
          <Link href="https://wa.me/6584833901?text=Hello%20Varna%20Projects%2C%20I%20would%20like%20to%20enquire%20about%20your%20luxury%20real%20estate%20properties." title="Enquire about Luxury Real Estate via WhatsApp" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border border-gold-base text-gold-light hover:bg-gradient-to-r hover:from-gold-base hover:via-gold-light hover:to-gold-dark hover:text-midnight hover:border-transparent transition-all duration-300 uppercase tracking-widest text-[11px] font-medium rounded-sm text-center ml-2">
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center h-screen space-y-6 overflow-y-auto pt-20 pb-10"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "font-serif text-3xl md:text-5xl transition-colors",
                    pathname === link.href ? "text-gold-light italic" : "text-white hover:text-gold-light"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Scroll Down Indicator */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none"
          >
            <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-4">Scroll Down</span>
            <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold-light to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


