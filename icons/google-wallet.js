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

var GoogleWallet = function GoogleWallet(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9.89,11.08C9.76,9.91 9.39,8.77 8.77,7.77C8.5,7.29 8.46,6.7 8.63,6.25C8.71,6 8.83,5.8 9.03,5.59C9.24,5.38 9.46,5.26 9.67,5.18C9.88,5.09 10,5.06 10.31,5.06C10.66,5.06 11,5.17 11.28,5.35L11.72,5.76L11.83,5.92C12.94,7.76 13.53,9.86 13.53,12L13.5,12.79C13.38,14.68 12.8,16.5 11.82,18.13C11.5,18.67 10.92,19 10.29,19L9.78,18.91L9.37,18.73C8.86,18.43 8.57,17.91 8.5,17.37C8.5,17.05 8.54,16.72 8.69,16.41L8.77,16.28C9.54,15 9.95,13.53 9.95,12L9.89,11.08M20.38,7.88C20.68,9.22 20.84,10.62 20.84,12C20.84,13.43 20.68,14.82 20.38,16.16L20.11,17.21C19.78,18.4 19.4,19.32 19,20C18.7,20.62 18.06,21 17.38,21C17.1,21 16.83,20.94 16.58,20.82C16,20.55 15.67,20.07 15.55,19.54L15.5,19.11C15.5,18.7 15.67,18.35 15.68,18.32C16.62,16.34 17.09,14.23 17.09,12C17.09,9.82 16.62,7.69 15.67,5.68C15.22,4.75 15.62,3.63 16.55,3.18C16.81,3.06 17.08,3 17.36,3C18.08,3 18.75,3.42 19.05,4.07C19.63,5.29 20.08,6.57 20.38,7.88M16.12,9.5C16.26,10.32 16.34,11.16 16.34,12C16.34,14 15.95,15.92 15.2,17.72C15.11,16.21 14.75,14.76 14.16,13.44L14.22,12.73L14.25,11.96C14.25,9.88 13.71,7.85 12.67,6.07C14,7.03 15.18,8.21 16.12,9.5M4,10.5C3.15,10.03 2.84,9 3.28,8.18C3.58,7.63 4.15,7.28 4.78,7.28C5.06,7.28 5.33,7.35 5.58,7.5C6.87,8.17 8.03,9.1 8.97,10.16L9.12,11.05L9.18,12C9.18,13.43 8.81,14.84 8.1,16.07C7.6,13.66 6.12,11.62 4,10.5Z' })
  );
};
GoogleWallet = (0, _pure2.default)(GoogleWallet);
GoogleWallet.displayName = 'GoogleWallet';
GoogleWallet.muiName = 'SvgIcon';

exports.default = GoogleWallet;