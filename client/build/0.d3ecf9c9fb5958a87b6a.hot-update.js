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

var MyRect = function (_Component) {
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
                { width: 700, height: 700 },
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
}(_react.Component);

exports.default = MyRect;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiTXlSZWN0IiwicHJvcHMiLCJzdGF0ZSIsImNvbG9yIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJLb252YSIsIlV0aWwiLCJnZXRSYW5kb21Db2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFFakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU87QUFERSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUxlO0FBTWxCOzs7OzRDQUVtQjtBQUNoQixpQkFBS0MsUUFBTCxDQUFjLEVBQUVILE9BQU8sT0FBVCxFQUFkO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLRyxRQUFMLENBQWM7QUFDVkgsdUJBQU9JLE9BQU9DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsY0FBbEI7QUFERyxhQUFkO0FBR0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTyxPQUFPLEdBQWQsRUFBbUIsUUFBUSxHQUEzQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQ0ksMkJBQUcsRUFEUDtBQUVJLDJCQUFHLEVBRlA7QUFHSSwrQkFBTyxHQUhYO0FBSUksZ0NBQVEsR0FKWjtBQUtJLDhCQUFNLEtBQUtSLEtBQUwsQ0FBV0MsS0FMckI7QUFNSSxvQ0FBWSxDQU5oQjtBQU9JLGlDQUFTLEtBQUtDO0FBUGxCO0FBREo7QUFESixhQURKO0FBZUg7Ozs7OztrQkFwQ2dCSixNIiwiZmlsZSI6IjAuZDNlY2Y5YzlmYjU5NThhODdiNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6ICdncmVlbicgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdGFnZSB3aWR0aD17NzAwfSBoZWlnaHQ9ezcwMH0+XG4gICAgICAgICAgICAgICAgPExheWVyPlxuICAgICAgICAgICAgICAgICAgICA8UmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgeD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwic291cmNlUm9vdCI6IiJ9