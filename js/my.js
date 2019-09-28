'use strict';

let button = document.querySelector('.clickable');
let buttonClickHandler1  =  function () {
  alert('hello');
};
let buttonClickHandler2 = function(){
  alert('by-by');
};
button.addEventListener('click', fun);
button.addEventListener('click', by);
button.removeEventListener('click',by);
