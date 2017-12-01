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

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green',
            shapes: [],
            id: _this.props.match.params.mapId
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
        value: function save() {
            alert(this.refs.stage.getStage().toJSON());
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
                    _semanticUiReact.Button,
                    { onClick: this.save },
                    'Save'
                ),
                _react2.default.createElement(
                    _reactKonva.Stage,
                    { ref: 'stage', width: 1600, height: 900 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DYW52YXMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImNvbG9yIiwic2hhcGVzIiwiaWQiLCJtYXRjaCIsInBhcmFtcyIsIm1hcElkIiwiYWRkU2hhcGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25EYmxDbGljayIsIm9uRGJsVGFwIiwic2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJzZXRTdGF0ZSIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwiYWxlcnQiLCJyZWZzIiwic3RhZ2UiLCJnZXRTdGFnZSIsInRvSlNPTiIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBRVgsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUQyxvQkFBUSxFQUZDO0FBR1RDLGdCQUFJLE1BQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDO0FBSG5CLFNBQWI7QUFLQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBaUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBakI7QUFDQSxjQUFLRSxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWhCO0FBQ0EsY0FBS0csV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCSCxJ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S1EsSUFBdEI7QUFBQTtBQUFBLGlCQUhKO0FBSUE7QUFBQTtBQUFBLHNCQUFPLEtBQUksT0FBWCxFQUFtQixPQUFPLElBQTFCLEVBQWdDLFFBQVEsR0FBeEM7QUFDSTtBQUFBO0FBQUE7QUFDSyw2QkFBS2YsS0FBTCxDQUFXRSxNQUFYLENBQWtCb0MsR0FBbEIsQ0FBc0I7QUFBQSxtQ0FBU0MsS0FBVDtBQUFBLHlCQUF0QjtBQURMO0FBREo7QUFKQSxhQURKO0FBWUg7QUE5RVU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjk2MmU4NGFhNTcxNjhhNWUwNWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5ZXIsIFJlY3QsIFN0YWdlLCBHcm91cCB9IGZyb20gJ3JlYWN0LWtvbnZhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlczogW10sXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFwSWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFNoYXBlID0gdGhpcy5hZGRTaGFwZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQ9dGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnTW92ZT10aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdmVyPXRoaXMub25Nb3VzZU92ZXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdXQ9dGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRibENsaWNrPXRoaXMub25EYmxDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxUYXA9dGhpcy5vbkRibFRhcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgYWRkU2hhcGUgKGUpIHsgY29uc29sZS5sb2coJ2FkZFNoYXBlICcsIGUpIH1cbiAgICBvbkRyYWdTdGFydChlKSB7IGNvbnNvbGUubG9nKCdvbkRyYWdTdGFydCcsIGUgKSB9XG4gICAgb25EcmFnTW92ZShlKSB7IGNvbnNvbGUubG9nKCdvbkRyYWdNb3ZlJywgZSkgfVxuICAgIG9uTW91c2VPdmVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uTW91c2VPdmVyJywgZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICB9XG4gICAgb25Nb3VzZU91dChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3V0JywgZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICB9XG4gICAgb25EYmxDbGljayhlKSB7IGNvbnNvbGUubG9nKCdvbkRibENsaWNrJywgZSkgfVxuICAgIG9uRGJsVGFwKGUpIHsgY29uc29sZS5sb2coJ29uRGJsVGFwJywgZSkgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgIH1cblxuICAgIGFkZFNoYXBlKCkge1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXNcbiAgICAgICAgc2hhcGVzLnB1c2goPFJlY3RcbiAgICAgICAgICAgIHg9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2MDAgKyAxKX1cbiAgICAgICAgICAgIHk9e01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEpfVxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgIHNoYWRvd0JsdXI9ezV9XG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5vbkRyYWdTdGFydH1cbiAgICAgICAgICAgIG9uRHJhZ01vdmU9e3RoaXMub25EcmFnTW92ZX1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgb25EYmxDbGljaz17dGhpcy5vbkRibENsaWNrfVxuICAgICAgICAgICAgb25EYmxUYXA9e3RoaXMub25EYmxDbGlja31cbiAgICAgICAgLz4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKCksXG4gICAgICAgICAgICBzaGFwZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBhbGVydCh0aGlzLnJlZnMuc3RhZ2UuZ2V0U3RhZ2UoKS50b0pTT04oKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFNoYXBlfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPFN0YWdlIHJlZj0nc3RhZ2UnIHdpZHRoPXsxNjAwfSBoZWlnaHQ9ezkwMH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZXMubWFwKHNoYXBlID0+IHNoYXBlKX1cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9DYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9