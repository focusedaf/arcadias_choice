import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import sky_theme from "../assets/sky_theme.svg"; 
import arcadia from "../assets/arcadia.svg";
import "nes.css/css/nes.min.css";

const CelestialZenithQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const { questions, loading, error } = useQuiz('Celestial Zenith : The Changing Atmosphere and its impact on Our world and Climate Change.');

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
        <img src={sky_theme} alt="Sky" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(64, 86, 161, 0.8)', padding: '20px'}}>
          <p className="nes-text is-primary">Loading questions...</p>
          <i className="nes-icon star animate" style={{color: '#ffcc00'}}></i>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={sky_theme} alt="Sky" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(64, 86, 161, 0.8)', padding: '20px'}}>
          <p className="nes-text is-error">Error: {error}</p>
          <i className="nes-icon close is-large"></i>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={sky_theme} alt="Sky" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(64, 86, 161, 0.8)', padding: '20px'}}>
          <p className="nes-text is-disabled">No questions available</p>
          <i className="nes-icon moon is-large"></i>
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
      <img src={sky_theme} alt="Sky" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
      
      <div className="nes-container is-rounded with-title" style={{
        maxWidth: '800px',
        width: '90%',
        margin: '0 auto',
        backgroundColor: 'rgba(84, 91, 114, 0.8)',
        border: '4px solidrgb(180, 190, 219)',
        position: 'relative',
        boxShadow: '0 0 20px rgba(178, 187, 214, 0.5)'
      }}>
        <span className="title" style={{backgroundColor: 'rgba(93, 99, 123, 0.9)', padding: '0 10px', borderRadius: '15px', borderBottom: '4px solid #8fa3e0'}}>
          <i className="nes-icon is-small star"></i> Celestial Zenith Q{currentQuestion + 1}/{questions.length} <i className="nes-icon is-small star"></i>
        </span>
        
        <div className="nes-container is-rounded" style={{
          backgroundColor: 'rgba(80, 88, 120, 0.8)', 
          marginBottom: '20px', 
          minHeight: '150px', 
          border: '2px solidrgb(180, 188, 212)',
          boxShadow: '0 0 10px rgba(164, 175, 210, 0.3) inset'
        }}>
          <p className="nes-text is-primary">{typedText}{isTyping ? '|' : ''}</p>
        </div>
        
        <div className="choices" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {currentQ.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(choice)}
              disabled={showFeedback || isTyping}
              className={`nes-btn ${showFeedback && choice === currentQ.correct_answer ? 'is-success' : (showFeedback && choice !== currentQ.correct_answer ? 'is-error' : 'is-primary')}`}
              style={{
                textAlign: 'left', 
                margin: '5px 0',
                backgroundColor: showFeedback ? 
                  (choice === currentQ.correct_answer ? 'rgba(102, 255, 178, 0.8)' : 
                  (choice !== currentQ.correct_answer ? 'rgba(255, 102, 102, 0.8)' : 'rgba(175, 185, 213, 0.8)')) : 
                  'rgba(186, 194, 219, 0.8)',
                color: '#fff',
                textShadow: '1px 1px 2px #000',
                transform: `scale(${showFeedback && choice === currentQ.correct_answer ? 1.05 : 1})`,
                transition: 'transform 0.3s'
              }}
            >
              {index === 0 && <i className="nes-icon is-small star"></i>}
              {index === 1 && <i className="nes-icon is-small moon"></i>}
              {index === 2 && <i className="nes-icon is-small like"></i>}
              {index === 3 && <i className="nes-icon is-small star"></i>}
              {' '}{choice}
            </button>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`nes-container is-rounded ${isCorrect ? "is-success" : "is-error"}`} style={{
            marginTop: '20px', 
            padding: '10px',
            backgroundColor: isCorrect ? 'rgba(102, 255, 178, 0.8)' : 'rgba(255, 102, 102, 0.8)',
            border: isCorrect ? '2px solid #66ff99' : '2px solid #ff6666',
            boxShadow: isCorrect ? '0 0 10px rgba(102, 255, 178, 0.5)' : '0 0 10px rgba(255, 102, 102, 0.5)'
          }}>
            <p className="nes-text" style={{color: '#fff', textShadow: '1px 1px 2px #000'}}>
              {isCorrect ? <i className="nes-icon star is-small"></i> : <i className="nes-icon close is-small"></i>} 
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
            <div className="nes-balloon from-right" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '2px solidrgb(189, 197, 221)',
              marginTop: '10px'
            }}>
              <p>{currentQ.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="nes-btn is-primary"
              style={{
                marginTop: '15px',
                backgroundColor: 'rgba(138, 144, 161, 0.9)',
                color: '#fff',
                textShadow: '1px 1px 2px #000',
                border: '2px solid #8fa3e0'
              }}
            >
              {currentQuestion < questions.length - 1 ? 
                <><i className="nes-icon is-small moon"></i> Next Question</> : 
                <><i className="nes-icon trophy is-small"></i> See Results</>}
            </button>
          </div>
        )}
        
        <div className="score-section" style={{marginTop: '20px'}}>
          <p className="nes-text is-warning" style={{color: '#ffcc66', textShadow: '1px 1px 2px #000'}}>
            <i className="nes-icon star is-small"></i> Score: {score}
          </p>
          <div style={{position: 'relative', height: '25px', marginTop: '10px', border: '2px solid #8fa3e0', borderRadius: '15px', overflow: 'hidden'}}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${(score / (questions.length * 3)) * 100}%`,
              background: 'linear-gradient(to right,rgb(117, 127, 161),rgb(180, 189, 216))',
              transition: 'width 0.5s ease-out'
            }}></div>
          </div>
        </div>
      </div>
      
      <div style={{position: 'fixed', bottom: '10px', right: '10px', zIndex: 10}} className="hidden md:block">
        <img 
          src={arcadia} 
          alt="arcadia" 
          style={{
            maxWidth: '250px',
            filter: 'drop-shadow(0 0 5px rgba(175, 187, 223, 0.8))',
            animation: 'float 3s infinite ease-in-out'
          }} 
        />
      </div>
      
      <style>{`
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .nes-container.with-title > .title {
          margin-top: -12px;
        }
        
        .nes-btn:hover {
          transform: scale(1.03);
          transition: transform 0.2s;
        }
      `}</style>
    </div>
  );
};

export default CelestialZenithQuiz;