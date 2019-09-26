'use strict';
//Покажите блок .setup, убрав в JS-коде у него класс .hidden
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

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
    name: WIZARDS_NAMES[0],
    coatColor: 'rgb(241,143,107)'
  },
  {
    name: WIZARDS_NAMES[0],
    coatColor: 'rgb(241,43,07)'
  },
  {
    name: WIZARDS_NAMES[0],
    coatColor: 'rgb(241,243,107)'
  }
];
for(var i=0; i<WIZARDS_NAMES.length; i++){
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent=wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill=wizards[i].coatColor;
  similarListElement.appendChild(wizardElement);
}
