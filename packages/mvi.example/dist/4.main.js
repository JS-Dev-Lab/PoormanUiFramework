(window.webpackJsonpmvi_examples=window.webpackJsonpmvi_examples||[]).push([[4],{47:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ../mvi.vanilla/dist/index.js\nvar dist = __webpack_require__(53);\n\n// CONCATENATED MODULE: ./framework/vanilla/render.js\nfunction render(_ref) {\n  var _ref$state = _ref.state,\n      array = _ref$state.array,\n      name = _ref$state.name,\n      count = _ref$state.count;\n  return "<h1>Hello ".concat(name, "</h1>\\n <input value=\\"").concat(name, "\\" onInput=\\"commands.setName(event.target.value)\\"></input>\\n <p>").concat(name.length, "</p>\\n <p>").concat(count, "</p><button onClick=\\"commands.add()\\">My button</button>\\n <ul>").concat(array.map(function (value) {\n    return "<li>".concat(value, "</li>");\n  }).join(""), "</ul>");\n}\n\n\n// CONCATENATED MODULE: ./framework/vanilla/engine.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createView", function() { return createView; });\n\n\nvar engine_element = document.getElementById("app");\nvar createView = Object(dist["viewCreatorFactory"])(engine_element, render);\n\n\n//# sourceURL=webpack://mvi.examples/./framework/vanilla/engine.js_+_1_modules?')},53:function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(window, function () {\n  return function (e) {\n    var t = {};\n\n    function n(r) {\n      if (t[r]) return t[r].exports;\n      var o = t[r] = {\n        i: r,\n        l: !1,\n        exports: {}\n      };\n      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }\n\n    return n.m = e, n.c = t, n.d = function (e, t, r) {\n      n.o(e, t) || Object.defineProperty(e, t, {\n        enumerable: !0,\n        get: r\n      });\n    }, n.r = function (e) {\n      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n        value: "Module"\n      }), Object.defineProperty(e, "__esModule", {\n        value: !0\n      });\n    }, n.t = function (e, t) {\n      if (1 & t && (e = n(e)), 8 & t) return e;\n      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;\n      var r = Object.create(null);\n      if (n.r(r), Object.defineProperty(r, "default", {\n        enumerable: !0,\n        value: e\n      }), 2 & t && "string" != typeof e) for (var o in e) {\n        n.d(r, o, function (t) {\n          return e[t];\n        }.bind(null, o));\n      }\n      return r;\n    }, n.n = function (e) {\n      var t = e && e.__esModule ? function () {\n        return e.default;\n      } : function () {\n        return e;\n      };\n      return n.d(t, "a", t), t;\n    }, n.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, n.p = "", n(n.s = 0);\n  }([function (module, exports, __webpack_require__) {\n    eval("module.exports = __webpack_require__(1);\\n\\n\\n//# sourceURL=webpack://mvi.core/multi_./src/index.js?");\n  }, function (module, __webpack_exports__, __webpack_require__) {\n    "use strict";\n\n    eval(\'__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewCreatorFactory", function() { return viewCreatorFactory; });\\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\\n\\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\\n\\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\\n\\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\\n\\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\\n\\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\\n\\nfunction viewCreatorFactory(element, render) {\\n  return function (_ref) {\\n    var state = _ref.state,\\n        commands = _ref.commands;\\n    return new View({\\n      state: _objectSpread({}, state),\\n      commands: commands\\n    }, element, render);\\n  };\\n}\\n\\nvar View =\\n/*#__PURE__*/\\nfunction () {\\n  function View(_ref2, element, render) {\\n    var state = _ref2.state,\\n        commands = _ref2.commands;\\n\\n    _classCallCheck(this, View);\\n\\n    this._element = element;\\n    this._commands = commands;\\n    window.commands = commands;\\n    this._render = render;\\n    this.fullUpdate(state);\\n  }\\n\\n  _createClass(View, [{\\n    key: "update",\\n    value: function update(updater) {\\n      var newState = _objectSpread({}, this._state);\\n\\n      updater(newState);\\n      this.fullUpdate(newState);\\n    }\\n  }, {\\n    key: "fullUpdate",\\n    value: function fullUpdate(state) {\\n      this._state = Object.freeze(state);\\n\\n      var html = this._render({\\n        state: this._state,\\n        commands: this._commands\\n      });\\n\\n      this._element.innerHTML = html;\\n    }\\n  }, {\\n    key: "state",\\n    get: function get() {\\n      return this._state;\\n    }\\n  }]);\\n\\n  return View;\\n}();\\n\\n\\n\\n//# sourceURL=webpack://mvi.core/./src/index.js?\');\n  }]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))\n\n//# sourceURL=webpack://mvi.examples/../mvi.vanilla/dist/index.js?')}}]);