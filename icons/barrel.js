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

var Barrel = function Barrel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18,19H19V21H5V19H6V13H5V11H6V5H5V3H19V5H18V11H19V13H18V19M9,13A3,3 0 0,0 12,16A3,3 0 0,0 15,13C15,11 12,7.63 12,7.63C12,7.63 9,11 9,13Z' })
  );
};
Barrel = (0, _pure2.default)(Barrel);
Barrel.displayName = 'Barrel';
Barrel.muiName = 'SvgIcon';

exports.default = Barrel;