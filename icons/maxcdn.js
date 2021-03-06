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

var Maxcdn = function Maxcdn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20.6,6.69C19.73,5.61 18.38,5 16.9,5H2.95L4.62,8.57L2.39,19H6.05L8.28,8.57H11.4L9.17,19H12.83L15.06,8.57H16.9C17.3,8.57 17.63,8.7 17.82,8.94C18,9.17 18.07,9.5 18,9.9L16.04,19H19.69L21.5,10.65C21.78,9.21 21.46,7.76 20.6,6.69Z' })
  );
};
Maxcdn = (0, _pure2.default)(Maxcdn);
Maxcdn.displayName = 'Maxcdn';
Maxcdn.muiName = 'SvgIcon';

exports.default = Maxcdn;