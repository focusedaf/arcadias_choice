import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import snow_theme from "../assets/snow_theme.svg"; 
import arcadia from "../assets/arcadia.svg";
import "nes.css/css/nes.min.css";

const FrostfallRealmQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const { questions, loading, error } = useQuiz('Frostfall Realm : Melting of ice, Climate Change and its impact on Vanishing Polar Habitats');

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
        <img src={snow_theme} alt="Snow" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(65, 105, 225, 0.6)', padding: '20px'}}>
          <p className="nes-text is-primary">Loading questions...</p>
          <i className="nes-icon star animate" style={{color: '#b9d9eb'}}></i>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={snow_theme} alt="Snow" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(65, 105, 225, 0.6)', padding: '20px'}}>
          <p className="nes-text is-error">Error: {error}</p>
          <i className="nes-icon close is-large"></i>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={snow_theme} alt="Snow" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
        <div className="nes-container is-rounded is-dark" style={{backgroundColor: 'rgba(65, 105, 225, 0.6)', padding: '20px'}}>
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
    <div style={{minHeight: '100vh', position: 'relative', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <img src={snow_theme} alt="Snow" className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10" />
      
      {/* Snowflakes animation */}
      <div className="snowflakes" style={{position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', zIndex: -4}}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="snowflake" style={{
            position: 'absolute',
            color: '#fff',
            fontSize: `${5 + Math.random() * 10}px`,
            animation: `fall ${5 + Math.random() * 10}s linear infinite, sway ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
            top: `-${10 + Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.8,
            textShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
            animationDelay: `${Math.random() * 5}s`
          }}>❄</div>
        ))}
      </div>
      
      <div className="nes-container is-rounded with-title" style={{
        maxWidth: '800px',
        width: '90%',
        margin: '0 auto',
        backgroundColor: 'rgba(65, 105, 225, 0.7)',
        border: '4px solid #6495ED',
        position: 'relative',
        boxShadow: '0 0 20px rgba(100, 149, 237, 0.5)'
      }}>
        <span className="title text-white" style={{backgroundColor: 'rgba(25, 25, 112, 0.9)', padding: '0 10px', borderRadius: '15px', borderBottom: '4px solid #6495ED'}}>
          <i className="nes-icon is-small star"></i> Frostfall Realm Q{currentQuestion + 1}/{questions.length} <i className="nes-icon is-small star"></i>
        </span>
        
        <div className="nes-container is-rounded" style={{
          backgroundColor: 'rgba(25, 25, 112, 0.8)', 
          marginBottom: '20px', 
          minHeight: '150px', 
          border: '2px solid #6495ED',
          boxShadow: '0 0 10px rgba(100, 149, 237, 0.3) inset'
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
                  (choice === currentQ.correct_answer ? 'rgba(65, 180, 250, 0.8)' : 
                  (choice !== currentQ.correct_answer ? 'rgba(255, 102, 102, 0.8)' : 'rgba(65, 105, 225, 0.8)')) : 
                  'rgba(65, 105, 225, 0.8)',
                color: '#fff',
                textShadow: '1px 1px 2px #000',
                transform: `scale(${showFeedback && choice === currentQ.correct_answer ? 1.05 : 1})`,
                transition: 'transform 0.3s'
              }}
            >
              {index === 0 && <i className="nes-icon is-small star"></i>}
              {index === 1 && <i className="nes-icon is-small like"></i>}
              {index === 2 && <i className="nes-icon is-small heart"></i>}
              {index === 3 && <i className="nes-icon is-small star"></i>}
              {' '}{choice}
            </button>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`nes-container is-rounded ${isCorrect ? "is-success" : "is-error"}`} style={{
            marginTop: '20px', 
            padding: '10px',
            backgroundColor: isCorrect ? 'rgba(65, 180, 250, 0.8)' : 'rgba(255, 102, 102, 0.8)',
            border: isCorrect ? '2px solid #41b4fa' : '2px solid #ff6666',
            boxShadow: isCorrect ? '0 0 10px rgba(65, 180, 250, 0.5)' : '0 0 10px rgba(255, 102, 102, 0.5)'
          }}>
            <p className="nes-text" style={{color: '#fff', textShadow: '1px 1px 2px #000'}}>
              {isCorrect ? <i className="nes-icon star is-small"></i> : <i className="nes-icon close is-small"></i>} 
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
            <div className="nes-balloon from-right" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #6495ED',
              marginTop: '10px'
            }}>
              <p>{currentQ.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="nes-btn is-primary"
              style={{
                marginTop: '15px',
                backgroundColor: 'rgba(25, 25, 112, 0.9)',
                color: '#fff',
                textShadow: '1px 1px 2px #000',
                border: '2px solid #6495ED'
              }}
            >
              {currentQuestion < questions.length - 1 ? 
                <><i className="nes-icon is-small star"></i> Next Question</> : 
                <><i className="nes-icon trophy is-small"></i> See Results</>}
            </button>
          </div>
        )}
        
        <div className="score-section" style={{marginTop: '20px'}}>
          <p className="nes-text" style={{color: '#e0ffff', textShadow: '1px 1px 2px #000'}}>
            <i className="nes-icon coin is-small"></i> Score: {score}
          </p>
          <div style={{position: 'relative', height: '25px', marginTop: '10px', border: '2px solid #6495ED', borderRadius: '15px', overflow: 'hidden'}}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${(score / (questions.length * 3)) * 100}%`,
              background: 'linear-gradient(to right, #192970, #4169E1)',
              transition: 'width 0.5s ease-out'
            }}></div>
          </div>
        </div>
      </div>
      
      <div style={{position: 'fixed', bottom: '10px', right: '10px', zIndex: 10}}>
        <img 
          src={arcadia} 
          alt="arcadia" 
          style={{
            maxWidth: '250px',
            filter: 'drop-shadow(0 0 5px rgba(100, 149, 237, 0.8))',
            animation: 'float 3s infinite ease-in-out'
          }} 
        />
      </div>
      
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes sway {
          0% { transform: translateX(0); }
          100% { transform: translateX(10px); }
        }
        
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

export default FrostfallRealmQuiz;