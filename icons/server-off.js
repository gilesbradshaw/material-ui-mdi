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

var ServerOff = function ServerOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H8.82L6.82,5H7V3H5V3.18L3.21,1.39C3.39,1.15 3.68,1 4,1M22,22.72L20.73,24L19.73,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17H13.73L11.73,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9H5.73L3.68,6.95C3.38,6.85 3.15,6.62 3.05,6.32L1,4.27L2.28,3L22,22.72M20,9A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H16.82L10.82,9H20M20,17A1,1 0 0,1 21,18V19.18L18.82,17H20M9,5H10V3H9V5M9,13H9.73L9,12.27V13M9,21H10V19H9V21M5,11V13H7V11H5M5,19V21H7V19H5Z' })
  );
};
ServerOff = (0, _pure2.default)(ServerOff);
ServerOff.displayName = 'ServerOff';
ServerOff.muiName = 'SvgIcon';

exports.default = ServerOff;