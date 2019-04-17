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
$('body').on('keydown', (event) => {
  if(event.keyCode >= 65 && event.keyCode <= 90) {
    newGame.handleKeydown(event);
  }
  //console.log(Array.from($('button .key'))).filter(event.key => event.key);
});
/*
document.addEventListener('keydown', function(event){
    console.log(event.key);
});
*/
  /*
  if (event.target.matches('.key')) {
    newGame.handleInteraction(event);
  }
  */
//});
