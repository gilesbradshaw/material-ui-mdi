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

var VectorCircleVariant = function VectorCircleVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22,9H19.97C18.7,5.41 15.31,3 11.5,3A9,9 0 0,0 2.5,12C2.5,17 6.53,21 11.5,21C15.31,21 18.7,18.6 20,15H22M20,11V13H18V11M17.82,15C16.66,17.44 14.2,19 11.5,19C7.64,19 4.5,15.87 4.5,12C4.5,8.14 7.64,5 11.5,5C14.2,5 16.66,6.57 17.81,9H16V15' })
  );
};
VectorCircleVariant = (0, _pure2.default)(VectorCircleVariant);
VectorCircleVariant.displayName = 'VectorCircleVariant';
VectorCircleVariant.muiName = 'SvgIcon';

exports.default = VectorCircleVariant;