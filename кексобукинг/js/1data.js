//module 1data******************************************************************************
(function () {
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
    return `img/avatars/user${elem[0]}.png`;
  }

  function generateTitle() {
    let random=Math.floor(Math.random()*arr2.length);
    let elem = arr2.splice(random, 1);
    return  elem[0];
  }

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
  window.data={
    'generateAdvert': function generateAdvert() {
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
    },
    'adverts': adverts,
    'generateFeatures': generateFeatures,
  };
})();
