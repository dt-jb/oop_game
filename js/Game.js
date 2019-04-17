/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = ['do a barrel roll', 'cool beans', 'straight cash homie', 'howdy partner', 'welcome to the jungle'];
     this.activePhrase = null;
   }

   /*starts the game by hiding the overlay and generating a new phrase,
   and adding that phrase to the display*/
   startGame(){
     $('#overlay').hide();
     $('#game-over-message').removeClass('lose');
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
   }

   // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
   getRandomPhrase(){
    return this.phrases[Math.floor(Math.random()*5)];
   }

   /*handles onscreen keyboard interaction by determining if the letter is included in the phrase.
   if it isn't, the button is colored appropriately and a life is removed.
   if it is, the button is colored appropriately and checks if the game if won.
   if the game is won, the game over method is called.*/
   handleInteraction(event){
      $(event.target).attr('disabled', true);

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
   }
   /*handles physical keyboard interaction by determining if the letter pressed is included in the phrase.
   if it isn't, the onscreen button corresponding to that key is colored appropriately and a life is removed.
   if it is, the onscreen button corresponding to that key is colored appropriately and checks if the game if won.
   if the game is won, the game over method is called.*/
   handleKeydown(event){
      const keyArray = [...$('.key')];
      const selectedKeys = [];
      const filteredKeyArr = keyArray.filter(key => key.textContent === event.key && !key.hasAttribute('disabled'));

      if(!newGame.activePhrase.phrase.includes($(filteredKeyArr).text())){
        $(filteredKeyArr).addClass('wrong');
        $(filteredKeyArr).attr('disabled', true);
        selectedKeys.push(filteredKeyArr);
        newGame.removeLife();
      } else {
        $(filteredKeyArr).addClass('chosen');
        $(filteredKeyArr).attr('disabled', true);
        newGame.activePhrase.checkLetter(event);
        selectedKeys.push(filteredKeyArr);
        newGame.checkForWin();
        if(newGame.checkForWin()){
          newGame.gameOver();
        }
      }
   }

   /*removes one of the hearts (lives) on screen.  also increments the missed property and
   calls the game over method accordingly*/
   removeLife(){
     if($('img[src="images/liveHeart.png"]').length > 0){
       $('img[src="images/liveHeart.png"]:first').attr("src", "images/lostHeart.png");
     }
     this.missed += 1;
     if(this.missed === 5){
       this.gameOver();
     }
   }

   //checks for a win by checking if any of the phrase letters are still hidden
   checkForWin(){
     if($('#phrase li').hasClass('hide')){
       return false;
     } else {
       return true;
     }
   }

/*depending on how the game ends the overlay screen is displayed with a win or lose message and calls reset()*/
   gameOver(){
     if(newGame.checkForWin()){
       $('#overlay').css('backgroundColor', '#78CF82').slideDown(1250);
       $('#game-over-message').attr('class', 'win').text("For the WIN!");

     } else {
       $('#overlay').css('backgroundColor', '#D94545').slideDown(1250);
       $('#game-over-message').attr('class', 'lose').text("Bummer, try again!");
     }
     this.reset();
   }

   /*resets the board in preparation for a new game*/
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
