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
  let random = Math.floor(Math.random()*width);
  x=random;
  return random;
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
map.classList.remove('map--faded');

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






