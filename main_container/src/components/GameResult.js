import React from 'react';
import './styles/GameResult.css';

/**
 * PUBLIC_INTERFACE
 * GameResult component displays the result of each round
 * @param {object} props - Component props
 * @param {string} props.playerChoice - Player's choice
 * @param {string} props.computerChoice - Computer's choice
 * @param {string} props.result - Result of the game ('player', 'computer', or 'draw')
 * @param {string} props.message - Message describing the result
 * @param {boolean} props.visible - Whether the result is visible
 */
const GameResult = ({ playerChoice, computerChoice, result, message, visible }) => {
  if (!visible) return null;

  const getChoiceEmoji = (choice) => {
    switch (choice) {
      case 'rock': return '✊';
      case 'paper': return '✋';
      case 'scissors': return '✌️';
      default: return '❓';
    }
  };

  const getResultClass = (result) => {
    switch (result) {
      case 'player': return 'result-win';
      case 'computer': return 'result-lose';
      case 'draw': return 'result-draw';
      default: return '';
    }
  };

  return (
    <div className={`game-result ${visible ? 'visible' : ''}`}>
      <div className="choices-display">
        <div className="choice-display player-choice">
          <div className="choice-emoji">{getChoiceEmoji(playerChoice)}</div>
          <div className="choice-label">Your choice</div>
        </div>

        <div className="versus">VS</div>

        <div className="choice-display computer-choice">
          <div className="choice-emoji">{getChoiceEmoji(computerChoice)}</div>
          <div className="choice-label">Computer's choice</div>
        </div>
      </div>

      <div className={`result-message ${getResultClass(result)}`}>
        {message}
      </div>

      <div className="result-animation"></div>
    </div>
  );
};

export default GameResult;
