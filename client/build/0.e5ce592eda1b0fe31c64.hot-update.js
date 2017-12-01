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

/***/ }),

/***/ 921:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJvbkNhcmRDbGlja2VkIiwibmFtZSIsImRhdGUiLCJkZXNjIiwib25JbmZvQ2xpY2tlZCIsIm9uRGVsZXRlQ2xpY2tlZCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7O2lDQUVPO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFNLFNBQVMsS0FBS0MsS0FBTCxDQUFXQyxhQUExQjtBQUNJLHdFQUFPLG1CQUFQLEdBREo7QUFFSTtBQUFBLDBDQUFNLE9BQU47QUFBQTtBQUNJO0FBQUEsOENBQU0sTUFBTjtBQUFBO0FBQ0ssNkJBQUtELEtBQUwsQ0FBV0U7QUFEaEIscUJBREo7QUFJSTtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFVLE1BQWhCO0FBQ0ksbUZBQU0sTUFBSyxNQUFYLEdBREo7QUFFSyxpQ0FBS0YsS0FBTCxDQUFXRztBQUZoQjtBQURKLHFCQUpKO0FBVUk7QUFBQSw4Q0FBTSxXQUFOO0FBQUE7QUFDSyw2QkFBS0gsS0FBTCxDQUFXSTtBQURoQjtBQVZKLGlCQUZKO0FBZ0JJO0FBQUEsMENBQU0sT0FBTjtBQUFBLHNCQUFjLFdBQWQ7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssYUFBNUI7QUFBMkMsbUZBQU0sTUFBSyxNQUFYO0FBQTNDLHlCQUZKO0FBR0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0wsS0FBTCxDQUFXTSxlQUE1QjtBQUE2QyxtRkFBTSxNQUFLLE9BQVg7QUFBN0M7QUFISjtBQURKO0FBaEJKLGFBREo7QUEyQkg7Ozs7OztBQUdMUCxJQUFJUSxTQUFKLEdBQWdCO0FBQ1pMLFVBQU0sb0JBQVVNLE1BREo7QUFFWkwsVUFBTSxvQkFBVUssTUFGSjtBQUdaSixVQUFNLG9CQUFVSTtBQUhKLENBQWhCOztrQkFNZVQsRyIsImZpbGUiOiIwLmU1Y2U1OTJlZGExYjBmZTMxYzY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtDYXJkLCBJbWFnZSwgSWNvbiwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQ29uZmlybUV4YW1wbGUgZnJvbSAnLi9Db25maXJtRXhhbXBsZUNvbmZpcm0nXG5cbmNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZCBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2FyZENsaWNrZWR9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299Lz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd0aW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdOYW1lOiAnICsgdGhpcy5wcm9wcy5uYW1lICsgJyBEZXNjOiAnICsgdGhpcy5wcm9wcy5kZXNjKX0+PEljb24gbmFtZT0naW5mbyBsZXR0ZXInLz48L0J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkluZm9DbGlja2VkfT48SWNvbiBuYW1lPSdpbmZvJy8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWxldGVDbGlja2VkfT48SWNvbiBuYW1lPSd0cmFzaCcvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPENvbmZpcm1FeGFtcGxlIGNvbnRlbnQ9ezxJY29uIG5hbWU9J3RyYXNoJy8+fS8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApXG4gICAgfVxufVxuXG5NYXAuUHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=