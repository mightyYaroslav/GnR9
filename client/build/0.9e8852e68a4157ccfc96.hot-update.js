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
            // this.setState({ value: result.name })
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

            return _react2.default.createElement(_semanticUiReact.Search, _extends({
                loading: isLoading,
                onResultSelect: this.onResultSelect,
                onSearchChange: this.handleSearchChange,
                results: results.map(function (res) {
                    return res.name;
                }),
                value: value
            }, this.props));
        }
    }]);

    return SearchBar;
}(_react.Component);

exports.default = SearchBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIiwib25SZXN1bHRTZWxlY3QiLCJtYXAiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUVqQix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUVmLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRSxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLE9BQWxCO0FBTGU7QUFNbEI7Ozs7NkNBRW9CO0FBQ2pCLGlCQUFLRCxjQUFMO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixpQkFBS0ssUUFBTCxDQUFjLEVBQUVDLFdBQVcsS0FBYixFQUFvQkMsU0FBUyxFQUE3QixFQUFpQ0MsT0FBTyxFQUF4QyxFQUFkO0FBQ0g7OzsyQ0FFa0JDLEMsUUFBZTtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsaUJBQUtOLFVBQUwsQ0FBZ0JNLE9BQU9HLEVBQXZCO0FBQ0E7QUFDSDs7OzJDQUVrQkosQyxTQUFjO0FBQUE7O0FBQUEsZ0JBQVRELEtBQVMsU0FBVEEsS0FBUzs7QUFDN0IsaUJBQUtILFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBbUJFLFlBQW5CLEVBQWQ7O0FBRUFNLHVCQUFXLFlBQU07QUFDYixvQkFBSSxPQUFLQyxLQUFMLENBQVdQLEtBQVgsQ0FBaUJRLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDLE9BQU8sT0FBS2hCLGNBQUwsRUFBUDtBQUNqQyxvQkFBTWlCLEtBQUssSUFBSUMsTUFBSixDQUFXLGlCQUFFQyxZQUFGLENBQWUsT0FBS0osS0FBTCxDQUFXUCxLQUExQixDQUFYLEVBQTZDLEdBQTdDLENBQVg7QUFDQSx1QkFBS0gsUUFBTCxDQUFjO0FBQ1ZDLCtCQUFXLEtBREQ7QUFFVkMsNkJBQVMsT0FBS1IsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwrQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJQyxJQUFaLENBQVA7QUFBQSxxQkFBekI7QUFGQyxpQkFBZDtBQUlILGFBUEQsRUFPRyxHQVBIO0FBUUg7OzttQ0FFVVgsRSxFQUFJO0FBQ1gsaUJBQUtkLEtBQUwsQ0FBVzBCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLGFBQVliLEVBQXBDO0FBQ0g7OztpQ0FFUTtBQUFBLHlCQUNpQyxLQUFLRSxLQUR0QztBQUFBLGdCQUNHVCxTQURILFVBQ0dBLFNBREg7QUFBQSxnQkFDY0UsS0FEZCxVQUNjQSxLQURkO0FBQUEsZ0JBQ3FCRCxPQURyQixVQUNxQkEsT0FEckI7O0FBRUwsbUJBQ0k7QUFDSSx5QkFBU0QsU0FEYjtBQUVJLGdDQUFnQixLQUFLcUIsY0FGekI7QUFHSSxnQ0FBZ0IsS0FBS3hCLGtCQUh6QjtBQUlJLHlCQUFTSSxRQUFRcUIsR0FBUixDQUFZO0FBQUEsMkJBQU9DLElBQUlMLElBQVg7QUFBQSxpQkFBWixDQUpiO0FBS0ksdUJBQU9oQjtBQUxYLGVBTVEsS0FBS1QsS0FOYixFQURKO0FBVUg7Ozs7OztrQkFyRGdCRCxTIiwiZmlsZSI6IjAuOWU4ODUyZTY4YTQxNTdjY2ZjOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaCwgR3JpZCwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCA9IHRoaXMucmVzZXRDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyA9IHRoaXMuZ29Ub0NhbnZhcy5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICB9XG5cbiAgICByZXNldENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3VsdHM6IFtdLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXN1bHRTZWxlY3QoZSwgeyByZXN1bHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyhyZXN1bHQuaWQpXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogcmVzdWx0Lm5hbWUgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UoZSwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUsIHZhbHVlIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCAxKSByZXR1cm4gdGhpcy5yZXNldENvbXBvbmVudCgpXG4gICAgICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoXy5lc2NhcGVSZWdFeHAodGhpcy5zdGF0ZS52YWx1ZSksICdpJylcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogdGhpcy5wcm9wcy5zb3VyY2UuZmlsdGVyKG9iaiA9PiByZS50ZXN0KG9iai5uYW1lKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDUwMClcbiAgICB9XG5cbiAgICBnb1RvQ2FudmFzKGlkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FudmFzLycrIGlkKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIHZhbHVlLCByZXN1bHRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXt0aGlzLm9uUmVzdWx0U2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzLm1hcChyZXMgPT4gcmVzLm5hbWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9