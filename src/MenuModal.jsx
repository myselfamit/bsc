import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { foodMenu, drinksMenu } from './menuData';

// Menu Modal Component with text-based menu
const MenuModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('food');
  
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-700"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gradient-to-r from-red-600 to-orange-500">
          <h2 className="text-2xl font-bold text-white">Our Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/20 text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex border-b border-gray-700">
          <button 
            onClick={() => setActiveTab('food')}
            className={`flex-1 py-3 text-base font-medium transition-all duration-300 ${activeTab === 'food' ? 'text-red-500 border-b-2 border-red-500 bg-gray-700/30' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Food Menu
          </button>
          <button 
            onClick={() => setActiveTab('drinks')}
            className={`flex-1 py-3 text-base font-medium transition-all duration-300 ${activeTab === 'drinks' ? 'text-red-500 border-b-2 border-red-500 bg-gray-700/30' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Drinks Menu
          </button>
        </div>
        
        <div className="overflow-auto p-4 bg-gray-900">
          {activeTab === 'food' ? (
            <div className="space-y-8">
              {Object.entries(foodMenu).map(([category, items]) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-red-500 mb-4 border-b border-gray-700 pb-2">{category}</h3>
                  <div className="grid gap-3">
                    {items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700/30 last:border-b-0">
                        <span className="text-gray-200">{item.name}</span>
                        <span className="text-red-400 font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(drinksMenu).map(([category, items]) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-red-500 mb-4 border-b border-gray-700 pb-2">{category}</h3>
                  <div className="grid gap-3">
                    {items.map((item, index) => (
                      <div key={index} className="py-2 border-b border-gray-700/30 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <span className="text-gray-200 font-medium">{item.name}</span>
                            {item.desc && <p className="text-gray-400 text-sm mt-1">{item.desc}</p>}
                            {item.extra && <p className="text-gray-400 text-sm mt-1">{item.extra}</p>}
                          </div>
                          <span className="text-red-400 font-semibold ml-4">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuModal;