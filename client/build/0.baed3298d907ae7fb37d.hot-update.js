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

var _Auth = __webpack_require__(83);

var _Auth2 = _interopRequireDefault(_Auth);

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
            var _this2 = this;

            fetch('/projects/' + this.state.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    ),
                    loading: false
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                console.log(json);
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err || 'Error'
                    ),
                    loading: false
                });
            });
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
            var _this3 = this;

            fetch('/projects/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    projectId: this.state.id,
                    data: this.refs.stage.getStage().toJSON()
                })
            }).then(function (res) {
                if (res.status === 200) {
                    _this3.setState({
                        loading: false
                    });
                } else if (res.status === 400) _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    ),
                    loading: false
                });else _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).catch(function (err) {
                return _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err || 'Error'
                    ),
                    loading: false
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DYW52YXMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImNvbG9yIiwic2hhcGVzIiwiaWQiLCJtYXRjaCIsInBhcmFtcyIsIm1hcElkIiwiYWRkU2hhcGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25EYmxDbGljayIsIm9uRGJsVGFwIiwic2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwibG9hZGluZyIsInN0YXR1c1RleHQiLCJjYXRjaCIsImVyciIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVDbGljayIsIndpbmRvdyIsIktvbnZhIiwiVXRpbCIsImdldFJhbmRvbUNvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RJZCIsImRhdGEiLCJyZWZzIiwic3RhZ2UiLCJnZXRTdGFnZSIsInRvSlNPTiIsIm1hcCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFFWCxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxPQURFO0FBRVRDLG9CQUFRLEVBRkM7QUFHVEMsZ0JBQUksTUFBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkM7QUFIbkIsU0FBYjtBQUtBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJ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QUFzQjtBQUFBLG1DQUFTQyxLQUFUO0FBQUEseUJBQXRCO0FBREw7QUFESjtBQUpBLGFBREo7QUFZSDtBQXpJVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuYmFlZDMyOThkOTA3YWU3ZmIzN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYXllciwgUmVjdCwgU3RhZ2UsIEdyb3VwIH0gZnJvbSAncmVhY3Qta29udmEnXG5pbXBvcnQge0J1dHRvbiwgTGFiZWx9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IERpbWVuc2lvbnMgZnJvbSAncmVhY3QtZGltZW5zaW9ucydcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTXlSZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBzaGFwZXM6IFtdLFxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcElkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRTaGFwZSA9IHRoaXMuYWRkU2hhcGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0PXRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRHJhZ01vdmU9dGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3Zlcj10aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbk1vdXNlT3V0PXRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25EYmxDbGljaz10aGlzLm9uRGJsQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRGJsVGFwPXRoaXMub25EYmxUYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZFNoYXBlIChlKSB7IGNvbnNvbGUubG9nKCdhZGRTaGFwZSAnLCBlKSB9XG4gICAgb25EcmFnU3RhcnQoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnU3RhcnQnLCBlICkgfVxuICAgIG9uRHJhZ01vdmUoZSkgeyBjb25zb2xlLmxvZygnb25EcmFnTW92ZScsIGUpIH1cbiAgICBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlT3ZlcicsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgfVxuICAgIG9uTW91c2VPdXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU91dCcsIGUpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgfVxuICAgIG9uRGJsQ2xpY2soZSkgeyBjb25zb2xlLmxvZygnb25EYmxDbGljaycsIGUpIH1cbiAgICBvbkRibFRhcChlKSB7IGNvbnNvbGUubG9nKCdvbkRibFRhcCcsIGUpIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzLycrdGhpcy5zdGF0ZS5pZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2VyciB8fCAnRXJyb3InfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgYWRkU2hhcGUoKSB7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlc1xuICAgICAgICBzaGFwZXMucHVzaCg8UmVjdFxuICAgICAgICAgICAgeD17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYwMCArIDEpfVxuICAgICAgICAgICAgeT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMSl9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fVxuICAgICAgICAgICAgb25EcmFnTW92ZT17dGhpcy5vbkRyYWdNb3ZlfVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBvbkRibENsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9XG4gICAgICAgICAgICBvbkRibFRhcD17dGhpcy5vbkRibENsaWNrfVxuICAgICAgICAvPilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogd2luZG93LktvbnZhLlV0aWwuZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIHNoYXBlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvdXBkYXRlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5pZCxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnJlZnMuc3RhZ2UuZ2V0U3RhZ2UoKS50b0pTT04oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2VyciB8fCAnRXJyb3InfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRTaGFwZX0+QWRkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTdGFnZSByZWY9J3N0YWdlJyB3aWR0aD17MTYwMH0gaGVpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVzLm1hcChzaGFwZSA9PiBzaGFwZSl9XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvQ2FudmFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==