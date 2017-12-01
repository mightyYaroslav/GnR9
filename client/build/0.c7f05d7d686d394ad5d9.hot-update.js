webpackHotUpdate(0,{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _Auth = __webpack_require__(73);

var _Auth2 = _interopRequireDefault(_Auth);

var _reactRouterDom = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(NavBar, _Component);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this.state = { activeItem: 'home' };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: 'handleItemClick',
        value: function handleItemClick(e) {
            this.setState({ activeItem: e.target.name });
        }
    }, {
        key: 'render',
        value: function render() {
            var activeItem = this.state.activeItem;

            return _react2.default.createElement(
                _semanticUiReact.Menu,
                { size: 'large', borderless: true },
                _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { as: _reactRouterDom.NavLink, to: '/', name: 'home', active: activeItem === 'home' },
                    'Home'
                ),
                _Auth2.default.isAuthenticated() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { as: _reactRouterDom.NavLink, to: '/maps', name: 'maps', active: activeItem === 'maps' },
                    'Maps'
                ),
                _Auth2.default.isAdmin() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { as: _reactRouterDom.NavLink, to: '/profiles', name: 'profiles', active: activeItem === 'profiles' },
                    'Profiles'
                ),
                _react2.default.createElement(
                    _semanticUiReact.Menu.Menu,
                    { position: 'right' },
                    _Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Dropdown,
                            { text: _Auth2.default.getUser().name, icon: 'user', floating: true, labeled: true, button: true, className: 'icon' },
                            _react2.default.createElement(
                                _semanticUiReact.Dropdown.Menu,
                                null,
                                _react2.default.createElement(
                                    _semanticUiReact.Dropdown.Item,
                                    { as: _reactRouterDom.NavLink, to: '/profile' },
                                    'My profile'
                                ),
                                _react2.default.createElement(
                                    _semanticUiReact.Dropdown.Item,
                                    null,
                                    'Settings'
                                ),
                                _react2.default.createElement(_semanticUiReact.Dropdown.Divider, null),
                                _react2.default.createElement(
                                    _semanticUiReact.Dropdown.Item,
                                    { as: _reactRouterDom.NavLink, to: '/logout' },
                                    'Log out'
                                )
                            )
                        )
                    ),
                    !_Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        { as: _reactRouterDom.NavLink, to: '/login' },
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            null,
                            'Log In'
                        )
                    ),
                    !_Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        { as: _reactRouterDom.NavLink, to: '/registration' },
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { primary: true },
                            'Sign Up'
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLEVBT1E7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUVKLFlBQVlHLEVBQUVFLE1BQUYsQ0FBU0MsSUFBdkIsRUFBZDtBQUNIO0FBVFU7QUFBQTtBQUFBLGlDQVdGO0FBQUEsZ0JBQ0VOLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsR0FBM0IsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxRQUFRQSxlQUFlLE1BQWxFO0FBQUE7QUFBQSxpQkFESjtBQUlLLCtCQUFLTyxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxPQUEzQixFQUFtQyxNQUFLLE1BQXhDLEVBQStDLFFBQVFQLGVBQWUsTUFBdEU7QUFBQTtBQUFBLGlCQUxKO0FBU0ssK0JBQUtRLE9BQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLFdBQTNCLEVBQXVDLE1BQUssVUFBNUMsRUFBdUQsUUFBUVIsZUFBZSxVQUE5RTtBQUFBO0FBQUEsaUJBVko7QUFlSTtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxVQUFTLE9BQXBCO0FBQ0ssbUNBQUtPLGVBQUwsTUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBVSxNQUFNLGVBQUtFLE9BQUwsR0FBZUgsSUFBL0IsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxjQUFqRCxFQUEwRCxhQUExRCxFQUFrRSxZQUFsRSxFQUF5RSxXQUFVLE1BQW5GO0FBQ0k7QUFBQSwwREFBVSxJQUFWO0FBQUE7QUFDSTtBQUFBLDhEQUFVLElBQVY7QUFBQSxzQ0FBZSwyQkFBZixFQUE0QixJQUFHLFVBQS9CO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJLHdGQUFVLE9BQVYsT0FISjtBQUlJO0FBQUEsOERBQVUsSUFBVjtBQUFBLHNDQUFlLDJCQUFmLEVBQTRCLElBQUcsU0FBL0I7QUFBQTtBQUFBO0FBSko7QUFESjtBQURKLHFCQUZKO0FBYUsscUJBQUMsZUFBS0MsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUEsMEJBQVcsMkJBQVgsRUFBd0IsSUFBRyxRQUEzQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFkSjtBQWtCSyxxQkFBQyxlQUFLQSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLGVBQTNCO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLGFBQVI7QUFBQTtBQUFBO0FBREo7QUFuQko7QUFmSixhQURKO0FBNENIO0FBekRVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC5jN2YwNWQ3ZDY4NmQzOTRhZDVkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgSWNvbiwgSW1hZ2UsIExhYmVsLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQge0xpbmssIE5hdkxpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAnaG9tZSd9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBlLnRhcmdldC5uYW1lIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudSBzaXplPSdsYXJnZScgYm9yZGVybGVzcz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nLycgbmFtZT0naG9tZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL21hcHMnIG5hbWU9J21hcHMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21hcHMnfT5cbiAgICAgICAgICAgICAgICAgICAgTWFwc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0FkbWluKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL3Byb2ZpbGVzJyBuYW1lPSdwcm9maWxlcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJvZmlsZXMnfT5cbiAgICAgICAgICAgICAgICAgICAgUHJvZmlsZXNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGV4dD17QXV0aC5nZXRVc2VyKCkubmFtZX0gaWNvbj0ndXNlcicgZmxvYXRpbmcgbGFiZWxlZCBidXR0b24gY2xhc3NOYW1lPSdpY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvcHJvZmlsZSc+TXkgcHJvZmlsZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+U2V0dGluZ3M8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5EaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvbG9nb3V0Jz5Mb2cgb3V0PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+TG9nIEluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL3JlZ2lzdHJhdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==