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
                        Label,
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
                        Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {}
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
                body: JSON.stringify({
                    name: this.state.newMap.name,
                    desc: this.state.newMap.desc
                })
            }).then(function (res) {
                if (res.status === 200) {
                    var maps = _this3.state.maps;
                    maps.push(_this3.state.newMap);
                    _this3.setState({ maps: maps });
                } else {
                    _this3.setState({
                        errorLabel: _react2.default.createElement(
                            Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).then(function (json) {
                console.log(JSON.stringify(json.projects));
                _this3.setState({ maps: json.projects });
            }).catch(function (err) {
                return _this3.setState({
                    errorLabel: _react2.default.createElement(
                        Label,
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
                    var maps = _this4.state.maps;
                    maps.splice(i, 1);
                    _this4.setState({ maps: maps });
                } else {
                    _this4.setState({
                        errorLabel: _react2.default.createElement(
                            Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).catch(function (err) {
                return _this4.setState({
                    errorLabel: _react2.default.createElement(
                        Label,
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
                    _semanticUiReact.Grid,
                    null,
                    _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16 }),
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 4 },
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
                                        control: Input,
                                        value: this.state.newMap.name,
                                        onChange: this.handleChange
                                    }),
                                    _react2.default.createElement(_semanticUiReact.Form.Field, {
                                        name: 'desc',
                                        placeholder: 'desc(optional)',
                                        control: TextArea,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJib2R5IiwicHVzaCIsImkiLCJwcm9qZWN0SWQiLCJpZCIsInNwbGljZSIsImUiLCJjb2xzIiwiSW5wdXQiLCJUZXh0QXJlYSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJjb2xzTmFtZSIsImxhc3RSb3dDb2xzIiwiQXJyYXkiLCJyb3ciLCJjb2wiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxTQURIO0FBRVRDLGtCQUFLLEVBRkk7QUFHVEMsb0JBQVE7QUFDSkMsc0JBQU0sRUFERjtBQUVKQyxzQkFBTTtBQUZGLGFBSEM7QUFPVEMscUJBQVM7QUFQQSxTQUFiO0FBU0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLE1BQUwsR0FB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QixDQUFQO0FBWUgsNkJBaEJBO0FBREw7QUFESjtBQWxDSjtBQUhSLGFBREo7QUErREg7Ozs7OztrQkE3TGdCckQsSSIsImZpbGUiOiIwLmE3Yjc1YTA0OWRjODk5MTFmZTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBGb3JtLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdwcml2YXRlJyxcbiAgICAgICAgICAgIG1hcHM6W10sXG4gICAgICAgICAgICBuZXdNYXA6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwczoganNvbi5wcm9qZWN0cyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSgpIHtcblxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3TWFwLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5uZXdNYXAuZGVzY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMucHVzaCh0aGlzLnN0YXRlLm5ld01hcClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwczoganNvbi5wcm9qZWN0cyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvcmVtb3ZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuc3RhdGUubWFwc1tpXS5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcHN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICB7Lyo8U2lkZWJhclJpZ2h0T3ZlcmxheSBjb250ZW50PXsqL31cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgICAgeyAvKjxTZWFyY2hFeGFtcGxlU3RhbmRhcmQgc3RyZXRjaGVkIHNvdXJjZT17bWFwc30vPiAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGVzYyhvcHRpb25hbCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMuc3RhdGUubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJvd0NvbHMgPSBsYXN0Um93Q29scyA9PT0gMCA/IGNvbHNbY29sc05hbWVdIDogbGFzdFJvd0NvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgey8qICAvPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=