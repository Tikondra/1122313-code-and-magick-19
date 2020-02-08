'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

  // обработчик смены цвета плаща
  var onChangeColorCoat = function () {
    var color = window.data.coatColors[window.data.getRandomStat(window.data.coatColors)];
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };
  // обработчик смены цвета глаз
  var onChangeColorEyes = function () {
    var color = window.data.eyesColors[window.data.getRandomStat(window.data.eyesColors)];
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };
  // обработчик смены цвета файрбола
  var onChangeColorFireball = function () {
    var color = window.data.fireballColors[window.data.getRandomStat(window.data.fireballColors)];
    wizardFireball.style.backgroundColor = color;
    wizardFireballInput.value = color;
  };
  // получение рандомного мага
  // var getRandomWizard = function () {
  //   return {
  //     name: window.data.names[window.data.getRandomStat(window.data.names)],
  //     lastName: window.data.lastNames[window.data.getRandomStat(window.data.lastNames)],
  //     coatColor: window.data.coatColors[window.data.getRandomStat(window.data.coatColors)],
  //     eyesColor: window.data.eyesColors[window.data.getRandomStat(window.data.eyesColors)]
  //   };
  // };
  // отрисовка рандомного мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  // загрузка магов
  var loadWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    // добавление магов в фрагмент
    for (var i = 0; i < window.data.wizardCount; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    // добавление магов на страницу
    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  window.backend.load(loadWizards, window.backend.onError);
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
})();
