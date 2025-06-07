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