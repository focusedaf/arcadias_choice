import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import {PreventZoom} from "../Components/index";
import {Landing} from '../Components/index';
const themes = [
  {
    id: 'aquatic',
    name: 'Aquatic Abyss',
    description: 'Explore the depths of ocean conservation',
    color: 'from-blue-600 to-blue-900',
    icon: '🌊',
    intro: "The ocean… vast, deep, and full of wonders. But it is fading. Plastic islands drift in the currents, coral reefs bleach, and marine life suffers. You must prove your wisdom to save it."
  },
  {
    id: 'emerald',
    name: 'Emerald Wilds',
    description: 'Venture through forest preservation',
    color: 'from-green-600 to-green-900',
    icon: '🌳',
    intro: "This land was once lush and full of life. But greed has scarred it—trees felled, rivers poisoned, creatures displaced. Show me you understand nature's balance."
  },
  {
    id: 'celestial',
    name: 'Celestial Zenith',
    description: 'Soar through atmospheric challenges',
    color: 'from-purple-600 to-purple-900',
    icon: '☁️',
    intro: "The skies were once free… but now, pollution scars the heavens. The storms grow wild. Prove you understand, or risk falling into the void."
  },
  {
    id: 'frostfall',
    name: 'Frostfall Realm',
    description: 'Navigate the melting ice caps',
    color: 'from-cyan-600 to-cyan-900',
    icon: '❄️',
    intro: "The ice was once eternal, but now it melts. The tundra weakens, the creatures vanish. Can you restore the balance before all is lost?"
  },
  {
    id: 'metropolis',
    name: 'Metropolis Matrix',
    description: 'Transform urban sustainability',
    color: 'from-gray-600 to-gray-900',
    icon: '🏙️',
    intro: "Technology was supposed to elevate us… instead, it consumes us. Smog blankets the sky, machines never rest. Can you be the architect of change?"
  }
];

const Home = () => {
  PreventZoom();
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 "
      style={{
        backgroundImage: "url('/mountain_landing.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Welcome Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl text-white font-press-start">
            Welcome to Arcadia's Choice
          </h1>
          <p className="text-xl text-white/90">Greetings, {username}</p>
        </div>

        {/* Story Introduction */}
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            In a world teetering on the edge of environmental crisis, you stand
            at the crossroads of change. As Arcadia's chosen one, your knowledge
            and decisions will shape the fate of our planet's diverse realms.
            Each realm faces unique challenges, and only through wisdom and
            understanding can we hope to preserve them.
          </p>
        </div>

        {/* Theme Selection */}
        <div>
          <h2 className="text-3xl text-white font-press-start mb-8 text-center">
            Choose Your Realm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`bg-gradient-to-br ${theme.color} p-6 rounded-lg text-white 
                   transform transition-all duration-300 hover:scale-105 
                   hover:shadow-xl cursor-pointer`}
                onClick={() => navigate(`/${theme.id}`)} // Updated navigation path
              >
                <div className="text-4xl mb-4">{theme.icon}</div>
                <h3 className="text-xl font-press-start mb-2">{theme.name}</h3>
                <p className="text-sm opacity-80 mb-4">{theme.description}</p>
                <div className="text-xs italic border-t border-white/20 pt-4">
                  {theme.intro}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Instructions */}
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white">
          <h3 className="text-2xl font-press-start mb-4">How to Play</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Each realm contains 10 challenging questions about environmental
              issues
            </li>
            <li>Correct answers earn you 3 points</li>
            <li>Incorrect answers cost 10 points and one heart</li>
            <li>
              You begin with 3 hearts - lose them all and face the bad ending
            </li>
            <li>Complete the quiz successfully to achieve the good ending</li>
            <li>Your final score will be recorded on the leaderboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
