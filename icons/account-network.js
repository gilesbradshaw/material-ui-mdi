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

var AccountNetwork = function AccountNetwork(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,16V18H14A1,1 0 0,1 15,19H22V21H15A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21H2V19H9A1,1 0 0,1 10,18H11V16H5V14.5C5,12.57 8.13,11 12,11C15.87,11 19,12.57 19,14.5V16H13M12,2A3.5,3.5 0 0,1 15.5,5.5A3.5,3.5 0 0,1 12,9A3.5,3.5 0 0,1 8.5,5.5A3.5,3.5 0 0,1 12,2Z' })
  );
};
AccountNetwork = (0, _pure2.default)(AccountNetwork);
AccountNetwork.displayName = 'AccountNetwork';
AccountNetwork.muiName = 'SvgIcon';

exports.default = AccountNetwork;