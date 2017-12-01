webpackHotUpdate(0,{

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_Component) {
    _inherits(SideBar, _Component);

    function SideBar(props) {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));
    }

    _createClass(SideBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _semanticUiReact.Sidebar.Pushable,
                { as: _semanticUiReact.Segment },
                _react2.default.createElement(_semanticUiReact.Sidebar, {
                    as: _semanticUiReact.Menu,
                    animation: 'overlay',
                    width: 'large',
                    direction: 'right',
                    visible: this.props.visible,
                    icon: 'labeled',
                    vertical: true
                }),
                _react2.default.createElement(
                    _semanticUiReact.Sidebar.Pusher,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Segment,
                        { basic: true },
                        Object.keys(this.props.object).map(function (key) {
                            return _react2.default.createElement(
                                _semanticUiReact.Label,
                                null,
                                key + ' : ' + _this2.props.object[key]
                            );
                        })
                    )
                )
            );
        }
    }]);

    return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsInZpc2libGUiLCJPYmplY3QiLCJrZXlzIiwib2JqZWN0IiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQSx5Q0FBUyxRQUFUO0FBQUEsa0JBQWtCLDRCQUFsQjtBQUNJO0FBQ0ksNkNBREo7QUFFSSwrQkFBVSxTQUZkO0FBR0ksMkJBQU0sT0FIVjtBQUlJLCtCQUFVLE9BSmQ7QUFLSSw2QkFBUyxLQUFLQSxLQUFMLENBQVdDLE9BTHhCO0FBTUksMEJBQUssU0FOVDtBQU9JO0FBUEosa0JBREo7QUFZSTtBQUFBLDZDQUFTLE1BQVQ7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBUyxXQUFUO0FBQ0tDLCtCQUFPQyxJQUFQLENBQVksS0FBS0gsS0FBTCxDQUFXSSxNQUF2QixFQUErQkMsR0FBL0IsQ0FBbUM7QUFBQSxtQ0FDaEM7QUFBQTtBQUFBO0FBQVFDLHNDQUFNLEtBQU4sR0FBYyxPQUFLTixLQUFMLENBQVdJLE1BQVgsQ0FBa0JFLEdBQWxCO0FBQXRCLDZCQURnQztBQUFBLHlCQUFuQztBQURMO0FBREo7QUFaSixhQURKO0FBdUJIOzs7Ozs7a0JBOUJnQlAsTyIsImZpbGUiOiIwLmMxN2MzZmQwODgwYWQ4MWFjZjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpZGViYXIsIFNlZ21lbnQsIEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlciwgTGFiZWx9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlIGFzPXtTZWdtZW50fT5cbiAgICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdvdmVybGF5J1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nbGFiZWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyPlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm9iamVjdCkubWFwKGtleSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPntrZXkgKyAnIDogJyArIHRoaXMucHJvcHMub2JqZWN0W2tleV19PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qe3RoaXMucHJvcHMuY29udGVudH0qL31cbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=