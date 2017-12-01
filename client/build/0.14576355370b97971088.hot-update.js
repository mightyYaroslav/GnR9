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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLEVBT1E7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUNKLFlBQVlHLEVBQUVFLE1BQUYsQ0FBU0MsSUFBdEIsRUFBZDtBQUNBO0FBQ0g7QUFWVTtBQUFBO0FBQUEsaUNBWUY7QUFBQSxnQkFDRU4sVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxNQUFLLE9BQVgsRUFBbUIsZ0JBQW5CO0FBQ0k7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxHQUEzQixFQUErQixNQUFLLE1BQXBDLEVBQTJDLFFBQVFBLGVBQWUsTUFBbEU7QUFBQTtBQUFBLGlCQURKO0FBSUssK0JBQUtPLGVBQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLE9BQTNCLEVBQW1DLE1BQUssTUFBeEMsRUFBK0MsUUFBUVAsZUFBZSxNQUF0RTtBQUFBO0FBQUEsaUJBTEo7QUFTSywrQkFBS1EsT0FBTCxNQUNEO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsV0FBM0IsRUFBdUMsTUFBSyxVQUE1QyxFQUF1RCxRQUFRUixlQUFlLFVBQTlFO0FBQUE7QUFBQSxpQkFWSjtBQWVJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLFVBQVMsT0FBcEI7QUFDSyxtQ0FBS08sZUFBTCxNQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFVLE1BQU0sZUFBS0UsT0FBTCxHQUFlSCxJQUEvQixFQUFxQyxNQUFLLE1BQTFDLEVBQWlELGNBQWpELEVBQTBELGFBQTFELEVBQWtFLFlBQWxFLEVBQXlFLFdBQVUsTUFBbkY7QUFDSTtBQUFBLDBEQUFVLElBQVY7QUFBQTtBQUNJO0FBQUEsOERBQVUsSUFBVjtBQUFBLHNDQUFlLDJCQUFmLEVBQTRCLElBQUcsVUFBL0I7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQSw4REFBVSxJQUFWO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBR0ksd0ZBQVUsT0FBVixPQUhKO0FBSUk7QUFBQSw4REFBVSxJQUFWO0FBQUEsc0NBQWUsMkJBQWYsRUFBNEIsSUFBRyxTQUEvQjtBQUFBO0FBQUE7QUFKSjtBQURKO0FBREoscUJBRko7QUFhSyxxQkFBQyxlQUFLQyxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLFFBQTNCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQWRKO0FBa0JLLHFCQUFDLGVBQUtBLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBLDBCQUFXLDJCQUFYLEVBQXdCLElBQUcsZUFBM0I7QUFDSTtBQUFBO0FBQUEsOEJBQVEsYUFBUjtBQUFBO0FBQUE7QUFESjtBQW5CSjtBQWZKLGFBREo7QUE0Q0g7QUExRFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjE0NTc2MzU1MzcwYjk3OTcxMDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgTGFiZWwsIE1lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7TGluaywgTmF2TGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdob21lJ31cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogZS50YXJnZXQubmFtZX0pXG4gICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGBcXCR7bmFtZX1gKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnUgc2l6ZT0nbGFyZ2UnIGJvcmRlcmxlc3M+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy8nIG5hbWU9J2hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfT5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9tYXBzJyBuYW1lPSdtYXBzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtYXBzJ30+XG4gICAgICAgICAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge0F1dGguaXNBZG1pbigpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9wcm9maWxlcycgbmFtZT0ncHJvZmlsZXMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3Byb2ZpbGVzJ30+XG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRleHQ9e0F1dGguZ2V0VXNlcigpLm5hbWV9IGljb249J3VzZXInIGZsb2F0aW5nIGxhYmVsZWQgYnV0dG9uIGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL3Byb2ZpbGUnPk15IHByb2ZpbGU8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL2xvZ291dCc+TG9nIG91dDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9yZWdpc3RyYXRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=