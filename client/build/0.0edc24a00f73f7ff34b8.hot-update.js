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
        key: 'goToCanvas',
        value: function goToCanvas() {
            this.props.history.push('/canvas/' + this.props.id);
        }
    }, {
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
                            { onClick: this.goToCanvas },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsImlkIiwibmFtZSIsImRhdGUiLCJkZXNjIiwiZ29Ub0NhbnZhcyIsIm9uRGVsZXRlQ2xpY2tlZCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O3FDQUVXO0FBQ1QsaUJBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsYUFBVyxLQUFLRixLQUFMLENBQVdHLEVBQTlDO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHdFQUFPLG1CQUFQLEdBREo7QUFFSTtBQUFBLDBDQUFNLE9BQU47QUFBQTtBQUNJO0FBQUEsOENBQU0sTUFBTjtBQUFBO0FBQ0ssNkJBQUtILEtBQUwsQ0FBV0k7QUFEaEIscUJBREo7QUFJSTtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFVLE1BQWhCO0FBQ0ksbUZBQU0sTUFBSyxNQUFYLEdBREo7QUFFSyxpQ0FBS0osS0FBTCxDQUFXSztBQUZoQjtBQURKLHFCQUpKO0FBVUk7QUFBQSw4Q0FBTSxXQUFOO0FBQUE7QUFDSyw2QkFBS0wsS0FBTCxDQUFXTTtBQURoQjtBQVZKLGlCQUZKO0FBZ0JJO0FBQUEsMENBQU0sT0FBTjtBQUFBLHNCQUFjLFdBQWQ7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtDLFVBQXRCO0FBQWtDLG1GQUFNLE1BQUssYUFBWDtBQUFsQyx5QkFGSjtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtQLEtBQUwsQ0FBV1EsZUFBNUI7QUFBNkMsbUZBQU0sTUFBSyxPQUFYO0FBQTdDO0FBSEo7QUFESjtBQWhCSixhQURKO0FBMkJIOzs7Ozs7QUFHTFQsSUFBSVUsU0FBSixHQUFnQjtBQUNaTCxVQUFNLG9CQUFVTSxNQURKO0FBRVpMLFVBQU0sb0JBQVVLLE1BRko7QUFHWkosVUFBTSxvQkFBVUk7QUFISixDQUFoQjs7a0JBTWVYLEciLCJmaWxlIjoiMC4wZWRjMjRhMDBmNzNmN2ZmMzRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2FyZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IENvbmZpcm1FeGFtcGxlIGZyb20gJy4vQ29uZmlybUV4YW1wbGVDb25maXJtJ1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgZ29Ub0NhbnZhcygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJyt0aGlzLnByb3BzLmlkKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299Lz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd0aW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdOYW1lOiAnICsgdGhpcy5wcm9wcy5uYW1lICsgJyBEZXNjOiAnICsgdGhpcy5wcm9wcy5kZXNjKX0+PEljb24gbmFtZT0naW5mbyBsZXR0ZXInLz48L0J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5nb1RvQ2FudmFzfT48SWNvbiBuYW1lPSdpbmZvIGxldHRlcicvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGVsZXRlQ2xpY2tlZH0+PEljb24gbmFtZT0ndHJhc2gnLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxDb25maXJtRXhhbXBsZSBjb250ZW50PXs8SWNvbiBuYW1lPSd0cmFzaCcvPn0vPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFwLlByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzYzogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwic291cmNlUm9vdCI6IiJ9