import React, { useState } from 'react';


export const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu" onClick={toggleMenu}>
        
      </div>
      <div class="logo">
          <span class="first-letter">D</span>
          <span class="second-letter">Z</span>
        </div>
      
      <div className="menu-links">
                  <a href="#about">ABOUT</a>
                  <a href="#articles">ARTICLES</a>
              </div>
        
        
        <div className='subscribe'>
        <a href="#subscribe">SUBSCRIBE</a>
        
      </div>
    </div>
  );
};

