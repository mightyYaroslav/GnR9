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
            goToCanvas(result.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJyZXNldENvbXBvbmVudCIsImJpbmQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJnb1RvQ2FudmFzIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwidmFsdWUiLCJlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImxlbmd0aCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwic291cmNlIiwiZmlsdGVyIiwidGVzdCIsIm9iaiIsImhpc3RvcnkiLCJwdXNoIiwib25SZXN1bHRTZWxlY3QiLCJtYXAiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUVqQix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUVmLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRSxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsT0FBMUI7QUFDQSxjQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLE9BQWxCO0FBTGU7QUFNbEI7Ozs7NkNBRW9CO0FBQ2pCLGlCQUFLRCxjQUFMO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixpQkFBS0ssUUFBTCxDQUFjLEVBQUVDLFdBQVcsS0FBYixFQUFvQkMsU0FBUyxFQUE3QixFQUFpQ0MsT0FBTyxFQUF4QyxFQUFkO0FBQ0g7OzsyQ0FFa0JDLEMsUUFBZTtBQUFBLGdCQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzlCQyxvQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0FOLHVCQUFXTSxPQUFPRyxFQUFsQjtBQUNBLGlCQUFLUixRQUFMLENBQWMsRUFBRUcsT0FBT0UsT0FBT0ksSUFBaEIsRUFBZDtBQUNIOzs7MkNBRWtCTCxDLFNBQWM7QUFBQTs7QUFBQSxnQkFBVEQsS0FBUyxTQUFUQSxLQUFTOztBQUM3QixpQkFBS0gsUUFBTCxDQUFjLEVBQUVDLFdBQVcsSUFBYixFQUFtQkUsWUFBbkIsRUFBZDs7QUFFQU8sdUJBQVcsWUFBTTtBQUNiLG9CQUFJLE9BQUtDLEtBQUwsQ0FBV1IsS0FBWCxDQUFpQlMsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsT0FBTyxPQUFLakIsY0FBTCxFQUFQO0FBQ2pDLG9CQUFNa0IsS0FBSyxJQUFJQyxNQUFKLENBQVcsaUJBQUVDLFlBQUYsQ0FBZSxPQUFLSixLQUFMLENBQVdSLEtBQTFCLENBQVgsRUFBNkMsR0FBN0MsQ0FBWDtBQUNBLHVCQUFLSCxRQUFMLENBQWM7QUFDVkMsK0JBQVcsS0FERDtBQUVWQyw2QkFBUyxPQUFLUixLQUFMLENBQVdzQixNQUFYLENBQWtCQyxNQUFsQixDQUF5QjtBQUFBLCtCQUFPSixHQUFHSyxJQUFILENBQVFDLElBQUlWLElBQVosQ0FBUDtBQUFBLHFCQUF6QjtBQUZDLGlCQUFkO0FBSUgsYUFQRCxFQU9HLEdBUEg7QUFRSDs7O21DQUVVRCxFLEVBQUk7QUFDWCxpQkFBS2QsS0FBTCxDQUFXMEIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsYUFBWWIsRUFBcEM7QUFDSDs7O2lDQUVRO0FBQUEseUJBQ2lDLEtBQUtHLEtBRHRDO0FBQUEsZ0JBQ0dWLFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjRSxLQURkLFVBQ2NBLEtBRGQ7QUFBQSxnQkFDcUJELE9BRHJCLFVBQ3FCQSxPQURyQjs7QUFFTCxtQkFDSTtBQUNJLHlCQUFTRCxTQURiO0FBRUksZ0NBQWdCLEtBQUtQLEtBQUwsQ0FBVzRCLGNBRi9CO0FBR0ksZ0NBQWdCLEtBQUt4QixrQkFIekI7QUFJSSx5QkFBU0ksUUFBUXFCLEdBQVIsQ0FBWTtBQUFBLDJCQUFPQyxJQUFJZixJQUFYO0FBQUEsaUJBQVosQ0FKYjtBQUtJLHVCQUFPTjtBQUxYLGVBTVEsS0FBS1QsS0FOYixFQURKO0FBVUg7Ozs7OztrQkFyRGdCRCxTIiwiZmlsZSI6IjAuZWJiNTRiMDg2ZjM3ZWQ5YWExM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaCwgR3JpZCwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCA9IHRoaXMucmVzZXRDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyA9IHRoaXMuZ29Ub0NhbnZhcy5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICB9XG5cbiAgICByZXNldENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3VsdHM6IFtdLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXN1bHRTZWxlY3QoZSwgeyByZXN1bHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIGdvVG9DYW52YXMocmVzdWx0LmlkKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHJlc3VsdC5uYW1lIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUsIHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlLCB2YWx1ZSB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKF8uZXNjYXBlUmVnRXhwKHRoaXMuc3RhdGUudmFsdWUpLCAnaScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmoubmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgZ29Ub0NhbnZhcyhpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB2YWx1ZSwgcmVzdWx0cyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBvblJlc3VsdFNlbGVjdD17dGhpcy5wcm9wcy5vblJlc3VsdFNlbGVjdH1cbiAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVzdWx0cz17cmVzdWx0cy5tYXAocmVzID0+IHJlcy5uYW1lKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==