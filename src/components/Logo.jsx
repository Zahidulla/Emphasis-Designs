import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center">
      <img
        src="https://res.cloudinary.com/dgztlk3y1/image/upload/v1751441885/WhatsApp_Image_2025-06-01_at_6.09.50_PM_1_hixsag.png" // Make sure logo.png is placed inside the public folder
        alt="Emphasis Designs Logo"
        className="w-30 h-14 object-contain" // Increased size
      />
    </a>
  );
};

export default Logo;
