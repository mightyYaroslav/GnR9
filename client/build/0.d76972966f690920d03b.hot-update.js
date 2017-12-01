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
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Home'
                    )
                ),
                _Auth2.default.isAuthenticated() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { name: 'maps', active: activeItem === 'maps' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/maps' },
                        'Maps'
                    )
                ),
                _Auth2.default.isAdmin() && _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { name: 'profiles', active: activeItem === 'profiles' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLFFBT2dCO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDTCxZQUFZSSxJQUFiLEVBQWQ7QUFDQTtBQUNIO0FBVlU7QUFBQTtBQUFBLGlDQVlGO0FBQUEsZ0JBQ0VKLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsR0FBM0IsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxRQUFRQSxlQUFlLE1BQWxFO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsR0FBVDtBQUFBO0FBQUE7QUFESixpQkFESjtBQUlLLCtCQUFLTSxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsTUFBSyxNQUFoQixFQUF1QixRQUFRTixlQUFlLE1BQTlDO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsT0FBVDtBQUFBO0FBQUE7QUFESixpQkFMSjtBQVNLLCtCQUFLTyxPQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsTUFBSyxVQUFoQixFQUEyQixRQUFRUCxlQUFlLFVBQWxEO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsV0FBVDtBQUFBO0FBQUE7QUFESixpQkFWSjtBQWVJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLFVBQVMsT0FBcEI7QUFDSyxtQ0FBS00sZUFBTCxNQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFVLE1BQU0sZUFBS0UsT0FBTCxHQUFlSixJQUEvQixFQUFxQyxNQUFLLE1BQTFDLEVBQWlELGNBQWpELEVBQTBELGFBQTFELEVBQWtFLFlBQWxFLEVBQXlFLFdBQVUsTUFBbkY7QUFDSTtBQUFBLDBEQUFVLElBQVY7QUFBQTtBQUNJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQWU7QUFBQTtBQUFBLDBDQUFNLElBQUcsVUFBVDtBQUFBO0FBQUE7QUFBZixpQ0FESjtBQUVJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJLHdGQUFVLE9BQVYsT0FISjtBQUlJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQWU7QUFBQTtBQUFBLDBDQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBZjtBQUpKO0FBREo7QUFESixxQkFGSjtBQWFLLHFCQUFDLGVBQUtFLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLElBQUcsUUFBVDtBQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCO0FBREoscUJBZEo7QUFrQksscUJBQUMsZUFBS0EsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQU0sSUFBRyxlQUFUO0FBQXlCO0FBQUE7QUFBQSxrQ0FBUSxhQUFSO0FBQUE7QUFBQTtBQUF6QjtBQURKO0FBbkJKO0FBZkosYUFESjtBQTRDSDtBQTFEVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuZDc2OTcyOTY2ZjY5MDkyMGQwM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIEljb24sIEltYWdlLCBMYWJlbCwgTWVudX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IHtMaW5rLCBOYXZMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlSXRlbTogJ2hvbWUnfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgXFwke25hbWV9YClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51IHNpemU9J2xhcmdlJyBib3JkZXJsZXNzPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9e05hdkxpbmt9IHRvPScvJyBuYW1lPSdob21lJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAge0F1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J21hcHMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21hcHMnfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWFwc1wiPk1hcHM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQWRtaW4oKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJvZmlsZXMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3Byb2ZpbGVzJ30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2ZpbGVzXCI+UHJvZmlsZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRleHQ9e0F1dGguZ2V0VXNlcigpLm5hbWV9IGljb249J3VzZXInIGZsb2F0aW5nIGxhYmVsZWQgYnV0dG9uIGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPjxMaW5rIHRvPScvcHJvZmlsZSc+TXkgcHJvZmlsZTwvTGluaz48L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPjxMaW5rIHRvPScvbG9nb3V0Jz5Mb2cgb3V0PC9MaW5rPjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+PEJ1dHRvbj5Mb2cgSW48L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0cmF0aW9uXCI+PEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9