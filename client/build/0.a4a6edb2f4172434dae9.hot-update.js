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

var _navbar = __webpack_require__(75);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchExampleStandard = __webpack_require__(895);

var _SearchExampleStandard2 = _interopRequireDefault(_SearchExampleStandard);

var _Map = __webpack_require__(897);

var _Map2 = _interopRequireDefault(_Map);

var _SidebarRightOverlay = __webpack_require__(899);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

var _Auth = __webpack_require__(83);

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
            loading: true,
            page: 1
        };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.pageChanged = _this.pageChanged.bind(_this);
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
        key: 'pageChanged',
        value: function pageChanged(e) {
            this.setState({ page: e.target.name });
            alert(this.state.page);
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
                body: JSON.stringify({
                    name: this.state.newMap.name || 'Untitled' + this.state.maps.length,
                    desc: this.state.newMap.desc
                })
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
                ),
                _react2.default.createElement(
                    _semanticUiReact.Menu,
                    { pagination: true },
                    _react2.default.createElement(_semanticUiReact.Menu.Item, { name: '1', active: this.state.page === '1', onClick: this.pageChanged }),
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        { disabled: true },
                        '...'
                    ),
                    _react2.default.createElement(_semanticUiReact.Menu.Item, { name: '10', active: this.state.page === '10', onClick: this.pageChanged }),
                    _react2.default.createElement(_semanticUiReact.Menu.Item, { name: '11', active: this.state.page === '11', onClick: this.pageChanged }),
                    _react2.default.createElement(_semanticUiReact.Menu.Item, { name: '12', active: this.state.page === '12', onClick: this.pageChanged })
                )
            );
        }
    }]);

    return Maps;
}(_react.Component);

exports.default = Maps;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJwYWdlIiwiaGFuZGxlSXRlbUNsaWNrIiwiYmluZCIsImFkZE1hcCIsImRlbGV0ZU1hcCIsImhhbmRsZUNoYW5nZSIsInBhZ2VDaGFuZ2VkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsImJvZHkiLCJsZW5ndGgiLCJwdXNoIiwicHJvamVjdCIsImkiLCJwcm9qZWN0SWQiLCJpZCIsInNwbGljZSIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY29sc05hbWUiLCJsYXN0Um93Q29scyIsIkFycmF5Iiwicm93IiwiY29sIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksU0FESDtBQUVUQyxrQkFBSyxFQUZJO0FBR1RDLG9CQUFRO0FBQ0pDLHNCQUFNLEVBREY7QUFFSkMsc0JBQU07QUFGRixhQUhDO0FBT1RDLHFCQUFTLElBUEE7QUFRVEMsa0JBQU07QUFSRyxTQUFiO0FBVUEsY0FBS0MsZUFBTCxH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S0FBS2IsS0FBTCxDQUFXTyxJQUFYLEtBQW9CLElBQWpELEVBQXVELFNBQVMsS0FBS00sV0FBckU7QUFMQTtBQTlEUixhQURKO0FBd0VIOzs7Ozs7a0JBck5nQmYsSSIsImZpbGUiOiIwLmE0YTZlZGIyZjQxNzI0MzRkYWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBGb3JtLCBJbnB1dCwgTGFiZWwsIFRleHRBcmVhLCBTZWdtZW50LCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9uLCBMb2FkZXIsIERpbW1lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEV4YW1wbGVTdGFuZGFyZCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZWJhclJpZ2h0T3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodE92ZXJsYXknXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBtYXBzOltdLFxuICAgICAgICAgICAgbmV3TWFwOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZE1hcCA9IHRoaXMuYWRkTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVNYXAgPSB0aGlzLmRlbGV0ZU1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkID0gdGhpcy5wYWdlQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IGUudGFyZ2V0Lm5hbWUgfSlcbiAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wYWdlKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3TWFwLm5hbWUgfHwgJ1VudGl0bGVkJyArIHRoaXMuc3RhdGUubWFwcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5uZXdNYXAuZGVzY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgIG1hcHMucHVzaChqc29uLnByb2plY3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcyB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzL3JlbW92ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnN0YXRlLm1hcHNbaV0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXBzfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcblxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgey8qPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICB7IC8qPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+ICovIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWFwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2Rlc2Mob3B0aW9uYWwpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJpdmF0ZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdzaGFyZWQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NoYXJlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjb2xzKS5tYXAoY29sc05hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbCh0aGlzLnN0YXRlLm1hcHMubGVuZ3RoIC8gY29sc1tjb2xzTmFtZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFJvd0NvbHMgPSB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoICUgY29sc1tjb2xzTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSb3dDb2xzID0gbGFzdFJvd0NvbHMgPT09IDAgPyBjb2xzW2NvbHNOYW1lXSA6IGxhc3RSb3dDb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLkFycmF5KHJvd3MpLmtleXMoKV0ubWFwKHJvdyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkocm93ID09PSByb3dzIC0gMSA/IGxhc3RSb3dDb2xzIDogY29sc1tjb2xzTmFtZV0pLmtleXMoKV0ubWFwKGNvbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmRlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9eyB0aGlzLnN0YXRlLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nMScgYWN0aXZlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcxJ30gb25DbGljaz17dGhpcy5wYWdlQ2hhbmdlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBkaXNhYmxlZD4uLi48L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPScxMCcgYWN0aXZlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcxMCd9IG9uQ2xpY2s9e3RoaXMucGFnZUNoYW5nZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nMTEnIGFjdGl2ZT17dGhpcy5zdGF0ZS5wYWdlID09PSAnMTEnfSBvbkNsaWNrPXt0aGlzLnBhZ2VDaGFuZ2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9JzEyJyBhY3RpdmU9e3RoaXMuc3RhdGUucGFnZSA9PT0gJzEyJ30gb25DbGljaz17dGhpcy5wYWdlQ2hhbmdlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=