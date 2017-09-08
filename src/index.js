import {BusyConfiguration} from './busyconfiguration';
import {Busy} from './busy';

export {Busy};
export function configure(aurelia, callback) {

  let config = new BusyConfiguration();

  if (typeof callback === 'function') {
    callback(config);
  }
}