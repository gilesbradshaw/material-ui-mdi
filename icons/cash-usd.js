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

var CashUsd = function CashUsd(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z' })
  );
};
CashUsd = (0, _pure2.default)(CashUsd);
CashUsd.displayName = 'CashUsd';
CashUsd.muiName = 'SvgIcon';

exports.default = CashUsd;