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

var PlayProtectedContent = function PlayProtectedContent(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,5V18H11V16H4V7H17V11H19V5H2M9,9V14L12.5,11.5L9,9M21.04,11.67L16.09,16.62L13.96,14.5L12.55,15.91L16.09,19.45L22.45,13.09L21.04,11.67Z' })
  );
};
PlayProtectedContent = (0, _pure2.default)(PlayProtectedContent);
PlayProtectedContent.displayName = 'PlayProtectedContent';
PlayProtectedContent.muiName = 'SvgIcon';

exports.default = PlayProtectedContent;