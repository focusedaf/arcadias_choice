import { React } from "react";
import { useNavigate } from "react-router-dom";
import usePreventZoom from "../Components/PreventZoom";
import arcadia from "../assets/arcadia.svg";
import mountain_landing from "../assets/mountain_landing.svg";

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
        className="w-80 h-90 absolute bottom-0 right-0 transform translate-x-15 translate-y-10"
      />
    </div>
  );
};

export default Home;
