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

var BriefcaseCheck = function BriefcaseCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10.5,17.5L7,14L8.41,12.59L10.5,14.67L15.68,9.5L17.09,10.91M10,4H14V6H10M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V8C22,6.89 21.11,6 20,6Z' })
  );
};
BriefcaseCheck = (0, _pure2.default)(BriefcaseCheck);
BriefcaseCheck.displayName = 'BriefcaseCheck';
BriefcaseCheck.muiName = 'SvgIcon';

exports.default = BriefcaseCheck;