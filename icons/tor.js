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

var Tor = function Tor(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,14C11,14 9,15 9,16C9,18 12,18 12,18V17A1,1 0 0,1 11,16A1,1 0 0,1 12,15V14M12,19C12,19 8,18.5 8,16.5C8,13.5 11,12.75 12,12.75V11.5C11,11.5 7,13 7,16C7,20 12,20 12,20V19M10.07,7.03L11.26,7.56C11.69,5.12 12.84,3.5 12.84,3.5C12.41,4.53 12.13,5.38 11.95,6.05C13.16,3.55 15.61,2 15.61,2C14.43,3.18 13.56,4.46 12.97,5.53C14.55,3.85 16.74,2.75 16.74,2.75C14.05,4.47 12.84,7.2 12.54,7.96L13.09,8.04C13.09,8.56 13.09,9.04 13.34,9.42C14.1,11.31 18,11.47 18,16C18,20.53 13.97,22 11.83,22C9.69,22 5,21.03 5,16C5,10.97 9.95,10.93 10.83,8.92C10.95,8.54 10.07,7.03 10.07,7.03Z' })
  );
};
Tor = (0, _pure2.default)(Tor);
Tor.displayName = 'Tor';
Tor.muiName = 'SvgIcon';

exports.default = Tor;