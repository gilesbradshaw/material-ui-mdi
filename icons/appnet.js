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

var Appnet = function Appnet(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14.47,9.14C15.07,7.69 16.18,4.28 16.35,3.68C16.5,3.09 16.95,3 17.2,3H19.25C19.59,3 19.78,3.26 19.7,3.68C17.55,11.27 16.09,13.5 16.09,14C16.09,15.28 17.46,17.67 18.74,17.67C19.5,17.67 19.34,16.56 20.19,16.56H21.81C22.07,16.56 22.32,16.82 22.32,17.25C22.32,17.67 21.85,21 18.61,21C15.36,21 14.15,17.08 14.15,17.08C13.73,17.93 11.23,21 8.16,21C2.7,21 1.68,15.2 1.68,11.79C1.68,8.37 3.3,3 7.91,3C12.5,3 14.47,9.14 14.47,9.14M4.5,11.53C4.5,13.5 4.41,17.59 8,17.67C10.04,17.76 11.91,15.2 12.81,13.15C11.57,8.89 10.72,6.33 8,6.33C4.32,6.41 4.5,11.53 4.5,11.53Z' })
  );
};
Appnet = (0, _pure2.default)(Appnet);
Appnet.displayName = 'Appnet';
Appnet.muiName = 'SvgIcon';

exports.default = Appnet;