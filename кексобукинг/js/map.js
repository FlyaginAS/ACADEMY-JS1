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



function generateObj() {
  return {
    author: {
      avatar: generateAvatar()
    },
    offer: {
      title: generateTitle(),
      address: generateAddress(),
      price: generatePrice(),
      type: generateType(),
      rooms: generateRooms(),
      guests: generateGuests(),
      checkin: generateCheckin(),
      checkout: generateCheckout(),
      features: generateFeatures(),
      description:'',
      photos: generatePhotos()
    },
    location: {
      x: generateX(),
      y: generateY()
    }
  };
}



