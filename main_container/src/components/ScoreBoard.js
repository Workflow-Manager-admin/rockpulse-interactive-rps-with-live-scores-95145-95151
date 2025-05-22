import React from 'react';
import './styles/ScoreBoard.css';

/**
 * PUBLIC_INTERFACE
 * ScoreBoard component displays the current scores for player and computer
 * @param {object} props - Component props
 * @param {object} props.scores - The scores object { player: number, computer: number }
 * @param {function} props.onReset - Callback function to reset scores
 */
const ScoreBoard = ({ scores, onReset }) => {
  return (
    <div className="scoreboard">
      <div className="score-container">
        <div className="score-box">
          <div className="score-label">You</div>
          <div className="score-value">{scores.player}</div>
        </div>
        <div className="score-divider">:</div>
        <div className="score-box">
          <div className="score-label">Computer</div>
          <div className="score-value">{scores.computer}</div>
        </div>
      </div>
      <button className="reset-button" onClick={onReset}>
        Reset Scores
      </button>
    </div>
  );
};

export default ScoreBoard;
