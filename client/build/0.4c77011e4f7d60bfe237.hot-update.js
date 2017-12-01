webpackHotUpdate(0,{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(74);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchExampleStandard = __webpack_require__(895);

var _SearchExampleStandard2 = _interopRequireDefault(_SearchExampleStandard);

var _Map = __webpack_require__(897);

var _Map2 = _interopRequireDefault(_Map);

var _SidebarRightOverlay = __webpack_require__(899);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

var _Auth = __webpack_require__(82);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Maps = function (_Component) {
    _inherits(Maps, _Component);

    function Maps(props) {
        _classCallCheck(this, Maps);

        var _this = _possibleConstructorReturn(this, (Maps.__proto__ || Object.getPrototypeOf(Maps)).call(this, props));

        _this.state = {
            activeItem: 'private',
            maps: [],
            newMap: {
                name: '',
                desc: ''
            },
            loading: true
        };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Maps, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            fetch('/projects', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                console.log(JSON.stringify(json.projects));
                _this2.setState({ maps: json.projects });
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            var newMap = this.state.newMap;
            newMap[name] = value;
            this.setState({
                newMap: newMap,
                errorLabel: ''
            });
        }
    }, {
        key: 'addMap',
        value: function addMap() {
            var _this3 = this;

            fetch('/projects/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify(this.state.newMap)
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                } else {
                    _this3.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).then(function (json) {
                var maps = _this3.state.maps;
                maps.push(json.project);
                _this3.setState({ maps: maps });
            }).catch(function (err) {
                return _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'deleteMap',
        value: function deleteMap(i) {
            var _this4 = this;

            fetch('/projects/remove', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    projectId: this.state.maps[i].id
                })
            }).then(function (res) {
                if (res.status === 200) {
                    var _maps = _this4.state.maps;
                    _maps.splice(i, 1);
                    _this4.setState({ maps: _maps });
                } else {
                    _this4.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).catch(function (err) {
                return _this4.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'handleItemClick',
        value: function handleItemClick(e, _ref) {
            var name = _ref.name;

            this.setState({ activeItem: name });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var activeItem = this.state.activeItem;

            var cols = {
                'computer': 4,
                'tablet': 2,
                'mobile': 1
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Dimmer,
                    { active: this.state.loading, inverted: true },
                    _react2.default.createElement(_semanticUiReact.Loader, null)
                ),
                _react2.default.createElement(
                    _semanticUiReact.Grid,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 4 },
                        _react2.default.createElement(_SearchExampleStandard2.default, { stretched: true, source: maps }),
                        _react2.default.createElement(
                            _semanticUiReact.Menu,
                            { fluid: true, vertical: true },
                            _react2.default.createElement(
                                _semanticUiReact.Menu.Item,
                                { name: 'add' },
                                _react2.default.createElement(
                                    _semanticUiReact.Form,
                                    { onSubmit: this.addMap },
                                    _react2.default.createElement(_semanticUiReact.Form.Field, {
                                        name: 'name',
                                        placeholder: 'name',
                                        control: _semanticUiReact.Input,
                                        value: this.state.newMap.name,
                                        onChange: this.handleChange
                                    }),
                                    _react2.default.createElement(_semanticUiReact.Form.Field, {
                                        name: 'desc',
                                        placeholder: 'desc(optional)',
                                        control: _semanticUiReact.TextArea,
                                        value: this.state.newMap.desc,
                                        onChange: this.handleChange
                                    }),
                                    _react2.default.createElement(
                                        _semanticUiReact.Button,
                                        { type: 'submit' },
                                        'Add new'
                                    )
                                )
                            ),
                            _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'private', active: activeItem === 'private',
                                onClick: this.handleItemClick }),
                            _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'shared', active: activeItem === 'shared',
                                onClick: this.handleItemClick })
                        )
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { stretched: true, width: 12 },
                        _react2.default.createElement(
                            _semanticUiReact.Grid,
                            null,
                            Object.keys(cols).map(function (colsName) {
                                var rows = Math.ceil(_this5.state.maps.length / cols[colsName]);
                                var lastRowCols = _this5.state.maps.length % cols[colsName];
                                lastRowCols = lastRowCols === 0 ? cols[colsName] : lastRowCols;
                                return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: cols[colsName], only: colsName },
                                        [].concat(_toConsumableArray(Array(row === rows - 1 ? lastRowCols : cols[colsName]).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: _this5.state.maps[row * cols[colsName] + col].name,
                                                    desc: _this5.state.maps[row * cols[colsName] + col].desc,
                                                    date: _this5.state.maps[row * cols[colsName] + col].date,
                                                    onDeleteClicked: function onDeleteClicked() {
                                                        return _this5.deleteMap(row * cols[colsName] + col);
                                                    } })
                                            );
                                        })
                                    );
                                });
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Maps;
}(_react.Component);

exports.default = Maps;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib2R5IiwicHVzaCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwiaWQiLCJzcGxpY2UiLCJjb2xzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd3MiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImNvbHNOYW1lIiwibGFzdFJvd0NvbHMiLCJBcnJheSIsInJvdyIsImNvbCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLFNBREg7QUFFVEMsa0JBQUssRUFGSTtBQUdUQyxvQkFBUTtBQUNKQyxzQkFBTSxFQURGO0FBRUpDLHNCQUFNO0FBRkYsYUFIQztBQU9UQyxxQkFBUztBQVBBLFNBQWI7QUFTQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0Ms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USxRQUFMLENBQU4sR0FBdUJJLEdBQXRDLENBQU47QUFBQSxxREFIdEI7QUFESiw2Q0FEb0U7QUFBQSx5Q0FBdkU7QUFETCxxQ0FEMkI7QUFBQSxpQ0FBNUIsQ0FBUDtBQVlILDZCQWhCQTtBQURMO0FBREo7QUFoQ0o7QUFOUixhQURKO0FBZ0VIOzs7Ozs7a0JBaE1nQnRELEkiLCJmaWxlIjoiMC40Yzc3MDExZTRmN2Q2MGJmZTIzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgRm9ybSwgSW5wdXQsIExhYmVsLCBUZXh0QXJlYSwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbiwgTG9hZGVyLCBEaW1tZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hFeGFtcGxlU3RhbmRhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZE1hcCA9IHRoaXMuYWRkTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVNYXAgPSB0aGlzLmRlbGV0ZU1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXBzOiBqc29uLnByb2plY3RzIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubmV3TWFwKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgbWFwcy5wdXNoKGpzb24ucHJvamVjdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXBzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvcmVtb3ZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuc3RhdGUubWFwc1tpXS5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcHN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICB7Lyo8U2lkZWJhclJpZ2h0T3ZlcmxheSBjb250ZW50PXsqL31cbiAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRXhhbXBsZVN0YW5kYXJkIHN0cmV0Y2hlZCBzb3VyY2U9e21hcHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGVzYyhvcHRpb25hbCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMuc3RhdGUubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJvd0NvbHMgPSBsYXN0Um93Q29scyA9PT0gMCA/IGNvbHNbY29sc05hbWVdIDogbGFzdFJvd0NvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgey8qICAvPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=