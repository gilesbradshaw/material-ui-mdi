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

var GenderTransgender = function GenderTransgender(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19.58,3H15V1H23V9H21V4.41L16.17,9.24C16.69,10.03 17,11 17,12C17,14.42 15.28,16.44 13,16.9V19H15V21H13V23H11V21H9V19H11V16.9C8.72,16.44 7,14.42 7,12C7,11 7.3,10.04 7.82,9.26L6.64,8.07L5.24,9.46L3.83,8.04L5.23,6.65L3,4.42V8H1V1H8V3H4.41L6.64,5.24L8.08,3.81L9.5,5.23L8.06,6.66L9.23,7.84C10,7.31 11,7 12,7C13,7 13.96,7.3 14.75,7.83L19.58,3M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' })
  );
};
GenderTransgender = (0, _pure2.default)(GenderTransgender);
GenderTransgender.displayName = 'GenderTransgender';
GenderTransgender.muiName = 'SvgIcon';

exports.default = GenderTransgender;