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

var LanguagePythonText = function LanguagePythonText(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,5.69C8.92,1.07 11.1,7 11.28,10.27C11.46,13.53 8.29,17.64 4.31,14.92V20.3L2,18.77V5.69M4.22,7.4V12.78C7.84,14.95 9.08,13.17 9.08,10.09C9.08,5.74 6.57,5.59 4.22,7.4M15.08,4.15C15.08,4.15 14.9,7.64 15.08,11.07C15.44,14.5 19.69,11.84 19.69,11.84V4.92L22,5.2V14.44C22,20.6 15.85,20.3 15.85,20.3L15.08,18C20.46,18 19.78,14.43 19.78,14.43C13.27,16.97 12.77,12.61 12.77,12.61V5.69L15.08,4.15Z' })
  );
};
LanguagePythonText = (0, _pure2.default)(LanguagePythonText);
LanguagePythonText.displayName = 'LanguagePythonText';
LanguagePythonText.muiName = 'SvgIcon';

exports.default = LanguagePythonText;