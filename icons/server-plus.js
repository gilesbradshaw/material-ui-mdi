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

var ServerPlus = function ServerPlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,4H20A1,1 0 0,1 21,5V9A1,1 0 0,1 20,10H4A1,1 0 0,1 3,9V5A1,1 0 0,1 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H11V13H13V16H16V18H13V21H11V18H8V16Z' })
  );
};
ServerPlus = (0, _pure2.default)(ServerPlus);
ServerPlus.displayName = 'ServerPlus';
ServerPlus.muiName = 'SvgIcon';

exports.default = ServerPlus;