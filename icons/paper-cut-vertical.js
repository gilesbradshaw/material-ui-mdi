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

var PaperCutVertical = function PaperCutVertical(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11.43,3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H20A2,2 0 0,1 22,8V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V8A2,2 0 0,1 4,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23M4,8V20H11A1,1 0 0,1 12,19A1,1 0 0,1 13,20H20V8H15L14.9,8L17,10.92L15.4,12.1L12.42,8H11.58L8.6,12.1L7,10.92L9.1,8H9L4,8M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M12,16A1,1 0 0,1 13,17A1,1 0 0,1 12,18A1,1 0 0,1 11,17A1,1 0 0,1 12,16M12,13A1,1 0 0,1 13,14A1,1 0 0,1 12,15A1,1 0 0,1 11,14A1,1 0 0,1 12,13M12,10A1,1 0 0,1 13,11A1,1 0 0,1 12,12A1,1 0 0,1 11,11A1,1 0 0,1 12,10Z' })
  );
};
PaperCutVertical = (0, _pure2.default)(PaperCutVertical);
PaperCutVertical.displayName = 'PaperCutVertical';
PaperCutVertical.muiName = 'SvgIcon';

exports.default = PaperCutVertical;