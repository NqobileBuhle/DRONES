import React from 'react';
import {  ToggleMenu} from './ToggleMenu';



export const Header = () => {
  return (
      <div className="hero">
        <div className="contain-one">
          <ToggleMenu />
          <h1>DRONOTICZ</h1>
          <h2>
            THE ERA OF DRONES
          </h2>
          <hr />
        </div>
      </div>
    
  );
};

