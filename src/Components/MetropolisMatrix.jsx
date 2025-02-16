import React from 'react';
import { useNavigate } from 'react-router-dom';

const MetropolisMatrix = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: "url('/assets/urban_theme.svg')" }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">Metropolis Matrix</h1>
          <p className="text-xl text-white/90">Transform urban sustainability</p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            Technology was supposed to elevate us… instead, it consumes us. 
            Smog blankets the sky, machines never rest. Can you be the architect of change?
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/quiz/metropolis')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white font-press-start 
                     py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Return to Realms
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetropolisMatrix;