//changing the dom

let score = 0;
let scoreValue = document.getElementById('score');
let wam = document.getElementById('whack-a-mole');
let holes = document.getElementsByClassName('hole');
const randomHoleIndex = Math.floor(Math.random() * holes.length);
holes[randomHoleIndex].classList.toggle("mole");

