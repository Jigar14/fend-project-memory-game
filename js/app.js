/*
 * Create a list that holds all of your cards
 */

class Card {
    constructor(card, id) {
        this.id = id;
        this.image = card.image;
        this.name = card.name;
        this.htmlCode = 
        `<section class="container card">
            <div id="$this.id">
                <figure class="front">1</figure>
                <figure class="back">2</figure>
            </div>
        </section>`;
    }
}


function prepareDeck(){

    const Deck = [];

    cards.forEach(function(c, index) {
        var card = new Card(c, index);
        var copy = new Card(c, index + cards.length);
        
        Deck.push(card);
        Deck.push(copy);
    })
    console.log(Deck);
    return Deck; 
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function initGame(){
     //call this function when the reset button is called
    var deck = prepareDeck();
    var shuffeledCards = shuffle(deck);
    console.log(shuffeledCards);
    
    return shuffeledCards;
 }

 function incrementMoveCount(){
     //function to increment the move count and update the ratings after each count.
 }

 function returnRatings(moveCount){
     //function to return the rating (star count) based on move(s) count

    return 0;
 }


function injectCardsOnTheBoard(cards){    
    var deck = $('#cards');

    cards.forEach(function(c){
        deck.html(c.htmlCode);
        console.log(c.htmlCode);
    })
}

var shuffeledCards = initGame();

$(document).ready(function(){
  injectCardsOnTheBoard(shuffeledCards);  
})