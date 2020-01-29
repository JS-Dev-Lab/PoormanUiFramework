!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("remotedev")):"function"==typeof define&&define.amd?define(["remotedev"],n):"object"==typeof exports?exports["mvi.core"]=n(require("remotedev")):e["mvi.core"]=n(e.remotedev)}(window,(function(__WEBPACK_EXTERNAL_MODULE__0__){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__0__;\n\n//# sourceURL=webpack://mvi.core/external_%22remotedev%22?")},function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(2);\n\n\n//# sourceURL=webpack://mvi.core/multi_./index.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external "remotedev"\nvar external_remotedev_ = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/RemoteDevHandler.js\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nfunction getUpdaterForDebug(view) {\n  if (!view.fullUpdate) {\n    console.warn("Time travel not implemented");\n    return function () {};\n  }\n\n  return view.fullUpdate.bind(view);\n}\n\nvar RemoteDevHandler_RemoteDevHandler =\n/*#__PURE__*/\nfunction () {\n  function RemoteDevHandler(_ref) {\n    var state = _ref.state,\n        view = _ref.view,\n        viewName = _ref.viewName;\n\n    _classCallCheck(this, RemoteDevHandler);\n\n    var updateState = getUpdaterForDebug(view);\n    this.remoteDev = Object(external_remotedev_["connectViaExtension"])();\n    this.remoteDev.init(state, {\n      name: "".concat(viewName)\n    });\n    this.remoteDev.subscribe(function (message) {\n      var state = Object(external_remotedev_["extractState"])(message);\n\n      if (!state) {\n        return;\n      }\n\n      updateState(state);\n    });\n  }\n\n  _createClass(RemoteDevHandler, [{\n    key: "update",\n    value: function update(state) {\n      this.remoteDev.send("action", state);\n    }\n  }]);\n\n  return RemoteDevHandler;\n}();\n\n\n// CONCATENATED MODULE: ./src/ObservableView.js\nfunction ObservableView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction ObservableView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction ObservableView_createClass(Constructor, protoProps, staticProps) { if (protoProps) ObservableView_defineProperties(Constructor.prototype, protoProps); if (staticProps) ObservableView_defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ObservableView =\n/*#__PURE__*/\nfunction () {\n  function ObservableView(_ref) {\n    var view = _ref.view;\n\n    ObservableView_classCallCheck(this, ObservableView);\n\n    this._view = view;\n    this.listeners = [];\n  }\n\n  ObservableView_createClass(ObservableView, [{\n    key: "onStateChanged",\n    value: function onStateChanged(callback) {\n      var _this = this;\n\n      this.listeners.push(callback);\n      return function () {\n        _this.listeners = _this.listeners.filter(function (listener) {\n          return listener !== callback;\n        });\n      };\n    }\n  }, {\n    key: "fullUpdate",\n    value: function fullUpdate(updater) {\n      this._view.fullUpdate(updater);\n    }\n  }, {\n    key: "update",\n    value: function update(updater) {\n      this._view.update(updater);\n\n      var state = this._view.state;\n      this.listeners.forEach(function (listener) {\n        listener(state);\n      });\n    }\n  }, {\n    key: "state",\n    get: function get() {\n      return this._view.state;\n    }\n  }]);\n\n  return ObservableView;\n}();\n\nfunction mapToObservable(createView) {\n  return function (_ref2) {\n    var state = _ref2.state,\n        commands = _ref2.commands;\n    var view = createView({\n      state: state,\n      commands: commands\n    });\n    return new ObservableView({\n      view: view,\n      state: state\n    });\n  };\n}\n\nfunction mapToDebug(createView) {\n  var viewName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "application name";\n  return function (_ref3) {\n    var state = _ref3.state,\n        commands = _ref3.commands;\n    var view = mapToObservable(createView)({\n      state: state,\n      commands: commands\n    });\n    var remoteDev = new RemoteDevHandler_RemoteDevHandler({\n      state: state,\n      viewName: viewName,\n      view: view\n    });\n    view.onStateChanged(function (newState) {\n      return remoteDev.update(newState);\n    });\n    return view;\n  };\n}\n\n\n// CONCATENATED MODULE: ./index.js\n/* concated harmony reexport ObservableView */__webpack_require__.d(__webpack_exports__, "ObservableView", function() { return ObservableView; });\n/* concated harmony reexport mapToDebug */__webpack_require__.d(__webpack_exports__, "mapToDebug", function() { return mapToDebug; });\n\n\n\n//# sourceURL=webpack://mvi.core/./index.js_+_2_modules?')}])}));