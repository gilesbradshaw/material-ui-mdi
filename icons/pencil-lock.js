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

var PencilLock = function PencilLock(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5.5,2A2.5,2.5 0 0,0 3,4.5V5A1,1 0 0,0 2,6V10A1,1 0 0,0 3,11H8A1,1 0 0,0 9,10V6A1,1 0 0,0 8,5V4.5A2.5,2.5 0 0,0 5.5,2M5.5,3A1.5,1.5 0 0,1 7,4.5V5H4V4.5A1.5,1.5 0 0,1 5.5,3M19.66,3C19.4,3 19.16,3.09 18.97,3.28L17.13,5.13L20.88,8.88L22.72,7.03C23.11,6.64 23.11,6 22.72,5.63L20.38,3.28C20.18,3.09 19.91,3 19.66,3M16.06,6.19L5,17.25V21H8.75L19.81,9.94L16.06,6.19Z' })
  );
};
PencilLock = (0, _pure2.default)(PencilLock);
PencilLock.displayName = 'PencilLock';
PencilLock.muiName = 'SvgIcon';

exports.default = PencilLock;