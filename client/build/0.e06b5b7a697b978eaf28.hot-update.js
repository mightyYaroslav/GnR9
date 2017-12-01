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

        _this.state = { activeItem: '' };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxFQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLEVBT1E7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUVKLFlBQVlHLEVBQUVFLE1BQUYsQ0FBU0MsSUFBdkIsRUFBZDtBQUNIO0FBVFU7QUFBQTtBQUFBLGlDQVdGO0FBQUEsZ0JBQ0VOLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsR0FBM0IsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxRQUFRQSxlQUFlLE1BQWxFO0FBQUE7QUFBQSxpQkFESjtBQUlLLCtCQUFLTyxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxPQUEzQixFQUFtQyxNQUFLLE1BQXhDLEVBQStDLFFBQVFQLGVBQWUsTUFBdEU7QUFBQTtBQUFBLGlCQUxKO0FBU0ssK0JBQUtRLE9BQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLFdBQTNCLEVBQXVDLE1BQUssVUFBNUMsRUFBdUQsUUFBUVIsZUFBZSxVQUE5RTtBQUFBO0FBQUEsaUJBVko7QUFlSTtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxVQUFTLE9BQXBCO0FBQ0ssbUNBQUtPLGVBQUwsTUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBVSxNQUFNLGVBQUtFLE9BQUwsR0FBZUgsSUFBL0IsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxjQUFqRCxFQUEwRCxhQUExRCxFQUFrRSxZQUFsRSxFQUF5RSxXQUFVLE1BQW5GO0FBQ0k7QUFBQSwwREFBVSxJQUFWO0FBQUE7QUFDSTtBQUFBLDhEQUFVLElBQVY7QUFBQSxzQ0FBZSwyQkFBZixFQUE0QixJQUFHLFVBQS9CO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJLHdGQUFVLE9BQVYsT0FISjtBQUlJO0FBQUEsOERBQVUsSUFBVjtBQUFBLHNDQUFlLDJCQUFmLEVBQTRCLElBQUcsU0FBL0I7QUFBQTtBQUFBO0FBSko7QUFESjtBQURKLHFCQUZKO0FBYUsscUJBQUMsZUFBS0MsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUEsMEJBQVcsMkJBQVgsRUFBd0IsSUFBRyxRQUEzQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFkSjtBQWtCSyxxQkFBQyxlQUFLQSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLGVBQTNCO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLGFBQVI7QUFBQTtBQUFBO0FBREo7QUFuQko7QUFmSixhQURKO0FBNENIO0FBekRVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC5lMDZiNWI3YTY5N2I5NzhlYWYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgSWNvbiwgSW1hZ2UsIExhYmVsLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQge0xpbmssIE5hdkxpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAnJ31cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IGUudGFyZ2V0Lm5hbWUgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51IHNpemU9J2xhcmdlJyBib3JkZXJsZXNzPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvJyBuYW1lPSdob21lJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ30+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvbWFwcycgbmFtZT0nbWFwcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbWFwcyd9PlxuICAgICAgICAgICAgICAgICAgICBNYXBzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQWRtaW4oKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvcHJvZmlsZXMnIG5hbWU9J3Byb2ZpbGVzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcm9maWxlcyd9PlxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biB0ZXh0PXtBdXRoLmdldFVzZXIoKS5uYW1lfSBpY29uPSd1c2VyJyBmbG9hdGluZyBsYWJlbGVkIGJ1dHRvbiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBhcz17TmF2TGlua30gdG89Jy9wcm9maWxlJz5NeSBwcm9maWxlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5TZXR0aW5nczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBhcz17TmF2TGlua30gdG89Jy9sb2dvdXQnPkxvZyBvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvcmVnaXN0cmF0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9