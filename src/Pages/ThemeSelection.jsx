import React from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { ThemeSelector } from "../Components/index";
import mountain_landing from '../assets/mountain_landing.svg'

const ThemeSelection = () => {
  usePreventZoom();
  

  return (
    <div
      className="min-h-screen  py-12 px-4"
      
    >
      <img
        src={mountain_landing}
        alt="mountain"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <ThemeSelector />
    </div>
  );
};

export default ThemeSelection;
