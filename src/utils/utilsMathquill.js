"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fMathQuill = {
  getInterface: function getInterface() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    return _getInterface(n);
  },
  isLoaded: function isLoaded() {
    return _isLoaded();
  },
  MathField: function MathField() {
    return _MathField.apply(undefined, arguments);
  },
  object: function object() {
    return window.MathQuill;
  },
  StaticMath: function StaticMath() {
    return _StaticMath.apply(undefined, arguments);
  },
  waitThenWhenLoaded: function waitThenWhenLoaded(callback, interval, wait) {
    return waitThenWhenMathQuillLoaded(callback, interval, wait);
  },
  whenLoaded: function whenLoaded(callback, interval) {
    return whenMathQuillLoaded(callback, interval);
  }
};

var _getInterface = function _getInterface() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return window.MathQuill ? window.MathQuill.getInterface(n) : null;
};

var _isLoaded = function _isLoaded() {
  return window.MathQuill;
};

var _MathField = function _MathField() {
  var _getInterface2;

  return _isLoaded() ? (_getInterface2 = _getInterface()).MathField.apply(_getInterface2, arguments) : null;
};

var _StaticMath = function _StaticMath() {
  var _getInterface3;

  return _isLoaded() ? (_getInterface3 = _getInterface()).StaticMath.apply(_getInterface3, arguments) : null;
};

var waitThenWhenMathQuillLoaded = function waitThenWhenMathQuillLoaded(callback, interval) {
  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return setTimeout(function () {
    return whenMathQuillLoaded(callback, interval);
  }, wait);
};

var whenMathQuillLoaded = function whenMathQuillLoaded(callback) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  _isLoaded() ? callback() : setTimeout(function () {
    return whenMathQuillLoaded(callback, interval);
  }, interval);
};

exports.default = fMathQuill;