import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MetropolisMatrixQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const questions = [
    {
      question: "What is a major contributor to urban air pollution?",
      options: [
        { text: 'Industrial Emissions', isCorrect: true },
        { text: 'Agricultural Runoff', isCorrect: false },
        { text: 'Deforestation', isCorrect: false },
        { text: 'Overfishing', isCorrect: false },
      ],
    },
    // Add more questions here
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 3);
    } else {
      setScore(score - 10);
      setLives(lives - 1);
    }

    if (lives <= 1 && !isCorrect) {
      navigate('/end', { state: { success: false, score } });
    } else if (currentQuestion === questions.length - 1) {
      navigate('/end', { state: { success: true, score } });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/assets/urban_theme.svg')" }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between mb-6">
          <div className="text-red-500">Lives: {'❤️'.repeat(lives)}</div>
        </div>
        
        {questions[currentQuestion] && (
          <div className="space-y-6">
            <h3 className="text-xl text-white mb-4">{questions[currentQuestion].question}</h3>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.isCorrect)}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors duration-300"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetropolisMatrixQuiz;
          
