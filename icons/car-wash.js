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

var CarWash = function CarWash(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,13L6.5,8.5H17.5L19,13M17.5,18A1.5,1.5 0 0,1 16,16.5A1.5,1.5 0 0,1 17.5,15A1.5,1.5 0 0,1 19,16.5A1.5,1.5 0 0,1 17.5,18M6.5,18A1.5,1.5 0 0,1 5,16.5A1.5,1.5 0 0,1 6.5,15A1.5,1.5 0 0,1 8,16.5A1.5,1.5 0 0,1 6.5,18M18.92,8C18.72,7.42 18.16,7 17.5,7H6.5C5.84,7 5.28,7.42 5.08,8L3,14V22A1,1 0 0,0 4,23H5A1,1 0 0,0 6,22V21H18V22A1,1 0 0,0 19,23H20A1,1 0 0,0 21,22V14M7,5A1.5,1.5 0 0,0 8.5,3.5C8.5,2.5 7,0.8 7,0.8C7,0.8 5.5,2.5 5.5,3.5A1.5,1.5 0 0,0 7,5M12,5A1.5,1.5 0 0,0 13.5,3.5C13.5,2.5 12,0.8 12,0.8C12,0.8 10.5,2.5 10.5,3.5A1.5,1.5 0 0,0 12,5M17,5A1.5,1.5 0 0,0 18.5,3.5C18.5,2.5 17,0.8 17,0.8C17,0.8 15.5,2.5 15.5,3.5A1.5,1.5 0 0,0 17,5Z' })
  );
};
CarWash = (0, _pure2.default)(CarWash);
CarWash.displayName = 'CarWash';
CarWash.muiName = 'SvgIcon';

exports.default = CarWash;