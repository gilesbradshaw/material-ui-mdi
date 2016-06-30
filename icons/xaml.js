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

var Xaml = function Xaml(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18.93,12L15.46,18H8.54L5.07,12L8.54,6H15.46L18.93,12M23.77,12L19.73,19L18,18L21.46,12L18,6L19.73,5L23.77,12M0.23,12L4.27,5L6,6L2.54,12L6,18L4.27,19L0.23,12Z' })
  );
};
Xaml = (0, _pure2.default)(Xaml);
Xaml.displayName = 'Xaml';
Xaml.muiName = 'SvgIcon';

exports.default = Xaml;