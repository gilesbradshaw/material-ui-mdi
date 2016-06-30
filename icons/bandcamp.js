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

var Bandcamp = function Bandcamp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22,6L15.5,18H2L8.5,6H22Z' })
  );
};
Bandcamp = (0, _pure2.default)(Bandcamp);
Bandcamp.displayName = 'Bandcamp';
Bandcamp.muiName = 'SvgIcon';

exports.default = Bandcamp;