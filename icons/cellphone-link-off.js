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

var CellphoneLinkOff = function CellphoneLinkOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M23,8H17A1,1 0 0,0 16,9V13.18L18,15.18V10H22V17H19.82L22.82,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6.27L14.73,17H4V6.27M1.92,1.65L0.65,2.92L2.47,4.74C2.18,5.08 2,5.5 2,6V17H0V20H17.73L20.08,22.35L21.35,21.08L3.89,3.62L1.92,1.65M22,6V4H6.82L8.82,6H22Z' })
  );
};
CellphoneLinkOff = (0, _pure2.default)(CellphoneLinkOff);
CellphoneLinkOff.displayName = 'CellphoneLinkOff';
CellphoneLinkOff.muiName = 'SvgIcon';

exports.default = CellphoneLinkOff;