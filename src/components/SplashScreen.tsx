"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(pathname === "/");
  const [isMounted, setIsMounted] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (pathname !== "/") return;
    
    // Trigger the split reveal animation after 2.5 seconds
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 2500);

    // Completely hide the component after the split finishes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3800); 

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!isMounted || pathname !== "/") return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
          
          {/* Top Half of the Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: isSplitting ? "-100%" : "0%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
            className="w-full h-1/2 bg-[#050505] relative pointer-events-auto flex justify-center items-end shadow-2xl z-10"
          >
            {/* Top Half of Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 w-48 h-48 md:w-64 md:h-64 translate-y-1/2"
              style={{ clipPath: "inset(0 0 50% 0)" }}
            >
              <Image 
                src="/images/varna-logo-clean.png" 
                alt="Varna Logo" 
                fill 
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Bottom Half of the Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: isSplitting ? "100%" : "0%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-1/2 bg-[#050505] relative pointer-events-auto flex justify-center items-start"
          >
            {/* Glowing Line directly on the split edge */}
            <motion.div 
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: isSplitting ? 0 : 1, width: isSplitting ? "0%" : "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent shadow-[0_0_15px_rgba(191,149,63,0.8)] z-20"
            />

            {/* Bottom Half of Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 w-48 h-48 md:w-64 md:h-64 -translate-y-1/2"
              style={{ clipPath: "inset(50% 0 0 0)" }}
            >
              <Image 
                src="/images/varna-logo-clean.png" 
                alt="Varna Logo" 
                fill 
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
