const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

function VerifyId(a) {
    alert(a);
}

