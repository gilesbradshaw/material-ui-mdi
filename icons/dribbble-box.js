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

var DribbbleBox = function DribbbleBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M15.09,16.5C14.81,15.14 14.47,13.91 14.08,12.82L15.2,12.74H15.22V12.74C15.87,12.74 16.59,12.82 17.36,13C17.09,14.44 16.26,15.69 15.09,16.5M12,17.46C10.79,17.46 9.66,17.06 8.76,16.39C8.95,16.07 9.36,15.46 10,14.83C10.7,14.18 11.64,13.5 12.86,13.11C13.28,14.27 13.65,15.6 13.94,17.1C13.33,17.33 12.68,17.46 12,17.46M6.54,12V11.92L7.14,11.93V11.93C8.24,11.93 10.15,11.83 12.1,11.22L12.41,11.94C11.11,12.38 10.09,13.07 9.34,13.76C8.61,14.42 8.12,15.08 7.83,15.5C7.03,14.56 6.54,13.34 6.54,12M9.59,7.11C9.97,7.56 10.73,8.54 11.54,10.08C9.89,10.57 8.23,10.68 7.22,10.68H7.14V10.68H6.7C7.09,9.11 8.17,7.81 9.59,7.11M12,6.54C13.29,6.54 14.47,7 15.41,7.74C14.69,8.6 13.74,9.22 12.72,9.66C12,8.27 11.31,7.28 10.84,6.67C11.21,6.59 11.6,6.54 12,6.54M16.29,8.63C16.97,9.5 17.4,10.57 17.45,11.74C16.66,11.58 15.92,11.5 15.22,11.5V11.5C14.66,11.5 14.13,11.54 13.63,11.63L13.27,10.78C14.37,10.3 15.43,9.61 16.29,8.63M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z' })
  );
};
DribbbleBox = (0, _pure2.default)(DribbbleBox);
DribbbleBox.displayName = 'DribbbleBox';
DribbbleBox.muiName = 'SvgIcon';

exports.default = DribbbleBox;