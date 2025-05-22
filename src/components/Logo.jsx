import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center">
      <img
        src="https://images.pexels.com/photos/32205933/pexels-photo-32205933.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Make sure logo.png is placed inside the public folder
        alt="Emphasis Designs Logo"
        className="w-30 h-14 object-contain" // Increased size
      />
    </a>
  );
};

export default Logo;
