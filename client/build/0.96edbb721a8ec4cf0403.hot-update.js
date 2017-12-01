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
                { style: { minHeight: '100vh' } },
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
                    Object.keys(this.props.object).map(function (key) {
                        return _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            null,
                            key + ' : ' + _this2.props.object[key]
                        );
                    })
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

    return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsIm1pbkhlaWdodCIsInZpc2libGUiLCJPYmplY3QiLCJrZXlzIiwib2JqZWN0IiwibWFwIiwia2V5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBLHlDQUFTLFFBQVQ7QUFBQSxrQkFBa0IsT0FBTyxFQUFDQyxXQUFXLE9BQVosRUFBekI7QUFDSTtBQUFBO0FBQUE7QUFDSSxpREFESjtBQUVJLG1DQUFVLFNBRmQ7QUFHSSwrQkFBTSxPQUhWO0FBSUksbUNBQVUsT0FKZDtBQUtJLGlDQUFTLEtBQUtELEtBQUwsQ0FBV0UsT0FMeEI7QUFNSSw4QkFBSyxTQU5UO0FBT0k7QUFQSjtBQVNLQywyQkFBT0MsSUFBUCxDQUFZLEtBQUtKLEtBQUwsQ0FBV0ssTUFBdkIsRUFBK0JDLEdBQS9CLENBQW1DO0FBQUEsK0JBQ2hDO0FBQUEsa0RBQU0sSUFBTjtBQUFBO0FBQVlDLGtDQUFNLEtBQU4sR0FBYyxPQUFLUCxLQUFMLENBQVdLLE1BQVgsQ0FBa0JFLEdBQWxCO0FBQTFCLHlCQURnQztBQUFBLHFCQUFuQztBQVRMLGlCQURKO0FBY0k7QUFBQSw2Q0FBUyxNQUFUO0FBQUEsc0JBQWdCLDhCQUFoQjtBQUNJO0FBQUE7QUFBQSwwQkFBUyxXQUFUO0FBQ0ssNkJBQUtQLEtBQUwsQ0FBV1E7QUFEaEI7QUFESjtBQWRKLGFBREo7QUFzQkg7Ozs7OztrQkE3QmdCVCxPIiwiZmlsZSI6IjAuOTZlZGJiNzIxYThlYzRjZjA0MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZSBzdHlsZT17e21pbkhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J292ZXJsYXknXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPSdsYXJnZSdcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpY29uPSdsYWJlbGVkJ1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMub2JqZWN0KS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+e2tleSArICcgOiAnICsgdGhpcy5wcm9wcy5vYmplY3Rba2V5XX08L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlciBhcz17Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=