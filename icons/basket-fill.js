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

var BasketFill = function BasketFill(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,2H6V5H3V2M6,7H9V10H6V7M8,2H11V5H8V2M17,11L12,6H15V2H19V6H22L17,11M7.5,22C6.72,22 6.04,21.55 5.71,20.9V20.9L3.1,13.44L3,13A1,1 0 0,1 4,12H20A1,1 0 0,1 21,13L20.96,13.29L18.29,20.9C17.96,21.55 17.28,22 16.5,22H7.5M7.61,20H16.39L18.57,14H5.42L7.61,20Z' })
  );
};
BasketFill = (0, _pure2.default)(BasketFill);
BasketFill.displayName = 'BasketFill';
BasketFill.muiName = 'SvgIcon';

exports.default = BasketFill;