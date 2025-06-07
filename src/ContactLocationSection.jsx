import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Star, ExternalLink } from 'lucide-react';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';

const ContactLocationSection = ({ openDirections, openGoogleReviews }) => {
  return (
    <ParallaxSection bgColor="bg-gray-800" speed={0.2}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Visit Us</h2>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <motion.button
              onClick={openDirections}
              className="flex items-start space-x-3 md:space-x-4 w-full text-left hover:text-red-400 transition-colors group p-3 md:p-4 rounded-lg hover:bg-gray-700/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform md:w-6 md:h-6" />
              <div>
                <p className="font-medium text-sm md:text-base">182 York Street</p>
                <p className="text-gray-400 text-sm md:text-base">London, Ontario, N6A 1B5</p>
                <p className="text-xs md:text-sm text-red-400 mt-1">Click for directions</p>
              </div>
            </motion.button>
            
            <a href="tel:519-601-9782" className="flex items-center space-x-3 md:space-x-4 hover:text-red-400 transition-colors group p-3 md:p-4 rounded-lg hover:bg-gray-700/30">
              <Phone size={20} className="text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform md:w-6 md:h-6" />
              <span className="text-base md:text-lg">519-601-9782</span>
            </a>
            
            <a href="mailto:customerservice@bombaysocialclub.com" className="flex items-center space-x-3 md:space-x-4 hover:text-red-400 transition-colors group p-3 md:p-4 rounded-lg hover:bg-gray-700/30">
              <Mail size={20} className="text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform md:w-6 md:h-6" />
              <span className="text-sm md:text-base break-all">customerservice@bombaysocialclub.com</span>
            </a>
          </div>
          
          <div className="mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-300">Business Hours</h3>
            <div className="bg-gray-700/30 rounded-xl p-4 md:p-6 border border-gray-600/30">
              <div className="grid gap-2 md:gap-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                  <span className="font-medium text-red-400 text-sm md:text-base">Monday</span>
                  <span className="text-red-300 text-sm md:text-base">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-green-400 text-sm md:text-base">Tuesday - Sunday</span>
                  <span className="text-green-300 text-sm md:text-base">5:00 PM - 2:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-300">Follow Us & Reviews</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:flex lg:flex-wrap lg:gap-4">
              <a 
                href="https://www.instagram.com/bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-2 sm:px-3 lg:px-6 py-3 lg:py-3 rounded-full transition-all duration-300 hover:scale-105 text-center min-h-[44px]"
              >
                <Instagram size={18} className="text-white flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-xs lg:text-sm hidden sm:inline">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 bg-blue-600 hover:bg-blue-700 px-2 sm:px-3 lg:px-6 py-3 lg:py-3 rounded-full transition-all duration-300 hover:scale-105 text-center min-h-[44px]"
              >
                <Facebook size={18} className="text-white flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-xs lg:text-sm hidden sm:inline">Facebook</span>
              </a>
              <a 
                href="https://www.tiktok.com/@bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 bg-black hover:bg-gray-800 px-2 sm:px-3 lg:px-6 py-3 lg:py-3 rounded-full border border-white transition-all duration-300 hover:scale-105 text-center min-h-[44px]"
              >
                <MessageCircle size={18} className="text-white flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-xs lg:text-sm hidden sm:inline">TikTok</span>
              </a>
              <button
                onClick={openGoogleReviews}
                className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 bg-green-600 hover:bg-green-700 px-2 sm:px-3 lg:px-6 py-3 lg:py-3 rounded-full transition-all duration-300 hover:scale-105 text-center min-h-[44px]"
              >
                <Star size={18} className="text-white flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-xs lg:text-sm hidden sm:inline">Reviews</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="h-64 sm:h-80 lg:aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-gray-600/50 shadow-2xl">
              <iframe
                title="Bombay Social Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.553533053727!2d-81.25191212342185!3d42.982642097377626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21af6c6ef93%3A0xc0f76a990ed1e5f5!2s182%20York%20St%2C%20London%2C%20ON%20N6A%201B5%2C%20Canada!5e0!3m2!1sen!2sus!4v1716140158030!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full hover:saturate-150 transition-all duration-500"
              />
            </div>
            <button
              onClick={openDirections}
              className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10"
            >
              <ExternalLink size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
};

export default ContactLocationSection;