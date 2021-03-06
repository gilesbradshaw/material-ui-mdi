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

var Blender = function Blender(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,3C8,3.34 8.17,3.69 8.5,3.88L12,6H2.5A1.5,1.5 0 0,0 1,7.5A1.5,1.5 0 0,0 2.5,9H8.41L2,13C1.16,13.5 1,14.22 1,15C1,16 1.77,17 3,17C3.69,17 4.39,16.5 5,16L7,14.38C7.2,18.62 10.71,22 15,22A8,8 0 0,0 23,14C23,11.08 21.43,8.5 19.09,7.13C19.06,7.11 19.03,7.08 19,7.06C19,7.06 18.92,7 18.86,6.97C15.76,4.88 13.03,3.72 9.55,2.13C9.34,2.04 9.16,2 9,2C8.4,2 8,2.46 8,3M15,9A5,5 0 0,1 20,14A5,5 0 0,1 15,19A5,5 0 0,1 10,14A5,5 0 0,1 15,9M15,10.5A3.5,3.5 0 0,0 11.5,14A3.5,3.5 0 0,0 15,17.5A3.5,3.5 0 0,0 18.5,14A3.5,3.5 0 0,0 15,10.5Z' })
  );
};
Blender = (0, _pure2.default)(Blender);
Blender.displayName = 'Blender';
Blender.muiName = 'SvgIcon';

exports.default = Blender;