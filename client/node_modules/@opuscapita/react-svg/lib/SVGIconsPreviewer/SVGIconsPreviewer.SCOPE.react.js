'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; // eslint-disable-next-line no-unused-vars


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactShowroomClient = require('@opuscapita/react-showroom-client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAll(requireContext) {
  return requireContext.keys().map(function (key) {
    return {
      name: key.replace(/(\.svg$|^\.\/)/gi, ''),
      svg: requireContext(key)
    };
  });
}

var icons = requireAll(require.context('!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));

var SVGIconsPreviewerSCOPE = (0, _reactShowroomClient.showroomScopeDecorator)(_class = function (_Component) {
  _inherits(SVGIconsPreviewerSCOPE, _Component);

  function SVGIconsPreviewerSCOPE(props) {
    _classCallCheck(this, SVGIconsPreviewerSCOPE);

    var _this = _possibleConstructorReturn(this, (SVGIconsPreviewerSCOPE.__proto__ || Object.getPrototypeOf(SVGIconsPreviewerSCOPE)).call(this, props));

    _this.state = { icons: icons };
    return _this;
  }

  _createClass(SVGIconsPreviewerSCOPE, [{
    key: 'render',
    value: function render() {
      return this._renderChildren();
    }
  }]);

  return SVGIconsPreviewerSCOPE;
}(_react.Component)) || _class;

exports.default = SVGIconsPreviewerSCOPE;