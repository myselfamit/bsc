import React from 'react';
import { motion } from 'framer-motion';

// Component for action buttons
const ActionButton = ({ text, bgColor, hoverColor, onClick, icon }) => (
  <motion.button 
    onClick={onClick}
    className={`${bgColor} hover:${hoverColor} text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 border border-gray-700 flex items-center gap-2 font-medium`}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)" }}
    whileTap={{ scale: 0.95 }}
  >
    {icon && <span>{icon}</span>}
    {text}
  </motion.button>
);

export default ActionButton;