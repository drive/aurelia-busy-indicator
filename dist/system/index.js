'use strict';

System.register(['./busyconfiguration', './busy'], function (_export, _context) {
  "use strict";

  var BusyConfiguration, Busy;
  function configure(aurelia, callback) {

    var config = new BusyConfiguration();

    if (typeof callback === 'function') {
      callback(config);
    }
  }

  _export('configure', configure);

  return {
    setters: [function (_busyconfiguration) {
      BusyConfiguration = _busyconfiguration.BusyConfiguration;
    }, function (_busy) {
      Busy = _busy.Busy;
    }],
    execute: function () {
      _export('Busy', Busy);
    }
  };
});