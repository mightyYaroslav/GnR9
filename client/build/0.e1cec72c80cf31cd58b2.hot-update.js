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
                    var maps = _this4.state.maps;
                    maps.splice(i, 1);
                    _this4.setState({ maps: maps });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib2R5IiwicHVzaCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwiaWQiLCJzcGxpY2UiLCJjb2xzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd3MiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImNvbHNOYW1lIiwibGFzdFJvd0NvbHMiLCJBcnJheSIsInJvdyIsImNvbCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLFNBREg7QUFFVEMsa0JBQUssRUFGSTtBQUdUQyxvQkFBUTtBQUNKQyxzQkFBTSxFQURGO0FBRUpDLHNCQUFNO0FBRkYsYUFIQztBQU9UQyxxQkFBUztBQVBBLFNBQWI7QUFTQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0Ms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QSxpQ0FBNUIsQ0FBUDtBQVlILDZCQWhCQTtBQURMO0FBREo7QUFsQ0o7QUFIUixhQURKO0FBK0RIOzs7Ozs7a0JBL0xnQnRELEkiLCJmaWxlIjoiMC5lMWNlYzcyYzgwY2YzMWNkNThiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgRm9ybSwgSW5wdXQsIExhYmVsLCBUZXh0QXJlYSwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEV4YW1wbGVTdGFuZGFyZCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZWJhclJpZ2h0T3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodE92ZXJsYXknXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBtYXBzOltdLFxuICAgICAgICAgICAgbmV3TWFwOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHM6IGpzb24ucHJvamVjdHMgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5uZXdNYXApXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9yZW1vdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5tYXBzW2ldLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgICAgICAgICAgbWFwcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBjb2xzID0ge1xuICAgICAgICAgICAgJ2NvbXB1dGVyJzogNCxcbiAgICAgICAgICAgICd0YWJsZXQnOiAyLFxuICAgICAgICAgICAgJ21vYmlsZSc6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIHsvKjxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9eyovfVxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgICAgICAgICB7IC8qPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+ICovIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAvIGNvbHNbY29sc05hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSb3dDb2xzID0gdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Um93Q29scyA9IGxhc3RSb3dDb2xzID09PSAwID8gY29sc1tjb2xzTmFtZV0gOiBsYXN0Um93Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5BcnJheShyb3dzKS5rZXlzKCldLm1hcChyb3cgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJvdyA9PT0gcm93cyAtIDEgPyBsYXN0Um93Q29scyA6IGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUNsaWNrZWQ9eygpID0+IHRoaXMuZGVsZXRlTWFwKHJvdyAqIGNvbHNbY29sc05hbWVdICsgY29sKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==