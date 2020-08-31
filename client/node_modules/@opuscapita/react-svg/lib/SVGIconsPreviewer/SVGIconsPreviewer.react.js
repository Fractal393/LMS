'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIconsPreviewerModule = require('./SVGIconsPreviewer.module.less');

var _SVGIconsPreviewerModule2 = _interopRequireDefault(_SVGIconsPreviewerModule);

var _fuzzysearch = require('fuzzysearch');

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGIconsPreviewer = function (_Component) {
  _inherits(SVGIconsPreviewer, _Component);

  function SVGIconsPreviewer(props) {
    _classCallCheck(this, SVGIconsPreviewer);

    var _this = _possibleConstructorReturn(this, (SVGIconsPreviewer.__proto__ || Object.getPrototypeOf(SVGIconsPreviewer)).call(this, props));

    var _this = _possibleConstructorReturn(this, (SVGIconsPreviewer.__proto__ || Object.getPrototypeOf(SVGIconsPreviewer)).call(this, props));

    _this.state = {
      filterInputValue: '',
      filteredIcons: {}
    };
    return _this;
  }

  _createClass(SVGIconsPreviewer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ filteredIcons: this.props.icons });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearFilterInputTimeout();
    }
  }, {
    key: 'clearFilterInputTimeout',
    value: function clearFilterInputTimeout() {
      if (this._filterInputTimeout) {
        clearTimeout(this._filterInputTimeout);
      }
    }
  }, {
    key: 'filterIconsLists',
    value: function filterIconsLists(icons, filterText) {
      return icons.filter(function (icon) {
        return (0, _fuzzysearch2.default)(filterText.toLowerCase(), icon.name.toLowerCase());
      });
    }
  }, {
    key: 'handleFilterInputChange',
    value: function handleFilterInputChange(event) {
      var _this2 = this;

      var value = event.target.value;
      this.clearFilterInputTimeout();
      this._filterInputTimeout = setTimeout(function () {
        var filteredIcons = _this2.filterIconsLists(_this2.props.icons, value);
        _this2.setState({
          filterInputValue: value,
          filteredIcons: filteredIcons
        });
      }, 250);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          iconsProps = _props.iconsProps,
          containerBgColor = _props.containerBgColor;
      var filteredIcons = this.state.filteredIcons;

      var containerStyle = {
        backgroundColor: containerBgColor,
        color: iconsProps && iconsProps.color || '#000'
      };
      return _react2.default.createElement(
        'div',
        { className: _SVGIconsPreviewerModule2.default.svgIconsPreviewer },
        _react2.default.createElement(
          'div',
          { className: _SVGIconsPreviewerModule2.default.filterInput },
          _react2.default.createElement('input', {
            className: 'form-control',
            placeholder: 'Search icons',
            onChange: this.handleFilterInputChange.bind(this)
          })
        ),
        _react2.default.createElement(
          'div',
          { className: _SVGIconsPreviewerModule2.default.itemsContainer },
          filteredIcons.map(function (icon, index) {
            return _react2.default.createElement(
              'div',
              {
                className: _SVGIconsPreviewerModule2.default.item,
                style: containerStyle,
                title: icon.name.replace(/^svg/gi, ''),
                key: index
              },
              _react2.default.createElement(
                'div',
                { className: _SVGIconsPreviewerModule2.default.itemRenderer },
                _react2.default.createElement(_SVGIcon2.default, _extends({ svg: icon.svg }, iconsProps))
              ),
              _react2.default.createElement(
                'div',
                { className: _SVGIconsPreviewerModule2.default.itemName },
                _react2.default.createElement(
                  'span',
                  null,
                  icon.name.replace(/^svg/gi, '')
                )
              )
            );
          })
        )
      );
    }
  }]);

  return SVGIconsPreviewer;
}(_react.Component);

exports.default = SVGIconsPreviewer;


SVGIconsPreviewer.propTypes = {
  iconsProps: _propTypes2.default.object,
  containerBgColor: _propTypes2.default.string,
  icons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    svg: _propTypes2.default.string
  }))
};

SVGIconsPreviewer.defaultProps = {
  icons: []
};