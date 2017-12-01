webpackHotUpdate(0,{

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(86);

var _Home = __webpack_require__(602);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(473);

var _Login2 = _interopRequireDefault(_Login);

var _Registration = __webpack_require__(889);

var _Registration2 = _interopRequireDefault(_Registration);

var _canvas = __webpack_require__(890);

var _canvas2 = _interopRequireDefault(_canvas);

var _Maps = __webpack_require__(479);

var _Maps2 = _interopRequireDefault(_Maps);

var _Profile = __webpack_require__(896);

var _Profile2 = _interopRequireDefault(_Profile);

var _Profiles = __webpack_require__(901);

var _Profiles2 = _interopRequireDefault(_Profiles);

var _Auth = __webpack_require__(100);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthRoute = function (_Route) {
    _inherits(AuthRoute, _Route);

    function AuthRoute() {
        _classCallCheck(this, AuthRoute);

        return _possibleConstructorReturn(this, (AuthRoute.__proto__ || Object.getPrototypeOf(AuthRoute)).apply(this, arguments));
    }

    _createClass(AuthRoute, [{
        key: 'render',
        value: function render() {
            if (this.props.check()) return _react2.default.createElement(_reactRouterDom.Route, { path: this.props.path, component: this.props.component });else return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/' } });
        }
    }]);

    return AuthRoute;
}(_reactRouterDom.Route);

var LogoutRoute = function (_Route2) {
    _inherits(LogoutRoute, _Route2);

    function LogoutRoute() {
        _classCallCheck(this, LogoutRoute);

        return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
    }

    _createClass(LogoutRoute, [{
        key: 'render',
        value: function render() {
            _Auth2.default.deauthenticate();
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/' } });
        }
    }]);

    return LogoutRoute;
}(_reactRouterDom.Route);

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
                _react2.default.createElement(LogoutRoute, { path: '/logout' }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', component: _Registration2.default }),
                _react2.default.createElement(AuthRoute, { path: '/canvas', check: _Auth2.default.isAuthenticated, component: _canvas2.default }),
                _react2.default.createElement(AuthRoute, { path: '/maps', check: _Auth2.default.isAuthenticated, component: _Maps2.default }),
                _react2.default.createElement(AuthRoute, { path: '/profile', check: _Auth2.default.isAuthenticated, component: _Profile2.default }),
                _react2.default.createElement(AuthRoute, { exact: true, path: '/profiles', check: _Auth2.default.isAdmin, component: _Profiles2.default })
            );
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzIl0sIm5hbWVzIjpbIkF1dGhSb3V0ZSIsInByb3BzIiwiY2hlY2siLCJwYXRoIiwiY29tcG9uZW50IiwicGF0aG5hbWUiLCJMb2dvdXRSb3V0ZSIsImRlYXV0aGVudGljYXRlIiwiUm91dGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNBZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7OztpQ0FFTztBQUNMLGdCQUFHLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxFQUFILEVBQ0ksT0FBTyx1REFBTyxNQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFBeEIsRUFBOEIsV0FBVyxLQUFLRixLQUFMLENBQVdHLFNBQXBELEdBQVAsQ0FESixLQUdJLE9BQU8sMERBQVUsSUFBSSxFQUFFQyxVQUFVLEdBQVosRUFBZCxHQUFQO0FBQ1A7Ozs7OztJQUlDQyxXOzs7Ozs7Ozs7OztpQ0FFTztBQUNMLDJCQUFLQyxjQUFMO0FBQ0EsbUJBQU8sMERBQVUsSUFBSSxFQUFFRixVQUFVLEdBQVosRUFBZCxHQUFQO0FBQ0g7Ozs7OztJQUlnQkcsTTs7Ozs7Ozs7Ozs7aUNBRVI7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSx1RUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQix5QkFBdEIsR0FESjtBQUVJLHVFQUFPLE1BQUssUUFBWixFQUFxQiwwQkFBckIsR0FGSjtBQUdJLDhDQUFDLFdBQUQsSUFBYSxNQUFLLFNBQWxCLEdBSEo7QUFJSSx1RUFBTyxNQUFLLGVBQVosRUFBNEIsaUNBQTVCLEdBSko7QUFLSSw4Q0FBQyxTQUFELElBQVcsTUFBSyxTQUFoQixFQUEwQixPQUFPLGVBQUtDLGVBQXRDLEVBQXVELDJCQUF2RCxHQUxKO0FBTUksOENBQUMsU0FBRCxJQUFXLE1BQUssT0FBaEIsRUFBd0IsT0FBTyxlQUFLQSxlQUFwQyxFQUFxRCx5QkFBckQsR0FOSjtBQU9JLDhDQUFDLFNBQUQsSUFBVyxNQUFLLFVBQWhCLEVBQTJCLE9BQU8sZUFBS0EsZUFBdkMsRUFBd0QsNEJBQXhELEdBUEo7QUFRSSw4Q0FBQyxTQUFELElBQVcsV0FBWCxFQUFpQixNQUFLLFdBQXRCLEVBQWtDLE9BQU8sZUFBS0MsT0FBOUMsRUFBdUQsNkJBQXZEO0FBUkosYUFESjtBQVlIOzs7Ozs7a0JBZmdCRixNIiwiZmlsZSI6IjAuNTc5MDVhY2VhNTM5OGE1Y2EwMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lLmpzJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2NvbnRhaW5lcnMvTG9naW4uanMnXG5pbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tICcuL2NvbnRhaW5lcnMvUmVnaXN0cmF0aW9uLmpzJ1xuaW1wb3J0IE15UmVjdCBmcm9tICcuL2NvbXBvbmVudHMvY2FudmFzLmpzJ1xuaW1wb3J0IE1hcHMgZnJvbSAnLi9jb250YWluZXJzL01hcHMnXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL2NvbnRhaW5lcnMvUHJvZmlsZSdcbmltcG9ydCBQcm9maWxlcyBmcm9tICcuL2NvbnRhaW5lcnMvUHJvZmlsZXMnXG5cbmltcG9ydCBBdXRoIGZyb20gJy4vbW9kdWxlcy9BdXRoJ1xuXG5jbGFzcyBBdXRoUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hlY2soKSlcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUgcGF0aD17dGhpcy5wcm9wcy5wYXRofSBjb21wb25lbnQ9e3RoaXMucHJvcHMuY29tcG9uZW50fSAvPlxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnLycgfX0gLz5cbiAgICB9XG5cbn1cblxuY2xhc3MgTG9nb3V0Um91dGUgZXh0ZW5kcyBSb3V0ZSB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIEF1dGguZGVhdXRoZW50aWNhdGUoKVxuICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnLycgfX0gLz5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2luRm9ybX0gLz5cbiAgICAgICAgICAgICAgICA8TG9nb3V0Um91dGUgcGF0aD0nL2xvZ291dCcgLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdHJhdGlvbicgY29tcG9uZW50PXtSZWdpc3RyYXRpb25Gb3JtfSAvPlxuICAgICAgICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD0nL2NhbnZhcycgY2hlY2s9e0F1dGguaXNBdXRoZW50aWNhdGVkfSBjb21wb25lbnQ9e015UmVjdH0gLz5cbiAgICAgICAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy9tYXBzJyBjaGVjaz17QXV0aC5pc0F1dGhlbnRpY2F0ZWR9IGNvbXBvbmVudD17TWFwc30vPlxuICAgICAgICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD0nL3Byb2ZpbGUnIGNoZWNrPXtBdXRoLmlzQXV0aGVudGljYXRlZH0gY29tcG9uZW50PXtQcm9maWxlfS8+XG4gICAgICAgICAgICAgICAgPEF1dGhSb3V0ZSBleGFjdCBwYXRoPScvcHJvZmlsZXMnIGNoZWNrPXtBdXRoLmlzQWRtaW59IGNvbXBvbmVudD17UHJvZmlsZXN9Lz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMuanMiXSwic291cmNlUm9vdCI6IiJ9