'use strict';
//Покажите блок .setup, убрав в JS-коде у него класс .hidden
var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
//покажем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_NAMES = ['Дамблдлр', 'Waldemort', 'Doctor Strange', 'Garry Potter'];

var wizards = [
  {
    name: WIZARDS_NAMES[0],
    coatColor: 'rgb(41,43,107)'
  },
  {
    name: WIZARDS_NAMES[1],
    coatColor: 'rgb(241,143,107)'
  },
  {
    name: WIZARDS_NAMES[2],
    coatColor: 'rgb(241,43,07)'
  },
  {
    name: WIZARDS_NAMES[3],
    coatColor: 'rgb(241,243,107)'
  }
];
var renderWizard  = function (wizard)  {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent=wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill=wizards[i].coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for(var i=0; i<WIZARDS_NAMES.length; i++){
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

//4 СОБЫТИЯ*************************************************************************************

//Окно.setup должно открываться по нажатию на блок.setup-open.
// Открытие окна производится удалением класса hidden у блока
let setupOpen=document.querySelector('.setup-open-icon');
let setupClose=document.querySelector('.setup-close');
let setupSubmit = document.querySelector('.setup-submit');
let form= document.querySelector('.setup-wizard-form');

setupOpen.tabIndex=0;
setupClose.tabIndex=0;

function onDialogEsc(evt) {
  if(evt.keyCode===27 && document.activeElement==setupClose) {
    closeDialog();
  }
}

function openDialog(){
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

//Валидация ввода имени персонажа
let setupUserName = document.querySelector('.setup-user-name');
setupUserName.minLength=2;
setupUserName.maxLength=25;

//Изменение цвета мантии персонажа по нажатию
let coat = document.querySelector('.setup-wizard .wizard-coat');
let inputCoat=document.querySelector('input[name="coat-color"]');
console.log(inputCoat);
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

//Изменение цвета фаерболов по нажатию
let fireBall=document.querySelector('.setup-fireball-wrap');
let inputBall=document.querySelector('input[name="fireball-color"');
let fireColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6co',
  '#e848d8',
  '#e6e848'
];
function generateColorBall(fireColors) {
  let random = Math.floor(Math.random()*fireColors.length);
  return fireColors[random];
}
fireBall.addEventListener('click', function () {
  fireBall.style.background=`${generateColorBall(fireColors)}`;
  inputBall.value=fireBall.style.background;
});

