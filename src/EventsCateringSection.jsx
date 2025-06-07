import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingBag, Mail } from 'lucide-react';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';
import ActionButton from './ActionButton';

const EventsCateringSection = ({ handleActionButtonClick }) => {
  return (
    <ParallaxSection speed={0.4}>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Events & Services
          </h2>
        </div>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-600/50 group hover:border-red-500/50"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
            <Calendar size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-red-500">Private Events</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Host your next celebration at Bombay Social Club. Our private dining spaces can accommodate
            intimate gatherings or large parties up to 100 guests.
          </p>
          <ActionButton 
            text="Book an Event" 
            bgColor="bg-gradient-to-r from-red-600 to-orange-500" 
            hoverColor="from-red-700 to-orange-600" 
            onClick={() => handleActionButtonClick("Book an Event")}
            icon={<Calendar size={18} />}
          />
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-600/50 group hover:border-purple-500/50"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
            <ShoppingBag size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Catering Services</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Bring the flavors of Bombay Social Club to your next event. Our catering team will work with you
            to create a custom menu perfect for your occasion.
          </p>
          <ActionButton 
            text="Inquire About Catering" 
            bgColor="bg-gradient-to-r from-purple-600 to-pink-600" 
            hoverColor="from-purple-700 to-pink-700" 
            onClick={() => handleActionButtonClick("Inquire About Catering")}
            icon={<Mail size={18} />}
          />
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default EventsCateringSection;