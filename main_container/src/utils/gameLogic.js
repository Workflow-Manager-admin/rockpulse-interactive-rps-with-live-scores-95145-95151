/**
 * Game logic utilities for Rock-Paper-Scissors
 */

/**
 * PUBLIC_INTERFACE
 * Determines the winner of a rock-paper-scissors round
 * @param {string} playerChoice - The player's choice ('rock', 'paper', or 'scissors')
 * @param {string} computerChoice - The computer's choice ('rock', 'paper', or 'scissors')
 * @returns {string} - Result: 'player', 'computer', or 'draw'
 */
export const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'draw';
  }

  switch (playerChoice) {
    case 'rock':
      return computerChoice === 'scissors' ? 'player' : 'computer';
    case 'paper':
      return computerChoice === 'rock' ? 'player' : 'computer';
    case 'scissors':
      return computerChoice === 'paper' ? 'player' : 'computer';
    default:
      return 'draw'; // Invalid choice
  }
};

/**
 * PUBLIC_INTERFACE
 * Generates a random choice for the computer
 * @returns {string} - 'rock', 'paper', or 'scissors'
 */
export const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

/**
 * PUBLIC_INTERFACE
 * Gets a descriptive message for the game result
 * @param {string} result - The game result ('player', 'computer', or 'draw')
 * @param {string} playerChoice - The player's choice
 * @param {string} computerChoice - The computer's choice
 * @returns {string} - A descriptive message for the game result
 */
export const getResultMessage = (result, playerChoice, computerChoice) => {
  if (result === 'draw') {
    return `It's a draw! Both chose ${playerChoice}.`;
  } else if (result === 'player') {
    return `You win! ${capitalizeFirst(playerChoice)} beats ${computerChoice}.`;
  } else {
    return `You lose! ${capitalizeFirst(computerChoice)} beats ${playerChoice}.`;
  }
};

/**
 * Helper function to capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} - The capitalized string
 */
const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
