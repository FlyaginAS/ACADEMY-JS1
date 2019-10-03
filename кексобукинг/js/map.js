'use strict';

let  adverts = [];
let arr=['01', '02', '03', '04', '05', '06', '07', '08'];
let arr2=[
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде"
];
let x,y;

function generateAvatar() {
  let random=Math.floor(Math.random()*arr.length);
  let elem = arr.splice(random, 1);
  // console.log(`img/avatars/user${elem[0]}.png`);
  return `img/avatars/user${elem[0]}.png`;
}

function generateTitle() {
  let random=Math.floor(Math.random()*arr2.length);
  let elem = arr2.splice(random, 1);
  return  elem[0];
}
//проверить нижнюю функцию
// function generateAddress() {
//   return `${location.x}, ${location.y}`;
// }

function generatePrice() {
  let price =Math.floor(Math.random()*999000 + 1000) ;
  return price;
}

function generateType() {
  let arr = ['palace', 'flat', 'house', 'bungalo'];

  let random = Math.floor(Math.random()*arr.length);
  return arr[random];
}

function generateRooms() {
  let random=Math.floor(Math.random()*5+1);
  return random;
}

function generateGuests() {
  let random=Math.floor(Math.random()*10+1);
  return random;
}

function generateCheckin() {
  let arr=['12:00', '13:00', '14:00'];
  let random=Math.floor(Math.random()*arr.length);
  return arr[random];
}

function generateCheckout() {
  let arr=['12:00', '13:00', '14:00'];
  let random=Math.floor(Math.random()*arr.length);
  return arr[random];
}

