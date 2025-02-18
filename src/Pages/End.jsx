import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
import mountain_landing from '../assets/mountain_landing.svg';
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

  const score = localStorage.getItem('score');
  const userId = localStorage.getItem('userId');
  const hearts = localStorage.getItem('hearts') || 3; // Get remaining hearts, default to 3

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
            score: parseInt(score), 
          });
          console.log('Score updated successfully');
        } catch (error) {
          console.error('Error updating score:', error);
        }
      }
    };

    updateScore();
  }, [userId, score]);

  const isGameOver = hearts <= 0;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <img
        src={isGameOver ? volcano_end : mountain_landing}
        alt={isGameOver ? "volcano end" : "mountain"}
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center max-w-xl">
        <h2 className="text-3xl font-press-start mb-6 text-white">
          {isGameOver ? 'Game Over' : (score > 0 ? 'Victory!' : 'Game Over')}
        </h2>
        {isGameOver ? (
          <p className="text-xl mb-8 text-red-400">
            You lost. How are you gonna save the planet now?
          </p>
        ) : (
          <p className="text-xl mb-8 text-white">Final Score: {score}</p>
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
