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

var Dictionary = function Dictionary(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5.81,2C4.83,2.09 4,3 4,4V20C4,21.05 4.95,22 6,22H18C19.05,22 20,21.05 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6C5.94,2 5.87,2 5.81,2M12,13H13A1,1 0 0,1 14,14V18H13V16H12V18H11V14A1,1 0 0,1 12,13M12,14V15H13V14H12M15,15H18V16L16,19H18V20H15V19L17,16H15V15Z' })
  );
};
Dictionary = (0, _pure2.default)(Dictionary);
Dictionary.displayName = 'Dictionary';
Dictionary.muiName = 'SvgIcon';

exports.default = Dictionary;