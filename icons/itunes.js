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

var Itunes = function Itunes(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.85,17.07C7.03,17.17 3.5,17.67 4.06,20.26C4.69,23.3 9.87,22.59 9.83,19C9.81,16.57 9.83,9.2 9.83,9.2C9.83,9.2 9.76,8.53 10.43,8.39L18.19,6.79C18.19,6.79 18.83,6.65 18.83,7.29C18.83,7.89 18.83,14.2 18.83,14.2C18.83,14.2 18.9,14.83 18.12,15C17.34,15.12 13.91,15.4 14.19,18C14.5,21.07 20,20.65 20,17.07V2.61C20,2.61 20.04,1.62 18.9,1.87L9.5,3.78C9.5,3.78 8.66,3.96 8.66,4.77C8.66,5.5 8.66,16.11 8.66,16.11C8.66,16.11 8.66,16.96 7.85,17.07Z' })
  );
};
Itunes = (0, _pure2.default)(Itunes);
Itunes.displayName = 'Itunes';
Itunes.muiName = 'SvgIcon';

exports.default = Itunes;