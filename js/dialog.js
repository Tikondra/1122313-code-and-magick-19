'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpenBtn = document.querySelector('.setup-open-icon');
  var setupCloseBtn = setup.querySelector('.setup-close');
  var dialogHandle = setup.querySelector('.upload');

  // открытие окна настроек
  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESK_KEY) {
      closePopup();
    }
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  // закрытие окна настроек
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  // обработчики на открытие и закрытие окна настроек
  setupOpenBtn.addEventListener('click', openPopup);
  setupCloseBtn.addEventListener('click', closePopup);
  setupOpenBtn.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      openPopup();
    }
  });
  setupCloseBtn.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closePopup();
    }
  });

  // перетаскивание
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragget = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragget = true;

      var shift = {
        x: startCoord.x - moveEvt.clientX,
        y: startCoord.y - moveEvt.clientY
      };

      startCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragget) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
