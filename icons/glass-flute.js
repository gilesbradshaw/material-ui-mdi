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

var GlassFlute = function GlassFlute(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,2H16C15.67,5 15.33,8 14.75,9.83C14.17,11.67 13.33,12.33 12.92,14.08C12.5,15.83 12.5,18.67 13.08,20C13.67,21.33 14.83,21.17 15.42,21.25C16,21.33 16,21.67 16,22H8C8,21.67 8,21.33 8.58,21.25C9.17,21.17 10.33,21.33 10.92,20C11.5,18.67 11.5,15.83 11.08,14.08C10.67,12.33 9.83,11.67 9.25,9.83C8.67,8 8.33,5 8,2M10,4C10.07,5.03 10.15,6.07 10.24,7H13.76C13.85,6.07 13.93,5.03 14,4H10Z' })
  );
};
GlassFlute = (0, _pure2.default)(GlassFlute);
GlassFlute.displayName = 'GlassFlute';
GlassFlute.muiName = 'SvgIcon';

exports.default = GlassFlute;