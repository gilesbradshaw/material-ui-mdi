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

var PhoneLocked = function PhoneLocked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19.2,4H15.8V3.5C15.8,2.56 16.56,1.8 17.5,1.8C18.44,1.8 19.2,2.56 19.2,3.5M20,4V3.5A2.5,2.5 0 0,0 17.5,1A2.5,2.5 0 0,0 15,3.5V4A1,1 0 0,0 14,5V9A1,1 0 0,0 15,10H20A1,1 0 0,0 21,9V5A1,1 0 0,0 20,4M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z' })
  );
};
PhoneLocked = (0, _pure2.default)(PhoneLocked);
PhoneLocked.displayName = 'PhoneLocked';
PhoneLocked.muiName = 'SvgIcon';

exports.default = PhoneLocked;