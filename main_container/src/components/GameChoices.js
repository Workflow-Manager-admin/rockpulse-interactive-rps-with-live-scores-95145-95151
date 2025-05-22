import React from 'react';
import './styles/GameChoices.css';

/**
 * PUBLIC_INTERFACE
 * GameChoices component displays the available choices (rock, paper, scissors)
 * @param {object} props - Component props
 * @param {function} props.onPlayerChoice - Callback function when player makes a choice
 * @param {boolean} props.disabled - Whether the choices are disabled during animations
 */
const GameChoices = ({ onPlayerChoice, disabled }) => {
  const choices = [
    { value: 'rock', icon: '✊', label: 'Rock' },
    { value: 'paper', icon: '✋', label: 'Paper' },
    { value: 'scissors', icon: '✌️', label: 'Scissors' }
  ];

  return (
    <div className="game-choices">
      <h2>Make Your Choice</h2>
      <div className="choices-container">
        {choices.map(choice => (
          <button
            key={choice.value}
            className="choice-button"
            onClick={() => onPlayerChoice(choice.value)}
            disabled={disabled}
            aria-label={`Choose ${choice.label}`}
          >
            <span className="choice-icon">{choice.icon}</span>
            <span className="choice-label">{choice.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameChoices;
