import React from 'react';

/**
 * PUBLIC_INTERFACE
 * GameTitle component displays the title and subtitle of the game
 */
const GameTitle = () => {
  return (
    <div className="game-title">
      <div className="game-logo">
        <span className="logo-icon">🎮</span>
        <span className="logo-text">RockPulse</span>
      </div>
      <h1 className="title">Rock Paper Scissors</h1>
      <div className="subtitle">Challenge the computer and track your victories!</div>
    </div>
  );
};

export default GameTitle;
