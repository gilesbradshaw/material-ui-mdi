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

var Readability = function Readability(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,4C15.15,4 17.81,6.38 18.69,9.65C18,10.15 17.58,10.93 17.5,11.81L17.32,13.91C15.55,13 13.78,12.17 12,12.17C10.23,12.17 8.45,13 6.68,13.91L6.5,11.77C6.42,10.89 6,10.12 5.32,9.61C6.21,6.36 8.86,4 12,4M17.05,17H6.95L6.73,14.47C8.5,13.59 10.24,12.75 12,12.75C13.76,12.75 15.5,13.59 17.28,14.47L17.05,17M5,19V18L3.72,14.5H3.5A2.5,2.5 0 0,1 1,12A2.5,2.5 0 0,1 3.5,9.5C4.82,9.5 5.89,10.5 6,11.81L6.5,18V19H5M19,19H17.5V18L18,11.81C18.11,10.5 19.18,9.5 20.5,9.5A2.5,2.5 0 0,1 23,12A2.5,2.5 0 0,1 20.5,14.5H20.28L19,18V19Z' })
  );
};
Readability = (0, _pure2.default)(Readability);
Readability.displayName = 'Readability';
Readability.muiName = 'SvgIcon';

exports.default = Readability;