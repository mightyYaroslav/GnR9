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
                { width: this.props.containerWidth, height: this.props.containerHeight },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWUsK0JBQVcsRUFBRUEsZUFBZSxJQUFqQixFQUFYO0FBQUE7O0FBRVgsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU87QUFERSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUxlO0FBTWxCOztBQVJVO0FBQUE7QUFBQSw0Q0FVUztBQUNoQixpQkFBS0MsUUFBTCxDQUFjLEVBQUVILE9BQU8sT0FBVCxFQUFkO0FBQ0g7QUFaVTtBQUFBO0FBQUEsc0NBY0c7QUFDVixpQkFBS0csUUFBTCxDQUFjO0FBQ1ZILHVCQUFPSSxPQUFPQyxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLGNBQWxCO0FBREcsYUFBZDtBQUdIO0FBbEJVO0FBQUE7QUFBQSxpQ0FvQkY7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU8sT0FBTyxLQUFLVCxLQUFMLENBQVdVLGNBQXpCLEVBQXlDLFFBQVEsS0FBS1YsS0FBTCxDQUFXVyxlQUE1RDtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQ0ksMkJBQUcsRUFEUDtBQUVJLDJCQUFHLEVBRlA7QUFHSSwrQkFBTyxHQUhYO0FBSUksZ0NBQVEsR0FKWjtBQUtJLDhCQUFNLEtBQUtWLEtBQUwsQ0FBV0MsS0FMckI7QUFNSSxvQ0FBWSxDQU5oQjtBQU9JLGlDQUFTLEtBQUtDO0FBUGxCO0FBREo7QUFESixhQURKO0FBZUg7QUFwQ1U7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjhkNzIyMGUwYzRlMjEzMTQyMGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5ZXIsIFJlY3QsIFN0YWdlLCBHcm91cCB9IGZyb20gJ3JlYWN0LWtvbnZhJ1xuaW1wb3J0IERpbWVuc2lvbnMgZnJvbSAncmVhY3QtZGltZW5zaW9ucydcblxuZXhwb3J0IGRlZmF1bHQgRGltZW5zaW9ucyh7IGVsZW1lbnRSZXNpemU6IHRydWUgfSkoY2xhc3MgTXlSZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiB3aW5kb3cuS29udmEuVXRpbC5nZXRSYW5kb21Db2xvcigpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWdlIHdpZHRoPXt0aGlzLnByb3BzLmNvbnRhaW5lcldpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuY29udGFpbmVySGVpZ2h0fT5cbiAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHk9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGF5ZXI+XG4gICAgICAgICAgICA8L1N0YWdlPlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9