import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-[75vh] w-full hero-clip overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Modern construction site with tall buildings and cranes"
          src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      
      <div className="absolute inset-0 hero-overlay z-10"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-2"
          >
            <p className="text-gray-700 font-medium uppercase tracking-wider">AT</p>
            <h1 className="text-3xl font-bold mb-2">EMPHASIS DESIGNS</h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            WE DELIVER THE BEST
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
          >
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-full z-0">
        <div className="w-full h-full bg-yellow-400 opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
