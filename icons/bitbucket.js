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

var Bitbucket = function Bitbucket(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,5.76C15.06,5.77 17.55,5.24 17.55,4.59C17.55,3.94 15.07,3.41 12,3.4C8.94,3.4 6.45,3.92 6.45,4.57C6.45,5.23 8.93,5.76 12,5.76M12,14.4C13.5,14.4 14.75,13.16 14.75,11.64A2.75,2.75 0 0,0 12,8.89C10.5,8.89 9.25,10.12 9.25,11.64C9.25,13.16 10.5,14.4 12,14.4M12,2C16.77,2 20.66,3.28 20.66,4.87C20.66,5.29 19.62,11.31 19.21,13.69C19.03,14.76 16.26,16.33 12,16.33V16.31L12,16.33C7.74,16.33 4.97,14.76 4.79,13.69C4.38,11.31 3.34,5.29 3.34,4.87C3.34,3.28 7.23,2 12,2M18.23,16.08C18.38,16.08 18.53,16.19 18.53,16.42V16.5C18.19,18.26 17.95,19.5 17.91,19.71C17.62,21 15.07,22 12,22V22C8.93,22 6.38,21 6.09,19.71C6.05,19.5 5.81,18.26 5.47,16.5V16.42C5.47,16.19 5.62,16.08 5.77,16.08C5.91,16.08 6,16.17 6,16.17C6,16.17 8.14,17.86 12,17.86C15.86,17.86 18,16.17 18,16.17C18,16.17 18.09,16.08 18.23,16.08M13.38,11.64C13.38,12.4 12.76,13 12,13C11.24,13 10.62,12.4 10.62,11.64A1.38,1.38 0 0,1 12,10.26A1.38,1.38 0 0,1 13.38,11.64Z' })
  );
};
Bitbucket = (0, _pure2.default)(Bitbucket);
Bitbucket.displayName = 'Bitbucket';
Bitbucket.muiName = 'SvgIcon';

exports.default = Bitbucket;