"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Page3DTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -20, rotateY: 10, scale: 0.8, z: -500 }}
      animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
      transition={{ 
        duration: 2.5, 
        ease: [0.16, 1, 0.3, 1], // Custom easing for premium 3D feel
        delay: 3.5 // Starts coming in right as splash screen ends
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="origin-top"
    >
      {children}
    </motion.div>
  );
}
