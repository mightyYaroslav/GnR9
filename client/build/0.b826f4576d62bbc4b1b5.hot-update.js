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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBQ1gsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxNQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7O0FBTFU7QUFBQTtBQUFBLHdDQU9LQyxDQVBMLFFBT2dCO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDTCxZQUFZSSxJQUFiLEVBQWQ7QUFDQTtBQUNIO0FBVlU7QUFBQTtBQUFBLGlDQVlGO0FBQUEsZ0JBQ0VKLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sTUFBSyxPQUFYLEVBQW1CLGdCQUFuQjtBQUNJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLDJCQUFYLEVBQXdCLElBQUcsR0FBM0IsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxRQUFRQSxlQUFlLE1BQWxFO0FBQUE7QUFBQSxpQkFESjtBQUlLLCtCQUFLTSxlQUFMLE1BQ0Q7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsMkJBQVgsRUFBd0IsSUFBRyxPQUEzQixFQUFtQyxNQUFLLE1BQXhDLEVBQStDLFFBQVFOLGVBQWUsTUFBdEU7QUFBQTtBQUFBLGlCQUxKO0FBU0ssK0JBQUtPLE9BQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVywyQkFBWCxFQUF3QixJQUFHLFdBQTNCLEVBQXVDLE1BQUssVUFBNUMsRUFBdUQsUUFBUVAsZUFBZSxVQUE5RTtBQUFBO0FBQUEsaUJBVko7QUFlSTtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxVQUFTLE9BQXBCO0FBQ0ssbUNBQUtNLGVBQUwsTUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBVSxNQUFNLGVBQUtFLE9BQUwsR0FBZUosSUFBL0IsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxjQUFqRCxFQUEwRCxhQUExRCxFQUFrRSxZQUFsRSxFQUF5RSxXQUFVLE1BQW5GO0FBQ0k7QUFBQSwwREFBVSxJQUFWO0FBQUE7QUFDSTtBQUFBLDhEQUFVLElBQVY7QUFBQSxzQ0FBZSwyQkFBZixFQUE0QixJQUFHLFVBQS9CO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUEsOERBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJLHdGQUFVLE9BQVYsT0FISjtBQUlJO0FBQUEsOERBQVUsSUFBVjtBQUFBLHNDQUFlLDJCQUFmLEVBQTRCLElBQUcsU0FBL0I7QUFBQTtBQUFBO0FBSko7QUFESjtBQURKLHFCQUZKO0FBYUsscUJBQUMsZUFBS0UsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUEsMEJBQVcsMkJBQVgsRUFBd0IsSUFBRyxRQUEzQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFkSjtBQWtCSyxxQkFBQyxlQUFLQSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVywyQkFBWCxFQUF3QixJQUFHLGVBQTNCO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLGFBQVI7QUFBQTtBQUFBO0FBREo7QUFuQko7QUFmSixhQURKO0FBNENIO0FBMURVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC5iODI2ZjQ1NzZkNjJiYmM0YjFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgSWNvbiwgSW1hZ2UsIExhYmVsLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQge0xpbmssIE5hdkxpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAnaG9tZSd9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGBcXCR7bmFtZX1gKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnUgc2l6ZT0nbGFyZ2UnIGJvcmRlcmxlc3M+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy8nIG5hbWU9J2hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfT5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9tYXBzJyBuYW1lPSdtYXBzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtYXBzJ30+XG4gICAgICAgICAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge0F1dGguaXNBZG1pbigpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9wcm9maWxlcycgbmFtZT0ncHJvZmlsZXMnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3Byb2ZpbGVzJ30+XG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRleHQ9e0F1dGguZ2V0VXNlcigpLm5hbWV9IGljb249J3VzZXInIGZsb2F0aW5nIGxhYmVsZWQgYnV0dG9uIGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL3Byb2ZpbGUnPk15IHByb2ZpbGU8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGFzPXtOYXZMaW5rfSB0bz0nL2xvZ291dCc+TG9nIG91dDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz17TmF2TGlua30gdG89Jy9yZWdpc3RyYXRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=