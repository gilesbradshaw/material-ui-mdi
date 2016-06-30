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

var Vine = function Vine(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19.89,11.95C19.43,12.06 19,12.1 18.57,12.1C16.3,12.1 14.55,10.5 14.55,7.76C14.55,6.41 15.08,5.7 15.82,5.7C16.5,5.7 17,6.33 17,7.61C17,8.34 16.79,9.14 16.65,9.61C16.65,9.61 17.35,10.83 19.26,10.46C19.67,9.56 19.89,8.39 19.89,7.36C19.89,4.6 18.5,3 15.91,3C13.26,3 11.71,5.04 11.71,7.72C11.71,10.38 12.95,12.67 15,13.71C14.14,15.43 13.04,16.95 11.9,18.1C9.82,15.59 7.94,12.24 7.17,5.7H4.11C5.53,16.59 9.74,20.05 10.86,20.72C11.5,21.1 12.03,21.08 12.61,20.75C13.5,20.24 16.23,17.5 17.74,14.34C18.37,14.33 19.13,14.26 19.89,14.09V11.95Z' })
  );
};
Vine = (0, _pure2.default)(Vine);
Vine.displayName = 'Vine';
Vine.muiName = 'SvgIcon';

exports.default = Vine;