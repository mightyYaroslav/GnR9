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
                _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', active: activeItem === 'home', onClick: this.handleItemClick }),
                _Auth2.default.isAuthenticated() && _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'maps', active: activeItem === 'maps', onClick: this.handleItemClick }),
                _Auth2.default.isAdmin() && _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'profiles', active: activeItem === 'profiles', onClick: this.handleItemClick }),
                _react2.default.createElement(
                    _semanticUiReact.Menu.Menu,
                    { position: 'right' },
                    _Auth2.default.isAuthenticated() && _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Dropdown,
                            { text: 'Profile', icon: 'user', floating: true, labeled: true, button: true, className: 'icon' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFDWCxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLE1BQWIsRUFBYjtBQUNBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFIZTtBQUlsQjs7QUFMVTtBQUFBO0FBQUEsd0NBT0tDLENBUEwsUUFPZ0I7QUFBQSxnQkFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUN2QixpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFlBQVlJLElBQWIsRUFBZDtBQUNBO0FBQ0g7QUFWVTtBQUFBO0FBQUEsaUNBWUY7QUFBQSxnQkFDRUosVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxNQUFLLE9BQVgsRUFBbUIsZ0JBQW5CO0FBQ0ksb0VBQU0sSUFBTixJQUFXLE1BQUssTUFBaEIsRUFBdUIsUUFBUUEsZUFBZSxNQUE5QyxFQUFzRCxTQUFTLEtBQUtDLGVBQXBFLEdBREo7QUFHSywrQkFBS0ssZUFBTCxNQUNELG9EQUFNLElBQU4sSUFBVyxNQUFLLE1BQWhCLEVBQXVCLFFBQVFOLGVBQWUsTUFBOUMsRUFBc0QsU0FBUyxLQUFLQyxlQUFwRSxHQUpKO0FBT0ssK0JBQUtNLE9BQUwsTUFDRCxvREFBTSxJQUFOLElBQVcsTUFBSyxVQUFoQixFQUEyQixRQUFRUCxlQUFlLFVBQWxELEVBQThELFNBQVMsS0FBS0MsZUFBNUUsR0FSSjtBQVlJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLFVBQVMsT0FBcEI7QUFDSyxtQ0FBS0ssZUFBTCxNQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFVLE1BQUssU0FBZixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLGNBQXJDLEVBQThDLGFBQTlDLEVBQXNELFlBQXRELEVBQTZELFdBQVUsTUFBdkU7QUFDSTtBQUFBLDBEQUFVLElBQVY7QUFBQTtBQUNJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQWU7QUFBQTtBQUFBLDBDQUFNLElBQUcsVUFBVDtBQUFBO0FBQUE7QUFBZixpQ0FESjtBQUVJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJLHdGQUFVLE9BQVYsT0FISjtBQUlJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQWU7QUFBQTtBQUFBLDBDQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBZjtBQUpKO0FBREo7QUFESixxQkFGSjtBQWFLLHFCQUFDLGVBQUtBLGVBQUwsRUFBRCxJQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLElBQUcsUUFBVDtBQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxCO0FBREoscUJBZEo7QUFrQksscUJBQUMsZUFBS0EsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQU0sSUFBRyxlQUFUO0FBQXlCO0FBQUE7QUFBQSxrQ0FBUSxhQUFSO0FBQUE7QUFBQTtBQUF6QjtBQURKO0FBbkJKO0FBWkosYUFESjtBQXlDSDtBQXZEVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuMjIwN2FkZDE5MmI0N2FiNWE4MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIEljb24sIEltYWdlLCBMYWJlbCwgTWVudX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IHtMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlSXRlbTogJ2hvbWUnfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgXFwke25hbWV9YClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51IHNpemU9J2xhcmdlJyBib3JkZXJsZXNzPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0naG9tZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nbWFwcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbWFwcyd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge0F1dGguaXNBZG1pbigpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcm9maWxlcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJvZmlsZXMnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRleHQ9J1Byb2ZpbGUnIGljb249J3VzZXInIGZsb2F0aW5nIGxhYmVsZWQgYnV0dG9uIGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPjxMaW5rIHRvPScvcHJvZmlsZSc+TXkgcHJvZmlsZTwvTGluaz48L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPjxMaW5rIHRvPScvbG9nb3V0Jz5Mb2cgb3V0PC9MaW5rPjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+PEJ1dHRvbj5Mb2cgSW48L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0cmF0aW9uXCI+PEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9