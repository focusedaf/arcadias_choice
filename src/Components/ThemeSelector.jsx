import React from "react";
import { useNavigate } from "react-router-dom";
import './ThemeSelector.css';

const ThemeSelector = () => {
  const navigate = useNavigate();
  const themes = [
    {
      id: "aquatic",
      name: "Aquatic Abyss",
      description: "Explore the depths of ocean conservation",
      color: "from-blue-600 to-blue-900",
      icon: "🌊",
      borderStyle: "border-blue-400 border-4",
      animation: "animate-wave",
    },
    {
      id: "emerald",
      name: "Emerald Wilds",
      description: "Venture through forest preservation",
      color: "from-green-600 to-green-900",
      icon: "🌳",
      borderStyle: "border-green-400 border-4",
      animation: "animate-snow",
    },
    {
      id: "celestial",
      name: "Celestial Zenith",
      description: "Soar through atmospheric challenges",
      color: "from-purple-600 to-purple-900",
      icon: "☁️",
      borderStyle: "border-purple-400 border-4",
      animation: "animate-clouds",
    },
    {
      id: "frostfall",
      name: "Frostfall Realm",
      description: "Navigate the melting ice caps",
      color: "from-cyan-600 to-cyan-900",
      icon: "❄️",
      borderStyle: "border-cyan-400 border-4",
      animation: "animate-ice",
    },
    {
      id: "metropolis",
      name: "Metropolis Matrix",
      description: "Transform urban sustainability",
      color: "from-gray-600 to-gray-900",
      icon: "🏙️",
      borderStyle: "border-gray-400 border-4",
      animation: "animate-city",
    },
  ];

  return (
    <div className="min-h-screen py-12 rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white font-press-start mb-8 text-center">
          Choose Your Realm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => navigate(`/${theme.id}`)}
              className={`bg-gradient-to-br ${theme.color} p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-press-start mb-2">{theme.name}</h3>
              <p className="text-sm opacity-80">{theme.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
