let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-mobile');
let overlay = document.querySelector('.overlay');

let busketBtn = document.querySelector('.nav-busket');
let busketItem = document.querySelector('.modal-busket');


hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
  document.body.classList.toggle('noscroll');
})

overlay.addEventListener('click', function(){
  hamburger.classList.remove('is-active');
  nav.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.classList.remove('noscroll');

  busketItem.classList.remove('modal-active');
})

busketBtn.addEventListener('click', function(){
  busketItem.classList.add('modal-active');
  overlay.classList.add('is-active');
})

busketItem.addEventListener('click', function(){
  busketItem.classList.remove('modal-active');
  overlay.classList.remove('is-active');
})


