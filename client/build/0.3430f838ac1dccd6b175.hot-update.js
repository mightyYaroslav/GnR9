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

var _reactSemanticUi = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-semantic-ui\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
                    _reactSemanticUi.Button,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImFkZFNoYXBlIiwiYmluZCIsInNldFN0YXRlIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUNsaWNrIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiLCJtYXAiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztrQkFFZSwrQkFBVyxFQUFFQSxlQUFlLElBQWpCLEVBQVg7QUFBQTs7QUFFWCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWGUsb0hBQ1RBLEtBRFM7O0FBWWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLE9BREU7QUFFVEMsb0JBQVE7QUFGQyxTQUFiO0FBSUEsY0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFoQmU7QUFpQmxCOztBQW5CVTtBQUFBO0FBQUEsNENBcUJTO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWMsRUFBRUosT0FBTyxPQUFULEVBQWQ7QUFDSDtBQXZCVTtBQUFBO0FBQUEsbUNBeUJBO0FBQ1AsZ0JBQUlDLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxNQUF4QjtBQUNBQSxtQkFBT0ksSUFBUCxDQUFZO0FBQ1IsbUJBQUdDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixJQUFoQixHQUF1QixDQUFsQyxDQURLO0FBRVIsbUJBQUdGLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFqQyxDQUZLO0FBR1IsdUJBQU8sR0FIQztBQUlSLHdCQUFRLEdBSkE7QUFLUixzQkFBTSxLQUFLVCxLQUFMLENBQVdDLEtBTFQ7QUFNUiw0QkFBWSxDQU5KO0FBT1IseUJBQVMsS0FBS1M7QUFQTixjQUFaO0FBU0EsaUJBQUtMLFFBQUwsQ0FBYztBQUNWSix1QkFBT1UsT0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxjQUFsQixFQURHO0FBRVZaO0FBRlUsYUFBZDtBQUlIO0FBeENVO0FBQUE7QUFBQSxpQ0EwQ0Y7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDQSxxRUFEQTtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLEtBQUtDLFFBQXRCO0FBQUE7QUFBQSxpQkFGSjtBQUdBO0FBQUE7QUFBQSxzQkFBTyxPQUFPLElBQWQsRUFBb0IsUUFBUSxHQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNLLDZCQUFLSCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JhLEdBQWxCLENBQXNCO0FBQUEsbUNBQVNDLEtBQVQ7QUFBQSx5QkFBdEI7QUFETDtBQURKO0FBSEEsYUFESjtBQVdIO0FBdERVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC4zNDMwZjgzOGFjMWRjY2Q2YjE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNlbWFudGljLXVpJ1xuaW1wb3J0IERpbWVuc2lvbnMgZnJvbSAncmVhY3QtZGltZW5zaW9ucydcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZiYXInXG5cbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoeyBlbGVtZW50UmVzaXplOiB0cnVlIH0pKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgLy8gbGV0IHNoYXBlcyA9IFtdXG4gICAgICAgIC8vIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgIC8vICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgIC8vICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgLy8gICAgIHdpZHRoPXsxMDB9XG4gICAgICAgIC8vICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgLy8gICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgIC8vICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAvLyAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLy8gLz4pXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlczogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFNoYXBlID0gdGhpcy5hZGRTaGFwZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgIH1cblxuICAgIGFkZFNoYXBlKCkge1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXNcbiAgICAgICAgc2hhcGVzLnB1c2goPFJlY3RcbiAgICAgICAgICAgIHg9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2MDAgKyAxKX1cbiAgICAgICAgICAgIHk9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEpfVxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkU2hhcGV9PkFkZDwvQnV0dG9uPlxuICAgICAgICAgICAgPFN0YWdlIHdpZHRoPXsxNjAwfSBoZWlnaHQ9ezkwMH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZXMubWFwKHNoYXBlID0+IHNoYXBlKX1cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9