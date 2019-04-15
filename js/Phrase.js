/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
     this.phraseArray = [...this.phrase];
   }
   /*this adds letter placeholders to the display when the game starts.
   Each letter is presented by an empty box, one li element for each letter.
   See the example_phrase_html.txt file for an example of what the rendered HTML
   for a phrase should look like when the game starts, including any id or class attributes needed.
   When the player correctly guesses a letter, the empty box is replaced with the matched letter
   (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses
   the letter CSS class for letters and the space CSS class for spaces.
   <li class="hide letter h">h</li>  */
   addPhraseToDisplay(){
     for(let i = 0; i < this.phraseArray.length; i++){
       if(this.phraseArray[i] !== ' '){
         const $phraseLi =`<li class="hide letter ${this.phraseArray[i]}">${this.phraseArray[i]}</li>`;
         const $phraseUl = $("#phrase ul");
         $phraseUl.append($phraseLi);
       } else {
         const $phraseLi =`<li class="space">${this.phraseArray[i]}</li>`;
         const $phraseUl = $("#phrase ul");
         $phraseUl.append($phraseLi);
       }
     }
   }
   // checks to see if the letter selected by the player matches a letter in the phrase.
   checkLetter(event){
     newGame.activePhrase.phraseArray.forEach(letter => {
       if($(event.target).text() === letter){
         const index = newGame.activePhrase.phraseArray.indexOf(letter);
         newGame.activePhrase.showMatchedLetter(letter);
       }
     });
   }

   /*reveals the letter(s) on the board that matches the player's selection.
   To reveal the matching letter(s), select all of the letter DOM elements that have a
   CSS class name that matches the selected letter and replace each selected element's
   hide CSS class with the show CSS class.*/
   showMatchedLetter(str){
     for(let i = 0; i < $('#phrase li').length; i++){
       if($('#phrase li')[i].textContent === str) {
         $('#phrase li')[i].classList.replace('hide', 'show');
       }
     }
   }
 }
