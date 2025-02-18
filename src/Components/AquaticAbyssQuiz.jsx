import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ocean_theme from "../assets/ocean_theme.svg";
import arcadia from "../assets/arcadia.svg";

const questions = [
  {
    question: "What is the main cause of ocean acidification?",
    options: [
      "Increased levels of CO₂ in the atmosphere",
      "Plastic pollution",
      "Oil spills",
      "Overfishing"
    ],
    correct: 0,
    tip: "There's a lot of that in the ocean."
  },
  {
    question: "Which of the following is a major consequence of coral bleaching?",
    options: [
      "Loss of marine biodiversity",
      "Increased fish population",
      "Lower water temperatures",
      "Faster coral growth"
    ],
    correct: 0,
    tip: "Nice"
  },
  {
    question: "What percentage of the Earth's oxygen is produced by the ocean?",
    options: [
      "Around 50%",
      "Less than 10%",
      "About 25%",
      "Over 90%",
    ], 
    correct: 0,
    tip: "Yes"
  },
  {
    question: "Which of the following ocean currents helps regulate global climate?",
    options: [
      "The Gulf Stream",
      "The Mariana Trench Current",
      "The Bermuda Loop",
      "The Atlantic Vortex",
    ],
    correct: 0,
    tip: "Nice"
  },
  {
    question: "What is marine heatwave?",
    options: [
      "Period of abnormally high sea temperatures",
      "A rise in tsunami frequency",
      "An increase in salt concentration in seawater",
      "The rapid melting of icebergs"
    ],
    correct: 0,
    tip: "Water waste!"
  },
  {
    question: "What is the Great Pacific Garbage Patch mostly made of?",
    options: [
      "Microplastics",
      "Glass bottles",
      "Aluminum cans",
      "Abandoned ships"
    ],
    correct: 0,
    tip: "Thumbs up"
  },
  {
    question: "Why are rising sea levels a serious concern?",
    options: [
      "They cause coastal flooding and erosion", 
      "They make fish migrate faster",
      "They improve ship navigation",
      "They increase the Earth's land area"  
    ],
    correct: 0,
    tip: "Noo"
  },
  {
    question: "What role do mangroves play in protecting coastlines?",
    options: [
      "They prevent erosion and act as natural barriers against storms",
      "They increase wave height",
      "They attract more fish",
      "They make the coastline sink"
    ],
    correct: 0,
    tip: "!"
  },
  {
    question: "Which gas is responsible for the majority of global warming?",
    options: [
      "Carbon dioxide (CO₂)",
      "Nitrogen",
      "Oxygen",
      "Helium"
    ],
    correct: 0,
    tip: "Good!"
  },
  {
    question: "Which gas do we breathe in?",
    options: [
      "Carbon dioxide (CO₂)",
      "Nitrogen",
      "Oxygen",
      "Helium"
    ],
    correct: 2,
    tip: "Good!"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (selectedIndex) => {
    const correct = selectedIndex === questions[currentQuestion].correct;
    if (correct) {
      setScore(score + 3);
    }
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      // Save the score to local storage
      localStorage.setItem('score', score);

      navigate('/end', { state: { total: questions.length } });
    }
  };

  return (
    <div className="text-black ">
      <img
        src={ocean_theme}
        alt="Ocean"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />

      <div className="quiz-container relative">
        <div className="mt-10 mx-auto max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl cursor-pointer p-[1.5px] animate-border-rotate bg-conic/[from_var(--border-angle)] from-blue-300 via-blue-600 to-blue-800">
          <div
            className="w-full h-full rounded-xl px-10 py-60 pr-2
          bg-neutral-900"
          >
            <div className=" text-sm">
              <h2 className="bg-[#e8d3b8] ">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="bg-[#e8d3b8] ">
                {questions[currentQuestion].question}
              </p>

              <div className="flex flex-col items-center gap-3 mt-2 ">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className="inline-block px-4 py-2 duration-200 hover:bg-white hover:text-black rounded-full w-full  cursor-pointer bg-[#e8d3b8] "
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showFeedback && (
                <div
                  className={`feedback ${isCorrect ? "correct" : "incorrect"}`}
                >
                  <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
                  <p>Tip: {questions[currentQuestion].tip}</p>
                  <button onClick={handleNext}>
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "See Results"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arcadia}
        alt="arcadia"
        className="w-90 h-90 fixed bottom-10 right-0 transform translate-x-15 translate-y-10"
      />
    </div>
  );
};

export default Quiz;
