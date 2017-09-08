define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Busy = undefined;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Busy = exports.Busy = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Container, _aureliaFramework.ViewEngine), _dec(_class = function () {
    function Busy(container, viewEngine, view) {
      var elementSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _classCallCheck(this, Busy);

      this.container = container;
      this.viewEngine = viewEngine;

      this.top = null;
      this.height = null;
      this.width = null;
      this.spinnerTop = null;
      this.spinnerSize = 30;

      this.root = elementSelector === null ? view.fragment.children[0] : view.fragment.children[0].querySelector(elementSelector);
    }

    Busy.prototype.show = function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.calculateSize();
                _context.next = 3;
                return this.createBusyView();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function show() {
        return _ref.apply(this, arguments);
      }

      return show;
    }();

    Busy.prototype.hide = function hide() {
      this.view.removeNodes();
    };

    Busy.prototype.calculateSize = function calculateSize() {
      var boundingBox = this.root.getBoundingClientRect();
      this.top = boundingBox.top;
      this.height = Math.max(boundingBox.height, window.innerHeight - this.top);
      this.width = boundingBox.width;
      this.spinnerTop = (window.innerHeight - this.top) / 2 - this.spinnerSize;
    };

    Busy.prototype.createBusyView = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var factory, childContainer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.viewEngine.loadViewFactory('widgets/busy/busy.html');

              case 2:
                factory = _context2.sent;
                childContainer = this.container.createChild();

                this.view = factory.create(childContainer);
                this.view.bind(this);
                this.view.appendNodesTo(this.root);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createBusyView() {
        return _ref2.apply(this, arguments);
      }

      return createBusyView;
    }();

    return Busy;
  }()) || _class);
});