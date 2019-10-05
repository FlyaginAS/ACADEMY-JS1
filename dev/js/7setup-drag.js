(function () {
  //перемещение окна( переменная userDialog) за фотку
  let userDialog = document.querySelector('.setup');
  let setupUserPic= userDialog.querySelector('.upload');
  setupUserPic.addEventListener('mousedown', function (evt) {
    // evt.preventDefault();
    // console.log(evt.target);
    let startCoords={
      x: evt.clientX,
      y: evt.clientY
    };
    let drag=false;

    function onMouseMove(moveEvt){
      drag=true;
      // moveEvt.preventDefault();
      let shift={
        x: moveEvt.clientX-startCoords.x,
        y: moveEvt.clientY-startCoords.y
      };
      startCoords.x=moveEvt.clientX;
      startCoords.y=moveEvt.clientY;
      userDialog.style.top=(userDialog.offsetTop+shift.y) + 'px';
      userDialog.style.left=(userDialog.offsetLeft + shift.x) + 'px';
    }

    function onMouseUp(upEvt){
      // upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if(drag){
        let onClickPreventDefault = function(evt){
          evt.preventDefault();
          setupUserPic.removeEventListener('click', onClickPreventDefault);
        };
        setupUserPic.addEventListener('click', onClickPreventDefault);
      }

    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

})();
