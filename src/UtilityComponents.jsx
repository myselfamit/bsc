import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Parallax Section Component
export const ParallaxSection = ({ children, bgColor = "bg-gray-900", speed = 0.5 }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();
  
  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;
  
  const yRange = useTransform(scrollY, [initial, final], [0, speed * 100]);
  
  return (
    <motion.section 
      className={`${bgColor} py-16 md:py-24 relative overflow-hidden`}
      style={{ y: yRange }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

// Scroll-triggered Animation Component
export const ScrollReveal = ({ children, threshold = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 75 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: threshold }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);