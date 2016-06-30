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

var PotMix = function PotMix(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z' })
  );
};
PotMix = (0, _pure2.default)(PotMix);
PotMix.displayName = 'PotMix';
PotMix.muiName = 'SvgIcon';

exports.default = PotMix;