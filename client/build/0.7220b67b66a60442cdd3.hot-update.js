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

        _this.state = {
            color: 'green',
            shapes: []
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
                { width: 1600, height: 900 },
                _react2.default.createElement(
                    _reactKonva.Layer,
                    null,
                    _react2.default.createElement(_reactKonva.Rect, {
                        x: 5,
                        y: 5,
                        width: 100,
                        height: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiXSwibmFtZXMiOlsiZWxlbWVudFJlc2l6ZSIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsInNoYXBlcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2tCQUVlLCtCQUFXLEVBQUVBLGVBQWUsSUFBakIsRUFBWDtBQUFBOztBQUVYLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLE9BREU7QUFFVEMsb0JBQVE7QUFGQyxTQUFiO0FBSUEsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQU5lO0FBT2xCOztBQVRVO0FBQUE7QUFBQSw0Q0FXUztBQUNoQixpQkFBS0MsUUFBTCxDQUFjLEVBQUVKLE9BQU8sT0FBVCxFQUFkO0FBQ0g7QUFiVTtBQUFBO0FBQUEsc0NBZUc7QUFDVixpQkFBS0ksUUFBTCxDQUFjO0FBQ1ZKLHVCQUFPSyxPQUFPQyxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLGNBQWxCO0FBREcsYUFBZDtBQUdIO0FBbkJVO0FBQUE7QUFBQSxpQ0FxQkY7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU8sT0FBTyxJQUFkLEVBQW9CLFFBQVEsR0FBNUI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDJCQUFHLENBRFA7QUFFSSwyQkFBRyxDQUZQO0FBR0ksK0JBQU8sR0FIWDtBQUlJLGdDQUFRLEdBSlo7QUFLSSw4QkFBTSxLQUFLVCxLQUFMLENBQVdDLEtBTHJCO0FBTUksb0NBQVksQ0FOaEI7QUFPSSxpQ0FBUyxLQUFLRTtBQVBsQjtBQURKO0FBREosYUFESjtBQWVIO0FBckNVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC43MjIwYjY3YjY2YTYwNDQyY2RkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoeyBlbGVtZW50UmVzaXplOiB0cnVlIH0pKGNsYXNzIE15UmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgc2hhcGVzOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhZ2Ugd2lkdGg9ezE2MDB9IGhlaWdodD17OTAwfT5cbiAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgeT17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICAgICAgPC9TdGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==