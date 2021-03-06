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

var SmokingOff = function SmokingOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.82,14L19.82,18H22V14M2,18H5V14H2M3.28,4L2,5.27L4.44,7.71C2.93,8.61 2,10.24 2,12H4C4,10.76 4.77,9.64 5.93,9.2L10.73,14H7V18H14.73L18.73,22L20,20.72M10,3V4C10,5.09 9.4,6.1 8.45,6.62L9.89,8.07C11.21,7.13 12,5.62 12,4V3H10Z' })
  );
};
SmokingOff = (0, _pure2.default)(SmokingOff);
SmokingOff.displayName = 'SmokingOff';
SmokingOff.muiName = 'SvgIcon';

exports.default = SmokingOff;