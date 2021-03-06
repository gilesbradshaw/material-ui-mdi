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

var Pandora = function Pandora(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.87,7.73C16.87,9.9 15.67,11.7 13.09,11.7H10.45V3.66H13.09C15.67,3.66 16.87,5.5 16.87,7.73M10.45,15.67V13.41H13.09C17.84,13.41 20.5,10.91 20.5,7.73C20.5,4.45 17.84,2 13.09,2H3.5V2.92C6.62,2.92 7.17,3.66 7.17,8.28V15.67C7.17,20.29 6.62,21.08 3.5,21.08V22H14.1V21.08C11,21.08 10.45,20.29 10.45,15.67Z' })
  );
};
Pandora = (0, _pure2.default)(Pandora);
Pandora.displayName = 'Pandora';
Pandora.muiName = 'SvgIcon';

exports.default = Pandora;