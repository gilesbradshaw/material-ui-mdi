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

var Jira = function Jira(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,2A1.58,1.58 0 0,1 13.58,3.58A1.58,1.58 0 0,1 12,5.16A1.58,1.58 0 0,1 10.42,3.58A1.58,1.58 0 0,1 12,2M7.79,3.05C8.66,3.05 9.37,3.76 9.37,4.63C9.37,5.5 8.66,6.21 7.79,6.21A1.58,1.58 0 0,1 6.21,4.63A1.58,1.58 0 0,1 7.79,3.05M16.21,3.05C17.08,3.05 17.79,3.76 17.79,4.63C17.79,5.5 17.08,6.21 16.21,6.21A1.58,1.58 0 0,1 14.63,4.63A1.58,1.58 0 0,1 16.21,3.05M11.8,10.95C9.7,8.84 10.22,7.79 10.22,7.79H13.91C13.91,9.37 11.8,10.95 11.8,10.95M13.91,21.47C13.91,21.47 13.91,19.37 9.7,15.16C5.5,10.95 4.96,9.89 4.43,6.74C4.43,6.74 4.83,6.21 5.36,6.74C5.88,7.26 7.07,7.66 8.12,7.66C8.12,7.66 9.17,10.95 12.07,13.05C12.07,13.05 15.88,9.11 15.88,7.53C15.88,7.53 17.07,7.79 18.5,6.74C18.5,6.74 19.5,6.21 19.57,6.74C19.7,7.79 18.64,11.47 14.3,15.16C14.3,15.16 17.07,18.32 16.8,21.47H13.91M9.17,16.21L11.41,18.71C10.36,19.76 10.22,22 10.22,22H7.07C7.59,17.79 9.17,16.21 9.17,16.21Z' })
  );
};
Jira = (0, _pure2.default)(Jira);
Jira.displayName = 'Jira';
Jira.muiName = 'SvgIcon';

exports.default = Jira;