import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 60,
      damping: 18,
    },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden h-[70vh]">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        alt="Construction Site"
        className="absolute inset-0 w-full h-full object-cover brightness-95"
      />

      {/* Stronger White Gradient Overlay on Mobile */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/100 via-white/90 to-white/0 sm:via-white/80 sm:to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center max-w-3xl mx-auto">
        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-gray-900 font-extrabold text-4xl md:text-5xl leading-tight"
        >
          EMPHASIS DESIGNS
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-4 text-gray-800 text-lg md:text-xl font-medium max-w-lg"
        >
          Crafting Spaces That Inspire & Endure
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-6 text-gray-900 text-base md:text-lg max-w-xl font-normal leading-relaxed"
        >
          We specialize in transforming your vision into reality — delivering exceptional architecture, interiors, and construction with precision and passion.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-14 py-5 rounded-md shadow-lg animate-pulse"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
