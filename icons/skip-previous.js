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

var SkipPrevious = function SkipPrevious(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z' })
  );
};
SkipPrevious = (0, _pure2.default)(SkipPrevious);
SkipPrevious.displayName = 'SkipPrevious';
SkipPrevious.muiName = 'SvgIcon';

exports.default = SkipPrevious;