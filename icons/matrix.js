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

var Matrix = function Matrix(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,2H6V4H4V20H6V22H2V2M20,4H18V2H22V22H18V20H20V4M9,5H10V10H11V11H8V10H9V6L8,6.5V5.5L9,5M15,13H16V18H17V19H14V18H15V14L14,14.5V13.5L15,13M9,13C10.1,13 11,14.34 11,16C11,17.66 10.1,19 9,19C7.9,19 7,17.66 7,16C7,14.34 7.9,13 9,13M9,14C8.45,14 8,14.9 8,16C8,17.1 8.45,18 9,18C9.55,18 10,17.1 10,16C10,14.9 9.55,14 9,14M15,5C16.1,5 17,6.34 17,8C17,9.66 16.1,11 15,11C13.9,11 13,9.66 13,8C13,6.34 13.9,5 15,5M15,6C14.45,6 14,6.9 14,8C14,9.1 14.45,10 15,10C15.55,10 16,9.1 16,8C16,6.9 15.55,6 15,6Z' })
  );
};
Matrix = (0, _pure2.default)(Matrix);
Matrix.displayName = 'Matrix';
Matrix.muiName = 'SvgIcon';

exports.default = Matrix;