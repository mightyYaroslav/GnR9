webpackHotUpdate(0,{

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(909);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(SearchBar, _Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.resetComponent = _this.resetComponent.bind(_this);
        _this.handleResultSelect = _this.handleResultSelect.bind(_this);
        _this.handleSearchChange = _this.handleSearchChange.bind(_this);
        _this.goToCanvas = _this.goToCanvas.bind(_this);
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.resetComponent();
        }
    }, {
        key: 'resetComponent',
        value: function resetComponent() {
            this.setState({ isLoading: false, results: [], value: '' });
        }
    }, {
        key: 'handleResultSelect',
        value: function handleResultSelect(e, _ref) {
            var result = _ref.result;

            console.log(result);
            this.goToCanvas(result.id);
        }
    }, {
        key: 'handleSearchChange',
        value: function handleSearchChange(e, _ref2) {
            var _this2 = this;

            var value = _ref2.value;

            this.setState({ isLoading: true, value: value });

            setTimeout(function () {
                if (_this2.state.value.length < 1) return _this2.resetComponent();
                var re = new RegExp(_lodash2.default.escapeRegExp(_this2.state.value), 'i');
                _this2.setState({
                    isLoading: false,
                    results: _this2.props.source.filter(function (obj) {
                        return re.test(obj.name);
                    })
                });
            }, 500);
        }
    }, {
        key: 'goToCanvas',
        value: function goToCanvas(id) {
            this.props.history.push('/canvas/' + id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                value = _state.value,
                results = _state.results;

            console.log(results);
            console.log(results.map(function (res) {
                return res.name;
            }));
            return _react2.default.createElement(_semanticUiReact.Search, _extends({
                loading: isLoading,
                onResultSelect: this.handleResultSelect,
                onSearchChange: this.handleSearchChange,
                results: results.map(function (res) {
                    return res.name;
                }),
                value: value
            }, this.props));
        }
    }]);

    return SearchBar;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIiwibWFwIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBRVgsdUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBQ0EsY0FBS0Usa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JGLElBQXhCLE9BQTFCO0FBQ0EsY0FBS0csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSCxJQUFoQixPQUFsQjtBQUxlO0FBTWxCOztBQVJVO0FBQUE7QUFBQSw2Q0FVVTtBQUNqQixpQkFBS0QsY0FBTDtBQUNIO0FBWlU7QUFBQTtBQUFBLHlDQWNNO0FBQ2IsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIO0FBaEJVO0FBQUE7QUFBQSwyQ0FrQlFDLENBbEJSLFFBa0J1QjtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsaUJBQUtOLFVBQUwsQ0FBZ0JNLE9BQU9HLEVBQXZCO0FBQ0g7QUFyQlU7QUFBQTtBQUFBLDJDQXVCUUosQ0F2QlIsU0F1QnNCO0FBQUE7O0FBQUEsZ0JBQVRELEtBQVMsU0FBVEEsS0FBUzs7QUFDN0IsaUJBQUtILFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBbUJFLFlBQW5CLEVBQWQ7O0FBRUFNLHVCQUFXLFlBQU07QUFDYixvQkFBSSxPQUFLQyxLQUFMLENBQVdQLEtBQVgsQ0FBaUJRLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDLE9BQU8sT0FBS2hCLGNBQUwsRUFBUDtBQUNqQyxvQkFBTWlCLEtBQUssSUFBSUMsTUFBSixDQUFXLGlCQUFFQyxZQUFGLENBQWUsT0FBS0osS0FBTCxDQUFXUCxLQUExQixDQUFYLEVBQTZDLEdBQTdDLENBQVg7QUFDQSx1QkFBS0gsUUFBTCxDQUFjO0FBQ1ZDLCtCQUFXLEtBREQ7QUFFVkMsNkJBQVMsT0FBS1IsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwrQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJQyxJQUFaLENBQVA7QUFBQSxxQkFBekI7QUFGQyxpQkFBZDtBQUlILGFBUEQsRUFPRyxHQVBIO0FBUUg7QUFsQ1U7QUFBQTtBQUFBLG1DQW9DQVgsRUFwQ0EsRUFvQ0k7QUFDWCxpQkFBS2QsS0FBTCxDQUFXMEIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsYUFBWWIsRUFBcEM7QUFDSDtBQXRDVTtBQUFBO0FBQUEsaUNBd0NGO0FBQUEseUJBQ2lDLEtBQUtFLEtBRHRDO0FBQUEsZ0JBQ0dULFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjRSxLQURkLFVBQ2NBLEtBRGQ7QUFBQSxnQkFDcUJELE9BRHJCLFVBQ3FCQSxPQURyQjs7QUFFTEksb0JBQVFDLEdBQVIsQ0FBWUwsT0FBWjtBQUNBSSxvQkFBUUMsR0FBUixDQUFZTCxRQUFRb0IsR0FBUixDQUFZO0FBQUEsdUJBQU9DLElBQUlKLElBQVg7QUFBQSxhQUFaLENBQVo7QUFDQSxtQkFDSTtBQUNJLHlCQUFTbEIsU0FEYjtBQUVJLGdDQUFnQixLQUFLSixrQkFGekI7QUFHSSxnQ0FBZ0IsS0FBS0Msa0JBSHpCO0FBSUkseUJBQVNJLFFBQVFvQixHQUFSLENBQVk7QUFBQSwyQkFBT0MsSUFBSUosSUFBWDtBQUFBLGlCQUFaLENBSmI7QUFLSSx1QkFBT2hCO0FBTFgsZUFNUSxLQUFLVCxLQU5iLEVBREo7QUFVSDtBQXREVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuYTg1Y2ZmZWFhMTE2ZWZkNGU0ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaCwgR3JpZCwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50ID0gdGhpcy5yZXNldENvbXBvbmVudC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0ID0gdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzID0gdGhpcy5nb1RvQ2FudmFzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgIH1cblxuICAgIHJlc2V0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSwgcmVzdWx0czogW10sIHZhbHVlOiAnJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc3VsdFNlbGVjdChlLCB7IHJlc3VsdCB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzKHJlc3VsdC5pZClcbiAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UoZSwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUsIHZhbHVlIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCAxKSByZXR1cm4gdGhpcy5yZXNldENvbXBvbmVudCgpXG4gICAgICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXy5lc2NhcGVSZWdFeHAodGhpcy5zdGF0ZS52YWx1ZSksICdpJylcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogdGhpcy5wcm9wcy5zb3VyY2UuZmlsdGVyKG9iaiA9PiByZS50ZXN0KG9iai5uYW1lKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDUwMClcbiAgICB9XG5cbiAgICBnb1RvQ2FudmFzKGlkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FudmFzLycrIGlkKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIHZhbHVlLCByZXN1bHRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubWFwKHJlcyA9PiByZXMubmFtZSkpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXt0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdH1cbiAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0cy5tYXAocmVzID0+IHJlcy5uYW1lKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=