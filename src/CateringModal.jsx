import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Catering Modal Component
const CateringModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    people: '',
    budget: '',
    menuPreferences: '',
    additionalInfo: ''
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.location || !formData.people) {
      alert('Please fill in all required fields');
      return;
    }
    
    const subject = `Catering Service Request - ${formData.name}`;
    const body = `
Catering Service Request:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Date: ${formData.date}
Event Location: ${formData.location}
Number of People: ${formData.people}
Budget Range: ${formData.budget || 'Not specified'}
Menu Preferences: ${formData.menuPreferences || 'Open to suggestions'}
Additional Information: ${formData.additionalInfo || 'None'}

We are interested in your catering services for our upcoming event. Please contact me to discuss menu options, pricing, and availability.

Thank you!
    `;
    
    window.location.href = `mailto:customerservice@bombaysocialclub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
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
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 border border-gray-700 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-400">Catering Inquiry</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Your email address"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Event Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Event Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Where is your event taking place?"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Number of People *</label>
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              min="1"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Expected number of guests"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">Select budget range</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 - $2000">$1000 - $2000</option>
              <option value="$2000 - $5000">$2000 - $5000</option>
              <option value="Over $5000">Over $5000</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Menu Preferences</label>
            <textarea
              name="menuPreferences"
              value={formData.menuPreferences}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Any specific dishes you'd like? Dietary restrictions? Spice level preferences?"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="2"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Any other details about your event or catering needs..."
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Send Catering Inquiry
          </button>
        </div>
        
        <p className="text-gray-400 text-sm mt-4 text-center">
          This will open your email client to send us your catering inquiry
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CateringModal;