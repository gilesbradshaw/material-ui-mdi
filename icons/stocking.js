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

var Stocking = function Stocking(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,2A2,2 0 0,1 19,4V7A2,2 0 0,1 17,9V17C17,17.85 16.5,18.57 15.74,18.86L9.5,21.77C8.5,22.24 7.29,21.81 6.83,20.81L6,19C5.5,18 5.95,16.8 6.95,16.34L10,14.91V9A2,2 0 0,1 8,7V4A2,2 0 0,1 10,2H17M10,4V7H17V4H10Z' })
  );
};
Stocking = (0, _pure2.default)(Stocking);
Stocking.displayName = 'Stocking';
Stocking.muiName = 'SvgIcon';

exports.default = Stocking;