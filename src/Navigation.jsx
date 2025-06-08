import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, Mail, MapPin, Calendar, ShoppingBag, Utensils, Star, Gift, Facebook, MessageCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from './animations';

// Component for navigation items
const NavItem = ({ icon, text, onClick }) => (
  <motion.button
    variants={fadeIn}
    onClick={onClick}
    className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-white transition-all duration-300 w-full text-left rounded-lg mx-2"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span>{icon}</span>
    <span>{text}</span>
  </motion.button>
);

const Navigation = ({ 
  isNavOpen, 
  toggleNav, 
  setIsMenuModalOpen, 
  setIsOffersModalOpen, 
  setIsPhoneModalOpen, 
  setIsEventBookingModalOpen, 
  setIsCateringModalOpen, 
  openGoogleReviews, 
  openDirections,
  scrollY 
}) => {
  return (
    <>
      {/* Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleNav}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full shadow-2xl transition-all duration-500 ${
          scrollY > 100 ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white scale-110' : 'bg-gray-800/80 backdrop-blur-sm text-red-500'
        } hover:scale-125`}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={24} />
      </motion.button>

      {/* Side Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black z-40 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex justify-end p-6">
              <motion.button 
                onClick={toggleNav} 
                className="text-white hover:text-red-400 transition-colors p-2 rounded-full hover:bg-gray-700"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <div className="px-4">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                <div className="px-6 text-gray-400 text-sm mb-8">
                  <h2 
                    className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6 text-center"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Bombay Social Club
                  </h2>
                </div>
                
                <NavItem icon={<Menu size={18} />} text="Home" onClick={() => {toggleNav();}} />
                <NavItem icon={<Utensils size={18} />} text="Menu" onClick={() => {setIsMenuModalOpen(true); toggleNav();}} />
                <NavItem icon={<Gift size={18} />} text="Special Offers" onClick={() => {setIsOffersModalOpen(true); toggleNav();}} />
                <NavItem icon={<Calendar size={18} />} text="Book a Table" onClick={() => {setIsPhoneModalOpen(true); toggleNav();}} />
                <NavItem icon={<Calendar size={18} />} text="Book an Event" onClick={() => {setIsEventBookingModalOpen(true); toggleNav();}} />
                <NavItem icon={<ShoppingBag size={18} />} text="Catering Services" onClick={() => {setIsCateringModalOpen(true); toggleNav();}} />
                <NavItem icon={<Star size={18} />} text="Reviews" onClick={() => {openGoogleReviews(); toggleNav();}} />
                
                <div className="mx-6 my-8 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                
                <div className="px-6 text-gray-400 text-sm">
                  <div className="space-y-4">
                    <button 
                      onClick={() => {openDirections(); toggleNav();}}
                      className="flex items-center space-x-3 hover:text-red-400 transition-colors w-full text-left"
                    >
                      <MapPin size={16} className="text-red-500" />
                      <span>Get Directions</span>
                    </button>
                    <a href="tel:519-601-9782" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                      <Phone size={16} className="text-red-500" />
                      <span>Call Us</span>
                    </a>
                    <a href="mailto:admin@socialclub.club" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                      <Mail size={16} className="text-red-500" />
                      <span>Email Us</span>
                    </a>
                  </div>
                  
                  <div className="mt-6">
                    <p className="mb-3 font-medium text-white">Follow Us</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-transform"
                      >
                        <Instagram size={18} className="text-white" />
                      </a>
                      <a 
                        href="https://www.facebook.com/bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:scale-110 transition-transform"
                      >
                        <Facebook size={18} className="text-white" />
                      </a>
                      <a 
                        href="https://www.tiktok.com/@bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:scale-110 transition-transform border border-white"
                      >
                        <MessageCircle size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;