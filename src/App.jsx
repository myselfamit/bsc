import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EventsGallerySection from './EventsGallerySection';
import MenuHighlightsSection from './MenuHighlightsSection';
import EventsCateringSection from './EventsCateringSection';
import ContactLocationSection from './ContactLocationSection';
import Footer from './Footer';

// Import all modals
import OffersModal from './OffersModal';
import MenuModal from './MenuModal';
import EventBookingModal from './EventBookingModal';
import CateringModal from './CateringModal';
import PhoneModal from './PhoneModal';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false);
  const [isEventBookingModalOpen, setIsEventBookingModalOpen] = useState(false);
  const [isCateringModalOpen, setIsCateringModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Add Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=182+York+Street,+London,+ON+N6A+1B5,+Canada', '_blank');
  };

  const openGoogleReviews = () => {
    window.open('https://www.google.com/maps/place/182+York+St,+London,+ON+N6A+1B5,+Canada/@42.9826421,-81.2519121,17z/data=!3m1!4b1!4m6!3m5!1s0x882ef21af6c6ef93:0xc0f76a990ed1e5f5!8m2!3d42.9826421!4d-81.2519121!16s%2Fg%2F11c5m7z9qh?entry=ttu', '_blank');
  };

  const handleActionButtonClick = (text) => {
    console.log('Action button clicked with text:', text); // Debug log
    if (text === "Book a Table") {
      setIsPhoneModalOpen(true);
    } else if (text === "Book an Event") {
      setIsEventBookingModalOpen(true);
    } else if (text === "View Menu" || text === "View Full Menu") {
      setIsMenuModalOpen(true);
    } else if (text === "Special Offers") {
      setIsOffersModalOpen(true);
    } else if (text === "Inquire About Catering") {
      setIsCateringModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
      {/* All Modals */}
      <AnimatePresence>
        {isMenuModalOpen && (
          <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
        )}
        {isOffersModalOpen && (
          <OffersModal isOpen={isOffersModalOpen} onClose={() => setIsOffersModalOpen(false)} />
        )}
        {isEventBookingModalOpen && (
          <EventBookingModal isOpen={isEventBookingModalOpen} onClose={() => setIsEventBookingModalOpen(false)} />
        )}
        {isCateringModalOpen && (
          <CateringModal isOpen={isCateringModalOpen} onClose={() => setIsCateringModalOpen(false)} />
        )}
        {isPhoneModalOpen && (
          <PhoneModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
        )}
      </AnimatePresence>
    
      {/* Navigation */}
      <Navigation 
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        setIsMenuModalOpen={setIsMenuModalOpen}
        setIsOffersModalOpen={setIsOffersModalOpen}
        setIsPhoneModalOpen={setIsPhoneModalOpen}
        setIsEventBookingModalOpen={setIsEventBookingModalOpen}
        setIsCateringModalOpen={setIsCateringModalOpen}
        openGoogleReviews={openGoogleReviews}
        openDirections={openDirections}
        scrollY={scrollY}
      />

      {/* Hero Section */}
      <HeroSection 
        scrollY={scrollY}
        handleActionButtonClick={handleActionButtonClick}
      />

      {/* About Section */}
      <AboutSection />

      {/* Events Gallery Section */}
      <EventsGallerySection 
        handleActionButtonClick={handleActionButtonClick}
      />

      {/* Menu Highlights Section */}
      <MenuHighlightsSection 
        handleActionButtonClick={handleActionButtonClick}
      />

      {/* Events & Catering Section */}
      <EventsCateringSection 
        handleActionButtonClick={handleActionButtonClick}
      />

      {/* Contact & Location Section */}
      <ContactLocationSection 
        openDirections={openDirections}
        openGoogleReviews={openGoogleReviews}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;