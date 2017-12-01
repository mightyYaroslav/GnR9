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
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.refs.stage.getStage().toJSON());
        }
    }, {
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
            alert('mapId:' + this.state.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DYW52YXMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImNvbG9yIiwic2hhcGVzIiwiaWQiLCJtYXRjaCIsInBhcmFtcyIsIm1hcElkIiwiYWRkU2hhcGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25EYmxDbGljayIsIm9uRGJsVGFwIiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZzIiwic3RhZ2UiLCJnZXRTdGFnZSIsInRvSlNPTiIsImUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsInNldFN0YXRlIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUNsaWNrIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiLCJhbGVydCIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQUE7O0FBRVgsb0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUQyxvQkFBUSxFQUZDO0FBR1RDLGdCQUFJLE1BQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDO0FBSG5CLFNBQWI7QUFLQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBaUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBakI7QUFDQSxjQUFLRSxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWhCO0FBQ0EsY0FBS0csV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCSCxJ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STtBQUFBO0FBQUEsc0JBQVEsU0FBUyxLQUFLSSxRQUF0QjtBQUFBO0FBQUEsaUJBRko7QUFHSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxLQUFLUSxJQUF0QjtBQUFBO0FBQUEsaUJBSEo7QUFJQTtBQUFBO0FBQUEsc0JBQU8sT0FBTyxJQUFkLEVBQW9CLFFBQVEsR0FBNUI7QUFDSTtBQUFBO0FBQUE7QUFDSyw2QkFBS2YsS0FBTCxDQUFXRSxNQUFYLENBQWtCb0MsR0FBbEIsQ0FBc0I7QUFBQSxtQ0FBU0MsS0FBVDtBQUFBLHlCQUF0QjtBQURMO0FBREo7QUFKQSxhQURKO0FBWUg7QUFsRlU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLmZiNWIzZGE0YjFiNjliYmFmNDg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5ZXIsIFJlY3QsIFN0YWdlLCBHcm91cCB9IGZyb20gJ3JlYWN0LWtvbnZhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICdyZWFjdC1kaW1lbnNpb25zJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlczogW10sXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFwSWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFNoYXBlID0gdGhpcy5hZGRTaGFwZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQ9dGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EcmFnTW92ZT10aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdmVyPXRoaXMub25Nb3VzZU92ZXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uTW91c2VPdXQ9dGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkRibENsaWNrPXRoaXMub25EYmxDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxUYXA9dGhpcy5vbkRibFRhcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcy5zdGFnZS5nZXRTdGFnZSgpLnRvSlNPTigpKVxuICAgIH1cblxuICAgIGFkZFNoYXBlIChlKSB7IGNvbnNvbGUubG9nKCdhZGRTaGFwZSAnLCBlKSB9XG4gICAgb25EcmFnU3RhcnQoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnU3RhcnQnLCBlICkgfVxuICAgIG9uRHJhZ01vdmUoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnTW92ZScsIGUpIH1cbiAgICBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3ZlcicsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfVxuICAgIG9uTW91c2VPdXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgfVxuICAgIG9uRGJsQ2xpY2soZSkgeyBjb25zb2xlLmxvZygnb25EYmxDbGljaycsIGUpIH1cbiAgICBvbkRibFRhcChlKSB7IGNvbnNvbGUubG9nKCdvbkRibFRhcCcsIGUpIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6ICdncmVlbicgfSlcbiAgICB9XG5cbiAgICBhZGRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzXG4gICAgICAgIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9XG4gICAgICAgICAgICBvbkRyYWdNb3ZlPXt0aGlzLm9uRHJhZ01vdmV9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9e3RoaXMub25EYmxDbGlja31cbiAgICAgICAgICAgIG9uRGJsVGFwPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgIC8+KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiB3aW5kb3cuS29udmEuVXRpbC5nZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgc2hhcGVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgYWxlcnQoJ21hcElkOicrIHRoaXMuc3RhdGUuaWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRTaGFwZX0+QWRkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvQ2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==