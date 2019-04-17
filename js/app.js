/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/*Creates a new game and starts the game*/
const newGame = new Game();
$("#btn__reset").on('click', () => {
  newGame.startGame();
});
//event listener for clicked buttons on the on screen keyboard
$('#qwerty').on('click', (event) => {
  if (event.target.matches('.key')) {
    newGame.handleInteraction(event);
  }
});

//event listener for clicked buttons on the user's physical keyboard
$('body').on('keydown', (event) => {
  if(event.keyCode >= 65 && event.keyCode <= 90) {
    if($('#game-over-message').hasClass('lose')){
      console.log('it HAS class...loser class that is');
    } else {
      newGame.handleKeydown(event);
    }
  }
});
