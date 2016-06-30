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

var ProfessionalHexagon = function ProfessionalHexagon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M5,9V15H6.25V13H7A2,2 0 0,0 9,11A2,2 0 0,0 7,9H5M6.25,12V10H6.75A1,1 0 0,1 7.75,11A1,1 0 0,1 6.75,12H6.25M9.75,9V15H11V13H11.75L12.41,15H13.73L12.94,12.61C13.43,12.25 13.75,11.66 13.75,11A2,2 0 0,0 11.75,9H9.75M11,12V10H11.5A1,1 0 0,1 12.5,11A1,1 0 0,1 11.5,12H11M17,9C15.62,9 14.5,10.34 14.5,12C14.5,13.66 15.62,15 17,15C18.38,15 19.5,13.66 19.5,12C19.5,10.34 18.38,9 17,9M17,10.25C17.76,10.25 18.38,11.03 18.38,12C18.38,12.97 17.76,13.75 17,13.75C16.24,13.75 15.63,12.97 15.63,12C15.63,11.03 16.24,10.25 17,10.25Z' })
  );
};
ProfessionalHexagon = (0, _pure2.default)(ProfessionalHexagon);
ProfessionalHexagon.displayName = 'ProfessionalHexagon';
ProfessionalHexagon.muiName = 'SvgIcon';

exports.default = ProfessionalHexagon;