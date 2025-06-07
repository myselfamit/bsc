import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-black text-gray-400 py-12 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 
              className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Bombay Social Club
            </h2>
            <p className="text-gray-400">Authentic Indian Cuisine</p>
            <p className="text-sm text-gray-500 mt-2">Tuesday-Sunday: 5PM-2AM | Monday: Closed</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">&copy; {new Date().getFullYear()} Bombay Social Club. All rights reserved.</p>
            <a 
              href="https://www.bombaysocialclub.com" 
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              www.bombaysocialclub.com
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;