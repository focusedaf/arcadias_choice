import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Leaderboard from "./Pages/Leaderboard";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import End from "./Pages/End";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </>
  );
}

export default App
