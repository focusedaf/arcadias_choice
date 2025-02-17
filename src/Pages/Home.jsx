import {React} from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import {PreventZoom} from "../Components/index";
import {Landing} from '../Components/index';
=======
import usePreventZoom from "../Components/PreventZoom";

>>>>>>> 9ddfc2b1b2ce5be2330de1788eaa05b6382d7e8b
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
  usePreventZoom();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className=" min-h-screen  py-12 px-4 ">
      <img
        src={mountain_landing}
        alt="mountain"
        className=" fixed top-0 left-0 w-full h-screen object-cover object-center -z-10 "
      />
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
          <button
            onClick={() => navigate("/themeselection")}
            className=" bg-blue-500 hover:bg-blue-600 text-white font-press-start py-3 px-5 rounded transition-colors duration-300 mt-2"
          >
            Choose Realms
          </button>
        </div>
      </div>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-70 h-70 absolute bottom-0 right-0 transform translate-x-15 translate-y-10"
      />
    </div>
  );
};

export default Home;
