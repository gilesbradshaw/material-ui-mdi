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

var VectorCombine = function VectorCombine(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C4.33,16 7,16 7,16C7,16 7,18.67 7,20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C18.67,7 16,7 16,7C16,7 16,4.33 16,3C16,1.89 15.11,1 14,1H3M3,3H14C14,4.33 14,7 14,7H9C7.89,7 7,7.89 7,9V14C7,14 4.33,14 3,14V3M9,9H14V14H9V9M16,9C16,9 18.67,9 20,9V20H9C9,18.67 9,16 9,16H14C15.11,16 16,15.11 16,14V9Z' })
  );
};
VectorCombine = (0, _pure2.default)(VectorCombine);
VectorCombine.displayName = 'VectorCombine';
VectorCombine.muiName = 'SvgIcon';

exports.default = VectorCombine;