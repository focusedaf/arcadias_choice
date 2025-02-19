import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
import good_end from '../assets/good_end.svg';
import volcano_end from '../assets/volcanoend.svg';
import arcadia from "../assets/arcadia.svg";
import audio from "../assets/After We Win - Nathan Moore.mp3";
import db from '../firebase/firebaseConfig'; 
import { doc, updateDoc } from 'firebase/firestore';

const End = () => {
  usePreventZoom();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audio));

  const score = parseInt(localStorage.getItem('score') || '0');
  const userId = localStorage.getItem('userId');

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updateScore = async () => {
      if (userId && score != null) {
        try {
          const userRef = doc(db, 'users', userId);
          await updateDoc(userRef, {
            score: score, 
          });
          console.log('Score updated successfully');
        } catch (error) {
          console.error('Error updating score:', error);
        }
      }
    };

    updateScore();
  }, [userId, score]);

  const isGoodEnding = score > 3;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <img
        src={isGoodEnding ? good_end : volcano_end}
        alt={isGoodEnding ? "mountain" : "volcano end"}
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center max-w-xl">
        <h2 className="text-3xl font-press-start mb-6 text-white">
          {isGoodEnding ? 'Victory! You are one step closer to saving the planet' : 'Game Over'}
        </h2>
        {isGoodEnding ? (
          <p className="text-xl mb-8 text-white">Final Score: {score}</p>
        ) : (
          <p className="text-xl mb-8 text-red-400">
            You lost. How are you gonna save the planet now?
          </p>
        )}
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
        className="w-48 md:w-80 h-auto fixed bottom-0 right-0 transform translate-x-15 translate-y-0 opacity-75 md:opacity-100"
      />
      <button
        onClick={handlePlayPause}
        className="fixed bottom-8 left-4 bg-blue-500 hover:bg-blue-600 text-white font-press-start py-3 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default End;
