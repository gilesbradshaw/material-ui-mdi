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

var ServerNetwork = function ServerNetwork(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,18H14A1,1 0 0,1 15,19H22V21H15A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21H2V19H9A1,1 0 0,1 10,18H11V16H4A1,1 0 0,1 3,15V11A1,1 0 0,1 4,10H20A1,1 0 0,1 21,11V15A1,1 0 0,1 20,16H13V18M4,2H20A1,1 0 0,1 21,3V7A1,1 0 0,1 20,8H4A1,1 0 0,1 3,7V3A1,1 0 0,1 4,2M9,6H10V4H9V6M9,14H10V12H9V14M5,4V6H7V4H5M5,12V14H7V12H5Z' })
  );
};
ServerNetwork = (0, _pure2.default)(ServerNetwork);
ServerNetwork.displayName = 'ServerNetwork';
ServerNetwork.muiName = 'SvgIcon';

exports.default = ServerNetwork;