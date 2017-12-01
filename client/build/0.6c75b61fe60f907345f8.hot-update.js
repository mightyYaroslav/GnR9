webpackHotUpdate(0,{

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInfoSideBar = function (_Component) {
    _inherits(MapInfoSideBar, _Component);

    function MapInfoSideBar(props) {
        _classCallCheck(this, MapInfoSideBar);

        return _possibleConstructorReturn(this, (MapInfoSideBar.__proto__ || Object.getPrototypeOf(MapInfoSideBar)).call(this, props));
    }

    _createClass(MapInfoSideBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Sidebar.Pushable,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Sidebar,
                    {
                        as: _semanticUiReact.Menu,
                        animation: 'overlay',
                        width: 'large',
                        direction: 'right',
                        visible: this.props.visible,
                        icon: 'labeled',
                        vertical: true
                    },
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        'Name: ',
                        this.props.object.name
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        'Descrption: ',
                        this.props.object.desc
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Sidebar.Pusher,
                    { as: _semanticUiReact.Container },
                    _react2.default.createElement(
                        _semanticUiReact.Segment,
                        { basic: true },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return MapInfoSideBar;
}(_react.Component);

exports.default = MapInfoSideBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBJbmZvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJNYXBJbmZvU2lkZUJhciIsInByb3BzIiwidmlzaWJsZSIsIm9iamVjdCIsIm5hbWUiLCJkZXNjIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBRWpCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0hBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBLHlDQUFTLFFBQVQ7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLGlEQURKO0FBRUksbUNBQVUsU0FGZDtBQUdJLCtCQUFNLE9BSFY7QUFJSSxtQ0FBVSxPQUpkO0FBS0ksaUNBQVMsS0FBS0EsS0FBTCxDQUFXQyxPQUx4QjtBQU1JLDhCQUFLLFNBTlQ7QUFPSTtBQVBKO0FBU0k7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFBQTtBQUNXLDZCQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDO0FBRDdCLHFCQVRKO0FBWUk7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFBQTtBQUNpQiw2QkFBS0gsS0FBTCxDQUFXRSxNQUFYLENBQWtCRTtBQURuQztBQVpKLGlCQURKO0FBaUJJO0FBQUEsNkNBQVMsTUFBVDtBQUFBLHNCQUFnQiw4QkFBaEI7QUFDSTtBQUFBO0FBQUEsMEJBQVMsV0FBVDtBQUNLLDZCQUFLSixLQUFMLENBQVdLO0FBRGhCO0FBREo7QUFqQkosYUFESjtBQXlCSDs7Ozs7O2tCQWhDZ0JOLGMiLCJmaWxlIjoiMC42Yzc1YjYxZmU2MGY5MDczNDVmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTaWRlYmFyLCBTZWdtZW50LCBCdXR0b24sIE1lbnUsIEltYWdlLCBJY29uLCBIZWFkZXIsIExhYmVsLCBDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBJbmZvU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cbiAgICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdvdmVybGF5J1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nbGFiZWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiB7dGhpcy5wcm9wcy5vYmplY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcnB0aW9uOiB7dGhpcy5wcm9wcy5vYmplY3QuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlciBhcz17Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwSW5mb1NpZGViYXIuanMiXSwic291cmNlUm9vdCI6IiJ9