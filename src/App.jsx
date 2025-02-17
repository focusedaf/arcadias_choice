import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Pages/Home";
import Leaderboard from "./Components/Leaderboard";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import End from "./Pages/End";
import ThemeSelection from './Pages/ThemeSelection';
import AquaticAbyss from './Components/AquaticAbyss';
import EmeraldWilds from './Components/EmeraldWilds';
import CelestialZenith from './Components/CelestialZenith';
import FrostfallRealm from './Components/FrostfallRealm';
import MetropolisMatrix from './Components/MetropolisMatrix';
import AquaticAbyssQuiz from './Components/AquaticAbyssQuiz';
import EmeraldWildsQuiz from './Components/EmeraldWildsQuiz';
import CelestialZenithQuiz from './Components/CelestialZenithQuiz';
import FrostfallRealmQuiz from './Components/FrostfallRealmQuiz';
import MetropolisMatrixQuiz from './Components/MetropolisMatrixQuiz';

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
        <Route path="/aquaticquiz" element={<AquaticAbyssQuiz />} />
        <Route path="/emeraldquiz" element={<EmeraldWildsQuiz />} />
        <Route path="/celestialquiz" element={<CelestialZenithQuiz />} />
        <Route path="/frostfallquiz" element={<FrostfallRealmQuiz />} />
        <Route path="/metropolisquiz" element={<MetropolisMatrixQuiz />} />
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </>
  );
}

export default App
