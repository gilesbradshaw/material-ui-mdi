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

var ClockIn = function ClockIn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2.21,0.79L0.79,2.21L4.8,6.21L3,8H8V3L6.21,4.8M12,8C8.14,8 5,11.13 5,15A7,7 0 0,0 12,22C15.86,22 19,18.87 19,15A7,7 0 0,0 12,8M12,10.15C14.67,10.15 16.85,12.32 16.85,15A4.85,4.85 0 0,1 12,19.85C9.32,19.85 7.15,17.68 7.15,15A4.85,4.85 0 0,1 12,10.15M11,12V15.69L14.19,17.53L14.94,16.23L12.5,14.82V12' })
  );
};
ClockIn = (0, _pure2.default)(ClockIn);
ClockIn.displayName = 'ClockIn';
ClockIn.muiName = 'SvgIcon';

exports.default = ClockIn;