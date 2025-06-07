import React from 'react';
import { motion } from 'framer-motion';
import { X, Phone } from 'lucide-react';

// Phone Modal Component
const PhoneModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 border border-gray-700"
      >
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-4 rounded-full">
              <Phone size={36} className="text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">Call Us To Reserve</h2>
          <p className="text-gray-300 mb-4">Please call us to book your table or discuss any queries</p>
          <a 
            href="tel:519-601-9782" 
            className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2 hover:text-red-400 transition-colors mb-4"
          >
            <Phone size={24} />
            519-601-9782
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p>Available during business hours:</p>
          <p className="text-red-400 font-medium">Tuesday-Sunday: 5PM - 2AM</p>
          <p className="text-red-400 font-medium">Monday: Closed</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneModal;