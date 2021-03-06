'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingIndicator = function LoadingIndicator() {
  return _react2.default.createElement(
    _Wrapper2.default,
    null,
    _react2.default.createElement(_Circle2.default, null),
    _react2.default.createElement(_Circle2.default, { rotate: 30, delay: -1.1 }),
    _react2.default.createElement(_Circle2.default, { rotate: 60, delay: -1 }),
    _react2.default.createElement(_Circle2.default, { rotate: 90, delay: -0.9 }),
    _react2.default.createElement(_Circle2.default, { rotate: 120, delay: -0.8 }),
    _react2.default.createElement(_Circle2.default, { rotate: 150, delay: -0.7 }),
    _react2.default.createElement(_Circle2.default, { rotate: 180, delay: -0.6 }),
    _react2.default.createElement(_Circle2.default, { rotate: 210, delay: -0.5 }),
    _react2.default.createElement(_Circle2.default, { rotate: 240, delay: -0.4 }),
    _react2.default.createElement(_Circle2.default, { rotate: 270, delay: -0.3 }),
    _react2.default.createElement(_Circle2.default, { rotate: 300, delay: -0.2 }),
    _react2.default.createElement(_Circle2.default, { rotate: 330, delay: -0.1 })
  );
};

exports.default = LoadingIndicator;