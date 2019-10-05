(function () {
  //Изменение цвета фаерболов по нажатию
  let fireBall=document.querySelector('.setup-fireball-wrap');
  let inputBall=document.querySelector('input[name="fireball-color"');
  let fireColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  function generateColorBall(fireColors) {
    let random = Math.floor(Math.random()*fireColors.length);
    return fireColors[random];
  }
  fireBall.addEventListener('click', function () {
    let x=`${generateColorBall(fireColors)}`;
    fireBall.style.backgroundColor=x;
    inputBall.value=x;
  });
})();
