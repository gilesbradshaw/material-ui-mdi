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

var Opera = function Opera(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.33,3.57C15.86,2.56 14.05,2 12,2C10.13,2 8.46,2.47 7.06,3.32C4.38,4.95 2.72,8 2.72,11.9C2.72,17.19 6.43,22 12,22C17.57,22 21.28,17.19 21.28,11.9C21.28,8.19 19.78,5.25 17.33,3.57M12,3.77C15,3.77 15.6,7.93 15.6,11.72C15.6,15.22 15.26,19.91 12.04,19.91C8.82,19.91 8.4,15.17 8.4,11.67C8.4,7.89 9,3.77 12,3.77Z' })
  );
};
Opera = (0, _pure2.default)(Opera);
Opera.displayName = 'Opera';
Opera.muiName = 'SvgIcon';

exports.default = Opera;