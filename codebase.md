# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bombay Social Club | Authentic Indian Experience in London, Ontario</title>
    <meta name="description" content="Experience authentic Indian cuisine at Bombay Social Club in London, Ontario. Book a table or order online today.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

# package.json

```json
{
  "name": "bombay-social-club",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.12.2",
    "lucide-react": "^0.511.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^6.3.5"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

# public\drinks.png

This is a binary file of the type: Image

# public\event_glance.jpeg

This is a binary file of the type: Image

# public\food.png

This is a binary file of the type: Image

# public\main_display.jpeg

This is a binary file of the type: Image

# public\vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

# src\AboutSection.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';

const AboutSection = () => {
  return (
    <ParallaxSection speed={0.3}>
      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Authentic Flavors of India
            </motion.h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Bombay Social Club brings the vibrant tastes, aromas, and culture of India to London, Ontario. 
              Our chefs craft each dish with authentic spices and traditional techniques to deliver 
              an unforgettable culinary journey.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you're joining us for a casual dinner, celebrating a special occasion, or 
              ordering takeout, we promise a dining experience that celebrates the rich diversity 
              of Indian cuisine.
            </p>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-red-500/20 to-orange-400/20 rounded-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
              <motion.img 
                src="/event_glance.jpeg" 
                alt="Bombay Social Club event and dining experience" 
                className="w-full h-auto rounded-xl relative z-10 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </ParallaxSection>
  );
};

export default AboutSection;
```

# src\ActionButton.jsx

```jsx
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
```

# src\animations.js

```js
// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
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
```

# src\assets\react.svg

This is a file of the type: SVG Image

# src\CateringModal.jsx

```jsx
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
```

# src\ContactLocationSection.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Star, ExternalLink } from 'lucide-react';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';

