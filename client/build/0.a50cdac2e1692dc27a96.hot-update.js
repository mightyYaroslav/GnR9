webpackHotUpdate(0,{

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(63);

var _navbar2 = _interopRequireDefault(_navbar);

var _Auth = __webpack_require__(73);

var _Auth2 = _interopRequireDefault(_Auth);

var _Login = __webpack_require__(477);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profiles = function (_Component) {
    _inherits(Profiles, _Component);

    function Profiles(props) {
        _classCallCheck(this, Profiles);

        var _this = _possibleConstructorReturn(this, (Profiles.__proto__ || Object.getPrototypeOf(Profiles)).call(this, props));

        _this.state = {
            profiles: [],
            currentPage: 0,
            pages: 0,
            loading: true,
            errorLabel: ''
        };
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.pageChanged = _this.pageChanged.bind(_this);
        return _this;
    }

    _createClass(Profiles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            fetch('/profiles', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                _this2.setState({ profiles: json.users, loading: false, pages: json.pages });
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'pageChanged',
        value: function pageChanged(e) {
            var _this3 = this;

            this.setState({
                loading: true
            });
            fetch('/profiles', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    page: e.target.name
                })
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                _this3.setState({ profiles: json.users, loading: false, pages: json.pages, currentPage: json.currentPage });
            }).catch(function (err) {
                return _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(p) {
            var _this4 = this;

            fetch('/profiles/ban', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    email: p.email
                })
            }).then(function (res) {
                if (res.status === 200) _this4.setState({
                    profiles: _this4.state.profiles.filter(function (profile) {
                        return profile.id !== p.id;
                    })
                });else _this4.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    )
                });
            }).catch(function (err) {
                return _this4.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    )
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Segment,
                    { padded: true },
                    _react2.default.createElement(
                        _semanticUiReact.Dimmer,
                        { active: this.state.loading, inverted: true },
                        _react2.default.createElement(_semanticUiReact.Loader, null)
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.List,
                        null,
                        this.state.errorLabel,
                        this.state.profiles.map(function (p) {
                            return _react2.default.createElement(
                                _semanticUiReact.List.Item,
                                null,
                                _react2.default.createElement(
                                    _semanticUiReact.Form,
                                    { onSubmit: function onSubmit() {
                                            return _this5.onSubmit(p);
                                        } },
                                    _react2.default.createElement(
                                        _semanticUiReact.List.Content,
                                        { floated: 'right' },
                                        _react2.default.createElement(
                                            _semanticUiReact.Button,
                                            { type: 'submit', color: 'red' },
                                            'Ban'
                                        )
                                    ),
                                    _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'user', size: 'large', verticalAlign: 'middle' }),
                                    _react2.default.createElement(
                                        _semanticUiReact.List.Content,
                                        null,
                                        _react2.default.createElement(
                                            _semanticUiReact.List.Header,
                                            { as: 'a' },
                                            _react2.default.createElement(
                                                _semanticUiReact.Form.Field,
                                                { name: 'email', value: p.email },
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    'Email: '
                                                ),
                                                p.email
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _semanticUiReact.List.Description,
                                            { as: 'a' },
                                            _react2.default.createElement(
                                                _semanticUiReact.Form.Field,
                                                { name: 'name', value: p.name },
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    'Username: '
                                                ),
                                                p.name
                                            )
                                        )
                                    )
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Menu,
                    { pagination: true },
                    [].concat(_toConsumableArray(Array(this.state.pages).keys())).map(function (i) {
                        return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: _this5.state.currentPage === i + 1, onClick: _this5.pageChanged });
                    })
                )
            );
        }
    }]);

    return Profiles;
}(_react.Component);

