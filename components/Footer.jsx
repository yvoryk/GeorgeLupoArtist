// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <a 
        href="https://www.instagram.com/yaroslav_waryk/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        Instagram
      </a>
      <a 
        href="https://www.facebook.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        Facebook
      </a>
    </div>
  );
};

export default Footer;
