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

var BatteryPositive = function BatteryPositive(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11.67,4A1.33,1.33 0 0,1 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33A1.33,1.33 0 0,1 2.33,4H4V2H10V4H11.67M23,14H20V17H18V14H15V12H18V9H20V12H23V14M3,13H11V6H3V13Z' })
  );
};
BatteryPositive = (0, _pure2.default)(BatteryPositive);
BatteryPositive.displayName = 'BatteryPositive';
BatteryPositive.muiName = 'SvgIcon';

exports.default = BatteryPositive;