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

var CameraPartyMode = function CameraPartyMode(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,17C10.37,17 8.94,16.21 8,15H12A3,3 0 0,0 15,12C15,11.65 14.93,11.31 14.82,11H16.9C16.96,11.32 17,11.66 17,12A5,5 0 0,1 12,17M12,7C13.63,7 15.06,7.79 16,9H12A3,3 0 0,0 9,12C9,12.35 9.07,12.68 9.18,13H7.1C7.03,12.68 7,12.34 7,12A5,5 0 0,1 12,7M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' })
  );
};
CameraPartyMode = (0, _pure2.default)(CameraPartyMode);
CameraPartyMode.displayName = 'CameraPartyMode';
CameraPartyMode.muiName = 'SvgIcon';

exports.default = CameraPartyMode;