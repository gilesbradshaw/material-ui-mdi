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

var BellPlus = function BellPlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10,21C10,22.11 10.9,23 12,23A2,2 0 0,0 14,21M18.88,16.82V11C18.88,7.75 16.63,5.03 13.59,4.31V3.59A1.59,1.59 0 0,0 12,2A1.59,1.59 0 0,0 10.41,3.59V4.31C7.37,5.03 5.12,7.75 5.12,11V16.82L3,18.94V20H21V18.94M16,13H13V16H11V13H8V11H11V8H13V11H16' })
  );
};
BellPlus = (0, _pure2.default)(BellPlus);
BellPlus.displayName = 'BellPlus';
BellPlus.muiName = 'SvgIcon';

exports.default = BellPlus;