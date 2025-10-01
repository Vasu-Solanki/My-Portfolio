import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [catPosition, setCatPosition] = useState({ top: '50%', left: '50%' });
  const [score, setScore] = useState(0);

  const moveCat = () => {
    const newTop = Math.random() * 80 + '%';
    const newLeft = Math.random() * 80 + '%';
    setCatPosition({ top: newTop, left: newLeft });
  };

  const catchCat = () => {
    setScore(score + 1);
    moveCat();
  };

  useEffect(() => {
    const interval = setInterval(moveCat, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="experience">
      <h2 className="experience-title">Catch the Cat to Get the Job!</h2>
      <div className="game-area">
        <div
          className="cat"
          style={catPosition}
          onClick={catchCat}
        >🐱</div>
      </div>
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default Experience;

