webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _logo = __webpack_require__(158);

var _logo2 = _interopRequireDefault(_logo);

var _Auth = __webpack_require__(159);

var _Auth2 = _interopRequireDefault(_Auth);

var _reactRouterDom = __webpack_require__(86);

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
                    { name: 'home', active: activeItem === 'home', onClick: this.handleItemClick },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Home'
                    )
                ),
                _Auth2.default.isAuthenticated() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { name: 'maps', active: activeItem === 'maps', onClick: this.handleItemClick },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/maps' },
                        'Maps'
                    )
                ),
                _Auth2.default.isAdmin() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { name: 'profiles', active: activeItem === 'profiles', onClick: this.handleItemClick },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profiles' },
                        'Profiles'
                    )
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
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/profile' },
                                        'My profile'
                                    )
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
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/logout' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    ),
                    !_Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/login' },
                            _react2.default.createElement(
                                _semanticUiReact.Button,
                                null,
                                'Log In'
                            )
                        )
                    ),
                    !_Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/registration' },
                            _react2.default.createElement(
                                _semanticUiReact.Button,
                                { primary: true },
                                'Sign Up'
                            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLFFBT2dCO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDTCxZQUFZSSxJQUFiLEVBQWQ7QUFDQTtBQUNIO0FBVlU7QUFBQTtBQUFBLGlDQVlGO0FBQUEsZ0JBQ0VKLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLE1BQUssTUFBaEIsRUFBdUIsUUFBUUEsZUFBZSxNQUE5QyxFQUFzRCxTQUFTLEtBQUtDLGVBQXBFO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsR0FBVDtBQUFBO0FBQUE7QUFESixpQkFESjtBQUlLLCtCQUFLSyxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsTUFBSyxNQUFoQixFQUF1QixRQUFRTixlQUFlLE1BQTlDLEVBQXNELFNBQVMsS0FBS0MsZUFBcEU7QUFDSTtBQUFBO0FBQUEsMEJBQU0sSUFBRyxPQUFUO0FBQUE7QUFBQTtBQURKLGlCQUxKO0FBU0ssK0JBQUtNLE9BQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxNQUFLLFVBQWhCLEVBQTJCLFFBQVFQLGVBQWUsVUFBbEQsRUFBOEQsU0FBUyxLQUFLQyxlQUE1RTtBQUNJO0FBQUE7QUFBQSwwQkFBTSxJQUFHLFdBQVQ7QUFBQTtBQUFBO0FBREosaUJBVko7QUFlSTtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxVQUFTLE9BQXBCO0FBQ0ssbUNBQUtLLGVBQUwsTUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBVSxNQUFNLGVBQUtFLE9BQUwsR0FBZUosSUFBL0IsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxjQUFqRCxFQUEwRCxhQUExRCxFQUFrRSxZQUFsRSxFQUF5RSxXQUFVLE1BQW5GO0FBQ0k7QUFBQSwwREFBVSxJQUFWO0FBQUE7QUFDSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFlO0FBQUE7QUFBQSwwQ0FBTSxJQUFHLFVBQVQ7QUFBQTtBQUFBO0FBQWYsaUNBREo7QUFFSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFHSSx3RkFBVSxPQUFWLE9BSEo7QUFJSTtBQUFBLDhEQUFVLElBQVY7QUFBQTtBQUFlO0FBQUE7QUFBQSwwQ0FBTSxJQUFHLFNBQVQ7QUFBQTtBQUFBO0FBQWY7QUFKSjtBQURKO0FBREoscUJBRko7QUFhSyxxQkFBQyxlQUFLRSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTSxJQUFHLFFBQVQ7QUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQjtBQURKLHFCQWRKO0FBa0JLLHFCQUFDLGVBQUtBLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLElBQUcsZUFBVDtBQUF5QjtBQUFBO0FBQUEsa0NBQVEsYUFBUjtBQUFBO0FBQUE7QUFBekI7QUFESjtBQW5CSjtBQWZKLGFBREo7QUE0Q0g7QUExRFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjIzNzgyY2QyMWIzZDU5OTY0M2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgTGFiZWwsIE1lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7TGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdob21lJ31cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYFxcJHtuYW1lfWApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudSBzaXplPSdsYXJnZScgYm9yZGVybGVzcz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J21hcHMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21hcHMnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21hcHNcIj5NYXBzPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0FkbWluKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3Byb2ZpbGVzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcm9maWxlcyd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZXNcIj5Qcm9maWxlczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGV4dD17QXV0aC5nZXRVc2VyKCkubmFtZX0gaWNvbj0ndXNlcicgZmxvYXRpbmcgbGFiZWxlZCBidXR0b24gY2xhc3NOYW1lPSdpY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+PExpbmsgdG89Jy9wcm9maWxlJz5NeSBwcm9maWxlPC9MaW5rPjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+U2V0dGluZ3M8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5EaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+PExpbmsgdG89Jy9sb2dvdXQnPkxvZyBvdXQ8L0xpbms+PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj48QnV0dG9uPkxvZyBJbjwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RyYXRpb25cIj48QnV0dG9uIHByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=