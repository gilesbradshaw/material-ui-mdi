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

var NotePlusOutline = function NotePlusOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,10H20.5L15,4.5V10M4,3H16L22,9V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V5C2,3.89 2.89,3 4,3M4,5V19H20V12H13V5H4M8,17V15H6V13H8V11H10V13H12V15H10V17H8Z' })
  );
};
NotePlusOutline = (0, _pure2.default)(NotePlusOutline);
NotePlusOutline.displayName = 'NotePlusOutline';
NotePlusOutline.muiName = 'SvgIcon';

exports.default = NotePlusOutline;