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

var VectorIntersection = function VectorIntersection(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3.14,1A2.14,2.14 0 0,0 1,3.14V5H3V3H5V1H3.14M7,1V3H10V1H7M12,1V3H14V5H16V3.14C16,1.96 15.04,1 13.86,1H12M1,7V10H3V7H1M9,7C7.89,7 7,7.89 7,9C7,11.33 7,16 7,16C7,16 11.57,16 13.86,16A2.14,2.14 0 0,0 16,13.86C16,11.57 16,7 16,7C16,7 11.33,7 9,7M18,7V9H20V11H22V9C22,7.89 21.11,7 20,7H18M9,9H14V14H9V9M1,12V13.86C1,15.04 1.96,16 3.14,16H5V14H3V12H1M20,13V16H22V13H20M7,18V20C7,21.11 7.89,22 9,22H11V20H9V18H7M20,18V20H18V22H20C21.11,22 22,21.11 22,20V18H20M13,20V22H16V20H13Z' })
  );
};
VectorIntersection = (0, _pure2.default)(VectorIntersection);
VectorIntersection.displayName = 'VectorIntersection';
VectorIntersection.muiName = 'SvgIcon';

exports.default = VectorIntersection;