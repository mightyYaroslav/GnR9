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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIiwibWFwIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBRVgsdUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBQ0EsY0FBS0Usa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JGLElBQXhCLE9BQTFCO0FBQ0EsY0FBS0csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSCxJQUFoQixPQUFsQjtBQUxlO0FBTWxCOztBQVJVO0FBQUE7QUFBQSw2Q0FVVTtBQUNqQixpQkFBS0QsY0FBTDtBQUNIO0FBWlU7QUFBQTtBQUFBLHlDQWNNO0FBQ2IsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIO0FBaEJVO0FBQUE7QUFBQSwyQ0FrQlFDLENBbEJSLFFBa0J1QjtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsaUJBQUtOLFVBQUwsQ0FBZ0JNLE9BQU9HLEVBQXZCO0FBQ0E7QUFDSDtBQXRCVTtBQUFBO0FBQUEsMkNBd0JRSixDQXhCUixTQXdCc0I7QUFBQTs7QUFBQSxnQkFBVEQsS0FBUyxTQUFUQSxLQUFTOztBQUM3QixpQkFBS0gsUUFBTCxDQUFjLEVBQUVDLFdBQVcsSUFBYixFQUFtQkUsWUFBbkIsRUFBZDs7QUFFQU0sdUJBQVcsWUFBTTtBQUNiLG9CQUFJLE9BQUtDLEtBQUwsQ0FBV1AsS0FBWCxDQUFpQlEsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsT0FBTyxPQUFLaEIsY0FBTCxFQUFQO0FBQ2pDLG9CQUFNaUIsS0FBSyxJQUFJQyxNQUFKLENBQVcsaUJBQUVDLFlBQUYsQ0FBZSxPQUFLSixLQUFMLENBQVdQLEtBQTFCLENBQVgsRUFBNkMsR0FBN0MsQ0FBWDtBQUNBLHVCQUFLSCxRQUFMLENBQWM7QUFDVkMsK0JBQVcsS0FERDtBQUVWQyw2QkFBUyxPQUFLUixLQUFMLENBQVdxQixNQUFYLENBQWtCQyxNQUFsQixDQUF5QjtBQUFBLCtCQUFPSixHQUFHSyxJQUFILENBQVFDLElBQUlDLElBQVosQ0FBUDtBQUFBLHFCQUF6QjtBQUZDLGlCQUFkO0FBSUgsYUFQRCxFQU9HLEdBUEg7QUFRSDtBQW5DVTtBQUFBO0FBQUEsbUNBcUNBWCxFQXJDQSxFQXFDSTtBQUNYLGlCQUFLZCxLQUFMLENBQVcwQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixhQUFZYixFQUFwQztBQUNIO0FBdkNVO0FBQUE7QUFBQSxpQ0F5Q0Y7QUFBQSx5QkFDaUMsS0FBS0UsS0FEdEM7QUFBQSxnQkFDR1QsU0FESCxVQUNHQSxTQURIO0FBQUEsZ0JBQ2NFLEtBRGQsVUFDY0EsS0FEZDtBQUFBLGdCQUNxQkQsT0FEckIsVUFDcUJBLE9BRHJCOztBQUVMSSxvQkFBUUMsR0FBUixDQUFZTCxPQUFaO0FBQ0FJLG9CQUFRQyxHQUFSLENBQVlMLFFBQVFvQixHQUFSLENBQVk7QUFBQSx1QkFBT0MsSUFBSUosSUFBWDtBQUFBLGFBQVosQ0FBWjtBQUNBLG1CQUNJO0FBQ0kseUJBQVNsQixTQURiO0FBRUksZ0NBQWdCLEtBQUtKLGtCQUZ6QjtBQUdJLGdDQUFnQixLQUFLQyxrQkFIekI7QUFJSSx5QkFBU0ksUUFBUW9CLEdBQVIsQ0FBWTtBQUFBLDJCQUFPQyxJQUFJSixJQUFYO0FBQUEsaUJBQVosQ0FKYjtBQUtJLHVCQUFPaEI7QUFMWCxlQU1RLEtBQUtULEtBTmIsRUFESjtBQVVIO0FBdkRVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC4wNjQyZjUzZTc5M2YwZTJmNmE0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoLCBHcmlkLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQgPSB0aGlzLnJlc2V0Q29tcG9uZW50LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QgPSB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdvVG9DYW52YXMgPSB0aGlzLmdvVG9DYW52YXMuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCgpXG4gICAgfVxuXG4gICAgcmVzZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlLCByZXN1bHRzOiBbXSwgdmFsdWU6ICcnIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlUmVzdWx0U2VsZWN0KGUsIHsgcmVzdWx0IH0pIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICB0aGlzLmdvVG9DYW52YXMocmVzdWx0LmlkKVxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHJlc3VsdC5uYW1lIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUsIHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlLCB2YWx1ZSB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKF8uZXNjYXBlUmVnRXhwKHRoaXMuc3RhdGUudmFsdWUpLCAnaScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmoubmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgZ29Ub0NhbnZhcyhpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB2YWx1ZSwgcmVzdWx0cyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLm1hcChyZXMgPT4gcmVzLm5hbWUpKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBvblJlc3VsdFNlbGVjdD17dGhpcy5oYW5kbGVSZXN1bHRTZWxlY3R9XG4gICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHMubWFwKHJlcyA9PiByZXMubmFtZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9