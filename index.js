let button = document.querySelector('.btn-start');
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function() {
   counter = counter + 1;
   counterText.innerText = counter;
});

let reset = document.querySelector('.btn-reset');
reset.addEventListener('click', function() {
   counter = 0;
   counterText.innerText = counter;
});