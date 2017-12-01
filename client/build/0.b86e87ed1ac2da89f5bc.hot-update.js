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
                            { text: _Auth2.default.getUser().name, icon: _Auth2.default.getUser().image, floating: true, labeled: true, button: true, className: 'icon' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJnZXRVc2VyIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFDWCxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLE1BQWIsRUFBYjtBQUNBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFIZTtBQUlsQjs7QUFMVTtBQUFBO0FBQUEsd0NBT0tDLENBUEwsUUFPZ0I7QUFBQSxnQkFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUN2QixpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFlBQVlJLElBQWIsRUFBZDtBQUNBO0FBQ0g7QUFWVTtBQUFBO0FBQUEsaUNBWUY7QUFBQSxnQkFDRUosVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxNQUFLLE9BQVgsRUFBbUIsZ0JBQW5CO0FBQ0k7QUFBQSwwQ0FBTSxJQUFOO0FBQUEsc0JBQVcsTUFBSyxNQUFoQixFQUF1QixRQUFRQSxlQUFlLE1BQTlDLEVBQXNELFNBQVMsS0FBS0MsZUFBcEU7QUFDSTtBQUFBO0FBQUEsMEJBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQTtBQURKLGlCQURKO0FBSUssK0JBQUtLLGVBQUwsTUFDRDtBQUFBLDBDQUFNLElBQU47QUFBQSxzQkFBVyxNQUFLLE1BQWhCLEVBQXVCLFFBQVFOLGVBQWUsTUFBOUMsRUFBc0QsU0FBUyxLQUFLQyxlQUFwRTtBQUNJO0FBQUE7QUFBQSwwQkFBTSxJQUFHLE9BQVQ7QUFBQTtBQUFBO0FBREosaUJBTEo7QUFTSywrQkFBS00sT0FBTCxNQUNEO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLE1BQUssVUFBaEIsRUFBMkIsUUFBUVAsZUFBZSxVQUFsRCxFQUE4RCxTQUFTLEtBQUtDLGVBQTVFO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsV0FBVDtBQUFBO0FBQUE7QUFESixpQkFWSjtBQWVJO0FBQUEsMENBQU0sSUFBTjtBQUFBLHNCQUFXLFVBQVMsT0FBcEI7QUFDSyxtQ0FBS0ssZUFBTCxNQUNEO0FBQUEsOENBQU0sSUFBTjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFVLE1BQU0sZUFBS0UsT0FBTCxHQUFlSixJQUEvQixFQUFxQyxNQUFNLGVBQUtJLE9BQUwsR0FBZUMsS0FBMUQsRUFBaUUsY0FBakUsRUFBMEUsYUFBMUUsRUFBa0YsWUFBbEYsRUFBeUYsV0FBVSxNQUFuRztBQUNJO0FBQUEsMERBQVUsSUFBVjtBQUFBO0FBQ0k7QUFBQSw4REFBVSxJQUFWO0FBQUE7QUFBZTtBQUFBO0FBQUEsMENBQU0sSUFBRyxVQUFUO0FBQUE7QUFBQTtBQUFmLGlDQURKO0FBRUk7QUFBQSw4REFBVSxJQUFWO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBR0ksd0ZBQVUsT0FBVixPQUhKO0FBSUk7QUFBQSw4REFBVSxJQUFWO0FBQUE7QUFBZTtBQUFBO0FBQUEsMENBQU0sSUFBRyxTQUFUO0FBQUE7QUFBQTtBQUFmO0FBSko7QUFESjtBQURKLHFCQUZKO0FBYUsscUJBQUMsZUFBS0gsZUFBTCxFQUFELElBQ0Q7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQU0sSUFBRyxRQUFUO0FBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFESixxQkFkSjtBQWtCSyxxQkFBQyxlQUFLQSxlQUFMLEVBQUQsSUFDRDtBQUFBLDhDQUFNLElBQU47QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTSxJQUFHLGVBQVQ7QUFBeUI7QUFBQTtBQUFBLGtDQUFRLGFBQVI7QUFBQTtBQUFBO0FBQXpCO0FBREo7QUFuQko7QUFmSixhQURKO0FBNENIO0FBMURVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC5iODZlODdlZDFhYzJkYTg5ZjViYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgSWNvbiwgSW1hZ2UsIExhYmVsLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQge0xpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAnaG9tZSd9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGBcXCR7bmFtZX1gKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnUgc2l6ZT0nbGFyZ2UnIGJvcmRlcmxlc3M+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdob21lJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ30gb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIHtBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdtYXBzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtYXBzJ30gb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXBzXCI+TWFwczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge0F1dGguaXNBZG1pbigpICYmXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcm9maWxlcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJvZmlsZXMnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2ZpbGVzXCI+UHJvZmlsZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7QXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRleHQ9e0F1dGguZ2V0VXNlcigpLm5hbWV9IGljb249e0F1dGguZ2V0VXNlcigpLmltYWdlfSBmbG9hdGluZyBsYWJlbGVkIGJ1dHRvbiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT48TGluayB0bz0nL3Byb2ZpbGUnPk15IHByb2ZpbGU8L0xpbms+PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5TZXR0aW5nczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT48TGluayB0bz0nL2xvZ291dCc+TG9nIG91dDwvTGluaz48L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPjxCdXR0b24+TG9nIEluPC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IUF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiPjxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==