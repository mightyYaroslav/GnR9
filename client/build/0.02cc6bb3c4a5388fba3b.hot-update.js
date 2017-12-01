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
                onResultSelect: this.props.onResultSelect,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0VGltZW91dCIsInN0YXRlIiwibGVuZ3RoIiwicmUiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJzb3VyY2UiLCJmaWx0ZXIiLCJ0ZXN0Iiwib2JqIiwibmFtZSIsImhpc3RvcnkiLCJwdXNoIiwib25SZXN1bHRTZWxlY3QiLCJtYXAiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUVqQix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUVmLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRSxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLE9BQWxCO0FBTGU7QUFNbEI7Ozs7NkNBRW9CO0FBQ2pCLGlCQUFLRCxjQUFMO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixpQkFBS0ssUUFBTCxDQUFjLEVBQUVDLFdBQVcsS0FBYixFQUFvQkMsU0FBUyxFQUE3QixFQUFpQ0MsT0FBTyxFQUF4QyxFQUFkO0FBQ0g7OzsyQ0FFa0JDLEMsUUFBZTtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsaUJBQUtOLFVBQUwsQ0FBZ0JNLE9BQU9HLEVBQXZCO0FBQ0E7QUFDSDs7OzJDQUVrQkosQyxTQUFjO0FBQUE7O0FBQUEsZ0JBQVRELEtBQVMsU0FBVEEsS0FBUzs7QUFDN0IsaUJBQUtILFFBQUwsQ0FBYyxFQUFFQyxXQUFXLElBQWIsRUFBbUJFLFlBQW5CLEVBQWQ7O0FBRUFNLHVCQUFXLFlBQU07QUFDYixvQkFBSSxPQUFLQyxLQUFMLENBQVdQLEtBQVgsQ0FBaUJRLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDLE9BQU8sT0FBS2hCLGNBQUwsRUFBUDtBQUNqQyxvQkFBTWlCLEtBQUssSUFBSUMsTUFBSixDQUFXLGlCQUFFQyxZQUFGLENBQWUsT0FBS0osS0FBTCxDQUFXUCxLQUExQixDQUFYLEVBQTZDLEdBQTdDLENBQVg7QUFDQSx1QkFBS0gsUUFBTCxDQUFjO0FBQ1ZDLCtCQUFXLEtBREQ7QUFFVkMsNkJBQVMsT0FBS1IsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwrQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJQyxJQUFaLENBQVA7QUFBQSxxQkFBekI7QUFGQyxpQkFBZDtBQUlILGFBUEQsRUFPRyxHQVBIO0FBUUg7OzttQ0FFVVgsRSxFQUFJO0FBQ1gsaUJBQUtkLEtBQUwsQ0FBVzBCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLGFBQVliLEVBQXBDO0FBQ0g7OztpQ0FFUTtBQUFBLHlCQUNpQyxLQUFLRSxLQUR0QztBQUFBLGdCQUNHVCxTQURILFVBQ0dBLFNBREg7QUFBQSxnQkFDY0UsS0FEZCxVQUNjQSxLQURkO0FBQUEsZ0JBQ3FCRCxPQURyQixVQUNxQkEsT0FEckI7O0FBRUwsbUJBQ0k7QUFDSSx5QkFBU0QsU0FEYjtBQUVJLGdDQUFnQixLQUFLUCxLQUFMLENBQVc0QixjQUYvQjtBQUdJLGdDQUFnQixLQUFLeEIsa0JBSHpCO0FBSUkseUJBQVNJLFFBQVFxQixHQUFSLENBQVk7QUFBQSwyQkFBT0MsSUFBSUwsSUFBWDtBQUFBLGlCQUFaLENBSmI7QUFLSSx1QkFBT2hCO0FBTFgsZUFNUSxLQUFLVCxLQU5iLEVBREo7QUFVSDs7Ozs7O2tCQXJEZ0JELFMiLCJmaWxlIjoiMC4wMmNjNmJiM2M0YTUzODhmYmEzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoLCBHcmlkLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50ID0gdGhpcy5yZXNldENvbXBvbmVudC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0ID0gdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3QuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzID0gdGhpcy5nb1RvQ2FudmFzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgIH1cblxuICAgIHJlc2V0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSwgcmVzdWx0czogW10sIHZhbHVlOiAnJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc3VsdFNlbGVjdChlLCB7IHJlc3VsdCB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzKHJlc3VsdC5pZClcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiByZXN1bHQubmFtZSB9KVxuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENoYW5nZShlLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSwgdmFsdWUgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChfLmVzY2FwZVJlZ0V4cCh0aGlzLnN0YXRlLnZhbHVlKSwgJ2knKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiB0aGlzLnByb3BzLnNvdXJjZS5maWx0ZXIob2JqID0+IHJlLnRlc3Qob2JqLm5hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgdmFsdWUsIHJlc3VsdHMgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgb25SZXN1bHRTZWxlY3Q9e3RoaXMucHJvcHMub25SZXN1bHRTZWxlY3R9XG4gICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHMubWFwKHJlcyA9PiByZXMubmFtZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=