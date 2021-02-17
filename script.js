var Fruits = ['avocado', 'blueberries', 'cabbage', 'spring-onion', 'cherry', 'olives', 'parsley', 'radishes', 'raspberry'];
var choosenFruits = []; // array of choosen fruits randomly
var choosenCards = [];  // array of choosen cards randomly
var id_clicked1 = null; // id of the first clicked card in a pair 
var id_clicked2 = null; // id of the second clicked card in a pair 
var clicked_turn = 0; 
var score = 0; // calculate the total score of the player

var face = []; // state of the card, back or front 
for (var i = 0; i < 18; i++)
  face[i] = 'back'; 

var fruitsDuplicated = []; // duplicated fruit array
for (var i = 0; i < 9; i++)
  fruitsDuplicated.push(Fruits[i], Fruits[i]);

shuffle(fruitsDuplicated); // Suffle the duplicated array

distributeRandomly(fruitsDuplicated); // distribute the cards randomly

function chooseCard(a) { // organize clicking by pair
  flipFront(a); 
  if(clicked_turn == 0) {
    id_clicked1 = a;
    clicked_turn = 1;
  } 
  else if(clicked_turn == 1 && id_clicked1 != null) {
      id_clicked2 = a;
      clicked_turn = 0;
      verifySimilarity();
  }
}

function flipFront(a) {
  if(face[a] == 'back' ) {
    face[a] = 'front';
    var card = document.getElementById(a);
    card.classList.toggle('flip');
  }
}

function flipBack(a) {
  setTimeout( function() { // to see the missmatched cards before fipped back
    var card = document.getElementById(a);
    card.classList.toggle('flip');
    face[a] = 'back';
  }, 500);
}

function distributeRandomly(array) { //distribute the card initially
  for(var i=0;i<array.length;i++) {
    choosenFruits[i] = fruitsDuplicated[i];
    document.getElementById('back' + i).src = 'Images/' + fruitsDuplicated[i] + '.svg';
  }
}

function verifySimilarity() {
  if(id_clicked1 != null && id_clicked2 != null) {
    if(choosenFruits[id_clicked1] == choosenFruits[id_clicked2] && id_clicked1!=id_clicked2){
      score ++;
      if(score == 9) {
        setTimeout( function() { // to see the last card before reload
          if(confirm('You win!!!')) { //
            window.location.reload();  
          }
        }, 500);
      }
    } else {
      flipBack(id_clicked1);
      flipBack(id_clicked2);
      id_clicked1 = null;
      id_clicked2 = null;
      clicked_turn == 0;
    }
  }
}

function shuffle(array) { // shuffle an array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}