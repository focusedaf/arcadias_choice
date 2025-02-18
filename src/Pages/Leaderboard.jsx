import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeaderboardItem } from '../Components/index';
import usePreventZoom from "../Components/PreventZoom";
import leaderboard from '../assets/leaderboard.svg';
import arcadia from "../assets/arcadia.svg";
import audio from "../assets/After We Win - Nathan Moore.mp3";
import db from '../firebase/firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const Leaderboard = () => {
  usePreventZoom();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audio));
  const [leaderboardData, setLeaderboardData] = useState([]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      const q = query(collection(db, "users"), orderBy("score", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        playerName: doc.data().username,
        score: doc.data().score,
      }));
      setLeaderboardData(data);
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="min-h-screen bg-peach flex flex-col items-center">
      <img
        src={leaderboard}
        alt="leaderboard"
        className="fixed top-0 left-0 h-screen w-full object-cover object-center -z-10"
      />
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-yellow-300 font-nes">
        Leaderboard
      </h1>
      <div className="max-w-3xl w-full bg-amber-950 rounded-lg shadow-lg p-4 space-y-2 border-4 border-brown-800 pixel-border">
        {leaderboardData.map((player, index) => (
          <div 
            key={player.id} 
            className="flex justify-between items-center p-3 rounded border-2 border-brown-800 bg-orange-200"
          >
            <span 
              className={`text-lg font-bold ${
                index === 0 ? "text-yellow-500" : 
                index === 1 ? "text-gray-400" : 
                index === 2 ? "text-orange-600" : "text-black"
              }`}
            >
              {index + 1}.
            </span>
            <span className="text-black text-lg">{player.playerName}</span>
            <span className="text-black text-lg">{player.score}</span>
          </div>
        ))}
      </div>
  
      <button
        onClick={() => navigate("/home")}
        className="nes-btn is-success mt-8 w-50 h-20 fixed -bottom-17 -right-110 transform -translate-x-1/2"
      >
        Home
      </button>
  
      <img
        src={arcadia}
        alt="arcadia"
        className="w-48 md:w-80 h-auto fixed bottom-0 right-0 transform translate-x-15 translate-y-0 opacity-75 md:opacity-100"
      />
  
      <button
        onClick={handlePlayPause}
        className="fixed bottom-8 left-4 bg-blue-500 hover:bg-blue-600 text-white font-press-start py-3 px-6 rounded-full transition-colors duration-300 text-sm md:text-base"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Leaderboard;
