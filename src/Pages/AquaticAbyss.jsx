import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
import ocean_theme from '../assets/ocean_theme.svg';
import arcadia from "../assets/arcadia.svg";
import { AquaticAbyssQuiz } from '../Components/index';

const AquaticAbyss = () => {
  usePreventZoom();
  const [visible,setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4">
      <img
        src={ocean_theme}
        alt="ocean theme"
        className="fixed top-0 left-0 object-cover object-center w-full h-screen -z-10"
      />
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">
            Aquatic Abyss
          </h1>
          <p className="text-xl text-white/90">
            Explore the depths of ocean conservation
          </p>
        </div>

        {/* Theme Introduction */}
        <div className="bg-blue-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            The ocean… vast, deep, and full of wonders. But it is fading.
            Plastic islands drift in the currents, coral reefs bleach, and
            marine life suffers. You must prove your wisdom to save it.
          </p>
        </div>

        {/* Start Quiz Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setVisible(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        {/* to display the themed quiz boxes */}
        <div
          className={`fixed top-0 right-0 h-screen w-full transition-transform transform ${
            visible ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <AquaticAbyssQuiz />
        </div>
        
        {/* Back Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white bg-blue-600 hover:bg-blue-700 font-press-start 
                     py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Return to Realms
          </button>
        </div>
      </div>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-48 md:w-80 h-auto fixed bottom-0 right-0 transform translate-x-15 translate-y-0 opacity-75 md:opacity-100"
      />
    </div>
  );
};

export default AquaticAbyss;
