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

var SecurityNetwork = function SecurityNetwork(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,18H14A1,1 0 0,1 15,19H22V21H15A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21H2V19H9A1,1 0 0,1 10,18H11V16.34C8.07,15.13 6,12 6,8.67V4.67L12,2L18,4.67V8.67C18,12 15.93,15.13 13,16.34V18M12,4L8,5.69V9H12V4M12,9V15C13.91,14.53 16,12.06 16,10V9H12Z' })
  );
};
SecurityNetwork = (0, _pure2.default)(SecurityNetwork);
SecurityNetwork.displayName = 'SecurityNetwork';
SecurityNetwork.muiName = 'SvgIcon';

exports.default = SecurityNetwork;