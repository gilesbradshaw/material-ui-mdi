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

var Floppy = function Floppy(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4.5,22L2,19.5V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H17V15A1,1 0 0,0 16,14H7A1,1 0 0,0 6,15V22H4.5M5,4V10A1,1 0 0,0 6,11H18A1,1 0 0,0 19,10V4H5M8,16H11V20H8V16M20,4V5H21V4H20Z' })
  );
};
Floppy = (0, _pure2.default)(Floppy);
Floppy.displayName = 'Floppy';
Floppy.muiName = 'SvgIcon';

exports.default = Floppy;