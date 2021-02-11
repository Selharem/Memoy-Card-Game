const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

let  VerifyId = a => alert(a);

var Fruits = ['avocado.svg','blueberries.svg','cabbage.svg','spring-onion.svg','cherry.svg','olives.svg','parsley.svg','radishes.svg','raspberry.svg']
var choosenFruits = [];
var choosenCards = [];



for(var i=0,j=0;i<=20;i++,j++){
    var a = Math.floor(Math.random() * 8) + 0;
    if( Occurence(choosenFruits,Fruits[a]) <= 1 ){
      choosenFruits.push(Fruits[a]);
      document.getElementById(i).src = Fruits[a];
    }
}


console.log(choosenFruits);

function Occurence(Array1,char) {
    var result = 0;
    for(var k=0;k<Array1.length;k++){
        if(Array1[k]==char){
            result ++;
        }
    }
    return result;
}


