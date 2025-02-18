import React from "react";
import { useNavigate } from "react-router-dom";
import "nes.css/css/nes.min.css";

const ThemeSelector = () => {
  const navigate = useNavigate();
  const themes = [
    {
      id: "aquatic",
      name: "Aquatic Abyss",
      description: "Explore the depths of ocean conservation",
      bgClass: "from-[#0047AB]/80 to-[#1E4D8C]/80",
      borderColor: "rgba(0, 71, 171, 0.8)",
      icon: "🌊",
      animation: "animate-bounce",
    },
    {
      id: "emerald",
      name: "Emerald Wilds",
      description: "Venture through forest preservation",
      bgClass: "from-[#228B22]/80 to-[#145214]/80",
      borderColor: "rgba(34, 139, 34, 0.8)",
      icon: "🌳",
      animation: "animate-bounce",
    },
    {
      id: "celestial",
      name: "Celestial Zenith",
      description: "Soar through atmospheric challenges",
      bgClass: "from-purple-300/80 to-pink-400/80",
      borderColor: "rgba(216, 180, 254, 0.8)",
      icon: "☁️",
      animation: "animate-bounce",
    },
    {
      id: "frostfall",
      name: "Frostfall Realm",
      description: "Navigate the melting ice caps",
      bgClass: "from-[#79B5BC]/80 to-[#5F9EA0]/80",
      borderColor: "rgba(121, 181, 188, 0.8)",
      icon: "❄️",
      animation: "animate-bounce",
    },
    {
      id: "metropolis",
      name: "Metropolis Matrix",
      description: "Transform urban sustainability",
      bgClass: "from-[#9370DB]/80 to-[#6A5ACD]/80",
      borderColor: "rgba(147, 112, 219, 0.8)",
      icon: "🏙️",
      animation: "animate-bounce",
    },
  ];

  const createPixelBorder = (color) => {
    return {
      border: "none",
      boxShadow: `
        0 4px 0 0 ${color},
        0 0 0 4px ${color},
        
        -4px -4px 0 0 ${color},
        4px -4px 0 0 ${color},
        -4px 4px 0 0 ${color},
        4px 4px 0 0 ${color},
        
        -8px -4px 0 0 ${color},
        -4px -8px 0 0 ${color},
        8px -4px 0 0 ${color},
        4px -8px 0 0 ${color},
        -8px 4px 0 0 ${color},
        -4px 8px 0 0 ${color},
        8px 4px 0 0 ${color},
        4px 8px 0 0 ${color}
      `,
      margin: "8px",
      borderRadius: "0",
    };
  };

  return (
    <div className="min-h-screen py-8 md:py-12 rounded-xl bg-gradient-to-br from-purple-900 to-pink-900 bg-fixed" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f472b6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundSize: "64px 64px",
      imageRendering: "pixelated"
    }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-16 md:mb-30">
          <h2 className="relative z-10 nes-container is-rounded p-3 md:p-4 inline-block mx-auto text-xl md:text-3xl font-['Press_Start_2P'] text-center bg-white/10 backdrop-blur-sm">
            <span className="text-yellow-200">✦</span> 
            <span className="text-pink-500">Choose</span>
            {" "}
            <span className="text-purple-500">Your</span>
            {" "}
            <span className="text-rose-500">Realm</span>
            <span className="text-yellow-200">✦</span>
          </h2>
        </div>
        <div className="mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {themes.map((theme) => (
            <div key={theme.id} className="relative transform hover:scale-105 transition-all duration-300">
              <button
                onClick={() => navigate(`/${theme.id}`)}
                className={`group relative p-4 md:p-6 text-white bg-gradient-to-br ${theme.bgClass} overflow-hidden w-full h-full`}
                style={{
                  imageRendering: "pixelated",
                  ...createPixelBorder(theme.borderColor)
                }}
              >
                <div className="absolute inset-0 opacity-20 bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='3' cy='13' r='1'/%3E%3Ccircle cx='13' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "12px 12px",
                }}></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl md:text-5xl mb-4 md:mb-6 ${theme.animation}`}>{theme.icon}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md p-3 md:p-4 border border-white/30 transform transition-all duration-300 group-hover:bg-white/30">
                    <h3 className="text-base md:text-lg font-['Press_Start_2P'] mb-2 md:mb-3 text-white tracking-wide leading-relaxed">
                      {theme.name}
                    </h3>
                    <p className="text-xs md:text-sm opacity-90 font-['Press_Start_2P'] leading-relaxed">{theme.description}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/80 rounded-none"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/80 rounded-none"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/80 rounded-none"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/80 rounded-none"></div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button 
            onClick={() => navigate('/home')} 
            className="nes-btn relative text-white font-['Press_Start_2P'] text-sm tracking-wide hover:scale-105 transition-all duration-300 w-full md:w-auto"
          >
            ⟵ Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;