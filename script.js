var Fruits = ['avocado','blueberries','cabbage','spring-onion','cherry','olives','parsley','radishes','raspberry'];
var choosenFruits = [];
var choosenCards = [];
var id_clicked1 = null;
var id_clicked2 = null;
var clicked_turn = 0;
var clicked = ['back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back','back'];

//flippa();
fakeRandom();

function VerifyId(a) {
  flippa(a);
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


function flippa(a) {
  if(clicked[a-100] == 'back'){
    clicked[a-100] = 'front'
  var card = document.getElementById(a);
  card.classList.toggle('flip');
  }
}

/*function flippa2(){
  const cards = document.querySelectorAll(".cards__single");
  function flipCard2() {
    this.classList.toggle("flip");
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));
}*/

function fakeRandom(){ //just for testing 
  var l = 0;
  for(var i=0,j=1;i<=17;i+=2,j+=2){
    if(l==9){
      l=0;
    }
    choosenFruits[i] = Fruits[l];
    choosenFruits[j] = Fruits[l];
    document.getElementById('back' + i).src = 'Images/' + Fruits[l] + '.svg';
    document.getElementById('back' + j).src = 'Images/' + Fruits[l] + '.svg';
    l++;
  }
}

function verifySimilarity(){
  if(id_clicked1 != null && id_clicked2 != null) {
      if(choosenFruits[id_clicked1-100] == choosenFruits[id_clicked2-100] && id_clicked1!=id_clicked2){
        alert('success');
        id_clicked1 = null;
        id_clicked2 = null;
        clicked_turn == 0;
      } else{
        alert('echec')
      }
  }
}

/*function chooseRandom(){
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
}*/
