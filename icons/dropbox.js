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

var Dropbox = function Dropbox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,14.56L16.35,18.16L18.2,16.95V18.3L12,22L5.82,18.3V16.95L7.68,18.16L12,14.56M7.68,2.5L12,6.09L16.32,2.5L22.5,6.5L18.23,9.94L22.5,13.36L16.32,17.39L12,13.78L7.68,17.39L1.5,13.36L5.77,9.94L1.5,6.5L7.68,2.5M12,13.68L18.13,9.94L12,6.19L5.87,9.94L12,13.68Z' })
  );
};
Dropbox = (0, _pure2.default)(Dropbox);
Dropbox.displayName = 'Dropbox';
Dropbox.muiName = 'SvgIcon';

exports.default = Dropbox;