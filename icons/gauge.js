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

var Gauge = function Gauge(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.3,18C19,16.5 20,14.4 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12C4,14.4 5,16.5 6.7,18C8.2,16.7 10,16 12,16C14,16 15.9,16.7 17.3,18M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,9A1,1 0 0,1 8,10A1,1 0 0,1 7,11A1,1 0 0,1 6,10A1,1 0 0,1 7,9M10,6A1,1 0 0,1 11,7A1,1 0 0,1 10,8A1,1 0 0,1 9,7A1,1 0 0,1 10,6M17,9A1,1 0 0,1 18,10A1,1 0 0,1 17,11A1,1 0 0,1 16,10A1,1 0 0,1 17,9M14.4,6.1C14.9,6.3 15.1,6.9 15,7.4L13.6,10.8C13.8,11.1 14,11.5 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12C10,11 10.7,10.1 11.7,10L13.1,6.7C13.3,6.1 13.9,5.9 14.4,6.1Z' })
  );
};
Gauge = (0, _pure2.default)(Gauge);
Gauge.displayName = 'Gauge';
Gauge.muiName = 'SvgIcon';

exports.default = Gauge;