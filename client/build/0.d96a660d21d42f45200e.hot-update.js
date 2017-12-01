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
                    null,
                    _react2.default.createElement(_semanticUiReact.Segment, { basic: true })
                )
            );
        }
    }]);

    return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsInZpc2libGUiLCJPYmplY3QiLCJrZXlzIiwib2JqZWN0IiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQSx5Q0FBUyxRQUFUO0FBQUEsa0JBQWtCLDRCQUFsQjtBQUNJO0FBQUE7QUFBQTtBQUNJLGlEQURKO0FBRUksbUNBQVUsU0FGZDtBQUdJLCtCQUFNLE9BSFY7QUFJSSxtQ0FBVSxPQUpkO0FBS0ksaUNBQVMsS0FBS0EsS0FBTCxDQUFXQyxPQUx4QjtBQU1JLDhCQUFLLFNBTlQ7QUFPSTtBQVBKO0FBU0tDLDJCQUFPQyxJQUFQLENBQVksS0FBS0gsS0FBTCxDQUFXSSxNQUF2QixFQUErQkMsR0FBL0IsQ0FBbUM7QUFBQSwrQkFDaEM7QUFBQSxrREFBTSxJQUFOO0FBQUE7QUFBWUMsa0NBQU0sS0FBTixHQUFjLE9BQUtOLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkUsR0FBbEI7QUFBMUIseUJBRGdDO0FBQUEscUJBQW5DO0FBVEwsaUJBREo7QUFjSTtBQUFBLDZDQUFTLE1BQVQ7QUFBQTtBQUNJLDhFQUFTLFdBQVQ7QUFESjtBQWRKLGFBREo7QUF1Qkg7Ozs7OztrQkE5QmdCUCxPIiwiZmlsZSI6IjAuZDk2YTY2MGQyMWQ0MmY0NTIwMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpZGViYXIuUHVzaGFibGUgYXM9e1NlZ21lbnR9PlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtNZW51fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J292ZXJsYXknXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPSdsYXJnZSdcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpY29uPSdsYWJlbGVkJ1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMub2JqZWN0KS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+e2tleSArICcgOiAnICsgdGhpcy5wcm9wcy5vYmplY3Rba2V5XX08L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKnt0aGlzLnByb3BzLmNvbnRlbnR9Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxuICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanMiXSwic291cmNlUm9vdCI6IiJ9