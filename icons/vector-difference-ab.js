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

var VectorDifferenceAb = function VectorDifferenceAb(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,1C1.89,1 1,1.89 1,3V5H3V3H5V1H3M7,1V3H10V1H7M12,1V3H14V5H16V3C16,1.89 15.11,1 14,1H12M1,7V10H3V7H1M14,7C14,7 14,11.67 14,14C11.67,14 7,14 7,14C7,14 7,18 7,20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C18,7 14,7 14,7M16,9H20V20H9V16H14C15.11,16 16,15.11 16,14V9M1,12V14C1,15.11 1.89,16 3,16H5V14H3V12H1Z' })
  );
};
VectorDifferenceAb = (0, _pure2.default)(VectorDifferenceAb);
VectorDifferenceAb.displayName = 'VectorDifferenceAb';
VectorDifferenceAb.muiName = 'SvgIcon';

exports.default = VectorDifferenceAb;