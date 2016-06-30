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

var Jsfiddle = function Jsfiddle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20.33,10.79C21.9,11.44 23,12.96 23,14.73C23,17.09 21.06,19 18.67,19H5.4C3,18.96 1,17 1,14.62C1,13.03 1.87,11.63 3.17,10.87C3.08,10.59 3.04,10.29 3.04,10C3.04,8.34 4.39,7 6.06,7C6.75,7 7.39,7.25 7.9,7.64C8.96,5.47 11.2,3.96 13.81,3.96C17.42,3.96 20.35,6.85 20.35,10.41C20.35,10.54 20.34,10.67 20.33,10.79M9.22,10.85C7.45,10.85 6,12.12 6,13.67C6,15.23 7.45,16.5 9.22,16.5C10.25,16.5 11.17,16.06 11.76,15.39L10.75,14.25C10.42,14.68 9.77,15 9.22,15C8.43,15 7.79,14.4 7.79,13.67C7.79,12.95 8.43,12.36 9.22,12.36C9.69,12.36 10.12,12.59 10.56,12.88C11,13.16 11.73,14.17 12.31,14.82C13.77,16.29 14.53,16.42 15.4,16.42C17.17,16.42 18.6,15.15 18.6,13.6C18.6,12.04 17.17,10.78 15.4,10.78C14.36,10.78 13.44,11.21 12.85,11.88L13.86,13C14.19,12.59 14.84,12.28 15.4,12.28C16.19,12.28 16.83,12.87 16.83,13.6C16.83,14.32 16.19,14.91 15.4,14.91C14.93,14.91 14.5,14.68 14.05,14.39C13.61,14.11 12.88,13.1 12.31,12.45C10.84,11 10.08,10.85 9.22,10.85Z' })
  );
};
Jsfiddle = (0, _pure2.default)(Jsfiddle);
Jsfiddle.displayName = 'Jsfiddle';
Jsfiddle.muiName = 'SvgIcon';

exports.default = Jsfiddle;