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

var SerialPort = function SerialPort(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z' })
  );
};
SerialPort = (0, _pure2.default)(SerialPort);
SerialPort.displayName = 'SerialPort';
SerialPort.muiName = 'SvgIcon';

exports.default = SerialPort;