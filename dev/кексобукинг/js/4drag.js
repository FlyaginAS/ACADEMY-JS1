//module 4drag
//Лекция 05*************************************************************************************
//перемещение метки по карте
(function () {
  let mapPinMain=document.querySelector('.map__pin--main');
  mapPinMain.addEventListener('mousedown', function (evtDown) {
    evtDown.preventDefault();
    let coordsStart={
      x: evtDown.clientX,
      y: evtDown.clientY
    };

    function onPinMove(evtMove){
      if(evtMove.clientX>200 && evtMove.clientX<document.documentElement.clientWidth-20 && evtMove.clientY>50 && evtMove.clientY<640){
        evtMove.preventDefault();
        let shift={
          x: evtMove.clientX- coordsStart.x,
          y: evtMove.clientY - coordsStart.y
        };
        coordsStart.x=evtMove.clientX;
        coordsStart.y=evtMove.clientY;
        mapPinMain.style.left=mapPinMain.offsetLeft + shift.x +'px';
        mapPinMain.style.top=mapPinMain.offsetTop + shift.y + 'px';
      }

    }

    function onPinUp(evtUp){
      evtUp.preventDefault();
      document.removeEventListener('mousemove', onPinMove);
      document.removeEventListener('mouseup', onPinUp);
    }

    document.addEventListener('mousemove', onPinMove);
    document.addEventListener('mouseup', onPinUp);
  });

})();
