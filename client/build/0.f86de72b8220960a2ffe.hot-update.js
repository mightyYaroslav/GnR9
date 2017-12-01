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

var _semanticUiReact = __webpack_require__(18);

var _reactDimensions = __webpack_require__(917);

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

var _navbar = __webpack_require__(75);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactDimensions2.default)({ elementResize: true })(function (_Component) {
    _inherits(MyRect, _Component);

    function MyRect(props) {
        _classCallCheck(this, MyRect);

        // let shapes = []
        // shapes.push(<Rect
        //     x={Math.floor(Math.random() * 1600 + 1)}
        //     y={Math.floor(Math.random() * 900 + 1)}
        //     width={100}
        //     height={100}
        //     fill={this.state.color}
        //     shadowBlur={5}
        //     onClick={this.handleClick}
        // />)
        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green',
            shapes: []
        };
        _this.addShape = _this.addShape.bind(_this);
        return _this;
    }

    _createClass(MyRect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ color: 'green' });
        }
    }, {
        key: 'addShape',
        value: function addShape() {
            alert(window);
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
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { onClick: this.addShape },
                    'Add'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImFkZFNoYXBlIiwiYmluZCIsInNldFN0YXRlIiwiYWxlcnQiLCJ3aW5kb3ciLCJwdXNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlQ2xpY2siLCJLb252YSIsIlV0aWwiLCJnZXRSYW5kb21Db2xvciIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYZSxvSEFDVEEsS0FEUzs7QUFZZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUQyxvQkFBUTtBQUZDLFNBQWI7QUFJQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQWhCZTtBQWlCbEI7O0FBbkJVO0FBQUE7QUFBQSw0Q0FxQlM7QUFDaEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFSixPQUFPLE9BQVQsRUFBZDtBQUNIO0FBdkJVO0FBQUE7QUFBQSxtQ0F5QkE7QUFDUEssa0JBQU1DLE1BQU47QUFDQSxnQkFBSUwsU0FBUyxLQUFLRixLQUFMLENBQVdFLE1BQXhCO0FBQ0FBLG1CQUFPTSxJQUFQLENBQVk7QUFDUixtQkFBR0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLElBQWhCLEdBQXVCLENBQWxDLENBREs7QUFFUixtQkFBR0YsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLENBQWpDLENBRks7QUFHUix1QkFBTyxHQUhDO0FBSVIsd0JBQVEsR0FKQTtBQUtSLHNCQUFNLEtBQUtYLEtBQUwsQ0FBV0MsS0FMVDtBQU1SLDRCQUFZLENBTko7QUFPUix5QkFBUyxLQUFLVztBQVBOLGNBQVo7QUFTQSxpQkFBS1AsUUFBTCxDQUFjO0FBQ1ZKLHVCQUFPTSxPQUFPTSxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLGNBQWxCLEVBREc7QUFFVmI7QUFGVSxhQUFkO0FBSUg7QUF6Q1U7QUFBQTtBQUFBLGlDQTJDRjtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNBLHFFQURBO0FBRUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsS0FBS0MsUUFBdEI7QUFBQTtBQUFBLGlCQUZKO0FBR0E7QUFBQTtBQUFBLHNCQUFPLE9BQU8sSUFBZCxFQUFvQixRQUFRLEdBQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0ssNkJBQUtILEtBQUwsQ0FBV0UsTUFBWCxDQUFrQmMsR0FBbEIsQ0FBc0I7QUFBQSxtQ0FBU0MsS0FBVDtBQUFBLHlCQUF0QjtBQURMO0FBREo7QUFIQSxhQURKO0FBV0g7QUF2RFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLmY4NmRlNzJiODIyMDk2MGEyZmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5ZXIsIFJlY3QsIFN0YWdlLCBHcm91cCB9IGZyb20gJ3JlYWN0LWtvbnZhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhcidcblxuZXhwb3J0IGRlZmF1bHQgRGltZW5zaW9ucyh7IGVsZW1lbnRSZXNpemU6IHRydWUgfSkoY2xhc3MgTXlSZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICAvLyBsZXQgc2hhcGVzID0gW11cbiAgICAgICAgLy8gc2hhcGVzLnB1c2goPFJlY3RcbiAgICAgICAgLy8gICAgIHg9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2MDAgKyAxKX1cbiAgICAgICAgLy8gICAgIHk9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEpfVxuICAgICAgICAvLyAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgLy8gICAgIGhlaWdodD17MTAwfVxuICAgICAgICAvLyAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgLy8gICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgIC8vICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAvLyAvPilcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgc2hhcGVzOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkU2hhcGUgPSB0aGlzLmFkZFNoYXBlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgYWRkU2hhcGUoKSB7XG4gICAgICAgIGFsZXJ0KHdpbmRvdylcbiAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzXG4gICAgICAgIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLz4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKCksXG4gICAgICAgICAgICBzaGFwZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFNoYXBlfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==