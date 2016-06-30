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

var Onedrive = function Onedrive(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20.08,13.64C21.17,13.81 22,14.75 22,15.89C22,16.78 21.5,17.55 20.75,17.92L20.58,18H9.18L9.16,18V18C7.71,18 6.54,16.81 6.54,15.36C6.54,13.9 7.72,12.72 9.18,12.72L9.4,12.73L9.39,12.53A3.3,3.3 0 0,1 12.69,9.23C13.97,9.23 15.08,9.96 15.63,11C16.08,10.73 16.62,10.55 17.21,10.55A2.88,2.88 0 0,1 20.09,13.43L20.08,13.64M8.82,12.16C7.21,12.34 5.96,13.7 5.96,15.36C5.96,16.04 6.17,16.66 6.5,17.18H4.73A2.73,2.73 0 0,1 2,14.45C2,13 3.12,11.83 4.53,11.73L4.46,11.06C4.46,9.36 5.84,8 7.54,8C8.17,8 8.77,8.18 9.26,8.5C9.95,7.11 11.4,6.15 13.07,6.15C15.27,6.15 17.08,7.83 17.3,9.97H17.21C16.73,9.97 16.27,10.07 15.84,10.25C15.12,9.25 13.96,8.64 12.69,8.64C10.67,8.64 9,10.19 8.82,12.16Z' })
  );
};
Onedrive = (0, _pure2.default)(Onedrive);
Onedrive.displayName = 'Onedrive';
Onedrive.muiName = 'SvgIcon';

exports.default = Onedrive;