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

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        var shapes = [];
        shapes.push(_react2.default.createElement(_reactKonva.Rect, {
            x: Math.floor(Math.random() * 1600 + 1),
            y: Math.floor(Math.random() * 900 + 1),
            width: 100,
            height: 100,
            fill: _this.state.color,
            shadowBlur: 5,
            onClick: _this.handleClick
        }));
        _this.state = {
            color: 'green',
            shapes: shapes
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
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic2hhcGVzIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0YXRlIiwiY29sb3IiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwibWFwIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWUsK0JBQVcsRUFBRUEsZUFBZSxJQUFqQixFQUFYO0FBQUE7O0FBRVgsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixZQUFJQyxTQUFTLEVBQWI7QUFDQUEsZUFBT0MsSUFBUCxDQUFZO0FBQ1IsZUFBR0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLElBQWhCLEdBQXVCLENBQWxDLENBREs7QUFFUixlQUFHRixLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBakMsQ0FGSztBQUdSLG1CQUFPLEdBSEM7QUFJUixvQkFBUSxHQUpBO0FBS1Isa0JBQU0sTUFBS0MsS0FBTCxDQUFXQyxLQUxUO0FBTVIsd0JBQVksQ0FOSjtBQU9SLHFCQUFTLE1BQUtDO0FBUE4sVUFBWjtBQVNBLGNBQUtGLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxPQURFO0FBRVROO0FBRlMsU0FBYjtBQUlBLGNBQUtPLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFoQmU7QUFpQmxCOztBQW5CVTtBQUFBO0FBQUEsNENBcUJTO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBTyxPQUFULEVBQWQ7QUFDSDtBQXZCVTtBQUFBO0FBQUEsc0NBeUJHO0FBQ1YsZ0JBQUlOLFNBQVMsS0FBS0ssS0FBTCxDQUFXTCxNQUF4QjtBQUNBQSxtQkFBT0MsSUFBUCxDQUFZO0FBQ1IsbUJBQUdDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixJQUFoQixHQUF1QixDQUFsQyxDQURLO0FBRVIsbUJBQUdGLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFqQyxDQUZLO0FBR1IsdUJBQU8sR0FIQztBQUlSLHdCQUFRLEdBSkE7QUFLUixzQkFBTSxLQUFLQyxLQUFMLENBQVdDLEtBTFQ7QUFNUiw0QkFBWSxDQU5KO0FBT1IseUJBQVMsS0FBS0M7QUFQTixjQUFaO0FBU0EsaUJBQUtFLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0ksT0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxjQUFsQixFQURHO0FBRVZiO0FBRlUsYUFBZDtBQUlIO0FBeENVO0FBQUE7QUFBQSxpQ0EwQ0Y7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDQSxxRUFEQTtBQUVBO0FBQUE7QUFBQSxzQkFBTyxPQUFPLElBQWQsRUFBb0IsUUFBUSxHQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNLLDZCQUFLSyxLQUFMLENBQVdMLE1BQVgsQ0FBa0JjLEdBQWxCLENBQXNCO0FBQUEsbUNBQVNDLEtBQVQ7QUFBQSx5QkFBdEI7QUFETDtBQURKO0FBRkEsYUFESjtBQVVIO0FBckRVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC42MTczNTE5YzQwMmI0NGQwYTEzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2YmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zKHsgZWxlbWVudFJlc2l6ZTogdHJ1ZSB9KShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBzaGFwZXMgPSBbXVxuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIC8+KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBzaGFwZXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXNcbiAgICAgICAgc2hhcGVzLnB1c2goPFJlY3RcbiAgICAgICAgICAgIHg9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2MDAgKyAxKX1cbiAgICAgICAgICAgIHk9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEpfVxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==