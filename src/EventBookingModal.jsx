import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Event Booking Modal Component
const EventBookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    people: '',
    eventType: '',
    specialRequests: ''
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.people || !formData.eventType) {
      alert('Please fill in all required fields');
      return;
    }
    
    const subject = `Private Event Booking - ${formData.name}`;
    const body = `
Private Event Booking Details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date of Event: ${formData.date}
Time of Event: ${formData.time}
Number of People: ${formData.people}
Event Type: ${formData.eventType}
Special Requests: ${formData.specialRequests || 'None'}

We would like to book your private dining space for our event. Please contact me to confirm availability and discuss details.

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
          <h2 className="text-2xl font-bold text-red-500">Book Event</h2>
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
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
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
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
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
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Your email address"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Date of Event *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Time of Event *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
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
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Expected number of guests"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Event Type *</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
            >
              <option value="">Select event type</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Wedding Reception">Wedding Reception</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Graduation">Graduation</option>
              <option value="Holiday Party">Holiday Party</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Any special dietary requirements, decorations, or other requests..."
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Send Event Booking Request
          </button>
        </div>
        
        <p className="text-gray-400 text-sm mt-4 text-center">
          This will open your email client to send us your private event details
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EventBookingModal;