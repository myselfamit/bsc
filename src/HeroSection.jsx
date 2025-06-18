import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Utensils, Gift } from 'lucide-react';
import ActionButton from './ActionButton';
import { fadeIn, staggerContainer } from './animations';
import videoSrc from '/bsc.mp4';

const HeroSection = ({ scrollY, handleActionButtonClick }) => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  // Use useInView with 70% threshold for scroll activation
  const isInView = useInView(heroRef, { 
    threshold: 0.7,
    once: false // Set to true if you want animation to trigger only once
  });
  
  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Enhanced scroll-based video opacity changes
  const getVideoOpacity = () => {
    const scrollPercent = Math.min(scrollY / (window.innerHeight * 2), 1);
    return Math.max(0.3, 1 - scrollPercent * 0.7);
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: yBg,
          scale: scale
        }}
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: "brightness(0.3) contrast(1.2)",
            opacity: opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? getVideoOpacity() : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <source src="https://bombay-social-club-assets.s3.ca-central-1.amazonaws.com/bsc.mp4" type="video/mp4" /> */}
          <source src="/bsc.mp4" type="video/mp4" />
          {/* <source src="/bsc.mp4" type="video/mp4" /> */}
          {/* <source src="/bsc.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </motion.video>

      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-1"></div>
      
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Bombay Social Club
        </motion.h1>
        <motion.div 
          variants={fadeIn}
          className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-8 rounded-full"
        />
        <motion.p 
          variants={fadeIn}
          className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
        >
          Experience authentic Indian cuisine in the heart of London, Ontario
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6">
          <ActionButton 
            text="Book a Table" 
            bgColor="bg-gradient-to-r from-red-600 to-orange-500" 
            hoverColor="from-red-700 to-orange-600" 
            onClick={() => handleActionButtonClick("Book a Table")}
            icon={<Calendar size={20} />}
          />
          <ActionButton 
            text="View Menu" 
            bgColor="bg-gray-800/80 backdrop-blur-sm" 
            hoverColor="bg-gray-900" 
            onClick={() => handleActionButtonClick("View Menu")}
            icon={<Utensils size={20} />}
          />
          <ActionButton 
            text="Special Offers" 
            bgColor="bg-gradient-to-r from-purple-600 to-pink-600" 
            hoverColor="from-purple-700 to-pink-700" 
            onClick={() => handleActionButtonClick("Special Offers")}
            icon={<Gift size={20} />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;