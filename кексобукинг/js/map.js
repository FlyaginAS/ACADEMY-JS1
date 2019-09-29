'use strict';

let  adverts = [];
let generateObj=function () {
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

    }
  };
};


