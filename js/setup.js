'use strict';

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
var wizardCount = 4;

var getRandomStat = function (arr) {
  var randomStat = Math.floor(Math.random() * arr.length);
  return randomStat;
};

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

setup.classList.remove('hidden');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomWizard().name + ' ' + getRandomWizard().lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomWizard().coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomWizard().eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizardCount; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);
setupSimilar.classList.remove('hidden');
