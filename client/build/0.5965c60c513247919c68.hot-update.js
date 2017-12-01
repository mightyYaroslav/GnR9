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
                console.log(JSON.stringify(json));
                _this2.setState({ profiles: json.users, loading: false, pages: json.pages, currentPage: json.currentPage });
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
        value: function pageChanged(page) {
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
                    page: page
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
                console.log(JSON.stringify(json));
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
                    { pagination: true, verticalAlign: 'middle' },
                    [].concat(_toConsumableArray(Array(this.state.pages).keys())).map(function (i) {
                        return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: _this5.state.currentPage === i + 1, onClick: function onClick() {
                                return _this5.pageChanged(i + 1);
                            } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlcy5qcyJdLCJuYW1lcyI6WyJQcm9maWxlcyIsInByb3BzIiwic3RhdGUiLCJwcm9maWxlcyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJsb2FkaW5nIiwiZXJyb3JMYWJlbCIsIm9uU3VibWl0IiwiYmluZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImdldFRva2VuIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzZXRTdGF0ZSIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJzIiwiY2F0Y2giLCJlcnIiLCJwYWdlIiwiYm9keSIsInAiLCJlbWFpbCIsImZpbHRlciIsInByb2ZpbGUiLCJpZCIsIm1hcCIsIm5hbWUiLCJBcnJheSIsImtleXMiLCJpIiwicGFnZUNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFFakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVUsRUFERDtBQUVUQyx5QkFBYSxDQUZKO0FBR1RDLG1CQUFPLENBSEU7QUFJVEMscUJBQVMsSUFKQTtBQUtUQyx3QkFBWTtBQUxILFNBQWI7QUFPQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQVRlO0FBVWxCOzs7OzZDQUVvQjtBQUFBOztBQUNqQkMsa0JBQU0sV0FBTixFQUFtQjtBQUNmQyx3QkFBUSxNQURPO0FBRWZDLHlCQUFTO0FBQ0wsb0NBQWdCLGtCQURYO0FBRUwsaURBQTJCLGVBQUtDLFFBQUw7QUFGdEI7QUFGTSxhQUFuQixFQU9LQyxJQVBMLENBT1UsZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtB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TSxXQUFOO0FBQUEsOENBQWtCLElBQUcsR0FBckI7QUFDSTtBQUFBLHNFQUFNLEtBQU47QUFBQSxrREFBWSxNQUFLLE1BQWpCLEVBQXdCLE9BQU9ELEVBQUVNLElBQWpDO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFESjtBQUNzQk4sa0RBQUVNO0FBRHhCO0FBREo7QUFOSjtBQUxKO0FBREosNkJBRHFCO0FBQUEseUJBQXhCO0FBRkw7QUFKSixpQkFGSjtBQWdDSTtBQUFBO0FBQUEsc0JBQU0sZ0JBQU4sRUFBaUIsZUFBYyxRQUEvQjtBQUNLLGlEQUFJQyxNQUFNLEtBQUtsQyxLQUFMLENBQVdHLEtBQWpCLEVBQXdCZ0MsSUFBeEIsRUFBSixHQUFvQ0gsR0FBcEMsQ0FBd0M7QUFBQSwrQkFDckMsb0RBQU0sSUFBTixJQUFXLE1BQU1JLElBQUUsQ0FBbkIsRUFBc0IsUUFBUSxPQUFLcEMsS0FBTCxDQUFXRSxXQUFYLEtBQTJCa0MsSUFBSSxDQUE3RCxFQUFnRSxTQUFTO0FBQUEsdUNBQU0sT0FBS0MsV0FBTCxDQUFpQkQsSUFBRSxDQUFuQixDQUFOO0FBQUEsNkJBQXpFLEdBRHFDO0FBQUEscUJBQXhDO0FBREw7QUFoQ0osYUFESjtBQXdDSDs7Ozs7O2tCQTdJZ0J0QyxRIiwiZmlsZSI6IjAuNTk2NWM2MGM1MTMyNDc5MTljNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEaW1tZXIsIEZvcm0sIEdyaWQsIEltYWdlLCBJbnB1dCwgTGFiZWwsIExpc3QsIExvYWRlciwgTWVudSwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2ZpbGVzOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICAgcGFnZXM6IDAsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2ZpbGVzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24pKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UsIHBhZ2VzOiBqc29uLnBhZ2VzLCBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGZldGNoKCcvcHJvZmlsZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVzOiBqc29uLnVzZXJzLCBsb2FkaW5nOiBmYWxzZSwgcGFnZXM6IGpzb24ucGFnZXMsIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgb25TdWJtaXQocCkge1xuICAgICAgICBmZXRjaCgnL3Byb2ZpbGVzL2JhbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHAuZW1haWxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogdGhpcy5zdGF0ZS5wcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlLmlkICE9PSBwLmlkKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9maWxlcy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eygpID0+IHRoaXMub25TdWJtaXQocCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNvbG9yPSdyZWQnPkJhbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9J3VzZXInIHNpemU9J2xhcmdlJyB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGFzPSdhJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgbmFtZT0nZW1haWwnIHZhbHVlPXtwLmVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkVtYWlsOiA8L2I+e3AuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkRlc2NyaXB0aW9uIGFzPSdhJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgbmFtZT0nbmFtZScgdmFsdWU9e3AubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5Vc2VybmFtZTogPC9iPntwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE1lbnUgcGFnaW5hdGlvbiB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRoaXMuc3RhdGUucGFnZXMpLmtleXMoKV0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPXtpKzF9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvZmlsZXMuanMiXSwic291cmNlUm9vdCI6IiJ9