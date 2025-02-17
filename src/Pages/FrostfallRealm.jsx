import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
const FrostfallRealm = () => {
  usePreventZoom();  
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: "url('/snow theme.svg')" , backgroundSize: "cover",  backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: 0, left: 0, }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">Frostfall Realm</h1>
          <p className="text-xl text-white/90">Navigate the melting ice caps</p>
        </div>

        <div className="bg-cyan-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            The ice was once eternal, but now it melts. The tundra weakens, 
            the creatures vanish. Can you restore the balance before all is lost?
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/end')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/home')}
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

export default FrostfallRealm;