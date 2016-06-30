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

var EmoticonPoop = function EmoticonPoop(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,11C9.55,11 10,11.9 10,13C10,14.1 9.55,15 9,15C8.45,15 8,14.1 8,13C8,11.9 8.45,11 9,11M15,11C15.55,11 16,11.9 16,13C16,14.1 15.55,15 15,15C14.45,15 14,14.1 14,13C14,11.9 14.45,11 15,11M9.75,1.75C9.75,1.75 16,4 15,8C15,8 19,8 17.25,11.5C17.25,11.5 21.46,11.94 20.28,15.34C19,16.53 18.7,16.88 17.5,17.75L20.31,16.14C21.35,16.65 24.37,18.47 21,21C17,24 11,21.25 9,21.25C7,21.25 5,22 4,22C3,22 2,21 2,19C2,17 4,16 5,16C5,16 2,13 7,11C7,11 5,8 9,7C9,7 8,6 9,5C10,4 9.75,2.75 9.75,1.75M8,17C9.33,18.17 10.67,19.33 12,19.33C13.33,19.33 14.67,18.17 16,17H8M9,10C7.9,10 7,11.34 7,13C7,14.66 7.9,16 9,16C10.1,16 11,14.66 11,13C11,11.34 10.1,10 9,10M15,10C13.9,10 13,11.34 13,13C13,14.66 13.9,16 15,16C16.1,16 17,14.66 17,13C17,11.34 16.1,10 15,10Z' })
  );
};
EmoticonPoop = (0, _pure2.default)(EmoticonPoop);
EmoticonPoop.displayName = 'EmoticonPoop';
EmoticonPoop.muiName = 'SvgIcon';

exports.default = EmoticonPoop;