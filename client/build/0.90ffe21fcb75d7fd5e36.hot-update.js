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
                _react2.default.createElement(
                    _semanticUiReact.Sidebar,
                    {
                        as: _semanticUiReact.Menu,
                        animation: 'overlay',
                        width: 'large',
                        direction: 'right',
                        visible: this.state.visible,
                        icon: 'labeled',
                        vertical: true
                    },
                    Object.keys(this.props.object).map(function (key) {
                        return _react2.default.createElement(
                            _semanticUiReact.Label,
                            null,
                            key + ' : ' + _this2.props.object[key]
                        );
                    })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Sidebar.Pusher,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Segment,
                        { basic: true },
                        this.props.content
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsInN0YXRlIiwidmlzaWJsZSIsIk9iamVjdCIsImtleXMiLCJvYmplY3QiLCJtYXAiLCJrZXkiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7O0FBRUYscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUEseUNBQVMsUUFBVDtBQUFBLGtCQUFrQiw0QkFBbEI7QUFDSTtBQUFBO0FBQUE7QUFDSSxpREFESjtBQUVJLG1DQUFVLFNBRmQ7QUFHSSwrQkFBTSxPQUhWO0FBSUksbUNBQVUsT0FKZDtBQUtJLGlDQUFTLEtBQUtDLEtBQUwsQ0FBV0MsT0FMeEI7QUFNSSw4QkFBSyxTQU5UO0FBT0k7QUFQSjtBQVNLQywyQkFBT0MsSUFBUCxDQUFZLEtBQUtKLEtBQUwsQ0FBV0ssTUFBdkIsRUFBK0JDLEdBQS9CLENBQW1DO0FBQUEsK0JBQ2hDO0FBQUE7QUFBQTtBQUFRQyxrQ0FBTSxLQUFOLEdBQWMsT0FBS1AsS0FBTCxDQUFXSyxNQUFYLENBQWtCRSxHQUFsQjtBQUF0Qix5QkFEZ0M7QUFBQSxxQkFBbkM7QUFUTCxpQkFESjtBQWNJO0FBQUEsNkNBQVMsTUFBVDtBQUFBO0FBQ0k7QUFBQTtBQUFBLDBCQUFTLFdBQVQ7QUFDSyw2QkFBS1AsS0FBTCxDQUFXUTtBQURoQjtBQURKO0FBZEosYUFESjtBQXNCSDs7Ozs7O2tCQUdVVCxPIiwiZmlsZSI6IjAuOTBmZmUyMWZjYjc1ZDdmZDVlMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J292ZXJsYXknXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPSdsYXJnZSdcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpY29uPSdsYWJlbGVkJ1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMub2JqZWN0KS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD57a2V5ICsgJyA6ICcgKyB0aGlzLnByb3BzLm9iamVjdFtrZXldfTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XG4gICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==