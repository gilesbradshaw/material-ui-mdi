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

var RouterWireless = function RouterWireless(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,13H20A1,1 0 0,1 21,14V18A1,1 0 0,1 20,19H4A1,1 0 0,1 3,18V14A1,1 0 0,1 4,13M9,17H10V15H9V17M5,15V17H7V15H5M19,6.93L17.6,8.34C16.15,6.89 14.15,6 11.93,6C9.72,6 7.72,6.89 6.27,8.34L4.87,6.93C6.68,5.12 9.18,4 11.93,4C14.69,4 17.19,5.12 19,6.93M16.17,9.76L14.77,11.17C14.04,10.45 13.04,10 11.93,10C10.82,10 9.82,10.45 9.1,11.17L7.7,9.76C8.78,8.67 10.28,8 11.93,8C13.58,8 15.08,8.67 16.17,9.76Z' })
  );
};
RouterWireless = (0, _pure2.default)(RouterWireless);
RouterWireless.displayName = 'RouterWireless';
RouterWireless.muiName = 'SvgIcon';

exports.default = RouterWireless;