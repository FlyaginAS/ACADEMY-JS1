//module 2-2pin**********************************************************************************
(function () {
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
  createPins(window.data.adverts);
})();
