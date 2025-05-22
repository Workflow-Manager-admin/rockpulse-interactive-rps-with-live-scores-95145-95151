import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import GameTitle from './components/GameTitle';
import ScoreBoard from './components/ScoreBoard';
import GameChoices from './components/GameChoices';
import GameResult from './components/GameResult';

// Import utilities
import { determineWinner, getComputerChoice, getResultMessage } from './utils/gameLogic';
import { saveScores, loadScores, resetScores } from './utils/storage';

function App() {
  // Game state
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Load scores from local storage on initial render
  useEffect(() => {
    const savedScores = loadScores();
    setScores(savedScores);
  }, []);

  // Handle player choice
  const handlePlayerChoice = (choice) => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setPlayerChoice(choice);
    setShowResult(false);
    
    // Simulate computer thinking
    setTimeout(() => {
      const computerSelection = getComputerChoice();
      setComputerChoice(computerSelection);
      
      const result = determineWinner(choice, computerSelection);
      setGameResult(result);
      
      const message = getResultMessage(result, choice, computerSelection);
      setResultMessage(message);
      
      // Update scores
      const newScores = { ...scores };
      if (result === 'player') {
        newScores.player += 1;
      } else if (result === 'computer') {
        newScores.computer += 1;
      }
      
      setScores(newScores);
      saveScores(newScores);
      
      setShowResult(true);
      setIsPlaying(false);
    }, 1000);
  };

  // Handle score reset
  const handleResetScores = () => {
    const newScores = resetScores();
    setScores(newScores);
    setLastUpdatedScore(null);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">🎮</span> RockPulse
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-container">
            <GameTitle />
            
            <ScoreBoard 
              scores={scores} 
              onReset={handleResetScores}
            />
            
            <GameChoices 
              onPlayerChoice={handlePlayerChoice} 
              disabled={isPlaying}
            />
            
            <GameResult
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              result={gameResult}
              message={resultMessage}
              visible={showResult}
            />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>RockPulse - Interactive Rock-Paper-Scissors Game</p>
        </div>
      </footer>
    </div>
  );
}

export default App;