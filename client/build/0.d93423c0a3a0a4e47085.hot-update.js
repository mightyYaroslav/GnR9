webpackHotUpdate(0,{

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactKonva = __webpack_require__(910);

var _reactDimensions = __webpack_require__(917);

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactDimensions2.default)({ elementResize: true })(function (_Component) {
    _inherits(MyRect, _Component);

    function MyRect(props) {
        _classCallCheck(this, MyRect);

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green'
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(MyRect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ color: 'green' });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState({
                color: window.Konva.Util.getRandomColor()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactKonva.Stage,
                { width: 1600, height: 900 },
                _react2.default.createElement(
                    _reactKonva.Layer,
                    null,
                    _react2.default.createElement(_reactKonva.Rect, {
                        x: 10,
                        y: 10,
                        width: 500,
                        height: 500,
                        fill: this.state.color,
                        shadowBlur: 5,
                        onClick: this.handleClick
                    })
                )
            );
        }
    }]);

    return MyRect;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFMZTtBQU1sQjs7QUFSVTtBQUFBO0FBQUEsNENBVVM7QUFDaEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLE9BQVQsRUFBZDtBQUNIO0FBWlU7QUFBQTtBQUFBLHNDQWNHO0FBQ1YsaUJBQUtHLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0ksT0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxjQUFsQjtBQURHLGFBQWQ7QUFHSDtBQWxCVTtBQUFBO0FBQUEsaUNBb0JGO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFPLE9BQU8sSUFBZCxFQUFvQixRQUFRLEdBQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFDSSwyQkFBRyxFQURQO0FBRUksMkJBQUcsRUFGUDtBQUdJLCtCQUFPLEdBSFg7QUFJSSxnQ0FBUSxHQUpaO0FBS0ksOEJBQU0sS0FBS1IsS0FBTCxDQUFXQyxLQUxyQjtBQU1JLG9DQUFZLENBTmhCO0FBT0ksaUNBQVMsS0FBS0M7QUFQbEI7QUFESjtBQURKLGFBREo7QUFlSDtBQXBDVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuZDkzNDIzYzBhM2EwYTRlNDcwODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zKHsgZWxlbWVudFJlc2l6ZTogdHJ1ZSB9KShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhZ2Ugd2lkdGg9ezE2MDB9IGhlaWdodD17OTAwfT5cbiAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHk9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGF5ZXI+XG4gICAgICAgICAgICA8L1N0YWdlPlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9