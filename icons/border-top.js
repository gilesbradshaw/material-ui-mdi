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

var BorderTop = function BorderTop(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,13H17V11H15M19,21H21V19H19M11,9H13V7H11M15,21H17V19H15M19,17H21V15H19M3,5H21V3H3M19,13H21V11H19M19,9H21V7H19M11,17H13V15H11M3,9H5V7H3M3,13H5V11H3M3,21H5V19H3M3,17H5V15H3M11,21H13V19H11M11,13H13V11H11M7,13H9V11H7M7,21H9V19H7V21Z' })
  );
};
BorderTop = (0, _pure2.default)(BorderTop);
BorderTop.displayName = 'BorderTop';
BorderTop.muiName = 'SvgIcon';

exports.default = BorderTop;