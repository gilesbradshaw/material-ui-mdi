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

var SeatLegroomExtra = function SeatLegroomExtra(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,12V3H2V12A5,5 0 0,0 7,17H13V15H7A3,3 0 0,1 4,12M22.83,17.24C22.45,16.5 21.54,16.27 20.8,16.61L19.71,17.11L16.3,10.13C15.96,9.45 15.27,9 14.5,9H11V3H5V11A3,3 0 0,0 8,14H15L18.41,21L22.13,19.3C22.9,18.94 23.23,18 22.83,17.24Z' })
  );
};
SeatLegroomExtra = (0, _pure2.default)(SeatLegroomExtra);
SeatLegroomExtra.displayName = 'SeatLegroomExtra';
SeatLegroomExtra.muiName = 'SvgIcon';

exports.default = SeatLegroomExtra;