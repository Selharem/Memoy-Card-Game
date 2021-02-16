var Fruits = ['avocado', 'blueberries', 'cabbage', 'spring-onion', 'cherry', 'olives', 'parsley', 'radishes', 'raspberry'];
var choosenFruits = [];
var choosenCards = [];
var id_clicked1 = null;
var id_clicked2 = null;
var echec = false;
var clicked_turn = 0;
var score = 0;
var clicked = ['back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back', 'back'];

var fruitsDuplicated = [];
for (var i = 0; i < 9; i++)
  fruitsDuplicated.push(Fruits[i], Fruits[i]);

console.log(fruitsDuplicated)

shuffle(fruitsDuplicated);
fakeRandom2(fruitsDuplicated);

function verifyId(a) {
  flippa(a);
  if(clicked_turn == 0) {
    id_clicked1 = a;
    clicked_turn = 1;
  } else if(clicked_turn == 1 && id_clicked1 != null) {
      id_clicked2 = a;
      clicked_turn = 0;
      console.log(id_clicked1 + ' ' + id_clicked2);
      verifySimilarity();
  }
}

function flippa(a) {
  if(clicked[a-100] == 'back' ) {
    clicked[a-100] = 'front';
    
    var card = document.getElementById(a);
    card.classList.toggle('flip');
  }
}

function flippaBack(a) {
  setTimeout( function() {
    var card = document.getElementById(a);
    card.classList.toggle('flip');
    clicked[a-100] = 'back';
  }, 500);
}

function fakeRandom2(array) { 
  for(var i=0;i<18;i++) {
    choosenFruits[i] = fruitsDuplicated[i];
    document.getElementById('back' + i).src = 'Images/' + fruitsDuplicated[i] + '.svg';
  }
}

function verifySimilarity() {
  if(id_clicked1 != null && id_clicked2 != null) {
      if(choosenFruits[id_clicked1-100] == choosenFruits[id_clicked2-100] && id_clicked1!=id_clicked2){
        score ++;
        if(score == 9) {
          alert('success');
        }
        id_clicked1 = null;
        id_clicked2 = null;
        clicked_turn == 0;
      } else{
        echec = true;
        flippaBack(id_clicked1);
        flippaBack(id_clicked2);
        id_clicked1 = null;
        id_clicked2 = null;
        clicked_turn == 0;
      }
  }
}

function shuffle(array) {
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