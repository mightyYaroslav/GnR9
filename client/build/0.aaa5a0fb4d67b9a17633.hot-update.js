webpackHotUpdate(0,{

/***/ 897:
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

var _ConfirmExampleConfirm = __webpack_require__(898);

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
                            { onClick: this.props.onInfoClicked },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'info' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJuYW1lIiwiZGF0ZSIsImRlc2MiLCJvbkluZm9DbGlja2VkIiwib25EZWxldGVDbGlja2VkIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7aUNBRU87QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSx3RUFBTyxtQkFBUCxHQURKO0FBRUk7QUFBQSwwQ0FBTSxPQUFOO0FBQUE7QUFDSTtBQUFBLDhDQUFNLE1BQU47QUFBQTtBQUNLLDZCQUFLQyxLQUFMLENBQVdDO0FBRGhCLHFCQURKO0FBSUk7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxNQUFoQjtBQUNJLG1GQUFNLE1BQUssTUFBWCxHQURKO0FBRUssaUNBQUtELEtBQUwsQ0FBV0U7QUFGaEI7QUFESixxQkFKSjtBQVVJO0FBQUEsOENBQU0sV0FBTjtBQUFBO0FBQ0ssNkJBQUtGLEtBQUwsQ0FBV0c7QUFEaEI7QUFWSixpQkFGSjtBQWdCSTtBQUFBLDBDQUFNLE9BQU47QUFBQSxzQkFBYyxXQUFkO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsZ0JBQWY7QUFFSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLSCxLQUFMLENBQVdJLGFBQTVCO0FBQTJDLG1GQUFNLE1BQUssTUFBWDtBQUEzQyx5QkFGSjtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssZUFBNUI7QUFBNkMsbUZBQU0sTUFBSyxPQUFYO0FBQTdDO0FBSEo7QUFESjtBQWhCSixhQURKO0FBMkJIOzs7Ozs7QUFHTE4sSUFBSU8sU0FBSixHQUFnQjtBQUNaTCxVQUFNLG9CQUFVTSxNQURKO0FBRVpMLFVBQU0sb0JBQVVLLE1BRko7QUFHWkosVUFBTSxvQkFBVUk7QUFISixDQUFoQjs7a0JBTWVSLEciLCJmaWxlIjoiMC5hYWE1YTBmYjRkNjdiOWExNzYzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2FyZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IENvbmZpcm1FeGFtcGxlIGZyb20gJy4vQ29uZmlybUV4YW1wbGVDb25maXJtJ1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30vPlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3RpbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VpIHR3byBidXR0b25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoJ05hbWU6ICcgKyB0aGlzLnByb3BzLm5hbWUgKyAnIERlc2M6ICcgKyB0aGlzLnByb3BzLmRlc2MpfT48SWNvbiBuYW1lPSdpbmZvIGxldHRlcicvPjwvQnV0dG9uPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSW5mb0NsaWNrZWR9PjxJY29uIG5hbWU9J2luZm8nLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZUNsaWNrZWR9PjxJY29uIG5hbWU9J3RyYXNoJy8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Q29uZmlybUV4YW1wbGUgY29udGVudD17PEljb24gbmFtZT0ndHJhc2gnLz59Lz4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbk1hcC5Qcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2M6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==