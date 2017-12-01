webpackHotUpdate(0,{

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(73);

var _navbar2 = _interopRequireDefault(_navbar);

var _Auth = __webpack_require__(100);

var _Auth2 = _interopRequireDefault(_Auth);

var _Login = __webpack_require__(473);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                _this2.setState({ profiles: json.users, loading: false });
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
        key: 'onSubmit',
        value: function onSubmit(p) {
            var _this3 = this;

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
                if (res.status === 200) _this3.setState({
                    profiles: profiles
                });else _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
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
        key: 'render',
        value: function render() {
            var _this4 = this;

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
                                            return _this4.onSubmit(p);
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
                )
            );
        }
    }]);

    return Profiles;
}(_react.Component);

exports.default = Profiles;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlcy5qcyJdLCJuYW1lcyI6WyJQcm9maWxlcyIsInByb3BzIiwic3RhdGUiLCJwcm9maWxlcyIsImxvYWRpbmciLCJlcnJvckxhYmVsIiwib25TdWJtaXQiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwic3RhdHVzVGV4dCIsInVzZXJzIiwiY2F0Y2giLCJlcnIiLCJwIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm1hcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBRWpCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLEVBREQ7QUFFVEMscUJBQVMsSUFGQTtBQUdUQyx3QkFBWTtBQUhILFNBQWI7QUFLQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQVBlO0FBUWxCOzs7OzZDQUVvQjtBQUFBOztBQUNqQkMsa0JBQU0sV0FBTixFQUFtQjtBQUNmQyx3QkFBUSxNQURPO0FBRWZDLHlCQUFTO0FBQ0wsb0NBQWdCLGtCQURYO0FBRUwsaURBQTJCLGVBQUtDLFFBQUw7QUFGdEI7QUFGTSxhQUFuQixFQU9LQyxJQVBMLENBT1UsZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDSSxPQUFPRCxJQUFJRSxJQUFKLEVBQVAsQ0FESixLQUdJLE9BQUtDLFFBQUwsQ0FBYztBQUNWWCxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CUSw0QkFBSUk7QUFBeEIscUJBREY7QUFFVmIsNkJBQVM7QUFGQyxpQkFBZDtBQUlQLGFBZkwsRUFnQktRLElBaEJMLENBZ0JVLGdCQUFRO0FBQ1YsdUJBQUtJLFFBQUwsQ0FBYyxFQUFFYixVQUFVWSxLQUFLRyxLQUFqQixFQUF3QmQsU0FBUyxLQUFqQyxFQUFkO0FBQ0gsYUFsQkwsRUFtQktlLEtBbkJMLENBbUJXO0FBQUEsdUJBQU8sT0FBS0gsUUFBTCxDQUFjO0FBQ3hCWCxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CZTtBQUFwQixxQkFEWTtBQUV4QmhCLDZCQUFTO0FBRmUsaUJBQWQsQ0FBUDtBQUFBLGFBbkJYO0FBdUJIOzs7aUNBRVFpQixDLEVBQUc7QUFBQTs7QUFDUmIsa0JBQU0sZUFBTixFQUF1QjtBQUNuQkMsd0JBQVEsTUFEVztBQUVuQkMseUJBQVM7QUFDTCxvQ0FBZ0Isa0JBRFg7QUFFTCxpREFBMkIsZUFBS0MsUUFBTDtBQUZ0QixpQkFGVTtBQU1uQlcsc0JBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNqQkMsMkJBQU9KLEVBQUVJO0FBRFEsaUJBQWY7QUFOYSxhQUF2QixFQVVLYixJQVZMLENBVVUsZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDSSxPQUFLRSxRQUFMLENBQWM7QUFDVmI7QUFEVSxpQkFBZCxFQURKLEtBS0ksT0FBS2EsUUFBTCxDQUFjO0FBQ1ZYLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JRLDRCQUFJSTtBQUF4QixxQkFERjtBQUVWYiw2QkFBUztBQUZDLGlCQUFkO0FBSVAsYUFwQkwsRUFxQktlLEtBckJMLENBcUJXO0FBQUEsdUJBQU8sT0FBS0gsUUFBTCxDQUFjO0FBQ3hCWCxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CZTtBQUFwQixxQkFEWTtBQUV4QmhCLDZCQUFTO0FBRmUsaUJBQWQsQ0FBUDtBQUFBLGFBckJYO0FBeUJIOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSxxRUFESjtBQUVJO0FBQUE7QUFBQSxzQkFBUyxZQUFUO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLFFBQVEsS0FBS0YsS0FBTCxDQUFXRSxPQUEzQixFQUFvQyxjQUFwQztBQUNJO0FBREoscUJBREo7QUFJSTtBQUFBO0FBQUE7QUFDSyw2QkFBS0YsS0FBTCxDQUFXRyxVQURoQjtBQUVLLDZCQUFLSCxLQUFMLENBQVdDLFFBQVgsQ0FBb0J1QixHQUFwQixDQUF3QjtBQUFBLG1DQUNyQjtBQUFBLHNEQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSxzQ0FBTSxVQUFVO0FBQUEsbURBQU0sT0FBS3BCLFFBQUwsQ0FBY2UsQ0FBZCxDQUFOO0FBQUEseUNBQWhCO0FBQ0k7QUFBQSw4REFBTSxPQUFOO0FBQUEsMENBQWMsU0FBUSxPQUF0QjtBQUNJO0FBQUE7QUFBQSw4Q0FBUSxNQUFLLFFBQWIsRUFBc0IsT0FBTSxLQUE1QjtBQUFBO0FBQUE7QUFESixxQ0FESjtBQUlJLHdGQUFNLElBQU4sSUFBVyxNQUFLLE1BQWhCLEVBQXVCLE1BQUssT0FBNUIsRUFBb0MsZUFBYyxRQUFsRCxHQUpKO0FBS0k7QUFBQSw4REFBTSxPQUFOO0FBQUE7QUFDSTtBQUFBLGtFQUFNLE1BQU47QUFBQSw4Q0FBYSxJQUFHLEdBQWhCO0FBQ0k7QUFBQSxzRUFBTSxLQUFOO0FBQUEsa0RBQVksTUFBSyxPQUFqQixFQUF5QixPQUFPQSxFQUFFSSxLQUFsQztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREo7QUFDbUJKLGtEQUFFSTtBQURyQjtBQURKLHlDQURKO0FBTUk7QUFBQSxrRUFBTSxXQUFOO0FBQUEsOENBQWtCLElBQUcsR0FBckI7QUFDSTtBQUFBLHNFQUFNLEtBQU47QUFBQSxrREFBWSxNQUFLLE1BQWpCLEVBQXdCLE9BQU9KLEVBQUVNLElBQWpDO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFESjtBQUNzQk4sa0RBQUVNO0FBRHhCO0FBREo7QUFOSjtBQUxKO0FBREosNkJBRHFCO0FBQUEseUJBQXhCO0FBRkw7QUFKSjtBQUZKLGFBREo7QUFtQ0g7Ozs7OztrQkF0R2dCM0IsUSIsImZpbGUiOiIwLjEyMmU4ZTQxNjllZDExNTllMGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0J1dHRvbiwgRGltbWVyLCBGb3JtLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBMb2FkZXIsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9maWxlczogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2ZpbGVzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBvblN1Ym1pdChwKSB7XG4gICAgICAgIGZldGNoKCcvcHJvZmlsZXMvYmFuJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogcC5lbWFpbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2ZpbGVzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KCkgPT4gdGhpcy5vblN1Ym1pdChwKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgY29sb3I9J3JlZCc+QmFuPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0ndXNlcicgc2l6ZT0nbGFyZ2UnIHZlcnRpY2FsQWxpZ249J21pZGRsZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgYXM9J2EnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBuYW1lPSdlbWFpbCcgdmFsdWU9e3AuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+RW1haWw6IDwvYj57cC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuRGVzY3JpcHRpb24gYXM9J2EnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBuYW1lPSduYW1lJyB2YWx1ZT17cC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlVzZXJuYW1lOiA8L2I+e3AubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb2ZpbGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==