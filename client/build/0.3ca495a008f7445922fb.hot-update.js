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

var SearchExampleStandard = function (_Component) {
    _inherits(SearchExampleStandard, _Component);

    function SearchExampleStandard(props) {
        _classCallCheck(this, SearchExampleStandard);

        var _this = _possibleConstructorReturn(this, (SearchExampleStandard.__proto__ || Object.getPrototypeOf(SearchExampleStandard)).call(this, props));

        _this.resetComponent = _this.resetComponent.bind(_this);
        _this.handleResultSelect = _this.handleResultSelect.bind(_this);
        _this.handleSearchChange = _this.handleSearchChange.bind(_this);
        return _this;
    }

    _createClass(SearchExampleStandard, [{
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

    return SearchExampleStandard;
}(_react.Component);

exports.default = SearchExampleStandard;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQuanMiXSwibmFtZXMiOlsiU2VhcmNoRXhhbXBsZVN0YW5kYXJkIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsInJlc3VsdHMiLCJ2YWx1ZSIsImUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImxlbmd0aCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwic291cmNlIiwiZmlsdGVyIiwidGVzdCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEscUI7OztBQUVqQixtQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtKQUNUQSxLQURTOztBQUVmLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRSxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsT0FBMUI7QUFKZTtBQUtsQjs7Ozs2Q0FFb0I7QUFDakIsaUJBQUtELGNBQUw7QUFDSDs7O3lDQUVnQjtBQUNiLGlCQUFLSSxRQUFMLENBQWMsRUFBRUMsV0FBVyxLQUFiLEVBQW9CQyxTQUFTLEVBQTdCLEVBQWlDQyxPQUFPLEVBQXhDLEVBQWQ7QUFDSDs7OzJDQUVrQkMsQyxRQUFlO0FBQUEsZ0JBQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFDOUJDLG9CQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxpQkFBS0wsUUFBTCxDQUFjLEVBQUVHLE9BQU9FLE9BQU9HLElBQWhCLEVBQWQ7QUFDSDs7OzJDQUVrQkosQyxTQUFjO0FBQUE7O0FBQUEsZ0JBQVRELEtBQVMsU0FBVEEsS0FBUzs7QUFDN0IsaUJBQUtILFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBbUJFLFlBQW5CLEVBQWQ7O0FBRUFNLHVCQUFXLFlBQU07QUFDYixvQkFBSSxPQUFLQyxLQUFMLENBQVdQLEtBQVgsQ0FBaUJRLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDLE9BQU8sT0FBS2YsY0FBTCxFQUFQO0FBQ2pDLG9CQUFNZ0IsS0FBSyxJQUFJQyxNQUFKLENBQVcsaUJBQUVDLFlBQUYsQ0FBZSxPQUFLSixLQUFMLENBQVdQLEtBQTFCLENBQVgsRUFBNkMsR0FBN0MsQ0FBWDtBQUNBLHVCQUFLSCxRQUFMLENBQWM7QUFDVkMsK0JBQVcsS0FERDtBQUVWQyw2QkFBUyxPQUFLUCxLQUFMLENBQVdvQixNQUFYLENBQWtCQyxNQUFsQixDQUF5QjtBQUFBLCtCQUFPSixHQUFHSyxJQUFILENBQVFDLElBQUlWLElBQVosQ0FBUDtBQUFBLHFCQUF6QjtBQUZDLGlCQUFkO0FBSUgsYUFQRCxFQU9HLEdBUEg7QUFRSDs7O2lDQUVRO0FBQUEseUJBQ2lDLEtBQUtFLEtBRHRDO0FBQUEsZ0JBQ0dULFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjRSxLQURkLFVBQ2NBLEtBRGQ7QUFBQSxnQkFDcUJELE9BRHJCLFVBQ3FCQSxPQURyQjs7QUFFTCxtQkFDSTtBQUNJLHlCQUFTRCxTQURiO0FBRUksZ0NBQWdCLEtBQUtILGtCQUZ6QjtBQUdJLGdDQUFnQixLQUFLQyxrQkFIekI7QUFJSSx5QkFBU0csT0FKYjtBQUtJLHVCQUFPQztBQUxYLGVBTVEsS0FBS1IsS0FOYixFQURKO0FBVUg7Ozs7OztrQkEvQ2dCRCxxQiIsImZpbGUiOiIwLjNjYTQ5NWEwMDhmNzQ0NTkyMmZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2gsIEdyaWQsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hFeGFtcGxlU3RhbmRhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQgPSB0aGlzLnJlc2V0Q29tcG9uZW50LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QgPSB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCgpXG4gICAgfVxuXG4gICAgcmVzZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlLCByZXN1bHRzOiBbXSwgdmFsdWU6ICcnIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlUmVzdWx0U2VsZWN0KGUsIHsgcmVzdWx0IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHJlc3VsdC5uYW1lIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUsIHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlLCB2YWx1ZSB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKF8uZXNjYXBlUmVnRXhwKHRoaXMuc3RhdGUudmFsdWUpLCAnaScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmoubmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgdmFsdWUsIHJlc3VsdHMgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgb25SZXN1bHRTZWxlY3Q9e3RoaXMuaGFuZGxlUmVzdWx0U2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9