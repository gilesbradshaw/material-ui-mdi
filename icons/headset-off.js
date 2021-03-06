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

var HeadsetOff = function HeadsetOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22.5,4.77L20.43,6.84C20.8,7.82 21,8.89 21,10V20A3,3 0 0,1 18,23H12V21H19V20H15V12.27L9,18.27V20H7.27L4.77,22.5L3.5,21.22L21.22,3.5L22.5,4.77M12,1C14.53,1 16.82,2.04 18.45,3.72L17.04,5.14C15.77,3.82 14,3 12,3A7,7 0 0,0 5,10V12H9V13.18L3.5,18.67C3.19,18.19 3,17.62 3,17V10A9,9 0 0,1 12,1M19,12V10C19,9.46 18.94,8.94 18.83,8.44L15.27,12H19Z' })
  );
};
HeadsetOff = (0, _pure2.default)(HeadsetOff);
HeadsetOff.displayName = 'HeadsetOff';
HeadsetOff.muiName = 'SvgIcon';

exports.default = HeadsetOff;