import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
import mountain_landing from '../assets/mountain_landing.svg'
import arcadia from "../assets/arcadia.svg";

const End = () => {
  usePreventZoom(); 
  const location = useLocation();
  const navigate = useNavigate();
  const { success, score } = location.state || {};

  return (
    <div className=" min-h-screen flex items-center justify-center py-12 px-4 ">
        <img
          src={mountain_landing}
          alt="mountain"
          className=" fixed top-0 left-0 w-full h-screen object-cover object-center -z-10 "
        />
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center max-w-xl">
        <h2 className="text-3xl font-press-start mb-6 text-white">
          {success ? 'Victory!' : 'Game Over'}
        </h2>
        <p className="text-xl mb-8 text-white">Final Score: {score}</p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/leaderboard')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-press-start py-3 rounded"
          >
            View Leaderboard
          </button>
          <button
            onClick={() => navigate('/home')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-press-start py-3 rounded"
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-80 h-90 absolute bottom-1 right-2 transform translate-x-15 translate-y-10"
        />
    </div>
  );
};

export default End;
