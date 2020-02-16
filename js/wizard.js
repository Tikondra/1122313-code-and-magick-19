'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name=fireball-color]');
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };
  // обработчик смены цвета плаща
  var onChangeColorCoat = function () {
    var color = window.data.coatColors[window.data.getRandomStat(window.data.coatColors)];
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
    wizard.onCoatChange(color);
  };
  // обработчик смены цвета глаз
  var onChangeColorEyes = function () {
    var color = window.data.eyesColors[window.data.getRandomStat(window.data.eyesColors)];
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
    wizard.onEyesChange(color);
  };
  // обработчик смены цвета файрбола
  var onChangeColorFireball = function () {
    var color = window.data.fireballColors[window.data.getRandomStat(window.data.fireballColors)];
    wizardFireball.style.backgroundColor = color;
    wizardFireballInput.value = color;
  };

  // смена цвета плаща
  wizardCoat.addEventListener('click', onChangeColorCoat);
  // изменение цвета глаз
  wizardEyes.addEventListener('click', onChangeColorEyes);
  // изменение цвета файрбола
  wizardFireball.addEventListener('click', onChangeColorFireball);

  window.wizard = wizard;
})();
