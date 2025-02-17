import React from "react";
import { useNavigate } from "react-router-dom";
import usePreventZoom from "../Components/PreventZoom";
import arcadia from "../assets/arcadia.svg";
import mountain_landing from "../assets/mountain_landing.svg";

const Landing = () => {
  usePreventZoom();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative">
      <img
        src={mountain_landing}
        alt="mountain"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <h1 className="text-4xl md:text-6xl font-press-start mb-8">
        Arcadia's Choice
      </h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl text-center px-4">
        Embark on a journey through environmental realms, test your knowledge,
        and help save our planet.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="bg-green-500 hover:bg-green-600 text-white font-press-start py-3 px-8 rounded-lg transition-colors duration-300"
      >
        Start Adventure
      </button>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-90 h-90 fixed bottom-10 right-0 transform translate-x-15 translate-y-10"
      />
    </div>
  );
};

export default Landing;
