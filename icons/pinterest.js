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

var Pinterest = function Pinterest(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13.25,17.25C12.25,17.25 11.29,16.82 10.6,16.1L9.41,20.1L9.33,20.36L9.29,20.34C9.04,20.75 8.61,21 8.12,21C7.37,21 6.75,20.38 6.75,19.62C6.75,19.56 6.76,19.5 6.77,19.44L6.75,19.43L6.81,19.21L9.12,12.26C9.12,12.26 8.87,11.5 8.87,10.42C8.87,8.27 10.03,7.62 10.95,7.62C11.88,7.62 12.73,7.95 12.73,9.26C12.73,10.94 11.61,11.8 11.61,13C11.61,13.94 12.37,14.69 13.29,14.69C16.21,14.69 17.25,12.5 17.25,10.44C17.25,7.71 14.89,5.5 12,5.5C9.1,5.5 6.75,7.71 6.75,10.44C6.75,11.28 7,12.12 7.43,12.85C7.54,13.05 7.6,13.27 7.6,13.5A1.25,1.25 0 0,1 6.35,14.75C5.91,14.75 5.5,14.5 5.27,14.13C4.6,13 4.25,11.73 4.25,10.44C4.25,6.33 7.73,3 12,3C16.27,3 19.75,6.33 19.75,10.44C19.75,13.72 17.71,17.25 13.25,17.25Z' })
  );
};
Pinterest = (0, _pure2.default)(Pinterest);
Pinterest.displayName = 'Pinterest';
Pinterest.muiName = 'SvgIcon';

exports.default = Pinterest;