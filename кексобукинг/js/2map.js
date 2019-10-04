//module 2map******************************************************************************
(function () {
  //Лекция 04*******
//По умолчанию все поля не активны
  let map = document.querySelector('.map');
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

})();
