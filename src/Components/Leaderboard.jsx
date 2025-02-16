import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import LeaderboardItem from './LeaderboardItem';

// Mock data stays the same
const leaderboardData = [
  { id: 1, playerName: "DragonSlayer", score: 125000 },
  { id: 2, playerName: "StarQuester", score: 98500 },
  { id: 3, playerName: "MythicHero", score: 87200 },
  { id: 4, playerName: "LegendHunter", score: 76400 },
  { id: 5, playerName: "ArcadeMaster", score: 65300 },
  { id: 6, playerName: "QuestSeeker", score: 54200 },
  { id: 7, playerName: "PixelWarrior", score: 43100 },
];

const Leaderboard = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      style={{
        backgroundImage: "url('/leaderboard.svg')" , backgroundSize: "cover",  backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: 0, left: 0,
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Leaderboard
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-2">
          {leaderboardData.map((player, index) => (
            <LeaderboardItem
              key={player.id}
              rank={index + 1}
              playerName={player.playerName}
              score={player.score}
              isTopThree={index < 3}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8"></div>
      <button
            onClick={() => navigate('/home')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Home
          </button>
      </div>
   
  );
};

export default Leaderboard;
