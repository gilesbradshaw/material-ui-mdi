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

var TrophyVariantOutline = function TrophyVariantOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,2V4H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H17V2H7M9,4H15V12A3,3 0 0,1 12,15C10,15 9,13.66 9,12V4M4,6H7V8L7,11H4V6M17,6H20V11H17V6Z' })
  );
};
TrophyVariantOutline = (0, _pure2.default)(TrophyVariantOutline);
TrophyVariantOutline.displayName = 'TrophyVariantOutline';
TrophyVariantOutline.muiName = 'SvgIcon';

exports.default = TrophyVariantOutline;