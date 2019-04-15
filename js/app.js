/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
const newGame = new Game();
$("#btn__reset").on('click', () => {
  newGame.startGame();
});

$('#qwerty').on('click', (event) => {
  if (event.target.matches('.key')) {
    newGame.handleInteraction(event);
  }
});

//keyup, keydown - add keyboard functionality
/*
$('#qwerty').on('click', (event) => {
  if (event.target.matches('.key')) {
    newGame.handleInteraction(event);
  }
});
*/
