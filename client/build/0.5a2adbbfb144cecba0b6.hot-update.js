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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic2hhcGVzIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0YXRlIiwiY29sb3IiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwibWFwIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsWUFBSUMsU0FBUyxFQUFiO0FBQ0FBLGVBQU9DLElBQVAsQ0FBWTtBQUNSLGVBQUdDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixJQUFoQixHQUF1QixDQUFsQyxDQURLO0FBRVIsZUFBR0YsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLENBQWpDLENBRks7QUFHUixtQkFBTyxHQUhDO0FBSVIsb0JBQVEsR0FKQTtBQUtSLGtCQUFNLE1BQUtDLEtBQUwsQ0FBV0MsS0FMVDtBQU1SLHdCQUFZLENBTko7QUFPUixxQkFBUyxNQUFLQztBQVBOLFVBQVo7QUFTQSxjQUFLRixLQUFMLEdBQWE7QUFDVEMsbUJBQU8sT0FERTtBQUVUTjtBQUZTLFNBQWI7QUFJQSxjQUFLTyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBaEJlO0FBaUJsQjs7QUFuQlU7QUFBQTtBQUFBLDRDQXFCUztBQUNoQixpQkFBS0MsUUFBTCxDQUFjLEVBQUVILE9BQU8sT0FBVCxFQUFkO0FBQ0g7QUF2QlU7QUFBQTtBQUFBLHNDQXlCRztBQUNWLGdCQUFJTixTQUFTLEtBQUtLLEtBQUwsQ0FBV0wsTUFBeEI7QUFDQUEsbUJBQU9DLElBQVAsQ0FBWTtBQUNSLG1CQUFHQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsSUFBaEIsR0FBdUIsQ0FBbEMsQ0FESztBQUVSLG1CQUFHRixLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBakMsQ0FGSztBQUdSLHVCQUFPLEdBSEM7QUFJUix3QkFBUSxHQUpBO0FBS1Isc0JBQU0sS0FBS0MsS0FBTCxDQUFXQyxLQUxUO0FBTVIsNEJBQVksQ0FOSjtBQU9SLHlCQUFTLEtBQUtDO0FBUE4sY0FBWjtBQVNBLGlCQUFLRSxRQUFMLENBQWM7QUFDVkgsdUJBQU9JLE9BQU9DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsY0FBbEIsRUFERztBQUVWYjtBQUZVLGFBQWQ7QUFJSDtBQXhDVTtBQUFBO0FBQUEsaUNBMENGO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFPLE9BQU8sSUFBZCxFQUFvQixRQUFRLEdBQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0sseUJBQUtLLEtBQUwsQ0FBV0wsTUFBWCxDQUFrQmMsR0FBbEIsQ0FBc0I7QUFBQSwrQkFBU0MsS0FBVDtBQUFBLHFCQUF0QjtBQURMO0FBREosYUFESjtBQU9IO0FBbERVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC41YTJhZGJiZmIxNDRjZWNiYTBiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoeyBlbGVtZW50UmVzaXplOiB0cnVlIH0pKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHNoYXBlcyA9IFtdXG4gICAgICAgIHNoYXBlcy5wdXNoKDxSZWN0XG4gICAgICAgICAgICB4PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjAwICsgMSl9XG4gICAgICAgICAgICB5PXtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxKX1cbiAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLz4pXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlc1xuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIC8+KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiB3aW5kb3cuS29udmEuVXRpbC5nZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgc2hhcGVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWdlIHdpZHRoPXsxNjAwfSBoZWlnaHQ9ezkwMH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZXMubWFwKHNoYXBlID0+IHNoYXBlKX1cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==