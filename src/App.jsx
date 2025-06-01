import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import StickyQuoteButton from '@/components/StickyQuoteButton';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar isScrolled={isScrolled} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
        <StickyQuoteButton />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
