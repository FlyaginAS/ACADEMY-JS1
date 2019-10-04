//module 3form*****************************************************************************
(function () {
  //2 Валидация формы
//Ограничения, накладываемые на поля ввода
  let inputType=document.querySelector('#type');
  let inputPrice=document.querySelector('#price');
  let options=inputType.querySelectorAll('option');
  function inputTypeChangeHandler(evt) {
    // console.log('ji');
    // console.log(options);
    for(let item of options){
      if(item.selected){
        if(item.value==='bungalo'){
          inputPrice.setAttribute('placeholder', '0');
          inputPrice.min=0;
        } else if(item.value==='flat'){
          inputPrice.setAttribute('placeholder','1000')
          inputPrice.min=1000;
        }else if(item.value==='house'){
          inputPrice.setAttribute('placeholder','5000')
          inputPrice.min=5000;
        }else if(item.value==='palace'){
          inputPrice.setAttribute('placeholder','10000')
          inputPrice.min=10000;
        }
      }
    }
  }
  function inputPriceChangeHandler(evt){
    let value=inputPrice.value;
    //обнулили состояние неактивных элтов
    for(let item of options){
      item.disabled=false;
    }
    if(value<1000){
      for(let item of options){
        if(item.value!=='bungalo'){
          item.disabled=true;
        }  else{
          item.selected=true;
        }
      }
    } else
    if(value>=1000 && value<5000){
      for(let item of options){
        if(item.value!=='flat' && item.value!=='bungalo'){
          item.disabled=true;
        }  else{
          item.selected=true;
        }
      }
    } else
    if(value>=5000 && value<10000){
      for(let item of options){
        if(item.value!=='house' && item.value!=='bungalo' && item.value!=='flat'){
          item.disabled=true;
        }  else{
          item.selected=true;
        }
      }
    } else
    if(value>=10000){
      for(let item of options){
        item.disabled=false;
      }
    } else
    if(value.toString().length>=1) {
      for (let item of options) {
        item.disabled = false;
      }
    }
  }

  inputType.addEventListener('change', inputTypeChangeHandler);
  inputPrice.addEventListener('change', inputPriceChangeHandler);

})();

