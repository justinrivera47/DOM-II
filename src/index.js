import './less/index.less'

// Your code goes here!

//Nav links
const navLinks = document.querySelector('nav')

navLinks.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

//Intro Image 
const introImg = document.querySelector('.intro img')

//All H2
const h2 = document.querySelectorAll('h2');

//btn
const btn = document.querySelectorAll('.btn');

//h1
const h1 = document.querySelector('h1');

//body keydown e
const body = document.querySelector('body');
document.addEventListener('keydown', logKey);
function logKey(e) {
  body.textContent += ` ${e.code}`;
}