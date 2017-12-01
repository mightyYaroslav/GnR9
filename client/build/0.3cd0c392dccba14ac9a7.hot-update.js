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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = Dimensions()(function (_Component) {
    _inherits(MyRect, _Component);

    function MyRect(props) {
        _classCallCheck(this, MyRect);

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green'
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
            this.setState({
                color: window.Konva.Util.getRandomColor()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactKonva.Stage,
                { width: this.props.containerWidth, height: this.props.containerHeight },
                _react2.default.createElement(
                    _reactKonva.Layer,
                    null,
                    _react2.default.createElement(_reactKonva.Rect, {
                        x: 10,
                        y: 10,
                        width: 500,
                        height: 500,
                        fill: this.state.color,
                        shadowBlur: 5,
                        onClick: this.handleClick
                    })
                )
            );
        }
    }]);

    return MyRect;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiRGltZW5zaW9ucyIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlQTtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFMZTtBQU1sQjs7QUFSVTtBQUFBO0FBQUEsNENBVVM7QUFDaEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLE9BQVQsRUFBZDtBQUNIO0FBWlU7QUFBQTtBQUFBLHNDQWNHO0FBQ1YsaUJBQUtHLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0ksT0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxjQUFsQjtBQURHLGFBQWQ7QUFHSDtBQWxCVTtBQUFBO0FBQUEsaUNBb0JGO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFPLE9BQU8sS0FBS1QsS0FBTCxDQUFXVSxjQUF6QixFQUF5QyxRQUFRLEtBQUtWLEtBQUwsQ0FBV1csZUFBNUQ7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDJCQUFHLEVBRFA7QUFFSSwyQkFBRyxFQUZQO0FBR0ksK0JBQU8sR0FIWDtBQUlJLGdDQUFRLEdBSlo7QUFLSSw4QkFBTSxLQUFLVixLQUFMLENBQVdDLEtBTHJCO0FBTUksb0NBQVksQ0FOaEI7QUFPSSxpQ0FBUyxLQUFLQztBQVBsQjtBQURKO0FBREosYUFESjtBQWVIO0FBcENVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC4zY2QwYzM5MmRjY2JhMTRhYzlhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcblxuZXhwb3J0IGRlZmF1bHQgRGltZW5zaW9ucygpKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6ICdncmVlbicgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17dGhpcy5wcm9wcy5jb250YWluZXJXaWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmNvbnRhaW5lckhlaWdodH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICA8UmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgeD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==