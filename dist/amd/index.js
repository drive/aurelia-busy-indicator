define(['exports', './busyconfiguration', './busy'], function (exports, _busyconfiguration, _busy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Busy = undefined;
  exports.configure = configure;
  exports.Busy = _busy.Busy;
  function configure(aurelia, callback) {

    var config = new _busyconfiguration.BusyConfiguration();

    if (typeof callback === 'function') {
      callback(config);
    }
  }
});