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

var ClockAlert = function ClockAlert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22C14.25,22 16.33,21.24 18,20V17.28C16.53,18.94 14.39,20 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C15.36,4 18.23,6.07 19.41,9H21.54C20.27,4.94 16.5,2 12,2M11,7V13L16.25,16.15L17,14.92L12.5,12.25V7H11M20,11V18H22V11H20M20,20V22H22V20H20Z' })
  );
};
ClockAlert = (0, _pure2.default)(ClockAlert);
ClockAlert.displayName = 'ClockAlert';
ClockAlert.muiName = 'SvgIcon';

exports.default = ClockAlert;