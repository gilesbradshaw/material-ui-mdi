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

var CodeParentheses = function CodeParentheses(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.62,3C19.13,5.27 20,8.55 20,12C20,15.44 19.13,18.72 17.62,21L16,19.96C17.26,18.07 18,15.13 18,12C18,8.87 17.26,5.92 16,4.03L17.62,3M6.38,3L8,4.04C6.74,5.92 6,8.87 6,12C6,15.13 6.74,18.08 8,19.96L6.38,21C4.87,18.73 4,15.45 4,12C4,8.55 4.87,5.27 6.38,3Z' })
  );
};
CodeParentheses = (0, _pure2.default)(CodeParentheses);
CodeParentheses.displayName = 'CodeParentheses';
CodeParentheses.muiName = 'SvgIcon';

exports.default = CodeParentheses;