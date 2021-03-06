'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n'], ['\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ', ' &:before {\n      content: \'\';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: ', ' 1.2s infinite ease-in-out both;\n      ', ';\n    }\n  '], ['\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ', ' &:before {\n      content: \'\';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: ', ' 1.2s infinite ease-in-out both;\n      ', ';\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var circleFadeDelay = (0, _styledComponents.keyframes)(_templateObject);

var Circle = function Circle(props) {
  var CirclePrimitive = _styledComponents2.default.div(_templateObject2, props.rotate && '\n      -webkit-transform: rotate(' + props.rotate + 'deg);\n      -ms-transform: rotate(' + props.rotate + 'deg);\n      transform: rotate(' + props.rotate + 'deg);\n    ', circleFadeDelay, props.delay && '\n        -webkit-animation-delay: ' + props.delay + 's;\n        animation-delay: ' + props.delay + 's;\n      ');
  return _react2.default.createElement(CirclePrimitive, null);
};

exports.default = Circle;