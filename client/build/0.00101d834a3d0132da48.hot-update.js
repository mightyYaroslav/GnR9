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

var _reactRouterDom = __webpack_require__(74);

var _Home = __webpack_require__(602);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(473);

var _Login2 = _interopRequireDefault(_Login);

var _Registration = __webpack_require__(893);

var _Registration2 = _interopRequireDefault(_Registration);

var _canvas = __webpack_require__(894);

var _canvas2 = _interopRequireDefault(_canvas);

var _Maps = __webpack_require__(479);

var _Maps2 = _interopRequireDefault(_Maps);

var _Profile = __webpack_require__(900);

var _Profile2 = _interopRequireDefault(_Profile);

var _Profiles = __webpack_require__(905);

var _Profiles2 = _interopRequireDefault(_Profiles);

var _Auth = __webpack_require__(83);

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
                _react2.default.createElement(AuthRoute, { path: '/canvas/:mapId', check: _Auth2.default.isAuthenticated, component: _canvas2.default }),
                _react2.default.createElement(AuthRoute, { path: '/maps', check: _Auth2.default.isAuthenticated, component: _Maps2.default }),
                _react2.default.createElement(AuthRoute, { path: '/profile', check: _Auth2.default.isAuthenticated, component: _Profile2.default }),
                _react2.default.createElement(AuthRoute, { path: '/profiles', check: _Auth2.default.isAdmin, component: _Profiles2.default })
            );
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzIl0sIm5hbWVzIjpbIkF1dGhSb3V0ZSIsInByb3BzIiwiY2hlY2siLCJwYXRoIiwiY29tcG9uZW50IiwicGF0aG5hbWUiLCJMb2dvdXRSb3V0ZSIsImRlYXV0aGVudGljYXRlIiwiUm91dGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNBZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7OztpQ0FFTztBQUNMLGdCQUFHLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxFQUFILEVBQ0ksT0FBTyx1REFBTyxNQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFBeEIsRUFBOEIsV0FBVyxLQUFLRixLQUFMLENBQVdHLFNBQXBELEdBQVAsQ0FESixLQUdJLE9BQU8sMERBQVUsSUFBSSxFQUFFQyxVQUFVLEdBQVosRUFBZCxHQUFQO0FBQ1A7Ozs7OztJQUlDQyxXOzs7Ozs7Ozs7OztpQ0FFTztBQUNMLDJCQUFLQyxjQUFMO0FBQ0EsbUJBQU8sMERBQVUsSUFBSSxFQUFFRixVQUFVLEdBQVosRUFBZCxHQUFQO0FBQ0g7Ozs7OztJQUlnQkcsTTs7Ozs7Ozs7Ozs7aUNBRVI7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSx1RUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQix5QkFBdEIsR0FESjtBQUVJLHVFQUFPLE1BQUssUUFBWixFQUFxQiwwQkFBckIsR0FGSjtBQUdJLDhDQUFDLFdBQUQsSUFBYSxNQUFLLFNBQWxCLEdBSEo7QUFJSSx1RUFBTyxNQUFLLGVBQVosRUFBNEIsaUNBQTVCLEdBSko7QUFLSSw4Q0FBQyxTQUFELElBQVcsTUFBSyxnQkFBaEIsRUFBaUMsT0FBTyxlQUFLQyxlQUE3QyxFQUE4RCwyQkFBOUQsR0FMSjtBQU1JLDhDQUFDLFNBQUQsSUFBVyxNQUFLLE9BQWhCLEVBQXdCLE9BQU8sZUFBS0EsZUFBcEMsRUFBcUQseUJBQXJELEdBTko7QUFPSSw4Q0FBQyxTQUFELElBQVcsTUFBSyxVQUFoQixFQUEyQixPQUFPLGVBQUtBLGVBQXZDLEVBQXdELDRCQUF4RCxHQVBKO0FBUUksOENBQUMsU0FBRCxJQUFXLE1BQUssV0FBaEIsRUFBNEIsT0FBTyxlQUFLQyxPQUF4QyxFQUFpRCw2QkFBakQ7QUFSSixhQURKO0FBWUg7Ozs7OztrQkFmZ0JGLE0iLCJmaWxlIjoiMC4wMDEwMWQ4MzRhM2QwMTMyZGE0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUuanMnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbi5qcydcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vY29udGFpbmVycy9SZWdpc3RyYXRpb24uanMnXG5pbXBvcnQgTXlSZWN0IGZyb20gJy4vY29tcG9uZW50cy9jYW52YXMuanMnXG5pbXBvcnQgTWFwcyBmcm9tICcuL2NvbnRhaW5lcnMvTWFwcydcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vY29udGFpbmVycy9Qcm9maWxlJ1xuaW1wb3J0IFByb2ZpbGVzIGZyb20gJy4vY29udGFpbmVycy9Qcm9maWxlcydcblxuaW1wb3J0IEF1dGggZnJvbSAnLi9tb2R1bGVzL0F1dGgnXG5cbmNsYXNzIEF1dGhSb3V0ZSBleHRlbmRzIFJvdXRlIHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGVjaygpKVxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZSBwYXRoPXt0aGlzLnByb3BzLnBhdGh9IGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9IC8+XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3sgcGF0aG5hbWU6ICcvJyB9fSAvPlxuICAgIH1cblxufVxuXG5jbGFzcyBMb2dvdXRSb3V0ZSBleHRlbmRzIFJvdXRlIHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgQXV0aC5kZWF1dGhlbnRpY2F0ZSgpXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3sgcGF0aG5hbWU6ICcvJyB9fSAvPlxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxuICAgICAgICAgICAgICAgIDxMb2dvdXRSb3V0ZSBwYXRoPScvbG9nb3V0JyAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0cmF0aW9uJyBjb21wb25lbnQ9e1JlZ2lzdHJhdGlvbkZvcm19IC8+XG4gICAgICAgICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvY2FudmFzLzptYXBJZCcgY2hlY2s9e0F1dGguaXNBdXRoZW50aWNhdGVkfSBjb21wb25lbnQ9e015UmVjdH0gLz5cbiAgICAgICAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy9tYXBzJyBjaGVjaz17QXV0aC5pc0F1dGhlbnRpY2F0ZWR9IGNvbXBvbmVudD17TWFwc30vPlxuICAgICAgICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD0nL3Byb2ZpbGUnIGNoZWNrPXtBdXRoLmlzQXV0aGVudGljYXRlZH0gY29tcG9uZW50PXtQcm9maWxlfS8+XG4gICAgICAgICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvcHJvZmlsZXMnIGNoZWNrPXtBdXRoLmlzQWRtaW59IGNvbXBvbmVudD17UHJvZmlsZXN9Lz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMuanMiXSwic291cmNlUm9vdCI6IiJ9