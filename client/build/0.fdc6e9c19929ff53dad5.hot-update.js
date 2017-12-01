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
                console.log(_this2.props.source.filter(function (obj) {
                    return re.test(obj.name);
                }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsInJlc3VsdHMiLCJ2YWx1ZSIsImUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImxlbmd0aCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwic291cmNlIiwiZmlsdGVyIiwidGVzdCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQUNBLGNBQUtFLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRixJQUF4QixPQUExQjtBQUplO0FBS2xCOzs7OzZDQUVvQjtBQUNqQixpQkFBS0QsY0FBTDtBQUNIOzs7eUNBRWdCO0FBQ2IsaUJBQUtJLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIOzs7MkNBRWtCQyxDLFFBQWU7QUFBQSxnQkFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUM5QkMsb0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLGlCQUFLTCxRQUFMLENBQWMsRUFBRUcsT0FBT0UsT0FBT0csSUFBaEIsRUFBZDtBQUNIOzs7MkNBRWtCSixDLFNBQWM7QUFBQTs7QUFBQSxnQkFBVEQsS0FBUyxTQUFUQSxLQUFTOztBQUM3QixpQkFBS0gsUUFBTCxDQUFjLEVBQUVDLFdBQVcsSUFBYixFQUFtQkUsWUFBbkIsRUFBZDs7QUFFQU0sdUJBQVcsWUFBTTtBQUNiLG9CQUFJLE9BQUtDLEtBQUwsQ0FBV1AsS0FBWCxDQUFpQlEsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsT0FBTyxPQUFLZixjQUFMLEVBQVA7QUFDakMsb0JBQU1nQixLQUFLLElBQUlDLE1BQUosQ0FBVyxpQkFBRUMsWUFBRixDQUFlLE9BQUtKLEtBQUwsQ0FBV1AsS0FBMUIsQ0FBWCxFQUE2QyxHQUE3QyxDQUFYO0FBQ0FHLHdCQUFRQyxHQUFSLENBQVksT0FBS1osS0FBTCxDQUFXb0IsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwyQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJVixJQUFaLENBQVA7QUFBQSxpQkFBekIsQ0FBWjtBQUNBLHVCQUFLUixRQUFMLENBQWM7QUFDVkMsK0JBQVcsS0FERDtBQUVWQyw2QkFBUyxPQUFLUCxLQUFMLENBQVdvQixNQUFYLENBQWtCQyxNQUFsQixDQUF5QjtBQUFBLCtCQUFPSixHQUFHSyxJQUFILENBQVFDLElBQUlWLElBQVosQ0FBUDtBQUFBLHFCQUF6QjtBQUZDLGlCQUFkO0FBSUgsYUFSRCxFQVFHLEdBUkg7QUFTSDs7O2lDQUVRO0FBQUEseUJBQ2lDLEtBQUtFLEtBRHRDO0FBQUEsZ0JBQ0dULFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjRSxLQURkLFVBQ2NBLEtBRGQ7QUFBQSxnQkFDcUJELE9BRHJCLFVBQ3FCQSxPQURyQjs7QUFFTCxtQkFDSTtBQUNJLHlCQUFTRCxTQURiO0FBRUksZ0NBQWdCLEtBQUtILGtCQUZ6QjtBQUdJLGdDQUFnQixLQUFLQyxrQkFIekI7QUFJSSx5QkFBU0csT0FKYjtBQUtJLHVCQUFPQztBQUxYLGVBTVEsS0FBS1IsS0FOYixFQURKO0FBVUg7Ozs7OztrQkFoRGdCRCxTIiwiZmlsZSI6IjAuZmRjNmU5YzE5OTI5ZmY1M2RhZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaCwgR3JpZCwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCA9IHRoaXMucmVzZXRDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICB9XG5cbiAgICByZXNldENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3VsdHM6IFtdLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXN1bHRTZWxlY3QoZSwgeyByZXN1bHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogcmVzdWx0Lm5hbWUgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UoZSwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUsIHZhbHVlIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCAxKSByZXR1cm4gdGhpcy5yZXNldENvbXBvbmVudCgpXG4gICAgICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXy5lc2NhcGVSZWdFeHAodGhpcy5zdGF0ZS52YWx1ZSksICdpJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmoubmFtZSkpKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiB0aGlzLnByb3BzLnNvdXJjZS5maWx0ZXIob2JqID0+IHJlLnRlc3Qob2JqLm5hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIHZhbHVlLCByZXN1bHRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXt0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdH1cbiAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0c31cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==