/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = ['do a barrel roll', 'cool beans', 'straight cash homie', 'howdy partner', 'welcome to the jungle'];
     this.activePhrase = null;
   }
   /*hides the start screen overlay, calls the getRandomPhrase() method,
   and sets the activePhrase property with the chosen phrase.
   It also adds that phrase to the board by calling the addPhraseToDisplay()
   method on the active Phrase object*/
   startGame(){
     $('#overlay').hide();
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
   }

   // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
   getRandomPhrase(){
    return this.phrases[Math.floor(Math.random()*5)];
   }

   handleInteraction(event){
  //Disable the selected letter’s onscreen keyboard button.
      $(event.target).attr('disabled', true);
  //If the phrase does not include the guessed letter, add the wrong CSS class
  //to the selected letter's keyboard button and call the removeLife() method.
      if(!newGame.activePhrase.phrase.includes($(event.target).text())){
        $(event.target).addClass('wrong');
        newGame.removeLife();
      } else {
        $(event.target).addClass('chosen');
        newGame.activePhrase.checkLetter(event);
        newGame.checkForWin();
        if(newGame.checkForWin()){
          newGame.gameOver();
        }
      }
  /*If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
  call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
  If the player has won, call gameOver()*/
   }

   removeLife(){
     //liveHeart.png images with a lostHeart.png -- change the src
     if($('img[src="images/liveHeart.png"]').length > 0){
       $('img[src="images/liveHeart.png"]:first').attr("src", "images/lostHeart.png");
     }
     this.missed += 1;
     if(this.missed === 5){
       this.gameOver();
     }
   }

   checkForWin(){
     //return true or false
     if($('#phrase li').hasClass('hide')){
       return false;
     } else {
       return true;
     }
   }

/*this method displays the original start screen overlay, and depending on the outcome of the game,
updates the overlay h1 element with a friendly win or loss message,
and replaces the overlay’s start CSS class with either the win or lose CSS class.*/
   gameOver(){
     $('#overlay').show();
     if(newGame.checkForWin()){

       $('#game-over-message').attr('class', 'win');
       $('#game-over-message').text("Whoa, you like...won, man");
     } else {
       $('#game-over-message').attr('class', 'lose');
       $('#game-over-message').text("Bummer, better luck next time");
     }
     this.reset();
   }
   /*gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
-Remove all li elements from the Phrase ul element.
-Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
-Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.*/
   reset(){
     $("#phrase ul").children().detach();
     const chosen = document.getElementsByClassName('chosen');
     const wrong = document.getElementsByClassName('wrong');
     Array.from(chosen).forEach(item => {
       item.setAttribute('class', 'key');
       item.removeAttribute('disabled');
     });
     Array.from(wrong).forEach(item => {
       item.setAttribute('class', 'key');
       item.removeAttribute('disabled');
     });
     const hearts = $('img[alt="Heart Icon"]');
     for (let i = 0; i < hearts.length; i++){
       hearts[i].setAttribute('src', 'images/liveHeart.png');
     }
     this.missed = 0;
   }
 }
