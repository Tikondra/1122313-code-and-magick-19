'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarListElement = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardCount = 4;
var setupOpenBtn = document.querySelector('.setup-open-icon');
var setupCloseBtn = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = setup.querySelector('input[name=coat-color]');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

// получение рандомного стата из массива
var getRandomStat = function (arr) {
  var randomStat = Math.floor(Math.random() * arr.length);
  return randomStat;
};
// получение рандомного мага
var getRandomWizard = function () {
  var randomWizard =
  {
    name: names[getRandomStat(names)],
    lastName: lastNames[getRandomStat(lastNames)],
    coatColor: coatColors[getRandomStat(coatColors)],
    eyesColor: eyesColors[getRandomStat(eyesColors)]
  };
  return randomWizard;
};
// отрисовка рандомного мага
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomWizard().name + ' ' + getRandomWizard().lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomWizard().coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomWizard().eyesColor;

  return wizardElement;
};
var fragment = document.createDocumentFragment();
// добавление магов в фрагмент
for (var i = 0; i < wizardCount; i++) {
  fragment.appendChild(renderWizard());
}
// добавление магов на страницу
similarListElement.appendChild(fragment);
setupSimilar.classList.remove('hidden');
// открытие окна настроек
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    onClosePopup();
  }
};
var onOpenPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
// закрытие окна настроек
var onClosePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
// обработчики на открытие и закрытие окна настроек
setupOpenBtn.addEventListener('click', function () {
  onOpenPopup();
});
setupOpenBtn.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onOpenPopup();
  }
});
setupCloseBtn.addEventListener('click', function () {
  onClosePopup();
});
setupCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onClosePopup();
  }
});
// получение рандомного цвета
var getRandomColor = function (arr) {
  var randomColor = arr[getRandomStat(arr)];
  return randomColor;
};
// обработчик смены цвета плаща
var onChangeColorCoat = function () {
  var color = getRandomColor(coatColors);
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
};
// обработчик смены цвета глаз
var onChangeColorEyes = function () {
  var color = getRandomColor(eyesColors);
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
};
// обработчик смены цвета файрбола
var onChangeColorFireball = function () {
  var color = getRandomColor(fireballColors);
  wizardFireball.style.backgroundColor = color;
  wizardFireballInput.value = color;
};
// смена цвета плаща
wizardCoat.addEventListener('click', function () {
  onChangeColorCoat();
});
// изменение цвета глаз
wizardEyes.addEventListener('click', function () {
  onChangeColorEyes();
});
// изменение цвета файрбола
wizardFireball.addEventListener('click', function () {
  onChangeColorFireball();
});
