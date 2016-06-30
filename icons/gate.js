'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gate = function Gate(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,5V10H7V6H5V10H3V8H1V20H3V18H5V20H7V18H9V20H11V18H13V20H15V18H17V20H19V18H21V20H23V8H21V10H19V6H17V10H15V5H13V10H11V5H9M3,12H5V16H3V12M7,12H9V16H7V12M11,12H13V16H11V12M15,12H17V16H15V12M19,12H21V16H19V12Z' })
  );
};
Gate = (0, _pure2.default)(Gate);
Gate.displayName = 'Gate';
Gate.muiName = 'SvgIcon';

exports.default = Gate;