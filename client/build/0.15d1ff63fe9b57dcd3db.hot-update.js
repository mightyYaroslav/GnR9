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
                    [].concat(_toConsumableArray(Array.from(this.state.pages).keys())).map(function (i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlcy5qcyJdLCJuYW1lcyI6WyJQcm9maWxlcyIsInByb3BzIiwic3RhdGUiLCJwcm9maWxlcyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJsb2FkaW5nIiwiZXJyb3JMYWJlbCIsIm9uU3VibWl0IiwiYmluZCIsInBhZ2VDaGFuZ2VkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwic3RhdHVzVGV4dCIsInVzZXJzIiwiY2F0Y2giLCJlcnIiLCJlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdlIiwidGFyZ2V0IiwibmFtZSIsInAiLCJlbWFpbCIsImZpbHRlciIsInByb2ZpbGUiLCJpZCIsIm1hcCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBRWpCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLEVBREQ7QUFFVEMseUJBQWEsQ0FGSjtBQUdUQyxtQkFBTyxDQUhFO0FBSVRDLHFCQUFTLElBSkE7QUFLVEMsd0JBQVk7QUFMSCxTQUFiO0FBT0EsY0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBVmU7QUFXbEI7Ozs7NkNBRW9CO0FBQUE7O0FBQ2pCRSxrQkFBTSxXQUFOLEVBQW1CO0FBQ2ZDLHdCQUFRLE1BRE87QUFFZkMseUJBQVM7QUFDTCxvQ0FBZ0Isa0JBRFg7QUFFTCxpREFBMkIsZUFBS0MsUUFBTDtBQUZ0QjtB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S0FBTjtBQUFBLGtEQUFZLE1BQUssTUFBakIsRUFBd0IsT0FBT0QsRUFBRUQsSUFBakM7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURKO0FBQ3NCQyxrREFBRUQ7QUFEeEI7QUFESjtBQU5KO0FBTEo7QUFESiw2QkFEcUI7QUFBQSx5QkFBeEI7QUFGTDtBQUpKLGlCQUZKO0FBZ0NJO0FBQUE7QUFBQSxzQkFBTSxnQkFBTjtBQUNLLGlEQUFJTyxNQUFNQyxJQUFOLENBQVcsS0FBS3BDLEtBQUwsQ0FBV0csS0FBdEIsRUFBNkJrQyxJQUE3QixFQUFKLEdBQXlDSCxHQUF6QyxDQUE2QztBQUFBLCtCQUMxQyxvREFBTSxJQUFOLElBQVcsTUFBTUksSUFBRSxDQUFuQixFQUFzQixRQUFRLE9BQUt0QyxLQUFMLENBQVdFLFdBQVgsS0FBMkJvQyxJQUFJLENBQTdELEVBQWdFLFNBQVMsT0FBSzlCLFdBQTlFLEdBRDBDO0FBQUEscUJBQTdDO0FBREw7QUFoQ0osYUFESjtBQXdDSDs7Ozs7O2tCQTVJZ0JWLFEiLCJmaWxlIjoiMC4xNWQxZmY2M2ZlOWI1N2RjZDNkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERpbW1lciwgRm9ybSwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgTG9hZGVyLCBNZW51LCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZmlsZXM6IFtdLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzIClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvZmlsZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVzOiBqc29uLnVzZXJzLCBsb2FkaW5nOiBmYWxzZSwgcGFnZXM6IGpzb24ucGFnZXMgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBmZXRjaCgnL3Byb2ZpbGVzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwYWdlOiBlLnRhcmdldC5uYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UsIHBhZ2VzOiBqc29uLnBhZ2VzLCBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIG9uU3VibWl0KHApIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlcy9iYW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBwLmVtYWlsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IHRoaXMuc3RhdGUucHJvZmlsZXMuZmlsdGVyKHByb2ZpbGUgPT4gcHJvZmlsZS5pZCAhPT0gcC5pZClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvZmlsZXMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoKSA9PiB0aGlzLm9uU3VibWl0KHApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBjb2xvcj0ncmVkJz5CYW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSd1c2VyJyBzaXplPSdsYXJnZScgdmVydGljYWxBbGlnbj0nbWlkZGxlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBhcz0nYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIG5hbWU9J2VtYWlsJyB2YWx1ZT17cC5lbWFpbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5FbWFpbDogPC9iPntwLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5EZXNjcmlwdGlvbiBhcz0nYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIG5hbWU9J25hbWUnIHZhbHVlPXtwLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VXNlcm5hbWU6IDwvYj57cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDxNZW51IHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnBhZ2VzKS5rZXlzKCldLm1hcChpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IGkgKyAxfSBvbkNsaWNrPXt0aGlzLnBhZ2VDaGFuZ2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=