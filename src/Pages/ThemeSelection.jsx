import React, {useState, useRef} from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { ThemeSelector } from "../Components/index";
import mountain_landing from '../assets/mountain_landing.svg'
import arcadia from "../assets/arcadia.svg";
import audio from "../assets/After We Win - Nathan Moore.mp3";


const ThemeSelection = () => {
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
            <button
        onClick={handlePlayPause}
        className="fixed bottom-16 left-4 bg-blue-500 hover:bg-blue-600 text-white font-press-start py-4 px-8 rounded-full transition-colors duration-300"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default ThemeSelection;
