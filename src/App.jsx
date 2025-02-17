import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Pages/Home";
import Leaderboard from "./Pages/Leaderboard";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import End from "./Pages/End";
import ThemeSelection from './Pages/ThemeSelection';
import AquaticAbyss from "./Pages/AquaticAbyss";
import EmeraldWilds from "./Pages/EmeraldWilds";
import CelestialZenith from "./Pages/CelestialZenith";
import FrostfallRealm from "./Pages/FrostfallRealm";
import MetropolisMatrix from "./Pages/MetropolisMatrix";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/themeselection" element={<ThemeSelection />}></Route>
        <Route path="/aquatic" element={<AquaticAbyss />} />
        <Route path="/emerald" element={<EmeraldWilds />} />
        <Route path="/celestial" element={<CelestialZenith />} />
        <Route path="/frostfall" element={<FrostfallRealm />} />
        <Route path="/metropolis" element={<MetropolisMatrix />} />       
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </>
  );
}

export default App
