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
        value: function handleItemClick(e, _ref) {
            var name = _ref.name;

            this.setState({ activeItem: name });
            // this.props.history.push(`\${name}`)
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
                                    null,
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
                                    null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLFFBT2dCO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDTCxZQUFZSSxJQUFiLEVBQWQ7QUFDQTtBQUNIO0FBVlU7QUFBQTtBQUFBLGlDQVlGO0FBQUEsZ0JBQ0VKLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsR0FBM0IsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxRQUFRQSxlQUFlLE1BQWxFO0FBQUE7QUFBQSxpQkFESjtBQUlLLCtCQUFLTSxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxPQUEzQixFQUFtQyxNQUFLLE1BQXhDLEVBQStDLFFBQVFOLGVBQWUsTUFBdEU7QUFBQTtBQUFBLGlCQUxKO0FBU0ssK0JBQUtPLE9BQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLFdBQTNCLEVBQXVDLE1BQUssVUFBNUMsRUFBdUQsUUFBUVAsZUFBZSxVQUE5RTtBQUFBO0FBQUEsaUJBVko7QUFlSTtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxVQUFTLE9BQXBCO0FBQ0ssbUNBQUtNLGVBQUwsTUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBVSxNQUFNLGVBQUtFLE9BQUwsR0FBZUosSUFBL0IsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxjQUFqRCxFQUEwRCxhQUExRCxFQUFrRSxZQUFsRSxFQUF5RSxXQUFVLE1BQW5GO0FBQ0k7QUFBQSwwREFBVSxJQUFWO0FBQUE7QUFDSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFFSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFHSSx3RkFBVSxPQUFWLE9BSEo7QUFJSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQURKO0FBREoscUJBRko7QUFhSyxxQkFBQyxlQUFLRSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLFFBQTNCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQWRKO0FBa0JLLHFCQUFDLGVBQUtBLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBLDBCQUFXLDJCQUFYLEVBQXdCLElBQUcsZUFBM0I7QUFDSTtBQUFBO0FBQUEsOEJBQVEsYUFBUjtBQUFBO0FBQUE7QUFESjtBQW5CSjtBQWZKLGFBREo7QUE0Q0g7QUExRFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjk4ZmU0YTZlNTA1NTBlYTNjMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgTGFiZWwsIE1lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7TGluaywgTmF2TGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdob21lJ31cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYFxcJHtuYW1lfWApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudSBzaXplPSdsYXJnZScgYm9yZGVybGVzcz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nLycgbmFtZT0naG9tZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL21hcHMnIG5hbWU9J21hcHMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21hcHMnfT5cbiAgICAgICAgICAgICAgICAgICAgTWFwc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0FkbWluKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL3Byb2ZpbGVzJyBuYW1lPSdwcm9maWxlcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJvZmlsZXMnfT5cbiAgICAgICAgICAgICAgICAgICAgUHJvZmlsZXNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGV4dD17QXV0aC5nZXRVc2VyKCkubmFtZX0gaWNvbj0ndXNlcicgZmxvYXRpbmcgbGFiZWxlZCBidXR0b24gY2xhc3NOYW1lPSdpY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+TXkgcHJvZmlsZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+U2V0dGluZ3M8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5EaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+TG9nIG91dDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9yZWdpc3RyYXRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=