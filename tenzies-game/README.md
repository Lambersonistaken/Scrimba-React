# Tenzies Game

Tenzies is a fun, interactive dice game built with React where the goal is to roll all dice to the same value. Players can "hold" dice to lock in their values while continuing to roll the rest until they match.

## Features

- **Roll Dice**: Players roll up to 10 dice, each displaying a random value between 1 and 6.
- **Hold Dice**: Click on any die to hold its current value; held dice won't change on the next roll.
- **Win Condition**: The game is won when all dice display the same value and are held.
- **Confetti Celebration**: A confetti animation appears upon winning the game.
- **Roll Counter**: Counts the number of rolls taken to win the game.

## Technologies Used

- **React**: For UI components and state management.
- **CSS**: For styling the game board and dice.
- **nanoid**: For unique IDs for each die.
- **react-confetti**: To display confetti animation upon winning.

## How to Play

1. Click **Roll** to roll all dice.
2. Click on individual dice to **hold** their values.
3. Continue rolling and holding dice until all dice display the same value.
4. Enjoy the confetti celebration when you win!

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the game locally using `npm start`.

## Code Overview

- `App.js`: Main game logic, handles roll, hold, and reset functionality.
- `Die.js`: Component to render each die, with props for its value and hold state.
- `App.css`: Styling for game layout, dice appearance, and button styles.

## Screenshot

Include a screenshot of the main game interface.

