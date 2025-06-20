import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#projects' }, // 👈 This will scroll to the projects section
    { name: 'Our Team', href: '#team' },
    { name: 'Services', href: '#services' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  // Optional: smooth scroll polyfill for older browsers if needed
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-3/4 h-full bg-white shadow-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-5 flex justify-end">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="px-8 py-4">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <a
                      href={link.href}
                      className="text-xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300 block py-2"
                      onClick={() => {
                        // Slight delay to ensure smooth scroll before menu closes
                        setTimeout(toggleMenu, 100);
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
