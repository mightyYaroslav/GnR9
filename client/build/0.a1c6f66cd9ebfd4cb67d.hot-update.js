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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
    _inherits(SearchBar, _Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.resetComponent = _this.resetComponent.bind(_this);
        _this.handleResultSelect = _this.handleResultSelect.bind(_this);
        _this.handleSearchChange = _this.handleSearchChange.bind(_this);
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
            this.setState({ value: result.name });
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
        key: 'render',
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                value = _state.value,
                results = _state.results;

            return _react2.default.createElement(_semanticUiReact.Search, _extends({
                loading: isLoading,
                onResultSelect: this.handleResultSelect,
                onSearchChange: this.handleSearchChange,
                results: results,
                value: value
            }, this.props));
        }
    }]);

    return SearchBar;
}(_react.Component);

exports.default = SearchBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsInJlc3VsdHMiLCJ2YWx1ZSIsImUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImxlbmd0aCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwic291cmNlIiwiZmlsdGVyIiwidGVzdCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQUNBLGNBQUtFLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRixJQUF4QixPQUExQjtBQUplO0FBS2xCOzs7OzZDQUVvQjtBQUNqQixpQkFBS0QsY0FBTDtBQUNIOzs7eUNBRWdCO0FBQ2IsaUJBQUtJLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIOzs7MkNBRWtCQyxDLFFBQWU7QUFBQSxnQkFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUM5QkMsb0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLGlCQUFLTCxRQUFMLENBQWMsRUFBRUcsT0FBT0UsT0FBT0csSUFBaEIsRUFBZDtBQUNIOzs7MkNBRWtCSixDLFNBQWM7QUFBQTs7QUFBQSxnQkFBVEQsS0FBUyxTQUFUQSxLQUFTOztBQUM3QixpQkFBS0gsUUFBTCxDQUFjLEVBQUVDLFdBQVcsSUFBYixFQUFtQkUsWUFBbkIsRUFBZDs7QUFFQU0sdUJBQVcsWUFBTTtBQUNiLG9CQUFJLE9BQUtDLEtBQUwsQ0FBV1AsS0FBWCxDQUFpQlEsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsT0FBTyxPQUFLZixjQUFMLEVBQVA7QUFDakMsb0JBQU1nQixLQUFLLElBQUlDLE1BQUosQ0FBVyxpQkFBRUMsWUFBRixDQUFlLE9BQUtKLEtBQUwsQ0FBV1AsS0FBMUIsQ0FBWCxFQUE2QyxHQUE3QyxDQUFYO0FBQ0EsdUJBQUtILFFBQUwsQ0FBYztBQUNWQywrQkFBVyxLQUREO0FBRVZDLDZCQUFTLE9BQUtQLEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0JDLE1BQWxCLENBQXlCO0FBQUEsK0JBQU9KLEdBQUdLLElBQUgsQ0FBUUMsSUFBSVYsSUFBWixDQUFQO0FBQUEscUJBQXpCO0FBRkMsaUJBQWQ7QUFJSCxhQVBELEVBT0csR0FQSDtBQVFIOzs7aUNBRVE7QUFBQSx5QkFDaUMsS0FBS0UsS0FEdEM7QUFBQSxnQkFDR1QsU0FESCxVQUNHQSxTQURIO0FBQUEsZ0JBQ2NFLEtBRGQsVUFDY0EsS0FEZDtBQUFBLGdCQUNxQkQsT0FEckIsVUFDcUJBLE9BRHJCOztBQUVMLG1CQUNJO0FBQ0kseUJBQVNELFNBRGI7QUFFSSxnQ0FBZ0IsS0FBS0gsa0JBRnpCO0FBR0ksZ0NBQWdCLEtBQUtDLGtCQUh6QjtBQUlJLHlCQUFTRyxPQUpiO0FBS0ksdUJBQU9DO0FBTFgsZUFNUSxLQUFLUixLQU5iLEVBREo7QUFVSDs7Ozs7O2tCQS9DZ0JELFMiLCJmaWxlIjoiMC5hMWM2ZjY2Y2Q5ZWJmZDRjYjY3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoLCBHcmlkLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50ID0gdGhpcy5yZXNldENvbXBvbmVudC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0ID0gdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgIH1cblxuICAgIHJlc2V0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSwgcmVzdWx0czogW10sIHZhbHVlOiAnJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc3VsdFNlbGVjdChlLCB7IHJlc3VsdCB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiByZXN1bHQubmFtZSB9KVxuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENoYW5nZShlLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSwgdmFsdWUgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChfLmVzY2FwZVJlZ0V4cCh0aGlzLnN0YXRlLnZhbHVlKSwgJ2knKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiB0aGlzLnByb3BzLnNvdXJjZS5maWx0ZXIob2JqID0+IHJlLnRlc3Qob2JqLm5hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIHZhbHVlLCByZXN1bHRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXt0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdH1cbiAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0c31cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==