const ContactLocationSection = ({ openDirections, openGoogleReviews }) => {
  return (
    <ParallaxSection bgColor="bg-gray-800" speed={0.2}>
      <div className="grid lg:grid-cols-2 gap-16">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Visit Us</h2>
          
          <div className="space-y-6 mb-10">
            <motion.button
              onClick={openDirections}
              className="flex items-start space-x-4 w-full text-left hover:text-red-400 transition-colors group p-4 rounded-lg hover:bg-gray-700/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={24} className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium">182 York Street</p>
                <p className="text-gray-400">London, Ontario, N6A 1B5</p>
                <p className="text-sm text-red-400 mt-1">Click for directions</p>
              </div>
            </motion.button>
            
            <a href="tel:519-601-9782" className="flex items-center space-x-4 hover:text-red-400 transition-colors group p-4 rounded-lg hover:bg-gray-700/30">
              <Phone size={24} className="text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-lg">519-601-9782</span>
            </a>
            
            <a href="mailto:customerservice@bombaysocialclub.com" className="flex items-center space-x-4 hover:text-red-400 transition-colors group p-4 rounded-lg hover:bg-gray-700/30">
              <Mail size={24} className="text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>customerservice@bombaysocialclub.com</span>
            </a>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Business Hours</h3>
            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
              <div className="grid gap-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                  <span className="font-medium text-red-400">Monday</span>
                  <span className="text-red-300">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-green-400">Tuesday - Sunday</span>
                  <span className="text-green-300">5:00 PM - 2:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Follow Us & Reviews</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Instagram size={20} className="text-white" />
                <span className="text-white font-medium">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Facebook size={20} className="text-white" />
                <span className="text-white font-medium">Facebook</span>
              </a>
              <a 
                href="https://www.tiktok.com/@bsc_london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 px-6 py-3 rounded-full border border-white transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} className="text-white" />
                <span className="text-white font-medium">TikTok</span>
              </a>
              <button
                onClick={openGoogleReviews}
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Star size={20} className="text-white" />
                <span className="text-white font-medium">Google Reviews</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative">
            <div className="aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-gray-600/50 shadow-2xl">
              <iframe
                title="Bombay Social Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.553533053727!2d-81.25191212342185!3d42.982642097377626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21af6c6ef93%3A0xc0f76a990ed1e5f5!2s182%20York%20St%2C%20London%2C%20ON%20N6A%201B5%2C%20Canada!5e0!3m2!1sen!2sus!4v1716140158030!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full hover:saturate-150 transition-all duration-500"
              />
            </div>
            <button
              onClick={openDirections}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={20} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
};

export default ContactLocationSection;
```

# src\EventBookingModal.jsx

```jsx
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
          <h2 className="text-2xl font-bold text-red-500">Book Private Event</h2>
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
```

# src\EventsCateringSection.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingBag, Mail } from 'lucide-react';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';
import ActionButton from './ActionButton';

const EventsCateringSection = ({ handleActionButtonClick }) => {
  return (
    <ParallaxSection speed={0.4}>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Events & Services
          </h2>
        </div>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-600/50 group hover:border-red-500/50"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
            <Calendar size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-red-500">Private Events</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Host your next celebration at Bombay Social Club. Our private dining spaces can accommodate
            intimate gatherings or large parties up to 100 guests.
          </p>
          <ActionButton 
            text="Book an Event" 
            bgColor="bg-gradient-to-r from-red-600 to-orange-500" 
            hoverColor="from-red-700 to-orange-600" 
            onClick={() => handleActionButtonClick("Book an Event")}
            icon={<Calendar size={18} />}
          />
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-600/50 group hover:border-purple-500/50"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
            <ShoppingBag size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Catering Services</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Bring the flavors of Bombay Social Club to your next event. Our catering team will work with you
            to create a custom menu perfect for your occasion.
          </p>
          <ActionButton 
            text="Inquire About Catering" 
            bgColor="bg-gradient-to-r from-purple-600 to-pink-600" 
            hoverColor="from-purple-700 to-pink-700" 
            onClick={() => handleActionButtonClick("Inquire About Catering")}
            icon={<Mail size={18} />}
          />
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default EventsCateringSection;
```

# src\Footer.jsx

```jsx
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
```

# src\HeroSection.jsx

```jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Utensils, Gift } from 'lucide-react';
import ActionButton from './ActionButton';
import { fadeIn, staggerContainer } from './animations';

const HeroSection = ({ scrollY, handleActionButtonClick }) => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Enhanced scroll-based background changes with more dramatic transitions
  const getHeroBackground = () => {
    const scrollPercent = Math.min(scrollY / (window.innerHeight * 2), 1);
    if (scrollPercent < 0.2) return "url('/main_display.jpeg')";
    if (scrollPercent < 0.4) return "url('/event_glance.jpeg')";
    if (scrollPercent < 0.6) return "url('/main_display.jpeg')";
    if (scrollPercent < 0.8) return "url('/event_glance.jpeg')";
    return "url('/main_display.jpeg')";
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: yBg,
          scale: scale
        }}
      >
        <motion.div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: getHeroBackground(),
            backgroundPosition: "center", 
            backgroundSize: "cover",
            filter: "brightness(0.3) contrast(1.2)",
            opacity: opacity
          }}
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-1"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Bombay Social Club
        </motion.h1>
        <motion.div 
          variants={fadeIn}
          className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-8 rounded-full"
        />
        <motion.p 
          variants={fadeIn}
          className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
        >
          Experience authentic Indian cuisine in the heart of London, Ontario
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6">
          <ActionButton 
            text="Book a Table" 
            bgColor="bg-gradient-to-r from-red-600 to-orange-500" 
            hoverColor="from-red-700 to-orange-600" 
            onClick={() => handleActionButtonClick("Book a Table")}
            icon={<Calendar size={20} />}
          />
          <ActionButton 
            text="View Menu" 
            bgColor="bg-gray-800/80 backdrop-blur-sm" 
            hoverColor="bg-gray-900" 
            onClick={() => handleActionButtonClick("View Menu")}
            icon={<Utensils size={20} />}
          />
          <ActionButton 
            text="Special Offers" 
            bgColor="bg-gradient-to-r from-purple-600 to-pink-600" 
            hoverColor="from-purple-700 to-pink-700" 
            onClick={() => handleActionButtonClick("Special Offers")}
            icon={<Gift size={20} />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
```

# src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

/* Custom styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
}
```

# src\main.jsx

```jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

# src\menuData.js

```js
// Menu data for food and drinks
export const foodMenu = {
  "Nibblers": [
    { name: "Peanut Crunch Masala", price: "$5.99" },
    { name: "Chakli with Schezwan", price: "$5.99" },
    { name: "Masala Papad", price: "$5.99" },
    { name: "Chana Zor Garam", price: "$5.99" },
    { name: "Chana Garlic Fry", price: "$5.99" },
    { name: "Peri Peri Cheese Sticks", price: "$5.99" }
  ],
  "Appetizers": [
    { name: "Chicken Wings", price: "$13.99" },
    { name: "Chicken Fingers", price: "$12.99" },
    { name: "Ghochu Karaage", price: "$14.99" },
    { name: "Bombay Theccha Tikka Chicken", price: "$17.99" },
    { name: "Bombay Theccha Tikka Paneer", price: "$16.99" },
    { name: "Mumbai Tikka Chicken", price: "$17.99" },
    { name: "Mumbai Tikka Paneer", price: "$16.99" },
    { name: "BSC Koliwada Chicken/Fish", price: "$17.99" },
    { name: "Crispy Shrimp Fry", price: "$16.99" },
    { name: "Schezwan Momos Veg/Chicken", price: "$14.99 / $15.99" },
    { name: "Fried Momos Veg/Chicken", price: "$13.99 / $14.99" }
  ],
  "Sizzlers": [
    { name: "Chicken Tikka Sizzler", price: "$23.99" },
    { name: "Paneer Tikka Sizzler", price: "$21.99" }
  ],
  "Sandwiches & Burgers": [
    { name: "Amchi Mumbai Club Sandwich", price: "$13.99" },
    { name: "Toofani Chicken Sandwich", price: "$14.99" },
    { name: "Smokey Chicken Melt Sandwich", price: "$14.99" },
    { name: "Bombay Tikka Royale", price: "$14.99" },
    { name: "Tikki Walla Burger", price: "$13.99" },
    { name: "Classic BSC Burger", price: "$15.99" }
  ],
  "Extras": [
    { name: "Mint Mayo Dip", price: "$0.99" },
    { name: "Mint Chutney", price: "$0.99" },
    { name: "Theccha Dip", price: "$1.49" },
    { name: "Extra Farsan", price: "$1.49" },
    { name: "Schezwan Dip", price: "$0.99" }
  ]
};

export const drinksMenu = {
  "Rum": [
    { name: "Bacardi White", price: "$4.49/OZ" },
    { name: "Captain Morgan Dark", price: "$4.99/OZ" },
    { name: "Bacardi Black", price: "$4.49/OZ" },
    { name: "Havana Club", price: "$4.99/OZ" },
    { name: "Bumbu - Premium Rum", price: "$6.99/OZ" },
    { name: "Old Monk", price: "$6.99/OZ" }
  ],
  "Wines": [
    { name: "Moscato Jacob's Creek (White Wine) - 6 OZ", price: "$5.99" },
    { name: "Chardonnay Yellow Tail (White Wine) - 6 OZ", price: "$6.99" },
    { name: "Shiraz Yellow Tail (Red Wine) - 9 OZ", price: "$7.99" },
    { name: "Jackson Triggs Cab Sav (Red Wine) - 9 OZ", price: "$8.99" }
  ],
  "Gin": [
    { name: "Beefeater", price: "$4.49/OZ" },
    { name: "Hendricks", price: "$5.99/OZ" }
  ],
  "Vodka": [
    { name: "Smirnoff", price: "$4.49/OZ" },
    { name: "Grey Goose", price: "$6.49/OZ" }
  ],
  "Shots": [
    { name: "Silver Sauza", price: "$5.49" },
    { name: "Jose Gold", price: "$6.99" },
    { name: "Gold Sauza", price: "$6.29" },
    { name: "Jägermeister", price: "$5.49" },
    { name: "Anejo Patron", price: "$7.99" },
    { name: "Malibu", price: "$4.59" }
  ],
  "Beers": [
    { name: "Alexander Keith - Draft", price: "$8.09", extra: "Pitcher $20.99" },
    { name: "Juicy Ass - Draft", price: "$8.09", extra: "Pitcher $20.99" },
    { name: "Coors Light - Draft", price: "$6.99", extra: "Pitcher $18.99" },
    { name: "Canadian Molson - Draft", price: "$6.99", extra: "Pitcher $18.99" },
    { name: "Corona Extra - 330ml bottle", price: "$7.99" },
    { name: "Sapporo - 500ml can", price: "$8.49" },
    { name: "Guinness - 500ml Can", price: "$8.99" },
    { name: "Lava Lamp - 500ml Can Non-Alc", price: "$5.99" }
  ],
  "Whiskey": [
    { name: "Jack Daniels", price: "$4.49/OZ" },
    { name: "Crown Royal", price: "$4.49/OZ" },
    { name: "Jack Daniels Honey", price: "$4.99/OZ" },
    { name: "Canadian Club", price: "$4.49/OZ" },
    { name: "Jameson", price: "$4.99/OZ" },
    { name: "Jack Daniels Fire", price: "$4.99/OZ" }
  ],
  "Premium Whiskey": [
    { name: "Dalmore 12 Year Old Single Malt", price: "$11.99/OZ" },
    { name: "Glenfiddick 12 Year Old Single Malt", price: "$10.99/OZ" },
    { name: "Black Label 12 Years Old", price: "$7.99/OZ" }
  ],
  "Mocktails": [
    { name: "Lime Soda", price: "$4.29", desc: "Lime, Salt, Chat masala, Soda and Sugar syrup" },
    { name: "Kokumi Fizz", price: "$4.99", desc: "Kokum syrup, Chat Masala, soda" },
    { name: "Virgin Mojito", price: "$5.49", desc: "Lime, Salt Sprite, Chat masala, Mint Leaves and Sugar syrup" },
    { name: "V. Pineapple Punch", price: "$6.99", desc: "Pineapple syrup, Sprite, Coconut, & Diced Pineapple" },
    { name: "V. Bombay Blue", price: "$6.49", desc: "Blue Curacao, Sprite, Coconut, Lemon Slice & Lemon Juice" },
    { name: "Green Paradise", price: "$5.99", desc: "Kiwi syrup, sprite, lime, & mint leaves" }
  ],
  "Cocktails": [
    { name: "Kokamartini", price: "$7.99", desc: "Kokum (Goa Butter fruit), Gin, Salt" },
    { name: "Classic Caesar", price: "$8.49", desc: "Vodka, Clamato Juice, Worcestershire sauce, celery salt, tabasco, & lemon juice" },
    { name: "Spicy Guava", price: "$8.49", desc: "Guava Juice, Chillies, & Vodka" },
    { name: "Pineapple Punch", price: "$9.49", desc: "Pineapple syrup, Vodka & Coconut" },
    { name: "Rimjim Barish", price: "$8.49", desc: "Vodka, Rimjhim, lime juice, and a splash of soda" },
    { name: "Licky Litchee", price: "$8.99", desc: "Lychee puree, lychee chunks, vodka, salt" },
    { name: "Mumbai Mule", price: "$9.49", desc: "Vodka, Mango, ginger beer, lime juice" },
    { name: "Bombay Blue", price: "$9.49", desc: "Blue Curacao, White Rum, Sprite, Coconut, Lemon Slice & Lemon Juice" }
  ]
};
```

# src\MenuHighlightsSection.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee } from 'lucide-react';
import { ParallaxSection, ScrollReveal } from './UtilityComponents';
import MenuItem from './MenuItem';
import ActionButton from './ActionButton';

const MenuHighlightsSection = ({ handleActionButtonClick }) => {
  return (
    <ParallaxSection bgColor="bg-gray-800" speed={0.2}>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Menu Highlights
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our menu features a curated selection of traditional Indian favorites and innovative fusion dishes
          </p>
        </div>
      </ScrollReveal>
      
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <motion.div 
          className="flex-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full mr-4">
              <Utensils size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-red-500">Food</h3>
          </div>
          
          <div className="space-y-6">
            <MenuItem 
              title="Butter Chicken" 
              description="Tender chicken in a rich, creamy tomato sauce with aromatic spices" 
              price="$18.99"
              category="Main Course"
            />
            <MenuItem 
              title="Lamb Biryani" 
              description="Fragrant basmati rice cooked with tender lamb and traditional spices" 
              price="$21.99"
              category="Rice Dish"
            />
            <MenuItem 
              title="Paneer Tikka Masala" 
              description="Grilled cottage cheese in a flavorful tomato and onion gravy" 
              price="$16.99"
              category="Vegetarian"
            />
            <MenuItem 
              title="BSC Koliwada Chicken" 
              description="Crispy chicken pieces with special Mumbai-style coating and spices" 
              price="$17.99"
              category="Signature Dish"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mr-4">
              <Coffee size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-purple-400">Drinks</h3>
          </div>
          
          <div className="space-y-6">
            <MenuItem 
              title="Kokamartini" 
              description="Unique cocktail with Kokum (Goa butter fruit), gin, and salt" 
              price="$7.99"
              category="Signature Cocktail"
            />
            <MenuItem 
              title="Mumbai Mule" 
              description="Indian twist on classic mule with vodka, mango, and ginger beer" 
              price="$9.49"
              category="Cocktail"
            />
            <MenuItem 
              title="Virgin Mojito" 
              description="Refreshing mint and lime mocktail with chat masala twist" 
              price="$5.49"
              category="Mocktail"
            />
            <MenuItem 
              title="Old Monk Rum" 
              description="Premium Indian dark rum, perfect for connoisseurs" 
              price="$6.99/OZ"
              category="Premium Spirit"
            />
          </div>
        </motion.div>
      </div>
      
      <ScrollReveal>
        <div className="text-center">
          <ActionButton 
            text="View Full Menu" 
            bgColor="bg-gradient-to-r from-red-600 to-orange-500" 
            hoverColor="from-red-700 to-orange-600" 
            onClick={() => handleActionButtonClick("View Full Menu")}
            icon={<Utensils size={20} />}
          />
        </div>
      </ScrollReveal>
    </ParallaxSection>
  );
};

export default MenuHighlightsSection;
```

# src\MenuItem.jsx

```jsx
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
```

# src\MenuModal.jsx

```jsx
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
```

# src\Navigation.jsx

```jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, Mail, MapPin, Calendar, ShoppingBag, Utensils, Star, Gift, Facebook, MessageCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from './animations';

// Component for navigation items
const NavItem = ({ icon, text, onClick }) => (
  <motion.button
    variants={fadeIn}
    onClick={onClick}
    className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-white transition-all duration-300 w-full text-left rounded-lg mx-2"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span>{icon}</span>
    <span>{text}</span>
  </motion.button>
);

const Navigation = ({ 
  isNavOpen, 
  toggleNav, 
  setIsMenuModalOpen, 
  setIsOffersModalOpen, 
  setIsPhoneModalOpen, 
  setIsEventBookingModalOpen, 
  setIsCateringModalOpen, 
  openGoogleReviews, 
  openDirections,
  scrollY 
}) => {
  return (
    <>
      {/* Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleNav}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full shadow-2xl transition-all duration-500 ${
          scrollY > 100 ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white scale-110' : 'bg-gray-800/80 backdrop-blur-sm text-red-500'
        } hover:scale-125`}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={24} />
      </motion.button>

      {/* Side Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black z-40 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex justify-end p-6">
              <motion.button 
                onClick={toggleNav} 
                className="text-white hover:text-red-400 transition-colors p-2 rounded-full hover:bg-gray-700"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <div className="px-4">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                <div className="px-6 text-gray-400 text-sm mb-8">
                  <h2 
                    className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6 text-center"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Bombay Social Club
                  </h2>
                </div>
                
                <NavItem icon={<Menu size={18} />} text="Home" onClick={() => {toggleNav();}} />
                <NavItem icon={<Utensils size={18} />} text="Menu" onClick={() => {setIsMenuModalOpen(true); toggleNav();}} />
                <NavItem icon={<Gift size={18} />} text="Special Offers" onClick={() => {setIsOffersModalOpen(true); toggleNav();}} />
                <NavItem icon={<Calendar size={18} />} text="Book a Table" onClick={() => {setIsPhoneModalOpen(true); toggleNav();}} />
                <NavItem icon={<Calendar size={18} />} text="Book an Event" onClick={() => {setIsEventBookingModalOpen(true); toggleNav();}} />
                <NavItem icon={<ShoppingBag size={18} />} text="Catering Services" onClick={() => {setIsCateringModalOpen(true); toggleNav();}} />
                <NavItem icon={<Star size={18} />} text="Reviews" onClick={() => {openGoogleReviews(); toggleNav();}} />
                
                <div className="mx-6 my-8 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                
                <div className="px-6 text-gray-400 text-sm">
                  <div className="space-y-4">
                    <button 
                      onClick={() => {openDirections(); toggleNav();}}
                      className="flex items-center space-x-3 hover:text-red-400 transition-colors w-full text-left"
                    >
                      <MapPin size={16} className="text-red-500" />
                      <span>Get Directions</span>
                    </button>
                    <a href="tel:519-601-9782" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                      <Phone size={16} className="text-red-500" />
                      <span>Call Us</span>
                    </a>
                    <a href="mailto:customerservice@bombaysocialclub.com" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                      <Mail size={16} className="text-red-500" />
                      <span>Email Us</span>
                    </a>
                  </div>
                  
                  <div className="mt-6">
                    <p className="mb-3 font-medium text-white">Follow Us</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-transform"
                      >
                        <Instagram size={18} className="text-white" />
                      </a>
                      <a 
                        href="https://www.facebook.com/bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:scale-110 transition-transform"
                      >
                        <Facebook size={18} className="text-white" />
                      </a>
                      <a 
                        href="https://www.tiktok.com/@bsc_london/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:scale-110 transition-transform border border-white"
                      >
                        <MessageCircle size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
```

# src\OffersModal.jsx

```jsx
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
      time: "Tuesday to Friday, 5PM - 7PM",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Weekend Feast",
      description: "Buy 2 sizzlers, get 1 appetizer free",
      time: "Saturday & Sunday, All Day",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Ladies Night",
      description: "Free welcome drink for all ladies",
      time: "Every Wednesday, 7PM onwards",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Group Discount",
      description: "15% off on tables of 6 or more",
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
```

# src\PhoneModal.jsx

```jsx
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
```

# src\UtilityComponents.jsx

```jsx
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Parallax Section Component
export const ParallaxSection = ({ children, bgColor = "bg-gray-900", speed = 0.5 }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();
  
  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;
  
  const yRange = useTransform(scrollY, [initial, final], [0, speed * 100]);
  
  return (
    <motion.section 
      className={`${bgColor} py-16 md:py-24 relative overflow-hidden`}
      style={{ y: yRange }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

// Scroll-triggered Animation Component
export const ScrollReveal = ({ children, threshold = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 75 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: threshold }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indian-red': '#e94b3c',
        'indian-yellow': '#f9c941',
        'indian-green': '#2a9d8f',
      },
    },
  },
  plugins: [],
}
```

# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

