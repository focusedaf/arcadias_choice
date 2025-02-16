import React from 'react';

const LeaderboardItem = ({ rank, playerName, score, isTopThree }) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 mb-2 rounded-lg ${
        isTopThree ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-50 dark:bg-gray-800'
      }`}
    >
      <div className="flex items-center gap-4">
        <span className={`
          flex items-center justify-center w-8 h-8 rounded-full font-bold
          ${rank === 1 ? 'bg-yellow-400 text-black' : 
            rank === 2 ? 'bg-gray-300 text-black' :
            rank === 3 ? 'bg-amber-600 text-white' :
            'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}
        `}>
          {rank}
        </span>
        <span className="font-semibold text-lg">{playerName}</span>
      </div>
      <div className="font-bold text-lg">
        {score.toLocaleString()} pts
      </div>
    </div>
  );
};

export default LeaderboardItem;
