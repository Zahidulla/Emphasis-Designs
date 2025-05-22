import React from 'react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="footer-bg py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>
        
        <div className="text-white">
          <p className="text-sm">
            GST Number: 29KQXPS9337B1ZR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;