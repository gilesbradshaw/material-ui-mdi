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

var GithubBox = function GithubBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H14.85C14.5,21.92 14.5,21.24 14.5,21V18.26C14.5,17.33 14.17,16.72 13.81,16.41C16.04,16.16 18.38,15.32 18.38,11.5C18.38,10.39 18,9.5 17.35,8.79C17.45,8.54 17.8,7.5 17.25,6.15C17.25,6.15 16.41,5.88 14.5,7.17C13.71,6.95 12.85,6.84 12,6.84C11.15,6.84 10.29,6.95 9.5,7.17C7.59,5.88 6.75,6.15 6.75,6.15C6.2,7.5 6.55,8.54 6.65,8.79C6,9.5 5.62,10.39 5.62,11.5C5.62,15.31 7.95,16.17 10.17,16.42C9.89,16.67 9.63,17.11 9.54,17.76C8.97,18 7.5,18.45 6.63,16.93C6.63,16.93 6.1,15.97 5.1,15.9C5.1,15.9 4.12,15.88 5,16.5C5,16.5 5.68,16.81 6.14,17.97C6.14,17.97 6.73,19.91 9.5,19.31V21C9.5,21.24 9.5,21.92 9.14,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2Z' })
  );
};
GithubBox = (0, _pure2.default)(GithubBox);
GithubBox.displayName = 'GithubBox';
GithubBox.muiName = 'SvgIcon';

exports.default = GithubBox;