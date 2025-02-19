import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import usePreventZoom from "../Components/PreventZoom";
import arcadia from "../assets/arcadia.svg";
import mountain_landing from "../assets/mountain_landing.svg";
import audio from "../assets/After We Win - Nathan Moore.mp3";

const Landing = () => {
  usePreventZoom();
  const navigate = useNavigate();
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
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative px-4">
      <img
        src={mountain_landing}
        alt="mountain"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <h1 className="text-3xl md:text-6xl font-press-start mb-8 text-center">
        Arcadia's Choice
      </h1>
      <p className="text-base md:text-xl mb-12 max-w-2xl text-center">
        Embark on a journey through environmental realms, test your knowledge,
        and help save our planet.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white font-press-start py-4 px-8 rounded-lg transition-colors duration-300"
      >
        Start Adventure
      </button>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-48 md:w-80 h-auto fixed bottom-0 right-0 transform translate-x-15 translate-y-0 opacity-75 md:opacity-100"
      />
      <button
        onClick={handlePlayPause}
        className="fixed bottom-8 left-4 bg-blue-500 hover:bg-blue-600 text-white font-press-start py-3 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Landing;
