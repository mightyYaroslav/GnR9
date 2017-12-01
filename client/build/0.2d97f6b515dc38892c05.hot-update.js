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
            color: 'green',
            shapes: []
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
            var shapes = this.state.shapes;
            shapes.push(_react2.default.createElement(_reactKonva.Rect, {
                x: Math.floor(Math.random() * 1600 + 1),
                y: Math.floor(Math.random() * 900 + 1),
                width: 100,
                height: 100,
                fill: this.state.color,
                shadowBlur: 5,
                onClick: this.handleClick
            }));
            this.setState({
                color: window.Konva.Util.getRandomColor(),
                shapes: shapes
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
                    this.state.shapes.map(function (shape) {
                        return shape;
                    })
                )
            );
        }
    }]);

    return MyRect;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwibWFwIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLE9BREU7QUFFVEMsb0JBQVE7QUFGQyxTQUFiO0FBSUEsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQU5lO0FBT2xCOztBQVRVO0FBQUE7QUFBQSw0Q0FXUztBQUNoQixpQkFBS0MsUUFBTCxDQUFjLEVBQUVKLE9BQU8sT0FBVCxFQUFkO0FBQ0g7QUFiVTtBQUFBO0FBQUEsc0NBZUc7QUFDVixnQkFBSUMsU0FBUyxLQUFLRixLQUFMLENBQVdFLE1BQXhCO0FBQ0FBLG1CQUFPSSxJQUFQLENBQVk7QUFDUixtQkFBR0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLElBQWhCLEdBQXVCLENBQWxDLENBREs7QUFFUixtQkFBR0YsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLENBQWpDLENBRks7QUFHUix1QkFBTyxHQUhDO0FBSVIsd0JBQVEsR0FKQTtBQUtSLHNCQUFNLEtBQUtULEtBQUwsQ0FBV0MsS0FMVDtBQU1SLDRCQUFZLENBTko7QUFPUix5QkFBUyxLQUFLRTtBQVBOLGNBQVo7QUFTQSxpQkFBS0UsUUFBTCxDQUFjO0FBQ1ZKLHVCQUFPUyxPQUFPQyxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLGNBQWxCLEVBREc7QUFFVlg7QUFGVSxhQUFkO0FBSUg7QUE5QlU7QUFBQTtBQUFBLGlDQWdDRjtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTyxPQUFPLElBQWQsRUFBb0IsUUFBUSxHQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNLLHlCQUFLRixLQUFMLENBQVdFLE1BQVgsQ0FBa0JZLEdBQWxCLENBQXNCO0FBQUEsK0JBQVNDLEtBQVQ7QUFBQSxxQkFBdEI7QUFETDtBQURKLGFBREo7QUFPSDtBQXhDVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuMmQ5N2Y2YjUxNWRjMzg4OTJjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zKHsgZWxlbWVudFJlc2l6ZTogdHJ1ZSB9KShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlczogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXNcbiAgICAgICAgc2hhcGVzLnB1c2goPFJlY3RcbiAgICAgICAgICAgIHg9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2MDAgKyAxKX1cbiAgICAgICAgICAgIHk9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEpfVxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbnZhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=