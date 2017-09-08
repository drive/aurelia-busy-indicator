'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Busy = undefined;
exports.configure = configure;

var _busyconfiguration = require('./busyconfiguration');

var _busy = require('./busy');

exports.Busy = _busy.Busy;
function configure(aurelia, callback) {

  var config = new _busyconfiguration.BusyConfiguration();

  if (typeof callback === 'function') {
    callback(config);
  }
}