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

var Group = function Group(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,8V12H13V8H8M1,1H5V2H19V1H23V5H22V19H23V23H19V22H5V23H1V19H2V5H1V1M5,19V20H19V19H20V5H19V4H5V5H4V19H5M6,6H15V10H18V18H8V14H6V6M15,14H10V16H16V12H15V14Z' })
  );
};
Group = (0, _pure2.default)(Group);
Group.displayName = 'Group';
Group.muiName = 'SvgIcon';

exports.default = Group;