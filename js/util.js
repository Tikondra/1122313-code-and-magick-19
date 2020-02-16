'use strict';

(function () {
  var DEBOUNCE__INTERVAL = 500;
  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE__INTERVAL);
    };
  };

  window.util = {
    ESK_KEY: 'Escape',
    ENTER_KEY: 'Enter',
    debounce: debounce
  };
})();
