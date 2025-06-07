import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Calendar, Users } from 'lucide-react';

const EventsGallerySection = ({ handleActionButtonClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of event images - using only available image for now
  const eventImages = [
    {
      src: '/event_1.png',
      title: 'Grand Opening Night',
      description: 'A spectacular evening celebrating our launch'
    },
    {
      src: '/event_2.png', // Using same image until you add event_2.png
      title: 'Cultural Festival',
      description: 'Traditional music and dance performances'
    },
    {
      src: '/event_3.png', // Using same image until you add event_3.png
      title: 'Private Celebration',
      description: 'Intimate gatherings in our elegant space'
    }
  ];

  // Debug: Log current image info
  useEffect(() => {
    console.log('Current image index:', currentImageIndex);
    console.log('Current image src:', eventImages[currentImageIndex]?.src);
    console.log('Current image title:', eventImages[currentImageIndex]?.title);
  }, [currentImageIndex, eventImages]);

  // Auto-slide effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % eventImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [eventImages.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-6"
          >
            <Camera className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6" 
              style={{ fontFamily: "'Cinzel', serif" }}>
            Event Memories
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-8 rounded-full" />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Relive the magical moments from our unforgettable events at Bombay Social Club
          </p>
        </motion.div>

        {/* Main Gallery Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={eventImages[currentImageIndex].src}
                  alt={eventImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.backgroundColor = '#374151';
                    e.target.style.display = 'block';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', eventImages[currentImageIndex].src);
                  }}
                />
              </AnimatePresence>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Image Info */}
              <motion.div 
                key={`info-${currentImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">
                  {eventImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-200">
                  {eventImages[currentImageIndex].description}
                </p>
              </motion.div>

              {/* Progress Indicator */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {eventImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            
            {/* Event Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <Calendar className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Events Hosted</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-gray-400">Happy Guests</div>
              </motion.div>
            </div>

            {/* Event Types */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">We Host Amazing Events</h3>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300">Private Parties & Celebrations</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300">Corporate Events & Meetings</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300">Cultural Festivals & Shows</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300">Special Occasions & Festivals</span>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  console.log('Button clicked: Book an Event');
                  handleActionButtonClick("Book an Event");
                }}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-center font-semibold shadow-lg"
              >
                Book Your Event with Us
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation Dots */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 space-x-3"
        >
          {eventImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-red-500 scale-125 shadow-lg shadow-red-500/30' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`View event ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsGallerySection;