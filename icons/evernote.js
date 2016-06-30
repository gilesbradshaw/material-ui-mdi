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

var Evernote = function Evernote(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.09,11.63C15.09,11.63 15.28,10.35 16,10.35C16.76,10.35 17.78,12.06 17.78,12.06C17.78,12.06 15.46,11.63 15.09,11.63M19,4.69C18.64,4.09 16.83,3.41 15.89,3.41C14.96,3.41 13.5,3.41 13.5,3.41C13.5,3.41 12.7,2 10.88,2C9.05,2 9.17,2.81 9.17,3.5V6.32L8.34,7.19H4.5C4.5,7.19 3.44,7.91 3.44,9.44C3.44,11 3.92,16.35 7.13,16.85C10.93,17.43 11.58,15.67 11.58,15.46C11.58,14.56 11.6,13.21 11.6,13.21C11.6,13.21 12.71,15.33 14.39,15.33C16.07,15.33 17.04,16.3 17.04,17.29C17.04,18.28 17.04,19.13 17.04,19.13C17.04,19.13 17,20.28 16,20.28C15,20.28 13.89,20.28 13.89,20.28C13.89,20.28 13.2,19.74 13.2,19C13.2,18.25 13.53,18.05 13.93,18.05C14.32,18.05 14.65,18.09 14.65,18.09V16.53C14.65,16.53 11.47,16.5 11.47,18.94C11.47,21.37 13.13,22 14.46,22C15.8,22 16.63,22 16.63,22C16.63,22 20.56,21.5 20.56,13.75C20.56,6 19.33,5.28 19,4.69M7.5,6.31H4.26L8.32,2.22V5.5L7.5,6.31Z' })
  );
};
Evernote = (0, _pure2.default)(Evernote);
Evernote.displayName = 'Evernote';
Evernote.muiName = 'SvgIcon';

exports.default = Evernote;