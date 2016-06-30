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

var WeightKilogram = function WeightKilogram(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M9.04,15.44L10.4,18H12.11L10.07,14.66L11.95,11.94H10.2L8.87,14.33H8.39V11.94H6.97V18H8.39V15.44H9.04M17.31,17.16V14.93H14.95V16.04H15.9V16.79L15.55,16.93L14.94,17C14.59,17 14.31,16.85 14.11,16.6C13.92,16.34 13.82,16 13.82,15.59V14.34C13.82,13.93 13.92,13.6 14.12,13.35C14.32,13.09 14.58,12.97 14.91,12.97C15.24,12.97 15.5,13.05 15.64,13.21C15.8,13.37 15.9,13.61 15.95,13.93H17.27L17.28,13.9C17.23,13.27 17,12.77 16.62,12.4C16.23,12.04 15.64,11.86 14.86,11.86C14.14,11.86 13.56,12.09 13.1,12.55C12.64,13 12.41,13.61 12.41,14.34V15.6C12.41,16.34 12.65,16.94 13.12,17.4C13.58,17.86 14.19,18.09 14.94,18.09C15.53,18.09 16.03,18 16.42,17.81C16.81,17.62 17.11,17.41 17.31,17.16Z' })
  );
};
WeightKilogram = (0, _pure2.default)(WeightKilogram);
WeightKilogram.displayName = 'WeightKilogram';
WeightKilogram.muiName = 'SvgIcon';

exports.default = WeightKilogram;