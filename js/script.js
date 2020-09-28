const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.fade');
const body = document.querySelector('body');

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElement.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      element.classList.remove('noscroll');
    });
    
  } 
  else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElement.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
