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

var MusicNoteWhole = function MusicNoteWhole(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10.5,12C8.6,12 6.9,13.2 6.26,15H3V18H6.26C6.9,19.8 8.6,21 10.5,21C12.4,21 14.1,19.8 14.74,18H19V15H14.74C14.1,13.2 12.4,12 10.5,12M10.5,14.5A2,2 0 0,1 12.5,16.5A2,2 0 0,1 10.5,18.5A2,2 0 0,1 8.5,16.5A2,2 0 0,1 10.5,14.5Z' })
  );
};
MusicNoteWhole = (0, _pure2.default)(MusicNoteWhole);
MusicNoteWhole.displayName = 'MusicNoteWhole';
MusicNoteWhole.muiName = 'SvgIcon';

exports.default = MusicNoteWhole;