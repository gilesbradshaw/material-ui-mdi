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

var TrophyOutline = function TrophyOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,2V11C2,12 3,13 4,13H6.2C6.6,15 7.9,16.7 11,17V19.1C8.8,19.3 8,20.4 8,21.7V22H16V21.7C16,20.4 15.2,19.3 13,19.1V17C16.1,16.7 17.4,15 17.8,13H20C21,13 22,12 22,11V2H18C17.1,2 16,3 16,4H8C8,3 6.9,2 6,2H2M4,4H6V6L6,11H4V4M18,4H20V11H18V6L18,4M8,6H16V11.5C16,13.43 15.42,15 12,15C8.59,15 8,13.43 8,11.5V6Z' })
  );
};
TrophyOutline = (0, _pure2.default)(TrophyOutline);
TrophyOutline.displayName = 'TrophyOutline';
TrophyOutline.muiName = 'SvgIcon';

exports.default = TrophyOutline;