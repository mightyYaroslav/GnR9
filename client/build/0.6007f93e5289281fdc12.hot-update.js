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
        _this.onDragStart = _this.onDragStart.bind(_this);
        _this.onDragMove = _this.onDragMove.bind(_this);
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onDblClick = _this.onDblClick.bind(_this);
        _this.onDblTap = _this.onDblTap.bind(_this);
        return _this;
    }

    _createClass(MyRect, [{
        key: 'addShape',
        value: function addShape(e) {
            console.log('addShape ', e);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(e) {
            console.log('onDragStart', e);
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove(e) {
            console.log('onDragMove', e);
        }
    }, {
        key: 'onMouseOver',
        value: function onMouseOver(e) {
            console.log('onMouseOver', e);
            document.body.style.cursor;
        }
    }, {
        key: 'onMouseOut',
        value: function onMouseOut(e) {
            console.log('onMouseOut', e);
        }
    }, {
        key: 'onDblClick',
        value: function onDblClick(e) {
            console.log('onDblClick', e);
        }
    }, {
        key: 'onDblTap',
        value: function onDblTap(e) {
            console.log('onDblTap', e);
        }
    }, {
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
                draggable: true,
                onClick: this.handleClick,
                onDragStart: this.onDragStart,
                onDragMove: this.onDragMove,
                onMouseOver: this.onMouseOver,
                onMouseOut: this.onMouseOut,
                onDblClick: this.onDblClick,
                onDblTap: this.onDblClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImFkZFNoYXBlIiwiYmluZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnTW92ZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uRGJsQ2xpY2siLCJvbkRibFRhcCIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJzZXRTdGF0ZSIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwibWFwIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWUsK0JBQVcsRUFBRUEsZUFBZSxJQUFqQixFQUFYO0FBQUE7O0FBRVgsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhlLG9IQUNUQSxLQURTOztBQVlmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxPQURFO0FBRVRDLG9CQUFRO0FBRkMsU0FBYjtBQUlBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsY0FBS0MsV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFqQjtBQUNBLGNBQUtFLFVBQUwsR0FBZ0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIsT0FBaEI7QUFDQSxjQUFLRyxXQUFMLEdBQWlCLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLE9BQWpCO0FBQ0EsY0FBS0ksVUFBTCxHQUFnQixNQUFLQSxVQUFMLENBQWdCSixJQUFoQixPQUFoQjtBQUNBLGNBQUtLLFVBQUwsR0FBZ0IsTUFBS0EsVUFBTCxDQUFnQkwsSUFBaEIsT0FBaEI7QUFDQSxjQUFLTSxRQUFMLEdBQWMsTUFBS0EsUUFBTCxDQUFjTixJQUFkLE9BQWQ7QUF0QmU7QUF1QmxCOztBQXpCVTtBQUFBO0FBQUEsaUNBMkJETyxDQTNCQyxFQTJCRTtBQUFFQyxvQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJGLENBQXpCO0FBQTZCO0FBM0JqQztBQUFBO0FBQUEsb0NBNEJDQSxDQTVCRCxFQTRCSTtBQUFFQyxvQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLENBQTNCO0FBQWdDO0FBNUJ0QztBQUFBO0FBQUEsbUNBNkJBQSxDQTdCQSxFQTZCRztBQUFFQyxvQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLENBQTFCO0FBQThCO0FBN0JuQztBQUFBO0FBQUEsb0NBOEJDQSxDQTlCRCxFQThCSTtBQUNYQyxvQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLENBQTNCO0FBQ0FHLHFCQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCO0FBQ0g7QUFqQ1U7QUFBQTtBQUFBLG1DQWtDQU4sQ0FsQ0EsRUFrQ0c7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUE4QjtBQWxDbkM7QUFBQTtBQUFBLG1DQW1DQUEsQ0FuQ0EsRUFtQ0c7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUE4QjtBQW5DbkM7QUFBQTtBQUFBLGlDQW9DRkEsQ0FwQ0UsRUFvQ0M7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixDQUF4QjtBQUE0QjtBQXBDL0I7QUFBQTtBQUFBLDRDQXNDUztBQUNoQixpQkFBS08sUUFBTCxDQUFjLEVBQUVqQixPQUFPLE9BQVQsRUFBZDtBQUNIO0FBeENVO0FBQUE7QUFBQSxtQ0EwQ0E7QUFDUCxnQkFBSUMsU0FBUyxLQUFLRixLQUFMLENBQVdFLE1BQXhCO0FBQ0FBLG1CQUFPaUIsSUFBUCxDQUFZO0FBQ1IsbUJBQUdDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixJQUFoQixHQUF1QixDQUFsQyxDQURLO0FBRVIsbUJBQUdGLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFqQyxDQUZLO0FBR1IsdUJBQU8sR0FIQztBQUlSLHdCQUFRLEdBSkE7QUFLUixzQkFBTSxLQUFLdEIsS0FBTCxDQUFXQyxLQUxUO0FBTVIsNEJBQVksQ0FOSjtBQU9SLCtCQVBRO0FBUVIseUJBQVMsS0FBS3NCLFdBUk47QUFTUiw2QkFBYSxLQUFLbEIsV0FUVjtBQVVSLDRCQUFZLEtBQUtDLFVBVlQ7QUFXUiw2QkFBYSxLQUFLQyxXQVhWO0FBWVIsNEJBQVksS0FBS0MsVUFaVDtBQWFSLDRCQUFZLEtBQUtDLFVBYlQ7QUFjUiwwQkFBVSxLQUFLQTtBQWRQLGNBQVo7QUFnQkEsaUJBQUtTLFFBQUwsQ0FBYztBQUNWakIsdUJBQU91QixPQUFPQyxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLGNBQWxCLEVBREc7QUFFVnpCO0FBRlUsYUFBZDtBQUlIO0FBaEVVO0FBQUE7QUFBQSxpQ0FrRUY7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDQSxxRUFEQTtBQUVJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLEtBQUtDLFFBQXRCO0FBQUE7QUFBQSxpQkFGSjtBQUdBO0FBQUE7QUFBQSxzQkFBTyxPQUFPLElBQWQsRUFBb0IsUUFBUSxHQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNLLDZCQUFLSCxLQUFMLENBQVdFLE1BQVgsQ0FBa0IwQixHQUFsQixDQUFzQjtBQUFBLG1DQUFTQyxLQUFUO0FBQUEseUJBQXRCO0FBREw7QUFESjtBQUhBLGFBREo7QUFXSDtBQTlFVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuNjAwN2Y5M2U1Mjg5MjgxZmRjMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2YmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zKHsgZWxlbWVudFJlc2l6ZTogdHJ1ZSB9KShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIC8vIGxldCBzaGFwZXMgPSBbXVxuICAgICAgICAvLyBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAvLyAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAvLyAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgIC8vICAgICB3aWR0aD17MTAwfVxuICAgICAgICAvLyAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIC8vICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAvLyAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgLy8gICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIC8vIC8+KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBzaGFwZXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRTaGFwZSA9IHRoaXMuYWRkU2hhcGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0PXRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ01vdmU9dGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3Zlcj10aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3V0PXRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxDbGljaz10aGlzLm9uRGJsQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRGJsVGFwPXRoaXMub25EYmxUYXAuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZFNoYXBlIChlKSB7IGNvbnNvbGUubG9nKCdhZGRTaGFwZSAnLCBlKSB9XG4gICAgb25EcmFnU3RhcnQoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnU3RhcnQnLCBlICkgfVxuICAgIG9uRHJhZ01vdmUoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnTW92ZScsIGUpIH1cbiAgICBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3ZlcicsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yXG4gICAgfVxuICAgIG9uTW91c2VPdXQoZSkgeyBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpIH1cbiAgICBvbkRibENsaWNrKGUpIHsgY29uc29sZS5sb2coJ29uRGJsQ2xpY2snLCBlKSB9XG4gICAgb25EYmxUYXAoZSkgeyBjb25zb2xlLmxvZygnb25EYmxUYXAnLCBlKSB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgYWRkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlc1xuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fVxuICAgICAgICAgICAgb25EcmFnTW92ZT17dGhpcy5vbkRyYWdNb3ZlfVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBvbkRibENsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgICAgICBvbkRibFRhcD17dGhpcy5vbkRibENsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkU2hhcGV9PkFkZDwvQnV0dG9uPlxuICAgICAgICAgICAgPFN0YWdlIHdpZHRoPXsxNjAwfSBoZWlnaHQ9ezkwMH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZXMubWFwKHNoYXBlID0+IHNoYXBlKX1cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9