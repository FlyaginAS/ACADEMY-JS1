//module 2-1card******************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
  for(let i=0; i<8;i++){
    window.data.adverts.push(window.data.generateAdvert());
  }
//создаем объявление
  function genLi(n) {
    let arr= window.data.generateFeatures();
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
  createCard(window.data.adverts);
})();
