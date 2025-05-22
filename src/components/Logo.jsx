import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center">
      <img
        src="src\components\Option 2 Aligned Logo Png.png" // Make sure logo.png is placed inside the public folder
        alt="Emphasis Designs Logo"
        className="w-30 h-14 object-contain" // Increased size
      />
    </a>
  );
};

export default Logo;
