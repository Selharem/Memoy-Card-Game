const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

let  VerifyId = a => alert(a);

var Fruits = ['avocado.svg','blueberries.svg','cabbage.svg','cabbage.svg','cherry.svg','olives.svg','parsley.svg','radishes.svg','raspberry.svg']

for(var i=11,j=0;i<=99;i+=11,j++){
  document.getElementById(i).src = Fruits[j];

}


