var Fruits = ['avocado.svg','blueberries.svg','cabbage.svg','spring-onion.svg','cherry.svg','olives.svg','parsley.svg','radishes.svg','raspberry.svg'];
var choosenFruits = [];
var choosenCards = [];
var id_clicked1 = null;
var id_clicked2 = null;
var clicked_turn = 0;
flippa();
fakeRandom();

function VerifyId(a) {
  if(clicked_turn == 0){
    id_clicked1 = a;
    clicked_turn = 1;
  } else if(clicked_turn == 1 && id_clicked1!=null){
    id_clicked2 = a;
    clicked_turn = 0;
    console.log(id_clicked1 + ' ' + id_clicked2)
    verifySimilarity();
  }
}

function flippa(){
  const cards = document.querySelectorAll(".cards__single");
  function flipCard() {
    this.classList.toggle("flip");
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

function fakeRandom(){ //just for testing 
  var l = 0;
  for(var i=0,j=1;i<=17;i+=2,j+=2){
    if(l==9){
      l=0;
    }

    

    //document.getElementById(i).src = Fruits[l];
    choosenFruits[i] = Fruits[l];
    //document.getElementById(j).src = Fruits[l];
    choosenFruits[j] = Fruits[l];
    document.getElementById('back' + i).src = Fruits[l];
    document.getElementById('back' + j).src = Fruits[l];
    l++;

  }
}

console.log(choosenFruits);

function verifySimilarity(){
  if(id_clicked1 != null && id_clicked2 != null) {
      if(choosenFruits[id_clicked1-100] == choosenFruits[id_clicked2-100]){
        alert('success');
        id_clicked1 = null;
        id_clicked2 = null;
        clicked_turn == 0;
      }
  }
}

function chooseRandom(){
  for(var i=0,j=0;i<=17;i++,j++){
    var a = Math.floor(Math.random() * 9) + 0;
    //if( Occurence(choosenFruits,Fruits[a]) <= 1 ){
      //choosenFruits.push(Fruits[a]);
      choosenFruits[i] = Fruits[a];
      document.getElementById(i).src = choosenFruits[i];
    //}
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