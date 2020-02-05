'use strict';

(function () {
  var wizardCount = 4;
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // получение рандомного стата из массива
  var getRandomStat = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  window.data = {
    wizardCount: wizardCount,
    names: names,
    lastNames: lastNames,
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballColors: fireballColors,
    getRandomStat: getRandomStat
  };
})();
