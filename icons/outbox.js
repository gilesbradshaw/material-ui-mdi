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

var Outbox = function Outbox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,14H10V11H8L12,7L16,11H14V14M16,11M5,15V5H19V15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3' })
  );
};
Outbox = (0, _pure2.default)(Outbox);
Outbox.displayName = 'Outbox';
Outbox.muiName = 'SvgIcon';

exports.default = Outbox;