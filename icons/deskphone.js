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

var Deskphone = function Deskphone(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M15,5V19H19V5H15M5,5V9H13V5H5M5,11V13H7V11H5M8,11V13H10V11H8M11,11V13H13V11H11M5,14V16H7V14H5M8,14V16H10V14H8M11,14V16H13V14H11M11,17V19H13V17H11M8,17V19H10V17H8M5,17V19H7V17H5Z' })
  );
};
Deskphone = (0, _pure2.default)(Deskphone);
Deskphone.displayName = 'Deskphone';
Deskphone.muiName = 'SvgIcon';

exports.default = Deskphone;