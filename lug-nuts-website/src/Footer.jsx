import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  
  const getBgColor = () => {
    switch(location.pathname) {
      case '/videos':
        return 'bg-gruvboxGreen';
      case '/resources':
        return 'bg-gruvboxBg';
      case '/terminal-commands':
        return 'bg-gruvboxGray'; // Changed to gray
      default:
        return 'bg-gruvbox-dark0';
    }
  };

  return (
    <footer className={`${getBgColor()} border-t border-gruvbox-dark2 py-8 text-center text-sm text-gruvbox-dark1 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2">LUGNUTS @ UTA - Open Source, Open Mind</p>
        <p>🚀 Powered by Linux and Vim</p>
      </div>
    </footer>
  );
}

export default Footer;