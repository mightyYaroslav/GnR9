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
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { onClick: this.props.onDeleteClicked },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'trash' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJuYW1lIiwiZGF0ZSIsImRlc2MiLCJhbGVydCIsIm9uRGVsZXRlQ2xpY2tlZCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O2lDQUNPO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksd0VBQU8sbUJBQVAsR0FESjtBQUVJO0FBQUEsMENBQU0sT0FBTjtBQUFBO0FBQ0k7QUFBQSw4Q0FBTSxNQUFOO0FBQUE7QUFDSyw2QkFBS0MsS0FBTCxDQUFXQztBQURoQixxQkFESjtBQUlJO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsTUFBaEI7QUFDSSxtRkFBTSxNQUFLLE1BQVgsR0FESjtBQUVLLGlDQUFLRCxLQUFMLENBQVdFO0FBRmhCO0FBREoscUJBSko7QUFVSTtBQUFBLDhDQUFNLFdBQU47QUFBQTtBQUNLLDZCQUFLRixLQUFMLENBQVdHO0FBRGhCO0FBVkosaUJBRko7QUFnQkk7QUFBQSwwQ0FBTSxPQUFOO0FBQUEsc0JBQWMsV0FBZDtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVM7QUFBQSwyQ0FBTUMsTUFBTSxXQUFXLE9BQUtKLEtBQUwsQ0FBV0MsSUFBdEIsR0FBNkIsU0FBN0IsR0FBeUMsT0FBS0QsS0FBTCxDQUFXRyxJQUExRCxDQUFOO0FBQUEsaUNBQWpCO0FBQXdGLG1GQUFNLE1BQUssYUFBWDtBQUF4Rix5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtILEtBQUwsQ0FBV0ssZUFBNUI7QUFBNkMsbUZBQU0sTUFBSyxPQUFYO0FBQTdDO0FBRko7QUFESjtBQWhCSixhQURKO0FBMEJIOzs7Ozs7QUFHTE4sSUFBSU8sU0FBSixHQUFnQjtBQUNaTCxVQUFNLG9CQUFVTSxNQURKO0FBRVpMLFVBQU0sb0JBQVVLLE1BRko7QUFHWkosVUFBTSxvQkFBVUk7QUFISixDQUFoQjs7a0JBTWVSLEciLCJmaWxlIjoiMC4zYzRjZjZlMzg5OTFmMzBkYTIwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2FyZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IENvbmZpcm1FeGFtcGxlIGZyb20gJy4vQ29uZmlybUV4YW1wbGVDb25maXJtJ1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299Lz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd0aW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdOYW1lOiAnICsgdGhpcy5wcm9wcy5uYW1lICsgJyBEZXNjOiAnICsgdGhpcy5wcm9wcy5kZXNjKX0+PEljb24gbmFtZT0naW5mbyBsZXR0ZXInLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZUNsaWNrZWR9PjxJY29uIG5hbWU9J3RyYXNoJy8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Q29uZmlybUV4YW1wbGUgY29udGVudD17PEljb24gbmFtZT0ndHJhc2gnLz59Lz4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbk1hcC5Qcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2M6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==