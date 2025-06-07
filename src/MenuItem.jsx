import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './animations';

// Component for menu items
const MenuItem = ({ title, description, price, category }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeIn}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-red-500/30 group"
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{title}</h3>
      <span className="text-red-500 font-bold text-lg">{price}</span>
    </div>
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-xs text-gray-400 uppercase tracking-wider bg-gray-700/50 px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  </motion.div>
);

export default MenuItem;