'use strict';


let xhr=new XMLHttpRequest();
xhr.addEventListener('load', function (evt) {
  console.log(evt.target===xhr);
  console.log(xhr.responseText);
});

xhr.open('GET', 'https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json');
xhr.send();
