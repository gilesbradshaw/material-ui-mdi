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

var At = function At(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.42,15C17.79,14.09 18,13.07 18,12C18,8.13 15.31,5 12,5C8.69,5 6,8.13 6,12C6,15.87 8.69,19 12,19C13.54,19 15,19 16,18.22V20.55C15,21 13.46,21 12,21C7.58,21 4,16.97 4,12C4,7.03 7.58,3 12,3C16.42,3 20,7.03 20,12C20,13.85 19.5,15.57 18.65,17H14V15.5C13.36,16.43 12.5,17 11.5,17C9.57,17 8,14.76 8,12C8,9.24 9.57,7 11.5,7C12.5,7 13.36,7.57 14,8.5V8H16V15H17.42M12,9C10.9,9 10,10.34 10,12C10,13.66 10.9,15 12,15C13.1,15 14,13.66 14,12C14,10.34 13.1,9 12,9Z' })
  );
};
At = (0, _pure2.default)(At);
At.displayName = 'At';
At.muiName = 'SvgIcon';

exports.default = At;