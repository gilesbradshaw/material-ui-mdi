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

var PhonePlus = function PhonePlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.76,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.07,13.62 6.62,10.79L8.82,8.58C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.24 8.5,4A1,1 0 0,0 7.5,3M16,3V6H13V8H16V11H18V8H21V6H18V3' })
  );
};
PhonePlus = (0, _pure2.default)(PhonePlus);
PhonePlus.displayName = 'PhonePlus';
PhonePlus.muiName = 'SvgIcon';

exports.default = PhonePlus;