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

var DatabasePlus = function DatabasePlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,3C4.58,3 1,4.79 1,7C1,9.21 4.58,11 9,11C13.42,11 17,9.21 17,7C17,4.79 13.42,3 9,3M1,9V12C1,14.21 4.58,16 9,16C13.42,16 17,14.21 17,12V9C17,11.21 13.42,13 9,13C4.58,13 1,11.21 1,9M1,14V17C1,19.21 4.58,21 9,21C10.41,21 11.79,20.81 13,20.46V17.46C11.79,17.81 10.41,18 9,18C4.58,18 1,16.21 1,14M18,14V17H15V19H18V22H20V19H23V17H20V14' })
  );
};
DatabasePlus = (0, _pure2.default)(DatabasePlus);
DatabasePlus.displayName = 'DatabasePlus';
DatabasePlus.muiName = 'SvgIcon';

exports.default = DatabasePlus;