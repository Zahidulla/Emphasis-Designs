import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: 'spring',
      stiffness: 60,
      damping: 18,
    },
  }),
};

const offerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const offerTexts = [
  {
    title: "Special Offer on Interior Designing!",
    description: "Get a modern makeover with up to 20% off on interior design services.",
  },
  {
    title: "Exterior Designing & Execution Deals",
    description: "Avail exciting discounts on complete exterior design and execution packages.",
  },
  {
    title: "Warranty on All Our Works",
    description: "We offer up to 5 years warranty on design & construction work.",
  },
];

const breathingOpacityCSS = `
@keyframes breathingOpacity {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}
.breathing-opacity {
  animation: breathingOpacity 4s ease-in-out infinite;
}
`;

const Hero = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let styleTag = document.getElementById('breathing-opacity-style');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'breathing-opacity-style';
        styleTag.innerHTML = breathingOpacityCSS;
        document.head.appendChild(styleTag);
      }
    }
  }, []);

  useEffect(() => {
    const offerInterval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offerTexts.length);
    }, 3000);
    return () => clearInterval(offerInterval);
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden h-[85vh]">
      <img
        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
        alt="Construction Site"
        className="absolute inset-0 w-full h-full object-cover brightness-95"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/100 via-white/90 to-white/0 sm:via-white/80 sm:to-transparent"></div>

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
          Crafting Spaces That Inspires
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentOfferIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={offerVariants}
            transition={{ duration: 0.5 }}
            className="mt-6 bg-orange-100 text-orange-900 px-4 py-3 rounded-md shadow-sm"
          >
            <div className="font-semibold">{offerTexts[currentOfferIndex].title}</div>
            <div className="text-sm">{offerTexts[currentOfferIndex].description}</div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-10 py-4 rounded-md shadow-lg breathing-opacity"
              onClick={() => setIsQuoteOpen(true)}
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl relative max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Request a Quote</h2>
              <button
                className="text-gray-600 hover:text-gray-800 text-xl"
                onClick={() => setIsQuoteOpen(false)}
                aria-label="Close Modal"
              >
                ×
              </button>
            </div>
            <div className="p-4 w-full">
              <div className="h-[80vh] sm:aspect-[16/9] w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScfmn2dFy_93G2lIbiXqgNGuTa2e6JOgv9lU3r84r689jqYAA/viewform?embedded=true"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="Get Quote Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
