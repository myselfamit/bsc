import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';

const AboutSection = () => {
  return (
    <ParallaxSection speed={0.3}>
      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Authentic Flavors of India
            </motion.h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Bombay Social Club brings the vibrant tastes, aromas, and culture of India to London, Ontario. 
              Our chefs craft each dish with authentic spices and traditional techniques to deliver 
              an unforgettable culinary journey.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you're joining us for a casual dinner, celebrating a special occasion, or 
              ordering takeout, we promise a dining experience that celebrates the rich diversity 
              of Indian cuisine.
            </p>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-red-500/20 to-orange-400/20 rounded-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
              <motion.img 
                src="/event_glance.jpeg" 
                alt="Bombay Social Club event and dining experience" 
                className="w-full h-auto rounded-xl relative z-10 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </ParallaxSection>
  );
};

export default AboutSection;