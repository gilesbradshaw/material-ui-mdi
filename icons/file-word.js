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

var FileWord = function FileWord(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6,2H14L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M13,3.5V9H18.5L13,3.5M7,13L8.5,20H10.5L12,17L13.5,20H15.5L17,13H18V11H14V13H15L14.1,17.2L13,15V15H11V15L9.9,17.2L9,13H10V11H6V13H7Z' })
  );
};
FileWord = (0, _pure2.default)(FileWord);
FileWord.displayName = 'FileWord';
FileWord.muiName = 'SvgIcon';

exports.default = FileWord;