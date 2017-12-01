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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImFkZFNoYXBlIiwiYmluZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnTW92ZSIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uRGJsQ2xpY2siLCJvbkRibFRhcCIsInNhdmUiLCJlIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwic2V0U3RhdGUiLCJwdXNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJLb252YSIsIlV0aWwiLCJnZXRSYW5kb21Db2xvciIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYZSxvSEFDVEEsS0FEUzs7QUFZZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUQyxvQkFBUTtBQUZDLFNBQWI7QUFJQSxjQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBaUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBakI7QUFDQSxjQUFLRSxVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWhCO0FBQ0EsY0FBS0csV0FBTCxHQUFpQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQixPQUFqQjtBQUNBLGNBQUtJLFVBQUwsR0FBZ0IsTUFBS0EsVUFBTCxD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LE1BQVgsQ0FBa0IyQixHQUFsQixDQUFzQjtBQUFBLG1DQUFTQyxLQUFUO0FBQUEseUJBQXRCO0FBREw7QUFESjtBQUpBLGFBREo7QUFZSDtBQXZGVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuMDVkOGMxYWZiMmIwY2I4ZTU2ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2YmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zKHsgZWxlbWVudFJlc2l6ZTogdHJ1ZSB9KShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIC8vIGxldCBzaGFwZXMgPSBbXVxuICAgICAgICAvLyBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAvLyAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAvLyAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgIC8vICAgICB3aWR0aD17MTAwfVxuICAgICAgICAvLyAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIC8vICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAvLyAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgLy8gICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIC8vIC8+KVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBzaGFwZXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRTaGFwZSA9IHRoaXMuYWRkU2hhcGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0PXRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ01vdmU9dGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3Zlcj10aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3V0PXRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxDbGljaz10aGlzLm9uRGJsQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRGJsVGFwPXRoaXMub25EYmxUYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZFNoYXBlIChlKSB7IGNvbnNvbGUubG9nKCdhZGRTaGFwZSAnLCBlKSB9XG4gICAgb25EcmFnU3RhcnQoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnU3RhcnQnLCBlICkgfVxuICAgIG9uRHJhZ01vdmUoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnTW92ZScsIGUpIH1cbiAgICBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3ZlcicsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfVxuICAgIG9uTW91c2VPdXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgfVxuICAgIG9uRGJsQ2xpY2soZSkgeyBjb25zb2xlLmxvZygnb25EYmxDbGljaycsIGUpIH1cbiAgICBvbkRibFRhcChlKSB7IGNvbnNvbGUubG9nKCdvbkRibFRhcCcsIGUpIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6ICdncmVlbicgfSlcbiAgICB9XG5cbiAgICBhZGRTaGFwZSgpIHtcbiAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzXG4gICAgICAgIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9XG4gICAgICAgICAgICBvbkRyYWdNb3ZlPXt0aGlzLm9uRHJhZ01vdmV9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9e3RoaXMub25EYmxDbGlja31cbiAgICAgICAgICAgIG9uRGJsVGFwPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgIC8+KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiB3aW5kb3cuS29udmEuVXRpbC5nZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgc2hhcGVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRTaGFwZX0+QWRkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==