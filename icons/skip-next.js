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

var SkipNext = function SkipNext(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16,18H18V6H16M6,18L14.5,12L6,6V18Z' })
  );
};
SkipNext = (0, _pure2.default)(SkipNext);
SkipNext.displayName = 'SkipNext';
SkipNext.muiName = 'SvgIcon';

exports.default = SkipNext;