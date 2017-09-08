var _dec, _class;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { inject, Container, ViewEngine } from "aurelia-framework";

export let Busy = (_dec = inject(Container, ViewEngine), _dec(_class = class Busy {
  constructor(container, viewEngine, view, elementSelector = null) {
    this.container = container;
    this.viewEngine = viewEngine;

    this.top = null;
    this.height = null;
    this.width = null;
    this.spinnerTop = null;
    this.spinnerSize = 30;

    this.root = elementSelector === null ? view.fragment.children[0] : view.fragment.children[0].querySelector(elementSelector);
  }

  show() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.calculateSize();
      yield _this.createBusyView();
    })();
  }

  hide() {
    this.view.removeNodes();
  }

  calculateSize() {
    let boundingBox = this.root.getBoundingClientRect();
    this.top = boundingBox.top;
    this.height = Math.max(boundingBox.height, window.innerHeight - this.top);
    this.width = boundingBox.width;
    this.spinnerTop = (window.innerHeight - this.top) / 2 - this.spinnerSize;
  }

  createBusyView() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let factory = yield _this2.viewEngine.loadViewFactory('widgets/busy/busy.html');
      const childContainer = _this2.container.createChild();
      _this2.view = factory.create(childContainer);
      _this2.view.bind(_this2);
      _this2.view.appendNodesTo(_this2.root);
    })();
  }
}) || _class);