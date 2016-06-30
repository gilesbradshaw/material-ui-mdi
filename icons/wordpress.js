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

var Wordpress = function Wordpress(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12.2,15.5L9.65,21.72C10.4,21.9 11.19,22 12,22C12.84,22 13.66,21.9 14.44,21.7M20.61,7.06C20.8,7.96 20.76,9.05 20.39,10.25C19.42,13.37 17,19 16.1,21.13C19.58,19.58 22,16.12 22,12.1C22,10.26 21.5,8.53 20.61,7.06M4.31,8.64C4.31,8.64 3.82,8 3.31,8H2.78C2.28,9.13 2,10.62 2,12C2,16.09 4.5,19.61 8.12,21.11M3.13,7.14C4.8,4.03 8.14,2 12,2C14.5,2 16.78,3.06 18.53,4.56C18.03,4.46 17.5,4.57 16.93,4.89C15.64,5.63 15.22,7.71 16.89,8.76C17.94,9.41 18.31,11.04 18.27,12.04C18.24,13.03 15.85,17.61 15.85,17.61L13.5,9.63C13.5,9.63 13.44,9.07 13.44,8.91C13.44,8.71 13.5,8.46 13.63,8.31C13.72,8.22 13.85,8 14,8H15.11V7.14H9.11V8H9.3C9.5,8 9.69,8.29 9.87,8.47C10.09,8.7 10.37,9.55 10.7,10.43L11.57,13.3L9.69,17.63L7.63,8.97C7.63,8.97 7.69,8.37 7.82,8.27C7.9,8.2 8,8 8.17,8H8.22V7.14H3.13Z' })
  );
};
Wordpress = (0, _pure2.default)(Wordpress);
Wordpress.displayName = 'Wordpress';
Wordpress.muiName = 'SvgIcon';

exports.default = Wordpress;