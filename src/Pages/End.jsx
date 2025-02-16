import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const End = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { success, score } = location.state || {};

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/mountain_landing.svg')" }}
    >
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
            onClick={() => navigate('/')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-press-start py-3 rounded"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
