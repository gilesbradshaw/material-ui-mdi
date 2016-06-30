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

var Run = function Run(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17.12,10L16.04,8.18L15.31,11.05L17.8,15.59V22H16V17L13.67,13.89L12.07,18.4L7.25,20.5L6.2,19L10.39,16.53L12.91,6.67L10.8,7.33V11H9V5.8L14.42,4.11L14.92,4.03C15.54,4.03 16.08,4.37 16.38,4.87L18.38,8.2H22V10H17.12M17,3.8C16,3.8 15.2,3 15.2,2C15.2,1 16,0.2 17,0.2C18,0.2 18.8,1 18.8,2C18.8,3 18,3.8 17,3.8M7,9V11H4A1,1 0 0,1 3,10A1,1 0 0,1 4,9H7M9.25,13L8.75,15H5A1,1 0 0,1 4,14A1,1 0 0,1 5,13H9.25M7,5V7H3A1,1 0 0,1 2,6A1,1 0 0,1 3,5H7Z' })
  );
};
Run = (0, _pure2.default)(Run);
Run.displayName = 'Run';
Run.muiName = 'SvgIcon';

exports.default = Run;