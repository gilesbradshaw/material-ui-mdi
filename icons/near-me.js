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

var NearMe = function NearMe(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z' })
  );
};
NearMe = (0, _pure2.default)(NearMe);
NearMe.displayName = 'NearMe';
NearMe.muiName = 'SvgIcon';

exports.default = NearMe;