import React from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { ThemeSelector } from "../Components/index";
import mountain_landing from '../assets/mountain_landing.svg'
import arcadia from "../assets/arcadia.svg";

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
      <img
              src={arcadia}
              alt="arcadia"
              className="w-80 h-90 fixed bottom-1 right-2 transform translate-x-15 translate-y-10"
            />
    </div>
  );
};

export default ThemeSelection;
