(function () {
  //Окно.setup должно открываться по нажатию на блок.setup-open.
// Открытие окна производится удалением класса hidden у блока
  let setupOpen=document.querySelector('.setup-open-icon');
  let setupClose=document.querySelector('.setup-close');
  let setupSubmit = document.querySelector('.setup-submit');
  let form= document.querySelector('.setup-wizard-form');
  let userDialog = document.querySelector('.setup');

  setupOpen.tabIndex=0;
  setupClose.tabIndex=0;
  let dialogPositionDefault={
    x: userDialog.style.left,
    y: userDialog.style.top
  };
  function onDialogEsc(evt) {
    if(evt.keyCode===27 && document.activeElement===setupClose) {
      closeDialog();
    }
  }

  function openDialog(){
    userDialog.style.left=dialogPositionDefault.x;
    userDialog.style.top= dialogPositionDefault.y;
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEsc);
  }
  function closeDialog() {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onDialogEsc);
  }
  function submitSetup(){
    form.submit();
  }
  setupOpen.addEventListener('click', function () {
    openDialog();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if(evt.keyCode===13){
      openDialog();
    }
  });
  setupClose.addEventListener('click', function () {
    closeDialog();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if(evt.keyCode===13){
      closeDialog();
    }
  });
  form.addEventListener('keydown', function (evt) {
    if(evt.keyCode===13) {
      evt.preventDefault();
    }
  });
  setupSubmit.addEventListener('keydown', function (evt) {
    if(evt.keyCode===13 && document.activeElement===setupSubmit){
      submitSetup();
    }
  });

})();
