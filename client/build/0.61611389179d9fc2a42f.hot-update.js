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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxFQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLEVBT1E7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUVKLFlBQVlHLEVBQUVFLE1BQUYsQ0FBU0MsSUFBdkIsRUFBZDtBQUNIO0FBVFU7QUFBQTtBQUFBLGlDQVdGO0FBQ0wsZ0JBQUlOLGFBQWEsS0FBS0QsS0FBTCxDQUFXQyxVQUE1QjtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxNQUFLLE9BQVgsRUFBbUIsZ0JBQW5CO0FBQ0k7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxHQUEzQixFQUErQixNQUFLLE1BQXBDLEVBQTJDLFFBQVFBLGVBQWUsTUFBbEU7QUFBQTtBQUFBLGlCQURKO0FBSUssK0JBQUtPLGVBQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLE9BQTNCLEVBQW1DLE1BQUssTUFBeEMsRUFBK0MsUUFBUVAsZUFBZSxNQUF0RTtBQUFBO0FBQUEsaUJBTEo7QUFTSywrQkFBS1EsT0FBTCxNQUNEO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsV0FBM0IsRUFBdUMsTUFBSyxVQUE1QyxFQUF1RCxRQUFRUixlQUFlLFVBQTlFO0FBQUE7QUFBQSxpQkFWSjtBQWVJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLFVBQVMsT0FBcEI7QUFDSyxtQ0FBS08sZUFBTCxNQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFVLE1BQU0sZUFBS0UsT0FBTCxHQUFlSCxJQUEvQixFQUFxQyxNQUFLLE1BQTFDLEVBQWlELGNBQWpELEVBQTBELGFBQTFELEVBQWtFLFlBQWxFLEVBQXlFLFdBQVUsTUFBbkY7QUFDSTtBQUFBLDBEQUFVLElBQVY7QUFBQTtBQUNJO0FBQUEsOERBQVUsSUFBVjtBQUFBLHNDQUFlLDJCQUFmLEVBQTRCLElBQUcsVUFBL0I7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQSw4REFBVSxJQUFWO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBR0ksd0ZBQVUsT0FBVixPQUhKO0FBSUk7QUFBQSw4REFBVSxJQUFWO0FBQUEsc0NBQWUsMkJBQWYsRUFBNEIsSUFBRyxTQUEvQjtBQUFBO0FBQUE7QUFKSjtBQURKO0FBREoscUJBRko7QUFhSyxxQkFBQyxlQUFLQyxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLFFBQTNCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQWRKO0FBa0JLLHFCQUFDLGVBQUtBLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBLDBCQUFXLDJCQUFYLEVBQXdCLElBQUcsZUFBM0I7QUFDSTtBQUFBO0FBQUEsOEJBQVEsYUFBUjtBQUFBO0FBQUE7QUFESjtBQW5CSjtBQWZKLGFBREo7QUE0Q0g7QUF6RFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjYxNjExMzg5MTc5ZDlmYzJhNDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgTGFiZWwsIE1lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7TGluaywgTmF2TGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICcnfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogZS50YXJnZXQubmFtZSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUl0ZW0gPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51IHNpemU9J2xhcmdlJyBib3JkZXJsZXNzPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvJyBuYW1lPSdob21lJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ30+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvbWFwcycgbmFtZT0nbWFwcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbWFwcyd9PlxuICAgICAgICAgICAgICAgICAgICBNYXBzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQWRtaW4oKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvcHJvZmlsZXMnIG5hbWU9J3Byb2ZpbGVzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcm9maWxlcyd9PlxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biB0ZXh0PXtBdXRoLmdldFVzZXIoKS5uYW1lfSBpY29uPSd1c2VyJyBmbG9hdGluZyBsYWJlbGVkIGJ1dHRvbiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBhcz17TmF2TGlua30gdG89Jy9wcm9maWxlJz5NeSBwcm9maWxlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5TZXR0aW5nczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBhcz17TmF2TGlua30gdG89Jy9sb2dvdXQnPkxvZyBvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvcmVnaXN0cmF0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9