function generateFeatures() {
  let features=['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  let random=Math.floor(Math.random()*features.length);
  features.length=random;
  return features;
}

function generatePhotos() {
  let arr=[
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  ];
  return arr;
}

function generateX() {
  let map = document.querySelector('.map__pins');
  let width=map.offsetWidth;
  let random = Math.floor(Math.random()*(width-250));
  x=random+250;
  return x;
}

function generateY() {
  let random = Math.floor(Math.random()*500 + 130);
  y=random;
  return random;
}


function generateAdvert() {
  return {
    author: {
      avatar: generateAvatar()
    },
    location: {
      x: generateX(),
      y: generateY()
    },
    offer: {
      title: generateTitle(),
      address:  `${x}, ${y}`,
      price: generatePrice(),
      type: generateType(),
      rooms: generateRooms(),
      guests: generateGuests(),
      checkin: generateCheckin(),
      checkout: generateCheckout(),
      features: generateFeatures(),
      description:'',
      photos: generatePhotos()
    }
  };
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
for(let i=0; i<8;i++){
  adverts.push(generateAdvert());
}

//DOM
let map = document.querySelector('.map');
// map.classList.remove('map--faded');

//функция по созданию pin
function createPins(adverts) {
  let fragment = document.createDocumentFragment();
  for(let i=0; i<adverts.length; i++){
    let pin = document.querySelector('template').content.querySelector('.map__pin').cloneNode(true);
    let pinImg = pin.querySelector('img');
    pin.style=`left: ${adverts[i].location.x + 20}px; top: ${adverts[i].location.y + 65}px;`;
    pinImg.src=`${adverts[i].author.avatar}`;
    pinImg.alt=`${adverts[i].offer.title}`;
    fragment.appendChild(pin);
  }
  document.querySelector('.map__pins').append(fragment);
}
 createPins(adverts);

//создаем объявление
function genLi(n) {
  let arr= generateFeatures();
  let s;
  if(arr[n]===undefined){
    return '';
  } else {
    return arr[n];
  }
}
function createCard(adverts) {
  let fragment=document.createDocumentFragment();

  for(let i=0; i<adverts.length; i++){
    let card = document.createElement('article');
    card.classList.add('map__card');
    card.classList.add('popup');

    card.innerHTML=`
    <img src=${adverts[i].author.avatar} class="popup__avatar" width="70" height="70">
    <button class="popup__close">Закрыть</button>
    <h3>${adverts[i].offer.title}</h3>
    <p><small>102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, ${adverts[i].offer.address}</small></p>
    <p class="popup__price">${adverts[i].offer.price} &#x20bd;/ночь</p>
    <h4>${adverts[i].offer.type}</h4>
    <p>${adverts[i].offer.rooms} комнаты для ${adverts[i].offer.guests} гостей</p>
    <p>Заезд после ${adverts[i].offer.checkin}, выезд до ${adverts[i].offer.checkout}</p>
    <ul class="popup__features">
      <li class="feature feature--wifi">${genLi(0)}</li>
      <li class="feature feature--dishwasher">${genLi(1)}</li>
      <li class="feature feature--parking">${genLi(2)}</li>
      <li class="feature feature--washer">${genLi(3)}</li>
      <li class="feature feature--elevator">${genLi(4)}</li>
      <li class="feature feature--conditioner">${genLi(5)}</li>
    </ul>
    <p>${adverts[i].offer.description}</p>
    <ul class="popup__pictures">
      <li><img src="${adverts[i].offer.photos[Math.floor(Math.random()*3)]}"></li>
      <li><img src="${adverts[i].offer.photos[Math.floor(Math.random()*3)]}"></li>
      <li><img src="${adverts[i].offer.photos[Math.floor(Math.random()*3)]}"></li>
    </ul>`;

    fragment.append(card);
  }
  // let map=document.querySelector('.map');
  let filters=document.querySelector('.map__filters-container');
  filters.before(fragment);
}
  createCard(adverts);

//Лекция 04*************************************************************************************
//По умолчанию все поля не активны
let fields=document.querySelectorAll('fieldset');
let adForm=document.querySelector('.notice__form');
let mapPinMain=document.querySelector('.map__pin--main');

function deactivatePage(){
  map.classList.add('map--faded');
  adForm.classList.add('notice__form--disabled');
  for(let item of fields){
    item.disabled=true;
  }

  let pins=document.querySelectorAll('.map__pin');
  for(let pin of pins){
    pin.classList.add('visuallyhidden');
  }
  document.querySelector('.map__pin--main').classList.remove('visuallyhidden');

  let articles=document.querySelectorAll('.map__card');
  for(let item of articles){
    item.style.display='none';
  }
}
deactivatePage();

//1. Активация страницы
//при событии Moseup на елементе .map__pin--main сделать активными все fieldset,
//удалить на элементе map класс .map--faded
//удалить у элемента .ad-form класс ad-form--disabled

function activatePage() {
  map.classList.remove('map--faded');
  adForm.classList.remove('notice__form--disabled');
  for(let item of fields){
    item.disabled=false;
  }
  let pins=document.querySelectorAll('.map__pin');
  for(let pin of pins){
    pin.classList.remove('visuallyhidden');
  }
}
mapPinMain.addEventListener('mouseup', activatePage);
//по клику на пине отобразить объявление
function showArticle(s){
  let articles=document.querySelectorAll('.map__card');
  for(let item of articles){
    item.style.display='none';
    let src = item.querySelector('img').getAttribute('src');
    if(src===s){
      item.style.display='block';
    }
  }
}
function onDocumentClick(evt){
  // console.log(evt.target);
  if(evt.target.closest('.map__pin:not(.map__pin--main)')){
    //скрываем все объяления перед показом этого ожного
    // let articles = document.querySelector('.map__card');
    // for(let item of articles){
    //
    // }
    let img = evt.target;
    let s= img.getAttribute('src');
    console.log(s);
    showArticle(s)
  }
}
document.body.addEventListener('click', onDocumentClick);

//2 Валидация формы
//Ограничения, накладываемые на поля ввода
let inputType=document.querySelector('#type');
let inputPrice=document.querySelector('#price');
let options=inputType.querySelectorAll('option');
function inputTypeChangeHandler(evt) {
  // console.log('ji');
  // console.log(options);
  for(let item of options){
    if(item.selected){
      if(item.value=='bungalo'){
        inputPrice.setAttribute('placeholder', '0');
        inputPrice.min=0;
      } else if(item.value=='flat'){
        inputPrice.setAttribute('placeholder','1000')
        inputPrice.min=1000;
      }else if(item.value=='house'){
        inputPrice.setAttribute('placeholder','5000')
        inputPrice.min=5000;
      }else if(item.value=='palace'){
        inputPrice.setAttribute('placeholder','10000')
        inputPrice.min=10000;
      }
    }
  }
}
function inputPriceChangeHandler(evt){
  let value=inputPrice.value;
  //обнулили состояние неактивных элтов
  for(let item of options){
    item.disabled=false;
  }
  if(value<1000){
    for(let item of options){
      if(item.value!='bungalo'){
        item.disabled=true;
      }  else{
        item.selected=true;
      }
    }
  } else
  if(value>=1000 && value<5000){
    for(let item of options){
      if(item.value!='flat' && item.value!='bungalo'){
        item.disabled=true;
      }  else{
        item.selected=true;
      }
    }
  } else
  if(value>=5000 && value<10000){
    for(let item of options){
      if(item.value!='house' && item.value!='bungalo' && item.value!='flat'){
        item.disabled=true;
      }  else{
        item.selected=true;
      }
    }
  } else
  if(value>=10000){
    for(let item of options){
      item.disabled=false;
    }
  } else
    if(value.toString().length>=1) {
      for (let item of options) {
        item.disabled = false;
      }
    }
}

inputType.addEventListener('change', inputTypeChangeHandler);
inputPrice.addEventListener('change', inputPriceChangeHandler);


//Лекция 05*************************************************************************************
//перемещение метки по карте
(function () {
  let mapPinMain=document.querySelector('.map__pin--main');
  mapPinMain.addEventListener('mousedown', function (evtDown) {
    //logic
    evt.preventDefault();
    let coordsStart={
      x: evtDown.clientX,
      y: evtDown.clientY
    };
    function onPinmove(evtMove){
      let shift={
        x: evtMove.clientX- coordsStart.x,
        y: evtMove.clientY - coordsStart.y
      };
      coordsStart.x=evtMove.clientX;
      coordsStart.y=evtMove.clientY;
    }
    document.addEventListener('mousemove', onPinMove);
    document.addEventListener('mouseup', onPinUp);
  });
})();



