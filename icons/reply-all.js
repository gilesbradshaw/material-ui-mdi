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

var ReplyAll = function ReplyAll(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,9V5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12L7,8Z' })
  );
};
ReplyAll = (0, _pure2.default)(ReplyAll);
ReplyAll.displayName = 'ReplyAll';
ReplyAll.muiName = 'SvgIcon';

exports.default = ReplyAll;