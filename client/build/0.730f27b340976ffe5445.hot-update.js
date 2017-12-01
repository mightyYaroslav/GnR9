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
                _this2.setState({
                    maps: json.projects,
                    loading: false
                });
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
                            _semanticUiReact.Segment,
                            { paded: true },
                            _react2.default.createElement(
                                _semanticUiReact.Dimmer,
                                { active: this.state.loading, inverted: true },
                                _react2.default.createElement(_semanticUiReact.Loader, null)
                            ),
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
                )
            );
        }
    }]);

    return Maps;
}(_react.Component);

exports.default = Maps;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib2R5IiwicHVzaCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwiaWQiLCJzcGxpY2UiLCJjb2xzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvd3MiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImNvbHNOYW1lIiwibGFzdFJvd0NvbHMiLCJBcnJheSIsInJvdyIsImNvbCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLFNBREg7QUFFVEMsa0JBQUssRUFGSTtBQUdUQyxvQkFBUTtBQUNKQyxzQkFBTSxFQURGO0FBRUpDLHNCQUFNO0FBRkYsYUFIQztBQU9UQyxxQkFBUztBQVBBLFNBQWI7QUFTQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0Ms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WCxLQUFLUSxRQUFMLENBQU4sR0FBdUJJLEdBQXRDLENBQU47QUFBQSx5REFIdEI7QUFESixpREFEb0U7QUFBQSw2Q0FBdkU7QUFETCx5Q0FEMkI7QUFBQSxxQ0FBNUIsQ0FBUDtBQVlILGlDQWhCQTtBQURMO0FBSko7QUFEQTtBQWhDSjtBQUpSLGFBREo7QUFtRUg7Ozs7OztrQkF0TWdCdEQsSSIsImZpbGUiOiIwLjczMGYyN2IzNDA5NzZmZmU1NDQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBGb3JtLCBJbnB1dCwgTGFiZWwsIFRleHRBcmVhLCBTZWdtZW50LCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9uLCBMb2FkZXIsIERpbW1lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEV4YW1wbGVTdGFuZGFyZCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZWJhclJpZ2h0T3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodE92ZXJsYXknXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBtYXBzOltdLFxuICAgICAgICAgICAgbmV3TWFwOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5uZXdNYXApXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9yZW1vdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5tYXBzW2ldLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgICAgICAgICAgbWFwcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBjb2xzID0ge1xuICAgICAgICAgICAgJ2NvbXB1dGVyJzogNCxcbiAgICAgICAgICAgICd0YWJsZXQnOiAyLFxuICAgICAgICAgICAgJ21vYmlsZSc6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIHsvKjxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9eyovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICB7IC8qPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+ICovIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWFwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2Rlc2Mob3B0aW9uYWwpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJpdmF0ZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdzaGFyZWQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NoYXJlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjb2xzKS5tYXAoY29sc05hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbCh0aGlzLnN0YXRlLm1hcHMubGVuZ3RoIC8gY29sc1tjb2xzTmFtZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFJvd0NvbHMgPSB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoICUgY29sc1tjb2xzTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSb3dDb2xzID0gbGFzdFJvd0NvbHMgPT09IDAgPyBjb2xzW2NvbHNOYW1lXSA6IGxhc3RSb3dDb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLkFycmF5KHJvd3MpLmtleXMoKV0ubWFwKHJvdyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkocm93ID09PSByb3dzIC0gMSA/IGxhc3RSb3dDb2xzIDogY29sc1tjb2xzTmFtZV0pLmtleXMoKV0ubWFwKGNvbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmRlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==