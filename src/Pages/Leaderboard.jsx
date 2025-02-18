// src/Pages/Leaderboard.jsx
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
    <div>
      <img
        src={leaderboard}
        alt="leaderboard"
        className="fixed top-0 left-0 h-screen w-full object-cover object-center -z-10"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>
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
      <button
        onClick={() => navigate("/home")}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
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
