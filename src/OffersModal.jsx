import React from 'react';
import { motion } from 'framer-motion';
import { X, Gift } from 'lucide-react';

// Offers Modal Component
const OffersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const offers = [
    {
      title: "Happy Hour Special",
      description: "50% off on all cocktails and mocktails",
      time: "Tuesday to Friday, 5PM - 8PM",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Weekend Special",
      description: "Buy 2 sizzlers, get 1 dessert free",
      time: "Saturday & Sunday, All Day",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Specials",
      description: "Get 10% off on take out & We match uber eats offers too",
      time: "All days",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Group Discount",
      description: "10% off on tables of 6 or more",
      time: "All days, advance booking required",
      color: "from-indigo-600 to-purple-600"
    }
  ];
  
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
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-700"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gradient-to-r from-red-600 to-orange-500">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Gift size={24} />
            Special Offers
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/20 text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-auto p-6 bg-gray-900">
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${offer.color} p-6 rounded-xl text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/90 mb-3">{offer.description}</p>
                  <p className="text-sm text-white/80 bg-black/20 rounded-lg px-3 py-1 inline-block">
                    {offer.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OffersModal;