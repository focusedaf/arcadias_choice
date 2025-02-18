import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import snowtheme from '../assets/snow_theme.svg'
import usePreventZoom from "../Components/PreventZoom";
import arcadia from "../assets/arcadia.svg";
import { FrostfallRealmQuiz } from "../Components/index";

const FrostfallRealm = () => {
  usePreventZoom(); 
  const [visible,setVisible] = useState(false);  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4">
      <img
        src={snowtheme}
        alt="snowtheme"
        className="fixed top-0 left-0 object-center object-cover w-full h-screen -z-10"
      />
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">
            Frostfall Realm
          </h1>
          <p className="text-xl text-white/90">Navigate the melting ice caps</p>
        </div>

        <div className="bg-cyan-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            The ice was once eternal, but now it melts. The tundra weakens, the
            creatures vanish. Can you restore the balance before all is lost?
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setVisible(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-press-start 
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
          <FrostfallRealmQuiz />
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

export default FrostfallRealm;