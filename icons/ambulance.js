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

var Ambulance = function Ambulance(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18,18.5A1.5,1.5 0 0,0 19.5,17A1.5,1.5 0 0,0 18,15.5A1.5,1.5 0 0,0 16.5,17A1.5,1.5 0 0,0 18,18.5M19.5,9.5H17V12H21.46L19.5,9.5M6,18.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 6,15.5A1.5,1.5 0 0,0 4.5,17A1.5,1.5 0 0,0 6,18.5M20,8L23,12V17H21A3,3 0 0,1 18,20A3,3 0 0,1 15,17H9A3,3 0 0,1 6,20A3,3 0 0,1 3,17H1V6C1,4.89 1.89,4 3,4H17V8H20M8,6V9H5V11H8V14H10V11H13V9H10V6H8Z' })
  );
};
Ambulance = (0, _pure2.default)(Ambulance);
Ambulance.displayName = 'Ambulance';
Ambulance.muiName = 'SvgIcon';

exports.default = Ambulance;