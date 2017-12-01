webpackHotUpdate(0,{

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(18);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _ConfirmExampleConfirm = __webpack_require__(894);

var _ConfirmExampleConfirm2 = _interopRequireDefault(_ConfirmExampleConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _semanticUiReact.Card,
                null,
                _react2.default.createElement(_semanticUiReact.Image, { src: _logo2.default }),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Card.Header,
                        null,
                        this.props.name
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Meta,
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'date' },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'time' }),
                            this.props.date
                        )
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Description,
                        null,
                        this.props.desc
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui two buttons' },
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { onClick: function onClick() {
                                    return alert('Name: ' + _this2.props.name + ' Desc: ' + _this2.props.desc);
                                } },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'info letter' })
                        )
                    )
                )
            );
        }
    }]);

    return Map;
}(_react.Component);

Map.PropTypes = {
    name: _propTypes2.default.string,
    date: _propTypes2.default.string,
    desc: _propTypes2.default.string
};

exports.default = Map;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJuYW1lIiwiZGF0ZSIsImRlc2MiLCJhbGVydCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O2lDQUNPO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksd0VBQU8sbUJBQVAsR0FESjtBQUVJO0FBQUEsMENBQU0sT0FBTjtBQUFBO0FBQ0k7QUFBQSw4Q0FBTSxNQUFOO0FBQUE7QUFDSyw2QkFBS0MsS0FBTCxDQUFXQztBQURoQixxQkFESjtBQUlJO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsTUFBaEI7QUFDSSxtRkFBTSxNQUFLLE1BQVgsR0FESjtBQUVLLGlDQUFLRCxLQUFMLENBQVdFO0FBRmhCO0FBREoscUJBSko7QUFVSTtBQUFBLDhDQUFNLFdBQU47QUFBQTtBQUNLLDZCQUFLRixLQUFMLENBQVdHO0FBRGhCO0FBVkosaUJBRko7QUFnQkk7QUFBQSwwQ0FBTSxPQUFOO0FBQUEsc0JBQWMsV0FBZDtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVM7QUFBQSwyQ0FBTUMsTUFBTSxXQUFXLE9BQUtKLEtBQUwsQ0FBV0MsSUFBdEIsR0FBNkIsU0FBN0IsR0FBeUMsT0FBS0QsS0FBTCxDQUFXRyxJQUExRCxDQUFOO0FBQUEsaUNBQWpCO0FBQXdGLG1GQUFNLE1BQUssYUFBWDtBQUF4RjtBQURKO0FBREo7QUFoQkosYUFESjtBQTBCSDs7Ozs7O0FBR0xKLElBQUlNLFNBQUosR0FBZ0I7QUFDWkosVUFBTSxvQkFBVUssTUFESjtBQUVaSixVQUFNLG9CQUFVSSxNQUZKO0FBR1pILFVBQU0sb0JBQVVHO0FBSEosQ0FBaEI7O2tCQU1lUCxHIiwiZmlsZSI6IjAuMDQ1NmRlNDE1ZmFmZmM0YTBiMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0NhcmQsIEltYWdlLCBJY29uLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBDb25maXJtRXhhbXBsZSBmcm9tICcuL0NvbmZpcm1FeGFtcGxlQ29uZmlybSdcblxuY2xhc3MgTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfS8+XG4gICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndGltZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgdHdvIGJ1dHRvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydCgnTmFtZTogJyArIHRoaXMucHJvcHMubmFtZSArICcgRGVzYzogJyArIHRoaXMucHJvcHMuZGVzYyl9PjxJY29uIG5hbWU9J2luZm8gbGV0dGVyJy8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWxldGVDbGlja2VkfT48SWNvbiBuYW1lPSd0cmFzaCcvPjwvQnV0dG9uPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPENvbmZpcm1FeGFtcGxlIGNvbnRlbnQ9ezxJY29uIG5hbWU9J3RyYXNoJy8+fS8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApXG4gICAgfVxufVxuXG5NYXAuUHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=