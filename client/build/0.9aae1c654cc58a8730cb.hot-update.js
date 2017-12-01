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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImFkZFNoYXBlIiwiYmluZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnTW92ZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uRGJsQ2xpY2siLCJvbkRibFRhcCIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJwdXNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJLb252YSIsIlV0aWwiLCJnZXRSYW5kb21Db2xvciIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYZSxvSEFDVEEsS0FEUzs7QUFZZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUQyxvQkFBUTtBQUZDLFNBQWI7QUFJQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBaUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBakI7QUFDQSxjQUFLRSxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWhCO0FBQ0EsY0FBS0csV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQixPQUFqQjtBQUNBLGNBQUtJLFVBQUwsR0FBZ0IsTUFBS0EsVUFBTCxDQUFnQkosSUFBaEIsT0FBaEI7QUFDQSxjQUFLSyxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JMLElBQWhCLE9BQWhCO0FBQ0EsY0FBS00sUUFBTCxHQUFjLE1BQUtBLFFBQUwsQ0FBY04sSUFBZCxPQUFkO0FBdEJlO0FBdUJsQjs7QUF6QlU7QUFBQTtBQUFBLGlDQTJCRE8sQ0EzQkMsRUEyQkU7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixDQUF6QjtBQUE2QjtBQTNCakM7QUFBQTtBQUFBLG9DQTRCQ0EsQ0E1QkQsRUE0Qkk7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixDQUEzQjtBQUFnQztBQTVCdEM7QUFBQTtBQUFBLG1DQTZCQUEsQ0E3QkEsRUE2Qkc7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUE4QjtBQTdCbkM7QUFBQTtBQUFBLG9DQThCQ0EsQ0E5QkQsRUE4Qkk7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixDQUEzQjtBQUErQjtBQTlCckM7QUFBQTtBQUFBLG1DQStCQUEsQ0EvQkEsRUErQkc7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUE4QjtBQS9CbkM7QUFBQTtBQUFBLG1DQWdDQUEsQ0FoQ0EsRUFnQ0c7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUE4QjtBQWhDbkM7QUFBQTtBQUFBLGlDQWlDRkEsQ0FqQ0UsRUFpQ0M7QUFBRUMsb0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixDQUF4QjtBQUE0QjtBQWpDL0I7QUFBQTtBQUFBLDRDQW1DUztBQUNoQixpQkFBS0csUUFBTCxDQUFjLEVBQUViLE9BQU8sT0FBVCxFQUFkO0FBQ0g7QUFyQ1U7QUFBQTtBQUFBLG1DQXVDQTtBQUNQLGdCQUFJQyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsTUFBeEI7QUFDQUEsbUJBQU9hLElBQVAsQ0FBWTtBQUNSLG1CQUFHQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsSUFBaEIsR0FBdUIsQ0FBbEMsQ0FESztBQUVSLG1CQUFHRixLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBakMsQ0FGSztBQUdSLHVCQUFPLEdBSEM7QUFJUix3QkFBUSxHQUpBO0FBS1Isc0JBQU0sS0FBS2xCLEtBQUwsQ0FBV0MsS0FMVDtBQU1SLDRCQUFZLENBTko7QUFPUix5QkFBUyxLQUFLa0IsV0FQTjtBQVFSLDZCQUFhLEtBQUtkLFdBUlY7QUFTUiw0QkFBWSxLQUFLQyxVQVRUO0FBVVIsNkJBQWEsS0FBS0MsV0FWVjtBQVdSLDRCQUFZLEtBQUtDLFVBWFQ7QUFZUiw0QkFBWSxLQUFLQyxVQVpUO0FBYVIsMEJBQVUsS0FBS0E7QUFiUCxjQUFaO0FBZUEsaUJBQUtLLFFBQUwsQ0FBYztBQUNWYix1QkFBT21CLE9BQU9DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsY0FBbEIsRUFERztBQUVWckI7QUFGVSxhQUFkO0FBSUg7QUE1RFU7QUFBQTtBQUFBLGlDQThERjtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNBLHFFQURBO0FBRUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsS0FBS0MsUUFBdEI7QUFBQTtBQUFBLGlCQUZKO0FBR0E7QUFBQTtBQUFBLHNCQUFPLE9BQU8sSUFBZCxFQUFvQixRQUFRLEdBQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0ssNkJBQUtILEtBQUwsQ0FBV0UsTUFBWCxDQUFrQnNCLEdBQWxCLENBQXNCO0FBQUEsbUNBQVNDLEtBQVQ7QUFBQSx5QkFBdEI7QUFETDtBQURKO0FBSEEsYUFESjtBQVdIO0FBMUVVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC45YWFlMWM2NTRjYzU4YTg3MzBjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IERpbWVuc2lvbnMgZnJvbSAncmVhY3QtZGltZW5zaW9ucydcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZiYXInXG5cbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoeyBlbGVtZW50UmVzaXplOiB0cnVlIH0pKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgLy8gbGV0IHNoYXBlcyA9IFtdXG4gICAgICAgIC8vIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgIC8vICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgIC8vICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgLy8gICAgIHdpZHRoPXsxMDB9XG4gICAgICAgIC8vICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgLy8gICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgIC8vICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAvLyAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLy8gLz4pXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlczogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFNoYXBlID0gdGhpcy5hZGRTaGFwZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQ9dGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnTW92ZT10aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdmVyPXRoaXMub25Nb3VzZU92ZXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdXQ9dGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRibENsaWNrPXRoaXMub25EYmxDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxUYXA9dGhpcy5vbkRibFRhcC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkU2hhcGUgKGUpIHsgY29uc29sZS5sb2coJ2FkZFNoYXBlICcsIGUpIH1cbiAgICBvbkRyYWdTdGFydChlKSB7IGNvbnNvbGUubG9nKCdvbkRyYWdTdGFydCcsIGUgKSB9XG4gICAgb25EcmFnTW92ZShlKSB7IGNvbnNvbGUubG9nKCdvbkRyYWdNb3ZlJywgZSkgfVxuICAgIG9uTW91c2VPdmVyKGUpIHsgY29uc29sZS5sb2coJ29uTW91c2VPdmVyJywgZSkgfVxuICAgIG9uTW91c2VPdXQoZSkgeyBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpIH1cbiAgICBvbkRibENsaWNrKGUpIHsgY29uc29sZS5sb2coJ29uRGJsQ2xpY2snLCBlKSB9XG4gICAgb25EYmxUYXAoZSkgeyBjb25zb2xlLmxvZygnb25EYmxUYXAnLCBlKSB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgYWRkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlc1xuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5vbkRyYWdTdGFydH1cbiAgICAgICAgICAgIG9uRHJhZ01vdmU9e3RoaXMub25EcmFnTW92ZX1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgb25EYmxDbGljaz17dGhpcy5vbkRibENsaWNrfVxuICAgICAgICAgICAgb25EYmxUYXA9e3RoaXMub25EYmxDbGlja31cbiAgICAgICAgLz4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKCksXG4gICAgICAgICAgICBzaGFwZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFNoYXBlfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==