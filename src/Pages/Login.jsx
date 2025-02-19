import React, { useState, useRef } from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { AuthLayout } from '../Components/index';
import mountain_landing from '../assets/mountain_landing.svg'
import arcadia from "../assets/arcadia.svg";
import audio from "../assets/After We Win - Nathan Moore.mp3";


const Login = () => {
  usePreventZoom(); 
  const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audio));
  
    const handlePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
      <img
        src={mountain_landing}
        alt="mountain"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <AuthLayout />
      <img
              src={arcadia}
              alt="arcadia"
              className="w-48 md:w-80 h-auto fixed bottom-0 right-0 transform translate-x-15 translate-y-0 opacity-75 md:opacity-100"
            />
        <button
        onClick={handlePlayPause}
        className="fixed bottom-16 left-4 bg-blue-500 hover:bg-blue-600 text-white font-press-start py-4 px-8 rounded-full transition-colors duration-300"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Login;
