//changing the dom

let score = 0;
let scoreValue = document.getElementById('score');
let wam = document.getElementById('whack-a-mole');
let holes = document.getElementsByClassName('hole');



setInterval( ()=> {
const randomHoleIndex = Math.floor(Math.random() * holes.length);  
holes[randomHoleIndex].classList.toggle("mole");
}, 500);


const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    // we hit a mole!
  }
});