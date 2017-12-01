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
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBRVgsdUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBQ0EsY0FBS0Usa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JGLElBQXhCLE9BQTFCO0FBQ0EsY0FBS0csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSCxJQUFoQixPQUFsQjtBQUxlO0FBTWxCOztBQVJVO0FBQUE7QUFBQSw2Q0FVVTtBQUNqQixpQkFBS0QsY0FBTDtBQUNIO0FBWlU7QUFBQTtBQUFBLHlDQWNNO0FBQ2IsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIO0FBaEJVO0FBQUE7QUFBQSwyQ0FrQlFDLENBbEJSLFFBa0J1QjtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsaUJBQUtOLFVBQUwsQ0FBZ0JNLE9BQU9HLEVBQXZCO0FBQ0g7QUFyQlU7QUFBQTtBQUFBLDJDQXVCUUosQ0F2QlIsU0F1QnNCO0FBQUE7O0FBQUEsZ0JBQVRELEtBQVMsU0FBVEEsS0FBUzs7QUFDN0IsaUJBQUtILFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBbUJFLFlBQW5CLEVBQWQ7O0FBRUFNLHVCQUFXLFlBQU07QUFDYixvQkFBSSxPQUFLQyxLQUFMLENBQVdQLEtBQVgsQ0FBaUJRLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDLE9BQU8sT0FBS2hCLGNBQUwsRUFBUDtBQUNqQyxvQkFBTWlCLEtBQUssSUFBSUMsTUFBSixDQUFXLGlCQUFFQyxZQUFGLENBQWUsT0FBS0osS0FBTCxDQUFXUCxLQUExQixDQUFYLEVBQTZDLEdBQTdDLENBQVg7QUFDQSx1QkFBS0gsUUFBTCxDQUFjO0FBQ1ZDLCtCQUFXLEtBREQ7QUFFVkMsNkJBQVMsT0FBS1IsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwrQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJQyxJQUFaLENBQVA7QUFBQSxxQkFBekI7QUFGQyxpQkFBZDtBQUlILGFBUEQsRUFPRyxHQVBIO0FBUUg7QUFsQ1U7QUFBQTtBQUFBLG1DQW9DQVgsRUFwQ0EsRUFvQ0k7QUFDWCxpQkFBS2QsS0FBTCxDQUFXMEIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsYUFBWWIsRUFBcEM7QUFDSDtBQXRDVTtBQUFBO0FBQUEsaUNBd0NGO0FBQUEseUJBQ2lDLEtBQUtFLEtBRHRDO0FBQUEsZ0JBQ0dULFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjRSxLQURkLFVBQ2NBLEtBRGQ7QUFBQSxnQkFDcUJELE9BRHJCLFVBQ3FCQSxPQURyQjs7QUFFTCxtQkFDSTtBQUNJLHlCQUFTRCxTQURiO0FBRUksZ0NBQWdCLEtBQUtKLGtCQUZ6QjtBQUdJLGdDQUFnQixLQUFLQyxrQkFIekI7QUFJSSx5QkFBU0ksT0FKYjtBQUtJLHVCQUFPQztBQUxYLGVBTVEsS0FBS1QsS0FOYixFQURKO0FBVUg7QUFwRFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjViNDNlODdhZjQ1OWMzZmZmNDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2gsIEdyaWQsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCA9IHRoaXMucmVzZXRDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyA9IHRoaXMuZ29Ub0NhbnZhcy5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICB9XG5cbiAgICByZXNldENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3VsdHM6IFtdLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXN1bHRTZWxlY3QoZSwgeyByZXN1bHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyhyZXN1bHQuaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUsIHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlLCB2YWx1ZSB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKF8uZXNjYXBlUmVnRXhwKHRoaXMuc3RhdGUudmFsdWUpLCAnaScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmoubmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgZ29Ub0NhbnZhcyhpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB2YWx1ZSwgcmVzdWx0cyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBvblJlc3VsdFNlbGVjdD17dGhpcy5oYW5kbGVSZXN1bHRTZWxlY3R9XG4gICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9