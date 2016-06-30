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

var FormatVerticalAlignBottom = function FormatVerticalAlignBottom(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z' })
  );
};
FormatVerticalAlignBottom = (0, _pure2.default)(FormatVerticalAlignBottom);
FormatVerticalAlignBottom.displayName = 'FormatVerticalAlignBottom';
FormatVerticalAlignBottom.muiName = 'SvgIcon';

exports.default = FormatVerticalAlignBottom;