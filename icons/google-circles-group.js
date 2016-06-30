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

var GoogleCirclesGroup = function GoogleCirclesGroup(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,10A2,2 0 0,0 3,12C3,13.11 3.9,14 5,14C6.11,14 7,13.11 7,12A2,2 0 0,0 5,10M5,16A4,4 0 0,1 1,12A4,4 0 0,1 5,8A4,4 0 0,1 9,12A4,4 0 0,1 5,16M10.5,11H14V8L18,12L14,16V13H10.5V11M5,6C4.55,6 4.11,6.05 3.69,6.14C5.63,3.05 9.08,1 13,1C19.08,1 24,5.92 24,12C24,18.08 19.08,23 13,23C9.08,23 5.63,20.95 3.69,17.86C4.11,17.95 4.55,18 5,18C5.8,18 6.56,17.84 7.25,17.56C8.71,19.07 10.74,20 13,20A8,8 0 0,0 21,12A8,8 0 0,0 13,4C10.74,4 8.71,4.93 7.25,6.44C6.56,6.16 5.8,6 5,6Z' })
  );
};
GoogleCirclesGroup = (0, _pure2.default)(GoogleCirclesGroup);
GoogleCirclesGroup.displayName = 'GoogleCirclesGroup';
GoogleCirclesGroup.muiName = 'SvgIcon';

exports.default = GoogleCirclesGroup;