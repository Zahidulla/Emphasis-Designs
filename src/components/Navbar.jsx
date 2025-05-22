import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = ({ isScrolled, toggleMenu }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#projects' },
    { name: 'Our Team', href: '#team' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation with more spacing */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 hover:text-orange-500 transition-colors duration-300 text-base font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button with Hover Animation */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="p-0"
          >
            <Menu className="h-8 w-8 text-gray-900" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
