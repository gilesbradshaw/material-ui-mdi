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

var ShapeRectanglePlus = function ShapeRectanglePlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z' })
  );
};
ShapeRectanglePlus = (0, _pure2.default)(ShapeRectanglePlus);
ShapeRectanglePlus.displayName = 'ShapeRectanglePlus';
ShapeRectanglePlus.muiName = 'SvgIcon';

exports.default = ShapeRectanglePlus;