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

var CloudCircle = function CloudCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.5,16H8A3,3 0 0,1 5,13A3,3 0 0,1 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7A4,4 0 0,1 16,11H16.5A2.5,2.5 0 0,1 19,13.5A2.5,2.5 0 0,1 16.5,16M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' })
  );
};
CloudCircle = (0, _pure2.default)(CloudCircle);
CloudCircle.displayName = 'CloudCircle';
CloudCircle.muiName = 'SvgIcon';

exports.default = CloudCircle;