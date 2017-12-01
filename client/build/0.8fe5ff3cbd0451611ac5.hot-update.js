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

var _reactRouterDom = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
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
        _this.save = _this.save.bind(_this);
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
            document.body.style.cursor = 'pointer';
        }
    }, {
        key: 'onMouseOut',
        value: function onMouseOut(e) {
            console.log('onMouseOut', e);
            document.body.style.cursor = 'default';
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
        key: 'save',
        value: function save() {}
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
                    _semanticUiReact.Button,
                    { onClick: this.save },
                    'Save'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImNvbG9yIiwic2hhcGVzIiwiYWRkU2hhcGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25EYmxDbGljayIsIm9uRGJsVGFwIiwic2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJzZXRTdGF0ZSIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwibWFwIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFFWCxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWGUsb0hBQ1RBLEtBRFM7O0FBWWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLE9BREU7QUFFVEMsb0JBQVE7QUFGQyxTQUFiO0FBSUEsY0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxjQUFLQyxXQUFMLEdBQWlCLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQWpCO0FBQ0EsY0FBS0UsVUFBTCxHQUFnQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQixPQUFoQjtBQUNBLGNBQUtHLFdBQUwsR0FBaUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBakI7QUFDQSxjQUFLSSxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JKLElBQWhCLE9BQWhCO0FBQ0EsY0FBS0ssVUFBTCxHQUFn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S0FBVDtBQUFBLHlCQUF0QjtBQURMO0FBREo7QUFKQSxhQURKO0FBWUg7QUF2RlU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjhmZTVmZjNjYmQwNDUxNjExYWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5ZXIsIFJlY3QsIFN0YWdlLCBHcm91cCB9IGZyb20gJ3JlYWN0LWtvbnZhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIC8vIGxldCBzaGFwZXMgPSBbXVxuICAgICAgICAvLyBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAvLyAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAvLyAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgIC8vICAgICB3aWR0aD17MTAwfVxuICAgICAgICAvLyAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIC8vICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAvLyAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgLy8gICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIC8vIC8+KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBzaGFwZXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRTaGFwZSA9IHRoaXMuYWRkU2hhcGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0PXRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ01vdmU9dGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3Zlcj10aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3V0PXRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxDbGljaz10aGlzLm9uRGJsQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRGJsVGFwPXRoaXMub25EYmxUYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZFNoYXBlIChlKSB7IGNvbnNvbGUubG9nKCdhZGRTaGFwZSAnLCBlKSB9XG4gICAgb25EcmFnU3RhcnQoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnU3RhcnQnLCBlICkgfVxuICAgIG9uRHJhZ01vdmUoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnTW92ZScsIGUpIH1cbiAgICBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3ZlcicsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfVxuICAgIG9uTW91c2VPdXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgfVxuICAgIG9uRGJsQ2xpY2soZSkgeyBjb25zb2xlLmxvZygnb25EYmxDbGljaycsIGUpIH1cbiAgICBvbkRibFRhcChlKSB7IGNvbnNvbGUubG9nKCdvbkRibFRhcCcsIGUpIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6ICdncmVlbicgfSlcbiAgICB9XG5cbiAgICBhZGRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzXG4gICAgICAgIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9XG4gICAgICAgICAgICBvbkRyYWdNb3ZlPXt0aGlzLm9uRHJhZ01vdmV9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9e3RoaXMub25EYmxDbGlja31cbiAgICAgICAgICAgIG9uRGJsVGFwPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgIC8+KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiB3aW5kb3cuS29udmEuVXRpbC5nZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgc2hhcGVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkU2hhcGV9PkFkZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zYXZlfT5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICA8U3RhZ2Ugd2lkdGg9ezE2MDB9IGhlaWdodD17OTAwfT5cbiAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNoYXBlcy5tYXAoc2hhcGUgPT4gc2hhcGUpfVxuICAgICAgICAgICAgICAgIDwvTGF5ZXI+XG4gICAgICAgICAgICA8L1N0YWdlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbnZhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=