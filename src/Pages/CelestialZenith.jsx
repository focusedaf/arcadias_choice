import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
import sky_theme from '../assets/sky_theme.svg'
import arcadia from "../assets/arcadia.svg";

const CelestialZenith = () => {
  usePreventZoom();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen py-12 px-4"
      
    >
      <img
        src={sky_theme}
        alt="sky theme"
        className="fixed top-0 left-0 object-cover object-center w-full h-screen -z-10"
      />
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">
            Celestial Zenith
          </h1>
          <p className="text-xl text-white/90">
            Soar through atmospheric challenges
          </p>
        </div>

        <div className="bg-purple-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            The skies were once free… but now, pollution scars the heavens. The
            storms grow wild. Prove you understand, or risk falling into the
            void.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/quiz/celestial")}
            className="bg-purple-500 hover:bg-purple-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white/80 hover:text-white font-press-start 
                     py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Return to Realms
          </button>
        </div>
      </div>
      <img
              src={arcadia}
              alt="arcadia"
              className="w-80 h-90 fixed bottom-1 right-2 transform translate-x-15 translate-y-10"
              />
    </div>
  );
};

export default CelestialZenith;