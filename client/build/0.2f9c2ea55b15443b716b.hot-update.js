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

var _Canvas = __webpack_require__(919);

var _Canvas2 = _interopRequireDefault(_Canvas);

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
                _react2.default.createElement(AuthRoute, { path: '/canvas/:mapId', check: _Auth2.default.isAuthenticated, component: _Canvas2.default }),
                _react2.default.createElement(AuthRoute, { path: '/maps', check: _Auth2.default.isAuthenticated, component: _Maps2.default }),
                _react2.default.createElement(AuthRoute, { path: '/profile', check: _Auth2.default.isAuthenticated, component: _Profile2.default }),
                _react2.default.createElement(AuthRoute, { path: '/profiles', check: _Auth2.default.isAdmin, component: _Profiles2.default })
            );
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),

/***/ 894:
false,

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactKonva = __webpack_require__(910);

var _semanticUiReact = __webpack_require__(18);

var _reactDimensions = __webpack_require__(917);

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

var _navbar = __webpack_require__(75);

var _navbar2 = _interopRequireDefault(_navbar);

var _reactRouterDom = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(MyRect, _Component);

    function MyRect(props) {
        _classCallCheck(this, MyRect);

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green',
            shapes: [],
            id: _this.props.match.params.mapId
        };
        _this.addShape = _this.addShape.bind(_this);
        _this.onDragStart = _this.onDragStart.bind(_this);
        _this.onDragMove = _this.onDragMove.bind(_this);
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onDblClick = _this.onDblClick.bind(_this);
        _this.onDblTap = _this.onDblTap.bind(_this);
        _this.save = _this.save.bind(_this);
        return _this;
    }

    _createClass(MyRect, [{
        key: 'addShape',
        value: function addShape(e) {
            console.log('addShape ', e);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(e) {
            console.log('onDragStart', e);
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove(e) {
            console.log('onDragMove', e);
        }
    }, {
        key: 'onMouseOver',
        value: function onMouseOver(e) {
            console.log('onMouseOver', e);
            document.body.style.cursor = 'pointer';
        }
    }, {
        key: 'onMouseOut',
        value: function onMouseOut(e) {
            console.log('onMouseOut', e);
            document.body.style.cursor = 'default';
        }
    }, {
        key: 'onDblClick',
        value: function onDblClick(e) {
            console.log('onDblClick', e);
        }
    }, {
        key: 'onDblTap',
        value: function onDblTap(e) {
            console.log('onDblTap', e);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ color: 'green' });
        }
    }, {
        key: 'addShape',
        value: function addShape() {
            var shapes = this.state.shapes;
            shapes.push(_react2.default.createElement(_reactKonva.Rect, {
                x: Math.floor(Math.random() * 1600 + 1),
                y: Math.floor(Math.random() * 900 + 1),
                width: 100,
                height: 100,
                fill: this.state.color,
                shadowBlur: 5,
                draggable: true,
                onClick: this.handleClick,
                onDragStart: this.onDragStart,
                onDragMove: this.onDragMove,
                onMouseOver: this.onMouseOver,
                onMouseOut: this.onMouseOut,
                onDblClick: this.onDblClick,
                onDblTap: this.onDblClick
            }));
            this.setState({
                color: window.Konva.Util.getRandomColor(),
                shapes: shapes
            });
        }
    }, {
        key: 'save',
        value: function save() {
            alert('mapId:' + this.state.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { onClick: this.addShape },
                    'Add'
                ),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { onClick: this.save },
                    'Save'
                ),
                _react2.default.createElement(
                    _reactKonva.Stage,
                    { width: 1600, height: 900 },
                    _react2.default.createElement(
                        _reactKonva.Layer,
                        null,
                        this.state.shapes.map(function (shape) {
                            return shape;
                        })
                    )
                )
            );
        }
    }]);

    return MyRect;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0NhbnZhcy5qcyJdLCJuYW1lcyI6WyJBdXRoUm91dGUiLCJwcm9wcyIsImNoZWNrIiwicGF0aCIsImNvbXBvbmVudCIsInBhdGhuYW1lIiwiTG9nb3V0Um91dGUiLCJkZWF1dGhlbnRpY2F0ZSIsIlJvdXRlcyIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJzdGF0ZSIsImNvbG9yIiwic2hhcGVzIiwiaWQiLCJtYXRjaCIsInBhcmFtcyIsIm1hcElkIiwiYWRkU2hhcGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25EYmxDbGljayIsIm9uRGJsVGFwIiwic2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJzZXRTdGF0ZSIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwiYWxlcnQiLCJtYXAiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7OztpQ0FFTztBQUNMLGdCQUFHLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxFQUFILEVBQ0ksT0FBTyx1REFBTyxNQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFBeEIsRUFBOEIsV0FBVyxLQUFLRixLQUFMLENBQVdHLFNBQXBELEdBQVAsQ0FESixLQUdJLE9BQU8sMERBQVUsSUFBSSxFQUFFQyxVQUFVLEdBQVosRUFBZCxHQUFQO0FBQ1A7Ozs7OztJQUlDQyxXOzs7Ozs7Ozs7Oztp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O0FBQUEsaUNBaUVGO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0EscUVBREE7QUFFSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxLQUFLSSxRQUF0QjtBQUFBO0FBQUEsaUJBRko7QUFHSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxLQUFLUSxJQUF0QjtBQUFBO0FBQUEsaUJBSEo7QUFJQTtBQUFBO0FBQUEsc0JBQU8sT0FBTyxJQUFkLEVBQW9CLFFBQVEsR0FBNUI7QUFDSTtBQUFBO0FBQUE7QUFDSyw2QkFBS2YsS0FBTCxDQUFXRSxNQUFYLENBQWtCZ0MsR0FBbEIsQ0FBc0I7QUFBQSxtQ0FBU0MsS0FBVDtBQUFBLHlCQUF0QjtBQURMO0FBREo7QUFKQSxhQURKO0FBWUg7QUE5RVU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjJmOWMyZWE1NWIxNTQ0M2I3MTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1N3aXRjaCwgUm91dGUsIFJlZGlyZWN0fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbnRhaW5lcnMvSG9tZS5qcydcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9jb250YWluZXJzL0xvZ2luLmpzJ1xuaW1wb3J0IFJlZ2lzdHJhdGlvbkZvcm0gZnJvbSAnLi9jb250YWluZXJzL1JlZ2lzdHJhdGlvbi5qcydcbmltcG9ydCBNeVJlY3QgZnJvbSAnLi9jb250YWluZXJzL0NhbnZhcy5qcydcbmltcG9ydCBNYXBzIGZyb20gJy4vY29udGFpbmVycy9NYXBzJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9jb250YWluZXJzL1Byb2ZpbGUnXG5pbXBvcnQgUHJvZmlsZXMgZnJvbSAnLi9jb250YWluZXJzL1Byb2ZpbGVzJ1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL21vZHVsZXMvQXV0aCdcblxuY2xhc3MgQXV0aFJvdXRlIGV4dGVuZHMgUm91dGUge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoZWNrKCkpXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIHBhdGg9e3RoaXMucHJvcHMucGF0aH0gY29tcG9uZW50PXt0aGlzLnByb3BzLmNvbXBvbmVudH0gLz5cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy8nIH19IC8+XG4gICAgfVxuXG59XG5cbmNsYXNzIExvZ291dFJvdXRlIGV4dGVuZHMgUm91dGUge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBBdXRoLmRlYXV0aGVudGljYXRlKClcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy8nIH19IC8+XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbkZvcm19IC8+XG4gICAgICAgICAgICAgICAgPExvZ291dFJvdXRlIHBhdGg9Jy9sb2dvdXQnIC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UmVnaXN0cmF0aW9uRm9ybX0gLz5cbiAgICAgICAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy9jYW52YXMvOm1hcElkJyBjaGVjaz17QXV0aC5pc0F1dGhlbnRpY2F0ZWR9IGNvbXBvbmVudD17TXlSZWN0fSAvPlxuICAgICAgICAgICAgICAgIDxBdXRoUm91dGUgcGF0aD0nL21hcHMnIGNoZWNrPXtBdXRoLmlzQXV0aGVudGljYXRlZH0gY29tcG9uZW50PXtNYXBzfS8+XG4gICAgICAgICAgICAgICAgPEF1dGhSb3V0ZSBwYXRoPScvcHJvZmlsZScgY2hlY2s9e0F1dGguaXNBdXRoZW50aWNhdGVkfSBjb21wb25lbnQ9e1Byb2ZpbGV9Lz5cbiAgICAgICAgICAgICAgICA8QXV0aFJvdXRlIHBhdGg9Jy9wcm9maWxlcycgY2hlY2s9e0F1dGguaXNBZG1pbn0gY29tcG9uZW50PXtQcm9maWxlc30vPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgc2hhcGVzOiBbXSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5tYXBJZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkU2hhcGUgPSB0aGlzLmFkZFNoYXBlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydD10aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRyYWdNb3ZlPXRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25Nb3VzZU92ZXI9dGhpcy5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25Nb3VzZU91dD10aGlzLm9uTW91c2VPdXQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRGJsQ2xpY2s9dGhpcy5vbkRibENsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRibFRhcD10aGlzLm9uRGJsVGFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBhZGRTaGFwZSAoZSkgeyBjb25zb2xlLmxvZygnYWRkU2hhcGUgJywgZSkgfVxuICAgIG9uRHJhZ1N0YXJ0KGUpIHsgY29uc29sZS5sb2coJ29uRHJhZ1N0YXJ0JywgZSApIH1cbiAgICBvbkRyYWdNb3ZlKGUpIHsgY29uc29sZS5sb2coJ29uRHJhZ01vdmUnLCBlKSB9XG4gICAgb25Nb3VzZU92ZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU92ZXInLCBlKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgIH1cbiAgICBvbk1vdXNlT3V0KGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uTW91c2VPdXQnLCBlKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgIH1cbiAgICBvbkRibENsaWNrKGUpIHsgY29uc29sZS5sb2coJ29uRGJsQ2xpY2snLCBlKSB9XG4gICAgb25EYmxUYXAoZSkgeyBjb25zb2xlLmxvZygnb25EYmxUYXAnLCBlKSB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgYWRkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlc1xuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fVxuICAgICAgICAgICAgb25EcmFnTW92ZT17dGhpcy5vbkRyYWdNb3ZlfVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBvbkRibENsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgICAgICBvbkRibFRhcD17dGhpcy5vbkRibENsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGFsZXJ0KCdtYXBJZDonKyB0aGlzLnN0YXRlLmlkKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkU2hhcGV9PkFkZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zYXZlfT5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICA8U3RhZ2Ugd2lkdGg9ezE2MDB9IGhlaWdodD17OTAwfT5cbiAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNoYXBlcy5tYXAoc2hhcGUgPT4gc2hhcGUpfVxuICAgICAgICAgICAgICAgIDwvTGF5ZXI+XG4gICAgICAgICAgICA8L1N0YWdlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0NhbnZhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=