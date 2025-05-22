# RockPulse: Interactive Rock-Paper-Scissors Game

RockPulse is a visually impressive web-based implementation of the classic Rock-Paper-Scissors game with real-time scoring and persistent score tracking.

## Features

- **Interactive Gameplay**: Click to make your choice and play against the computer
- **Visual Feedback**: Engaging animations and visual effects for game results
- **Real-time Score Updates**: Immediate score updates after each round
- **Persistent Scoring**: Game scores are saved between sessions using local storage
- **Responsive Design**: Works well on all screen sizes
- **Modern UI**: Clean, visually impressive design with animations and transitions

## How to Play

1. Choose Rock, Paper, or Scissors by clicking one of the choice buttons
2. Watch as the computer makes its selection
3. See the result and score update in real-time
4. Continue playing or reset scores with the reset button

## Implementation Details

### Components

- **App.js**: Main container component that coordinates the game
- **GameTitle.js**: Displays the game title and subtitle
- **ScoreBoard.js**: Shows and manages player and computer scores
- **GameChoices.js**: Provides interactive choice buttons for player selection
- **GameResult.js**: Displays the result of each round with animations

### Utilities

- **gameLogic.js**: Core game mechanics and winner determination
- **storage.js**: Local storage functions for persistent score tracking

### Styling

The game features a vibrant, engaging UI with:
- Animated buttons for player choices
- Dynamic score updates with visual feedback
- Result animations for wins, losses, and draws
- Custom gradient backgrounds and visual effects

## Technologies Used

- React 18 with Hooks for state management
- CSS3 with animations and transitions
- Local Storage API for data persistence
- Modern ES6+ JavaScript

## Future Enhancements

Potential future improvements could include:
- Adding sound effects for gameplay actions
- Implementing a multiplayer mode
- Including game statistics and win streaks
- Additional game modes like Rock-Paper-Scissors-Lizard-Spock
