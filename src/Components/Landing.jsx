import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/mountain_landing.svg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-press-start mb-8">Arcadia's Choice</h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl text-center px-4">
        Embark on a journey through environmental realms, test your knowledge, and help save our planet.
      </p>
      <button
        onClick={() => navigate('/login')}
        className="bg-green-500 hover:bg-green-600 text-white font-press-start py-3 px-8 rounded-lg transition-colors duration-300"
      >
        Start Adventure
      </button>
    </div>
  );
};

export default Landing;
