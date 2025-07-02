import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTimes,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FiGlobe, FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SocialConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 640) {
      const timer = setTimeout(() => setShowText(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/919036827897',
      label: 'WhatsApp',
      color: 'text-green-500 hover:text-green-600',
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/emphasisdesigns.ed',
      label: 'Instagram',
      color: 'text-pink-600 hover:text-pink-700',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/company/emphasis-designs',
      label: 'LinkedIn',
      color: 'text-blue-700 hover:text-blue-800',
    },
    {
      icon: <FaYoutube />,
      href: 'https://www.youtube.com/@emphasisdesigns',
      label: 'YouTube',
      color: 'text-red-600 hover:text-red-700',
    },
    {
      icon: <FaMapMarkerAlt />,
      href: 'https://maps.app.goo.gl/MAdKWM26yn9SbDM97',
      label: 'Google Maps',
      color: 'text-orange-500 hover:text-orange-600',
    },
  ];

  const handleConnectClick = () => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 2000);
    } else {
      setIsOpen(true);
    }

    setShowText(true);

    if (window.innerWidth < 640) {
      setTimeout(() => setShowText(false), 5000);
    }
  };

  const handleQuoteClick = () => {
    setQuoteOpen(true);
    setShowText(true);

    if (window.innerWidth < 640) {
      setTimeout(() => setShowText(false), 5000);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-3">
        {/* Social icons dropdown */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-3 mb-2 bg-white rounded-lg p-2 shadow-lg"
            >
              {socialLinks.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${color} text-3xl transition-colors duration-300 flex justify-center`}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connect Button */}
        <Button
          onClick={handleConnectClick}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close social links' : 'Open social links'}
          className={`bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center space-x-2 font-semibold transition-all duration-300
            ${showText ? 'text-lg px-6 py-3 w-[200px]' : 'text-xl p-3 w-[56px]'}
          `}
        >
          {isOpen && <FaTimes className="text-white text-xl" />}
          {showText && (
            <span className="whitespace-nowrap">{isOpen ? 'Close' : 'Connect'}</span>
          )}
          <FiGlobe className="text-white text-xl" aria-label="Website" title="Website" />
        </Button>

        {/* Get Quote Button */}
        <Button
          onClick={handleQuoteClick}
          className={`bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center space-x-2 font-semibold transition-all duration-300
            ${showText ? 'text-lg px-6 py-3 w-[200px]' : 'text-xl p-3 w-[56px]'}
          `}
        >
          {showText && <span className="whitespace-nowrap">Get Quote</span>}
          <FiInfo className="text-white text-xl" aria-label="Info icon" />
        </Button>
      </div>

      {/* Quote Modal */}
      {quoteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Request a Quote</h2>
              <button
                className="text-gray-600 hover:text-gray-800 text-2xl"
                onClick={() => setQuoteOpen(false)}
                aria-label="Close Modal"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScfmn2dFy_93G2lIbiXqgNGuTa2e6JOgv9lU3r84r689jqYAA/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Get Quote Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialConnect;
