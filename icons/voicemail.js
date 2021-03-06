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

var Voicemail = function Voicemail(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18.5,15A3.5,3.5 0 0,1 15,11.5A3.5,3.5 0 0,1 18.5,8A3.5,3.5 0 0,1 22,11.5A3.5,3.5 0 0,1 18.5,15M5.5,15A3.5,3.5 0 0,1 2,11.5A3.5,3.5 0 0,1 5.5,8A3.5,3.5 0 0,1 9,11.5A3.5,3.5 0 0,1 5.5,15M18.5,6A5.5,5.5 0 0,0 13,11.5C13,12.83 13.47,14.05 14.26,15H9.74C10.53,14.05 11,12.83 11,11.5A5.5,5.5 0 0,0 5.5,6A5.5,5.5 0 0,0 0,11.5A5.5,5.5 0 0,0 5.5,17H18.5A5.5,5.5 0 0,0 24,11.5A5.5,5.5 0 0,0 18.5,6Z' })
  );
};
Voicemail = (0, _pure2.default)(Voicemail);
Voicemail.displayName = 'Voicemail';
Voicemail.muiName = 'SvgIcon';

exports.default = Voicemail;