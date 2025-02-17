import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AquaticAbyssQuiz,MetropolisMatrixQuiz,CelestialZenithQuiz,EmeraldWildsQuiz,FrostfallRealmQuiz} from '../Components/index'
const Quiz = () => {
  // const { themeId } = useParams();
  // const navigate = useNavigate();
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  // const [lives, setLives] = useState(3);
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   // Load questions based on themeId
  //   // This would normally fetch from your questions database
  //   // For now, we'll use the ones from README
  // }, [themeId]);

  // const handleAnswer = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 3);
  //   } else {
  //     setScore(score - 10);
  //     setLives(lives - 1);
  //   }

  //   if (lives <= 1 && !isCorrect) {
  //     navigate('/end', { state: { success: false, score } });
  //   } else if (currentQuestion === 9) {
  //     navigate('/end', { state: { success: true, score } });
  //   } else {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };

  return (
    <div className="w-screen min-h-screen absolute top-0 left-0">
      <AquaticAbyssQuiz />
      {/* <CelestialZenithQuiz />
      <EmeraldWildsQuiz />
      <FrostfallRealmQuiz />
      <MetropolisMatrixQuiz /> */}
    </div>
  );
};

export default Quiz;

// {/*//  <div
//    className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
//    style={{ backgroundImage: `url('/assets/${themeId}_theme.svg')` }}
//  >
//    <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-2xl w-full">
//      <div className="flex justify-between mb-6">
//        <div className="text-white">Score: {score}</div>
//        <div className="text-red-500">Lives: {"❤️".repeat(lives)}</div>
//      </div>

//      {questions[currentQuestion] && (
//        <div className="space-y-6">
//          <h3 className="text-xl text-white mb-4">
//            {questions[currentQuestion].question}
//          </h3>
//          <div className="grid grid-cols-1 gap-4">
//            {questions[currentQuestion].options.map((option, index) => (
//              <button
//                key={index}
//                onClick={() => handleAnswer(option.isCorrect)}
//                className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors duration-300"
//              >
//                {option.text}
//              </button>
//            ))}
//          </div>
//        </div>
//      )}
//    </div>
//  </div>;
// */
// }