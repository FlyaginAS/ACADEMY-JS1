(function () {
  //Изменение цвета мантии персонажа по нажатию
  let coat = document.querySelector('.setup-wizard .wizard-coat');
  let inputCoat=document.querySelector('input[name="coat-color"]');
// console.log(inputCoat);
  let rgb = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'grb(0,0,0)'
  ];
  function generateColorCoat(rgb) {
    let random = Math.floor(Math.random()*rgb.length);
    return rgb[random];
  }
  coat.addEventListener('click', function () {
    coat.style.fill=`${generateColorCoat(rgb)}`;
    inputCoat.value=coat.style.fill;
  });
})();
