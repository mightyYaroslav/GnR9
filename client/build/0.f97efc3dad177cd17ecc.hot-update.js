webpackHotUpdate(0,{

/***/ 910:
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

var _ConfirmExampleConfirm = __webpack_require__(911);

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
            // onClick={this.props.onCardClicked}
            return _react2.default.createElement(
                _semanticUiReact.Card,
                { onClick: this.props.onCardClicked },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJvbkNhcmRDbGlja2VkIiwibmFtZSIsImRhdGUiLCJkZXNjIiwib25JbmZvQ2xpY2tlZCIsIm9uRGVsZXRlQ2xpY2tlZCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O2lDQUVPO0FBQ0w7QUFDQSxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sU0FBUyxLQUFLQyxLQUFMLENBQVdDLGFBQTFCO0FBQ0ksd0VBQU8sbUJBQVAsR0FESjtBQUVJO0FBQUEsMENBQU0sT0FBTjtBQUFBO0FBQ0k7QUFBQSw4Q0FBTSxNQUFOO0FBQUE7QUFDSyw2QkFBS0QsS0FBTCxDQUFXRTtBQURoQixxQkFESjtBQUlJO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsTUFBaEI7QUFDSSxtRkFBTSxNQUFLLE1BQVgsR0FESjtBQUVLLGlDQUFLRixLQUFMLENBQVdHO0FBRmhCO0FBREoscUJBSko7QUFVSTtBQUFBLDhDQUFNLFdBQU47QUFBQTtBQUNLLDZCQUFLSCxLQUFMLENBQVdJO0FBRGhCO0FBVkosaUJBRko7QUFnQkk7QUFBQSwwQ0FBTSxPQUFOO0FBQUEsc0JBQWMsV0FBZDtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBRUk7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxhQUE1QjtBQUEyQyxtRkFBTSxNQUFLLE1BQVg7QUFBM0MseUJBRko7QUFHSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLTCxLQUFMLENBQVdNLGVBQTVCO0FBQTZDLG1GQUFNLE1BQUssT0FBWDtBQUE3QztBQUhKO0FBREo7QUFoQkosYUFESjtBQTJCSDs7Ozs7O0FBR0xQLElBQUlRLFNBQUosR0FBZ0I7QUFDWkwsVUFBTSxvQkFBVU0sTUFESjtBQUVaTCxVQUFNLG9CQUFVSyxNQUZKO0FBR1pKLFVBQU0sb0JBQVVJO0FBSEosQ0FBaEI7O2tCQU1lVCxHIiwiZmlsZSI6IjAuZjk3ZWZjM2RhZDE3N2NkMTdlY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0NhcmQsIEltYWdlLCBJY29uLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBDb25maXJtRXhhbXBsZSBmcm9tICcuL0NvbmZpcm1FeGFtcGxlQ29uZmlybSdcblxuY2xhc3MgTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gb25DbGljaz17dGhpcy5wcm9wcy5vbkNhcmRDbGlja2VkfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQgb25DbGljaz17dGhpcy5wcm9wcy5vbkNhcmRDbGlja2VkfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfS8+XG4gICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndGltZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgdHdvIGJ1dHRvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydCgnTmFtZTogJyArIHRoaXMucHJvcHMubmFtZSArICcgRGVzYzogJyArIHRoaXMucHJvcHMuZGVzYyl9PjxJY29uIG5hbWU9J2luZm8gbGV0dGVyJy8+PC9CdXR0b24+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25JbmZvQ2xpY2tlZH0+PEljb24gbmFtZT0naW5mbycvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGVsZXRlQ2xpY2tlZH0+PEljb24gbmFtZT0ndHJhc2gnLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxDb25maXJtRXhhbXBsZSBjb250ZW50PXs8SWNvbiBuYW1lPSd0cmFzaCcvPn0vPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFwLlByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzYzogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwic291cmNlUm9vdCI6IiJ9