exports.default = Profiles;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlcy5qcyJdLCJuYW1lcyI6WyJQcm9maWxlcyIsInByb3BzIiwic3RhdGUiLCJwcm9maWxlcyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJsb2FkaW5nIiwiZXJyb3JMYWJlbCIsIm9uU3VibWl0IiwiYmluZCIsInBhZ2VDaGFuZ2VkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwic3RhdHVzVGV4dCIsInVzZXJzIiwiY2F0Y2giLCJlcnIiLCJlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdlIiwidGFyZ2V0IiwibmFtZSIsInAiLCJlbWFpbCIsImZpbHRlciIsInByb2ZpbGUiLCJpZCIsIm1hcCIsIkFycmF5Iiwia2V5cyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFFakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVUsRUFERDtBQUVUQyx5QkFBYSxDQUZKO0FBR1RDLG1CQUFPLENBSEU7QUFJVEMscUJBQVMsSUFKQTtBQUtUQyx3QkFBWTtBQUxILFNBQWI7QUFPQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFWZTtBQVdsQjs7Ozs2Q0FFb0I7QUFBQTs7QUFDakJFLGtCQUFNLFdBQU4sRUFBbUI7QUFDZkMsd0JBQVEsTUFETztBQUVmQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLGlEQUEyQixlQUFLQyxRQUFMO0FBRnRCO0FBRk0sYUFB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QUEsa0RBQVksTUFBSyxNQUFqQixFQUF3QixPQUFPRCxFQUFFRCxJQUFqQztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREo7QUFDc0JDLGtEQUFFRDtBQUR4QjtBQURKO0FBTko7QUFMSjtBQURKLDZCQURxQjtBQUFBLHlCQUF4QjtBQUZMO0FBSkosaUJBRko7QUFnQ0k7QUFBQTtBQUFBLHNCQUFNLGdCQUFOO0FBQ0ssaURBQUlPLE1BQU0sS0FBS25DLEtBQUwsQ0FBV0csS0FBakIsRUFBd0JpQyxJQUF4QixFQUFKLEdBQW9DRixHQUFwQyxDQUF3QztBQUFBLCtCQUNyQyxvREFBTSxJQUFOLElBQVcsTUFBTUcsSUFBRSxDQUFuQixFQUFzQixRQUFRLE9BQUtyQyxLQUFMLENBQVdFLFdBQVgsS0FBMkJtQyxJQUFJLENBQTdELEVBQWdFLFNBQVMsT0FBSzdCLFdBQTlFLEdBRHFDO0FBQUEscUJBQXhDO0FBREw7QUFoQ0osYUFESjtBQXdDSDs7Ozs7O2tCQTVJZ0JWLFEiLCJmaWxlIjoiMC5hNTBjZGFjMmUxNjkyZGMyN2E5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERpbW1lciwgRm9ybSwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgTG9hZGVyLCBNZW51LCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZmlsZXM6IFtdLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzIClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvZmlsZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVzOiBqc29uLnVzZXJzLCBsb2FkaW5nOiBmYWxzZSwgcGFnZXM6IGpzb24ucGFnZXMgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBmZXRjaCgnL3Byb2ZpbGVzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwYWdlOiBlLnRhcmdldC5uYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UsIHBhZ2VzOiBqc29uLnBhZ2VzLCBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIG9uU3VibWl0KHApIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlcy9iYW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBwLmVtYWlsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IHRoaXMuc3RhdGUucHJvZmlsZXMuZmlsdGVyKHByb2ZpbGUgPT4gcHJvZmlsZS5pZCAhPT0gcC5pZClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvZmlsZXMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoKSA9PiB0aGlzLm9uU3VibWl0KHApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBjb2xvcj0ncmVkJz5CYW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSd1c2VyJyBzaXplPSdsYXJnZScgdmVydGljYWxBbGlnbj0nbWlkZGxlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBhcz0nYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIG5hbWU9J2VtYWlsJyB2YWx1ZT17cC5lbWFpbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5FbWFpbDogPC9iPntwLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5EZXNjcmlwdGlvbiBhcz0nYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIG5hbWU9J25hbWUnIHZhbHVlPXtwLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VXNlcm5hbWU6IDwvYj57cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDxNZW51IHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkodGhpcy5zdGF0ZS5wYWdlcykua2V5cygpXS5tYXAoaSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9e2krMX0gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBpICsgMX0gb25DbGljaz17dGhpcy5wYWdlQ2hhbmdlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvZmlsZXMuanMiXSwic291cmNlUm9vdCI6IiJ9