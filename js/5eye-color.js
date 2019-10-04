(function () {
  //Изменение цвета глаз персонажа по нажатию
  let  eyes= document.querySelector('.setup-wizard .wizard-eyes');
  let inputEyes=document.querySelector('input[name="eyes-color"');
  let colors=[
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  function generateColorEyes(colors) {
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
  }
  eyes.addEventListener('click', function () {
    eyes.style.fill=`${generateColorEyes(colors)}`;
    inputEyes.value=eyes.style.fill;
  });
})();

