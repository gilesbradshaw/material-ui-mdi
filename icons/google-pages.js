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

var GooglePages = function GooglePages(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,3H13V8L17,7L16,11H21V5C21,3.89 20.1,3 19,3M17,17L13,16V21H19A2,2 0 0,0 21,19V13H16M8,13H3V19A2,2 0 0,0 5,21H11V16L7,17M3,5V11H8L7,7L11,8V3H5C3.89,3 3,3.89 3,5Z' })
  );
};
GooglePages = (0, _pure2.default)(GooglePages);
GooglePages.displayName = 'GooglePages';
GooglePages.muiName = 'SvgIcon';

exports.default = GooglePages;