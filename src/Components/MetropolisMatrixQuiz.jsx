import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import city_theme from "../assets/urban_theme.svg"; 
import arcadia from "../assets/arcadia.svg";
import "nes.css/css/nes.min.css";

const MetropolitanMatrixQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const { questions, loading, error } = useQuiz('Metropolitan Matrix : Human Survival and Climate Change, How Urban Lifestyles Contribute to Environmental Damage, What Not to Do, and Sustainable Solutions for Metropolitan Areas');

  // Text typing effect
  useEffect(() => {
    if (!loading && questions && questions.length > 0 && !showFeedback) {
      setIsTyping(true);
      setTypedText('');
      const text = questions[currentQuestion].scenario;
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          setTypedText(prev => prev + text.charAt(i));
          i++;
          setTimeout(typeWriter, 30);
        } else {
          setIsTyping(false);
        }
      };
      typeWriter();
    }
  }, [currentQuestion, loading, questions, showFeedback]);

  if (loading) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={city_theme} alt="City" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(50, 30, 70, 0.8)', padding: '20px'}}>
          <p className="nes-text is-primary" style={{color: '#d0b3ff'}}>Loading questions...</p>
          <progress className="nes-progress" value="70" max="100" style={{background: '#422659'}}></progress>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={city_theme} alt="City" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(50, 30, 70, 0.8)', padding: '20px'}}>
          <p className="nes-text is-error">Error: {error}</p>
          <i className="nes-icon close is-large"></i>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={city_theme} alt="City" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(50, 30, 70, 0.8)', padding: '20px'}}>
          <p className="nes-text is-disabled">No questions available</p>
          <i className="nes-icon is-large like"></i>
        </div>
      </div>
    );
  }

  const handleAnswer = (selectedChoice) => {
    const correct = selectedChoice === questions[currentQuestion].correct_answer;
    if (correct) {
      setScore(score + 3);
      console.log(questions[currentQuestion].impact_on_game.success);
    } else {
      console.log(questions[currentQuestion].impact_on_game.failure);
    }
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      localStorage.setItem('score', score);
      navigate('/end', { state: { total: questions.length } });
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
      maxHeight: '100vh'
    }}>
      <img src={city_theme} alt="City" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10 cityImage" />
      
      <div className="nes-container is-rounded with-title" style={{
        maxWidth: '800px',
        width: '90%',
        margin: '0 auto',
        backgroundColor: 'rgba(40, 26, 58, 0.85)',
        border: '4px solid #614982',
        position: 'relative',
        boxShadow: '0 0 20px rgba(169, 130, 255, 0.3)',
        backdropFilter: 'blur(5px)'
      }}>
        <span className="title" style={{backgroundColor: 'rgba(50, 30, 70, 0.9)', padding: '0 10px', borderRadius: '15px', borderBottom: '4px solid #614982', color: '#d0b3ff'}}>
          <i className="nes-icon is-small trophy"></i> Metropolitan Matrix Q{currentQuestion + 1}/{questions.length} <i className="nes-icon is-small trophy"></i>
        </span>
        
        <div className="nes-container is-rounded" style={{
          backgroundColor: 'rgba(35, 22, 51, 0.8)', 
          marginBottom: '20px', 
          minHeight: '150px', 
          border: '2px solid #614982',
          boxShadow: '0 0 10px rgba(169, 130, 255, 0.2) inset',
          color: '#d0b3ff'
        }}>
          <p className="nes-text">{typedText}{isTyping ? '|' : ''}</p>
        </div>
        
        <div className="choices" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {currentQ.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(choice)}
              disabled={showFeedback || isTyping}
              className={`nes-btn ${showFeedback && choice === currentQ.correct_answer ? 'is-success' : (showFeedback && choice !== currentQ.correct_answer ? 'is-error' : '')}`}
              style={{
                textAlign: 'left', 
                margin: '5px 0',
                backgroundColor: showFeedback ? 
                  (choice === currentQ.correct_answer ? 'rgba(108, 52, 131, 0.9)' : 
                  (choice !== currentQ.correct_answer ? 'rgba(131, 52, 82, 0.9)' : 'rgba(68, 51, 86, 0.9)')) : 
                  'rgba(68, 51, 86, 0.9)',
                color: '#d0b3ff',
                textShadow: '1px 1px 2px #000',
                borderColor: '#614982',
                transform: `scale(${showFeedback && choice === currentQ.correct_answer ? 1.05 : 1})`,
                transition: 'transform 0.3s',
                boxShadow: showFeedback && choice === currentQ.correct_answer ? '0 0 15px rgba(169, 130, 255, 0.5)' : '0 0 5px rgba(169, 130, 255, 0.3)'
              }}
            >
              {index === 0 && <i className="nes-icon is-small coin"></i>}
              {index === 1 && <i className="nes-icon is-small like"></i>}
              {index === 2 && <i className="nes-icon is-small heart"></i>}
              {index === 3 && <i className="nes-icon is-small coin"></i>}
              {' '}{choice}
            </button>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`nes-container is-rounded ${isCorrect ? "is-success" : "is-error"}`} style={{
            marginTop: '20px', 
            padding: '10px',
            backgroundColor: isCorrect ? 'rgba(108, 52, 131, 0.8)' : 'rgba(131, 52, 82, 0.8)',
            border: isCorrect ? '2px solid #9966cc' : '2px solid #cc6699',
            boxShadow: isCorrect ? '0 0 10px rgba(169, 130, 255, 0.5)' : '0 0 10px rgba(204, 102, 153, 0.5)'
          }}>
            <p className="nes-text" style={{color: '#d0b3ff', textShadow: '1px 1px 2px #000'}}>
              {isCorrect ? <i className="nes-icon trophy is-small"></i> : <i className="nes-icon close is-small"></i>} 
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
            <div className="nes-balloon from-right" style={{
              backgroundColor: 'rgba(40, 26, 58, 0.85)',
              border: '2px solid #614982',
              marginTop: '10px',
              color: '#d0b3ff'
            }}>
              <p>{currentQ.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="nes-btn"
              style={{
                marginTop: '15px',
                backgroundColor: 'rgba(81, 45, 109, 0.9)',
                color: '#d0b3ff',
                textShadow: '1px 1px 2px #000',
                border: '2px solid #7733aa'
              }}
            >
              {currentQuestion < questions.length - 1 ? 
                <><i className="nes-icon is-small coin"></i> Next Question</> : 
                <><i className="nes-icon trophy is-small"></i> See Results</>}
            </button>
          </div>
        )}
        
        <div className="score-section" style={{marginTop: '20px'}}>
          <p className="nes-text" style={{color: '#d0b3ff', textShadow: '1px 1px 2px #000'}}>
            <i className="nes-icon coin is-small"></i> Score: {score}
          </p>
          <div style={{position: 'relative', height: '25px', marginTop: '10px', border: '2px solid #7733aa', borderRadius: '15px', overflow: 'hidden', backgroundColor: 'rgba(35, 22, 51, 0.5)'}}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${(score / (questions.length * 3)) * 100}%`,
              background: 'linear-gradient(to right, #512d6d, #9966cc)',
              transition: 'width 0.5s ease-out',
              boxShadow: '0 0 10px rgba(169, 130, 255, 0.7)'
            }}></div>
          </div>
        </div>
      </div>
      
      <div style={{position: 'fixed', bottom: '10px', right: '10px', zIndex: 10}} className="hidden md:block">
        <img 
          src={arcadia} 
          alt="Arcadia" 
          style={{
            maxWidth: '250px',
            filter: 'drop-shadow(0 0 10px rgba(169, 130, 255, 0.8))',
            animation: 'hover 3s infinite ease-in-out'
          }} 
        />
      </div>
      
      <style>{`
        @keyframes hover {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .nes-container.with-title > .title {
          margin-top: -12px;
        }
        
        .nes-btn:hover {
          transform: scale(1.03);
          transition: transform 0.2s;
          box-shadow: 0 0 15px rgba(169, 130, 255, 0.8);
        }
        
        /* Digital glitch effect for title */
        .title {
          animation: glitch 5s infinite;
          position: relative;
        }
        
        @keyframes glitch {
          0% { text-shadow: 0 0 0 #d0b3ff; }
          7% { text-shadow: -3px 0 0 #ff99cc, 3px 0 0 #9966ff; }
          10% { text-shadow: 0 0 0 #d0b3ff; }
          27% { text-shadow: -3px 0 0 #ff99cc, 3px 0 0 #9966ff; }
          30% { text-shadow: 0 0 0 #d0b3ff; }
          100% { text-shadow: 0 0 0 #d0b3ff; }
        }
        
      `}</style>
    </div>
  );
};

export default MetropolitanMatrixQuiz;