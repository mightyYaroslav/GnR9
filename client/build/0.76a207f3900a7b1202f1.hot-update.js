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

            console.log(results);
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
}(_react.Component);

exports.default = SearchBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIiwibWFwIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFFakIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBQ0EsY0FBS0Usa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JGLElBQXhCLE9BQTFCO0FBQ0EsY0FBS0csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSCxJQUFoQixPQUFsQjtBQUxlO0FBTWxCOzs7OzZDQUVvQjtBQUNqQixpQkFBS0QsY0FBTDtBQUNIOzs7eUNBRWdCO0FBQ2IsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JDLFNBQVMsRUFBN0IsRUFBaUNDLE9BQU8sRUFBeEMsRUFBZDtBQUNIOzs7MkNBRWtCQyxDLFFBQWU7QUFBQSxnQkFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUM5QkMsb0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLGlCQUFLTixVQUFMLENBQWdCTSxPQUFPRyxFQUF2QjtBQUNBO0FBQ0g7OzsyQ0FFa0JKLEMsU0FBYztBQUFBOztBQUFBLGdCQUFURCxLQUFTLFNBQVRBLEtBQVM7O0FBQzdCLGlCQUFLSCxRQUFMLENBQWMsRUFBRUMsV0FBVyxJQUFiLEVBQW1CRSxZQUFuQixFQUFkOztBQUVBTSx1QkFBVyxZQUFNO0FBQ2Isb0JBQUksT0FBS0MsS0FBTCxDQUFXUCxLQUFYLENBQWlCUSxNQUFqQixHQUEwQixDQUE5QixFQUFpQyxPQUFPLE9BQUtoQixjQUFMLEVBQVA7QUFDakMsb0JBQU1pQixLQUFLLElBQUlDLE1BQUosQ0FBVyxpQkFBRUMsWUFBRixDQUFlLE9BQUtKLEtBQUwsQ0FBV1AsS0FBMUIsQ0FBWCxFQUE2QyxHQUE3QyxDQUFYO0FBQ0EsdUJBQUtILFFBQUwsQ0FBYztBQUNWQywrQkFBVyxLQUREO0FBRVZDLDZCQUFTLE9BQUtSLEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JDLE1BQWxCLENBQXlCO0FBQUEsK0JBQU9KLEdBQUdLLElBQUgsQ0FBUUMsSUFBSUMsSUFBWixDQUFQO0FBQUEscUJBQXpCO0FBRkMsaUJBQWQ7QUFJSCxhQVBELEVBT0csR0FQSDtBQVFIOzs7bUNBRVVYLEUsRUFBSTtBQUNYLGlCQUFLZCxLQUFMLENBQVcwQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixhQUFZYixFQUFwQztBQUNIOzs7aUNBRVE7QUFBQSx5QkFDaUMsS0FBS0UsS0FEdEM7QUFBQSxnQkFDR1QsU0FESCxVQUNHQSxTQURIO0FBQUEsZ0JBQ2NFLEtBRGQsVUFDY0EsS0FEZDtBQUFBLGdCQUNxQkQsT0FEckIsVUFDcUJBLE9BRHJCOztBQUVMSSxvQkFBUUMsR0FBUixDQUFZTCxPQUFaO0FBQ0EsbUJBQ0k7QUFDSSx5QkFBU0QsU0FEYjtBQUVJLGdDQUFnQixLQUFLSixrQkFGekI7QUFHSSxnQ0FBZ0IsS0FBS0Msa0JBSHpCO0FBSUkseUJBQVNJLFFBQVFvQixHQUFSLENBQVk7QUFBQSwyQkFBT0MsSUFBSUosSUFBWDtBQUFBLGlCQUFaLENBSmI7QUFLSSx1QkFBT2hCO0FBTFgsZUFNUSxLQUFLVCxLQU5iLEVBREo7QUFVSDs7Ozs7O2tCQXREZ0JELFMiLCJmaWxlIjoiMC43NmEyMDdmMzkwMGE3YjEyMDJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoLCBHcmlkLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50ID0gdGhpcy5yZXNldENvbXBvbmVudC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0ID0gdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzID0gdGhpcy5nb1RvQ2FudmFzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgIH1cblxuICAgIHJlc2V0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSwgcmVzdWx0czogW10sIHZhbHVlOiAnJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc3VsdFNlbGVjdChlLCB7IHJlc3VsdCB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzKHJlc3VsdC5pZClcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiByZXN1bHQubmFtZSB9KVxuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENoYW5nZShlLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSwgdmFsdWUgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChfLmVzY2FwZVJlZ0V4cCh0aGlzLnN0YXRlLnZhbHVlKSwgJ2knKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiB0aGlzLnByb3BzLnNvdXJjZS5maWx0ZXIob2JqID0+IHJlLnRlc3Qob2JqLm5hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgdmFsdWUsIHJlc3VsdHMgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgb25SZXN1bHRTZWxlY3Q9e3RoaXMuaGFuZGxlUmVzdWx0U2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzLm1hcChyZXMgPT4gcmVzLm5hbWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9