var Fruits = ['avocado.svg','blueberries.svg','cabbage.svg','spring-onion.svg','cherry.svg','olives.svg','parsley.svg','radishes.svg','raspberry.svg'];
var choosenFruits = [];
var choosenCards = [];
flippa();
fakeRandom();
//let  VerifyId = a => alert(a);
console.log(choosenFruits);


function flippa(){
  const cards = document.querySelectorAll(".cards__single");
  function flipCard() {
    this.classList.toggle("flip");
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

function fakeRandom(){ //just for testing 
  var l = 0;
  for(var i=0,j=1;i<=18;i+=2,j+=2){
    if(l==8){
      l=0;
    }
    document.getElementById(i).src = Fruits[l];
    document.getElementById(j).src = Fruits[l];
    l++;

  }
}

function chooseRandom(){
  for(var i=0,j=0;i<=17;i++,j++){
    var a = Math.floor(Math.random() * 9) + 0;
    if( Occurence(choosenFruits,Fruits[a]) <= 1 ){
      choosenFruits.push(Fruits[a]);
      document.getElementById(i).src = Fruits[a];
    }
  }
}

function Occurence(Array1,char) {
  var result = 0;
  for(var k=0;k<Array1.length;k++){
    if(Array1[k]==char){
        result ++;
    }
  }
  return result;
}
