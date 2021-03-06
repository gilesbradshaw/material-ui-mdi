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

var AccountMultipleOutline = function AccountMultipleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.5,6.5A2,2 0 0,1 18.5,8.5A2,2 0 0,1 16.5,10.5A2,2 0 0,1 14.5,8.5A2,2 0 0,1 16.5,6.5M16.5,12A3.5,3.5 0 0,0 20,8.5A3.5,3.5 0 0,0 16.5,5A3.5,3.5 0 0,0 13,8.5A3.5,3.5 0 0,0 16.5,12M7.5,6.5A2,2 0 0,1 9.5,8.5A2,2 0 0,1 7.5,10.5A2,2 0 0,1 5.5,8.5A2,2 0 0,1 7.5,6.5M7.5,12A3.5,3.5 0 0,0 11,8.5A3.5,3.5 0 0,0 7.5,5A3.5,3.5 0 0,0 4,8.5A3.5,3.5 0 0,0 7.5,12M21.5,17.5H14V16.25C14,15.79 13.8,15.39 13.5,15.03C14.36,14.73 15.44,14.5 16.5,14.5C18.94,14.5 21.5,15.71 21.5,16.25M12.5,17.5H2.5V16.25C2.5,15.71 5.06,14.5 7.5,14.5C9.94,14.5 12.5,15.71 12.5,16.25M16.5,13C15.3,13 13.43,13.34 12,14C10.57,13.33 8.7,13 7.5,13C5.33,13 1,14.08 1,16.25V19H23V16.25C23,14.08 18.67,13 16.5,13Z' })
  );
};
AccountMultipleOutline = (0, _pure2.default)(AccountMultipleOutline);
AccountMultipleOutline.displayName = 'AccountMultipleOutline';
AccountMultipleOutline.muiName = 'SvgIcon';

exports.default = AccountMultipleOutline;