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

var RssBox = function RssBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,18A1.5,1.5 0 0,0 9,16.5A1.5,1.5 0 0,0 7.5,15M6,10V12A6,6 0 0,1 12,18H14A8,8 0 0,0 6,10M6,6V8A10,10 0 0,1 16,18H18A12,12 0 0,0 6,6Z' })
  );
};
RssBox = (0, _pure2.default)(RssBox);
RssBox.displayName = 'RssBox';
RssBox.muiName = 'SvgIcon';

exports.default = RssBox;