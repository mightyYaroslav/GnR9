webpackHotUpdate(0,{

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(63);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchBar = __webpack_require__(908);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Map = __webpack_require__(910);

var _Map2 = _interopRequireDefault(_Map);

var _Sidebar = __webpack_require__(919);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Auth = __webpack_require__(73);

var _Auth2 = _interopRequireDefault(_Auth);

var _reactRouterDom = __webpack_require__(43);

var _MapsGrid = __webpack_require__(920);

var _MapsGrid2 = _interopRequireDefault(_MapsGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resultRenderer = function resultRenderer(_ref) {
    var name = _ref.name,
        desc = _ref.desc;
    return _react2.default.createElement(_semanticUiReact.Label, { content: name });
};

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
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
            selectedMap: null,
            loading: true,
            currentPage: 0,
            pages: 0,
            sidebarIsVisible: false
        };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.pageChanged = _this.pageChanged.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        _this.toggleSidebar = _this.toggleSidebar.bind(_this);
        return _this;
    }

    _createClass(Maps, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
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
                    currentPage: json.currentPage,
                    pages: json.pages,
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
        key: 'goToCanvas',
        value: function goToCanvas(id) {
            this.props.history.push('/canvas/' + id);
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
        value: function pageChanged(page) {
            var _this3 = this;

            this.setState({ loading: true });
            fetch('/projects?page=' + page, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this3.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                console.log(JSON.stringify(json.projects));
                _this3.setState({
                    maps: json.projects,
                    currentPage: json.currentPage,
                    pages: json.pages,
                    loading: false
                });
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
        key: 'addMap',
        value: function addMap() {
            var _this4 = this;

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
                    _this4.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).then(function (json) {
                var maps = _this4.state.maps;
                maps.push(json.project);
                _this4.setState({ maps: maps, pages: json.pages });
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
        key: 'deleteMap',
        value: function deleteMap(i) {
            var _this5 = this;

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
                    var maps = _this5.state.maps;
                    maps.splice(i, 1);
                    _this5.setState({ maps: maps });
                } else {
                    _this5.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).catch(function (err) {
                return _this5.setState({
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
        value: function handleItemClick(e, _ref2) {
            var name = _ref2.name;

            this.setState({ activeItem: name });
        }
    }, {
        key: 'toggleSidebar',
        value: function toggleSidebar(map) {
            this.setState({
                sidebarIsVisible: !this.state.sidebarIsVisible || map !== this.state.selectedMap,
                selectedMap: map
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var activeItem = this.state.activeItem;


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
                        _react2.default.createElement(_SearchBar2.default, { stretched: true, source: this.state.maps, resultRenderer: resultRenderer, searchBy: 'name' }),
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
                        _react2.default.createElement(_MapsGrid2.default, {
                            maps: this.state.maps,
                            goToCanvas: this.goToCanvas,
                            toggleSidebar: this.toggleSidebar,
                            deleteMap: this.deleteMap }),
                        '/>'
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Grid,
                    {
                        textAlign: 'center',
                        style: { height: '100%' },
                        verticalAlign: 'middle'
                    },
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { style: { maxWidth: 450 } },
                        _react2.default.createElement(
                            _semanticUiReact.Menu,
                            { pagination: true },
                            [].concat(_toConsumableArray(Array(this.state.pages).keys())).map(function (i) {
                                return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: ~~_this6.state.currentPage === i + 1, onClick: function onClick() {
                                        return _this6.pageChanged(i + 1);
                                    } });
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Maps;
}(_react.Component));

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _Map = __webpack_require__(910);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapsGrid = function (_Component) {
    _inherits(MapsGrid, _Component);

    function MapsGrid() {
        _classCallCheck(this, MapsGrid);

        return _possibleConstructorReturn(this, (MapsGrid.__proto__ || Object.getPrototypeOf(MapsGrid)).apply(this, arguments));
    }

    _createClass(MapsGrid, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cols = {
                'computer': 4,
                'tablet': 2,
                'mobile': 1
            };
            return _react2.default.createElement(
                _semanticUiReact.Grid,
                null,
                Object.keys(cols).map(function (colsName) {
                    var rows = Math.ceil(_this2.props.maps.length / cols[colsName]);
                    var lastRowCols = _this2.props.maps.length % cols[colsName];
                    lastRowCols = lastRowCols === 0 ? cols[colsName] : lastRowCols;
                    return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                        return _react2.default.createElement(
                            _semanticUiReact.Grid.Row,
                            { columns: cols[colsName], only: colsName },
                            [].concat(_toConsumableArray(Array(row === rows - 1 ? lastRowCols : cols[colsName]).keys())).map(function (col) {
                                return _react2.default.createElement(
                                    _semanticUiReact.Grid.Column,
                                    null,
                                    _react2.default.createElement(_Map2.default, { name: _this2.props.maps[row * cols[colsName] + col].name,
                                        desc: _this2.props.maps[row * cols[colsName] + col].desc,
                                        date: _this2.props.maps[row * cols[colsName] + col].date,
                                        onCardClicked: function onCardClicked() {
                                            return _this2.props.goToCanvas(_this2.props.maps[row * cols[colsName] + col].id);
                                        },
                                        onInfoClicked: function onInfoClicked() {
                                            return _this2.props.toggleSidebar(_this2.props.maps[row * cols[colsName] + col]);
                                        },
                                        onDeleteClicked: function onDeleteClicked() {
                                            return _this2.props.deleteMap(row * cols[colsName] + col);
                                        } })
                                );
                            })
                        );
                    });
                })
            );
        }
    }]);

    return MapsGrid;
}(_react.Component);

exports.default = MapsGrid;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcHNHcmlkLmpzIl0sIm5hbWVzIjpbInJlc3VsdFJlbmRlcmVyIiwibmFtZSIsImRlc2MiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJzZWxlY3RlZE1hcCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VzIiwic2lkZWJhcklzVmlzaWJsZSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJoYW5kbGVDaGFuZ2UiLCJwYWdlQ2hhbmdlZCIsImRlbGV0ZU1hcCIsInRvZ2dsZVNpZGViYXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwibWFwIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIiwiQXJyYXkiLCJrZXlzIiwiTWFwc0dyaWQiLCJjb2xzIiwiT2JqZWN0Iiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY29sc05hbWUiLCJsYXN0Um93Q29scyIsInJvdyIsImNvbCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLFdBQW9CLHdEQUFPLFNBQVNELElBQWhCLEdBQXBCO0FBQUEsQ0FBdkI7O2tCQUVlO0FBQUE7O0FBRVgsa0JBQVlFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksU0FESDtBQUVUQyxrQkFBSyxFQUZJO0FBR1RDLG9CQUFRO0FBQ0pOLHNCQUFNLEVBREY7QUFFSkMsc0JBQU07QUFGRixhQUhDO0FBT1RNLHlCQUFhLElBUEo7QUFRVEMscUJBQVMsSUFSQTtBQVNUQyx5QkFBYSxDQVRKO0FBVVRDLG1CQUFPLENBVkU7QUFXVEMsOEJBQWtCO0FBWFQsU0FBYjtBQWFBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFDQSxjQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBQ0EsY0FBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQixPQUFuQjtBQUNBLGNBQUtJLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSixJQUFmLE9BQWpCO0FBQ0EsY0FBS0ssYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CTCxJQUFuQixPQUFyQjtBQXBCZTtBQXFCbEI7O0FBdkJVO0FBQUE7QUFBQSw0Q0F5QlM7QUFBQTs7QUFDaEJNLGtCQUFNLFdBQU4sRUFBbUI7QUFDZkMsd0JBQVEsS0FETztBQUVmQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLGlEQUEyQixlQUFLQyxRQUFMO0FBRnRCO0FBRk0sYUFBbkIsRUFPS0MsSUFQTCxDQU9VLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FHSSxPQUFLQyxRQUFMLENBQWM7QUFDVkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQkosNEJBQUlLO0FBQXhCLHFCQURGO0FBRVZyQiw2QkFBUztBQUZDLGlCQUFkO0FBSVAsYUFmTCxFQWdCS2UsSUFoQkwsQ0FnQlUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlUCxLQUFLUSxRQUFwQixDQUFaO0FBQ0EsdUJBQUtQLFFBQUwsQ0FBYztBQUNWdEIsMEJBQU1xQixLQUFLUSxRQUREO0FBRVZ6QixpQ0FBYWlCLEtBQUtqQixXQUZSO0FBR1ZDLDJCQUFPZ0IsS0FBS2hCLEtBSEY7QUFJVkYsNkJBQVM7QUFKQyxpQkFBZDtBQU1ILGFBeEJMLEVBeUJLMkIsS0F6QkwsQ0F5Qlc7QUFBQSx1QkFBTyxPQUFLUixRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JRO0FBQXBCLHFCQURZO0FBRXhCNUIsNkJBQVM7QUFGZSxpQkFBZCxDQUFQO0FBQUEsYUF6Qlg7QUE2Qkg7QUF2RFU7QUFBQTtBQUFBLG1DQXlEQTZCLEVBekRBLEVBeURJO0FBQ1gsaUJBQUtuQyxLQUFMLENBQVdvQyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixhQUFZRixFQUFwQztBQUNIO0FBM0RVO0FBQUE7QUFBQSxxQ0E2REVHLENBN0RGLEVBNkRLO0FBQUEsNEJBQ1VBLEVBQUVDLE1BRFo7QUFBQSxnQkFDTHpDLElBREssYUFDTEEsSUFESztBQUFBLGdCQUNDMEMsS0FERCxhQUNDQSxLQUREOztBQUVaLGdCQUFNcEMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE1BQTFCO0FBQ0FBLG1CQUFPTixJQUFQLElBQWUwQyxLQUFmO0FBQ0EsaUJBQUtmLFFBQUwsQ0FBYztBQUNWckIsOEJBRFU7QUFFVnNCLDRCQUFZO0FBRkYsYUFBZDtBQUlIO0FBckVVO0FBQUE7QUFBQSxvQ0F1RUNlLElBdkVELEVBdUVPO0FBQUE7O0FBQ2QsaUJBQUtoQixRQUFMLENBQWMsRUFBRW5CLFNBQVMsSUFBWCxFQUFkO0FBQ0FXLGtCQUFNLG9CQUFrQndCLElBQXhCLEVBQThCO0FBQzFCdkIsd0JBQVEsS0FEa0I7QUFFMUJDLHlCQUFTO0FBQ0wsb0NBQWdCLGtCQURYO0FBRUwsaURBQTJCLGVBQUtDLFFBQUw7QUFGdEI7QUFGaUIsYUFBOUIsRUFPS0MsSUFQTCxDQU9VLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FHSSxPQUFLQyxRQUFMLENBQWM7QUFDVkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQkosNEJBQUlLO0FBQXhCLHFCQURGO0FBRVZyQiw2QkFBUztBQUZDLGlCQUFkO0FBSVAsYUFmTCxFQWdCS2UsSUFoQkwsQ0FnQlUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlUCxLQUFLUSxRQUFwQixDQUFaO0FBQ0EsdUJBQUtQLFFBQUwsQ0FBYztBQUNWdEIsMEJBQU1xQixLQUFLUSxRQUREO0FBRVZ6QixpQ0FBYWlCLEtBQUtqQixXQUZSO0FBR1ZDLDJCQUFPZ0IsS0FBS2hCLEtBSEY7QUFJVkYsNkJBQVM7QUFKQyxpQkFBZDtBQU1ILGFBeEJMLEVBeUJLMkIsS0F6QkwsQ0F5Qlc7QUFBQSx1QkFBTyxPQUFLUixRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JRO0FBQXBCLHFCQURZO0FBRXhCNUIsNkJBQVM7QUFGZSxpQkFBZCxDQUFQO0FBQUEsYUF6Qlg7QUE2Qkg7QUF0R1U7QUFBQTtBQUFBLGlDQXdHRjtBQUFBOztBQUNMVyxrQkFBTSxlQUFOLEVBQXVCO0FBQ25CQyx3QkFBUSxNQURXO0FBRW5CQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLGlEQUEyQixlQUFLQyxRQUFMO0FBRnRCLGlCQUZVO0FBTW5Cc0Isc0JBQU1aLEtBQUtDLFNBQUwsQ0FBZTtBQUNqQmpDLDBCQUFNLEtBQUtHLEtBQUwsQ0FBV0csTUFBWCxDQUFrQk4sSUFBbEIsSUFBMEIsYUFBYSxLQUFLRyxLQUFMLENBQVdFLElBQVgsQ0FBZ0J3QyxNQUQ1QztBQUVqQjVDLDBCQUFNLEtBQUtFLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkw7QUFGUCxpQkFBZjtBQU5hLGFBQXZCLEVBV0NzQixJQVhELENBV00sZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBdUI7QUFDbkIsMkJBQU9ELElBQUlFLElBQUosRUFBUDtBQUNILGlCQUZELE1BRU87QUFDSCwyQkFBS0MsUUFBTCxDQUFjO0FBQ1ZDLG9DQUFZO0FBQUE7QUFBQSw4QkFBTyxPQUFNLEtBQWI7QUFBb0JKLGdDQUFJSztBQUF4Qix5QkFERjtBQUVWckIsaUNBQVM7QUFGQyxxQkFBZDtBQUlIO0FBQ0osYUFwQkQsRUFxQkNlLElBckJELENBcUJNLGdCQUFRO0FBQ1Ysb0JBQUlsQixPQUFPLE9BQUtGLEtBQUwsQ0FBV0UsSUFBdEI7QUFDQUEscUJBQUtrQyxJQUFMLENBQVViLEtBQUtvQixPQUFmO0FBQ0EsdUJBQUtuQixRQUFMLENBQWMsRUFBRXRCLFVBQUYsRUFBUUssT0FBT2dCLEtBQUtoQixLQUFwQixFQUFkO0FBQ0gsYUF6QkQsRUEwQkN5QixLQTFCRCxDQTBCTztBQUFBLHVCQUFPLE9BQUtSLFFBQUwsQ0FBYztBQUN4QkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQlE7QUFBcEIscUJBRFk7QUFFeEI1Qiw2QkFBUztBQUZlLGlCQUFkLENBQVA7QUFBQSxhQTFCUDtBQThCSDtBQXZJVTtBQUFBO0FBQUEsa0NBeUlEdUMsQ0F6SUMsRUF5SUU7QUFBQTs7QUFDVDVCLGtCQUFNLGtCQUFOLEVBQTBCO0FBQ3RCQyx3QkFBUSxNQURjO0FBRXRCQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLGlEQUEyQixlQUFLQyxRQUFMO0FBRnRCLGlCQUZhO0FBTXRCc0Isc0JBQU1aLEtBQUtDLFNBQUwsQ0FBZTtBQUNqQmUsK0JBQVcsS0FBSzdDLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQjBDLENBQWhCLEVBQW1CVjtBQURiLGlCQUFmO0FBTmdCLGFBQTFCLEVBVUtkLElBVkwsQ0FVVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUF1QjtBQUNuQix3QkFBSXBCLE9BQU8sT0FBS0YsS0FBTCxDQUFXRSxJQUF0QjtBQUNBQSx5QkFBSzRDLE1BQUwsQ0FBWUYsQ0FBWixFQUFlLENBQWY7QUFDQSwyQkFBS3BCLFFBQUwsQ0FBYyxFQUFDdEIsVUFBRCxFQUFkO0FBQ0gsaUJBSkQsTUFJTztBQUNILDJCQUFLc0IsUUFBTCxDQUFjO0FBQ1ZDLG9DQUFZO0FBQUE7QUFBQSw4QkFBTyxPQUFNLEtBQWI7QUFBb0JKLGdDQUFJSztBQUF4Qix5QkFERjtBQUVWckIsaUNBQVM7QUFGQyxxQkFBZDtBQUlIO0FBQ0osYUFyQkwsRUFzQksyQixLQXRCTCxDQXNCVztBQUFBLHVCQUFPLE9BQUtSLFFBQUwsQ0FBYztBQUN4QkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQlE7QUFBcEIscUJBRFk7QUFFeEI1Qiw2QkFBUztBQUZlLGlCQUFkLENBQVA7QUFBQSxhQXRCWDtBQTJCSDtBQXJLVTtBQUFBO0FBQUEsd0NBdUtLZ0MsQ0F2S0wsU0F1S2dCO0FBQUEsZ0JBQVB4QyxJQUFPLFNBQVBBLElBQU87O0FBQ3ZCLGlCQUFLMkIsUUFBTCxDQUFjLEVBQUN2QixZQUFZSixJQUFiLEVBQWQ7QUFDSDtBQXpLVTtBQUFBO0FBQUEsc0NBMktHa0QsR0EzS0gsRUEyS1E7QUFDZixpQkFBS3ZCLFFBQUwsQ0FBYztBQUNWaEIsa0NBQWtCLENBQUMsS0FBS1IsS0FBTCxDQUFXUSxnQkFBWixJQUFnQ3VDLFFBQVEsS0FBSy9DLEtBQUwsQ0FBV0ksV0FEM0Q7QUFFVkEsNkJBQWEyQztBQUZILGFBQWQ7QUFJSDtBQWhMVTtBQUFBO0FBQUEsaUNBa0xGO0FBQUE7O0FBQUEsZ0JBQ0U5QyxVQURGLEdBQ2dCLEtBQUtELEtBRHJCLENBQ0VDLFVBREY7OztBQUdMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBR1E7QUFBQTtBQUFBLHNCQUFRLFFBQVEsS0FBS0QsS0FBTCxDQUFXSyxPQUEzQixFQUFvQyxjQUFwQztBQUNBO0FBREEsaUJBSFI7QUFNUTtBQUFBO0FBQUE7QUFDSTtBQUFBLDhDQUFNLE1BQU47QUFBQSwwQkFBYSxPQUFPLENBQXBCO0FBQ0EsNkVBQVcsZUFBWCxFQUFxQixRQUFRLEtBQUtMLEtBQUwsQ0FBV0UsSUFBeEMsRUFBOEMsZ0JBQWdCTixjQUE5RCxFQUE4RSxVQUFTLE1BQXZGLEdBREE7QUFFQTtBQUFBO0FBQUEsOEJBQU0sV0FBTixFQUFZLGNBQVo7QUFDSTtBQUFBLHNEQUFNLElBQU47QUFBQSxrQ0FBVyxNQUFLLEtBQWhCO0FBQ0E7QUFBQTtBQUFBLHNDQUFNLFVBQVUsS0FBS2UsTUFBckI7QUFDSSx3RkFBTSxLQUFOO0FBQ0EsOENBQUssTUFETDtBQUVBLHFEQUFZLE1BRlo7QUFHQSx1RUFIQTtBQUlBLCtDQUFPLEtBQUtYLEtBQUwsQ0FBV0csTUFBWCxDQUFrQk4sSUFKekI7QUFLQSxrREFBVSxLQUFLZTtBQUxmLHNDQURKO0FBUUksd0ZBQU0sS0FBTjtBQUNBLDhDQUFLLE1BREw7QUFFQSxxREFBWSxnQkFGWjtBQUdBLDBFQUhBO0FBSUEsK0NBQU8sS0FBS1osS0FBTCxDQUFXRyxNQUFYLENBQWtCTCxJQUp6QjtBQUtBLGtEQUFVLEtBQUtjO0FBTGYsc0NBUko7QUFlSTtBQUFBO0FBQUEsMENBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQWZKO0FBREEsNkJBREo7QUFzQkksZ0ZBQU0sSUFBTixJQUFXLE1BQUssU0FBaEIsRUFBMEIsUUFBUVgsZUFBZSxTQUFqRDtBQUNXLHlDQUFTLEtBQUtRLGVBRHpCLEdBdEJKO0FBd0JJLGdGQUFNLElBQU4sSUFBVyxNQUFLLFFBQWhCLEVBQXlCLFFBQVFSLGVBQWUsUUFBaEQ7QUFDVyx5Q0FBUyxLQUFLUSxlQUR6QjtBQXhCSjtBQUZBLHFCQURKO0FBZ0NJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLGVBQWIsRUFBdUIsT0FBTyxFQUE5QjtBQUNJO0FBQ0ksa0NBQU0sS0FBS1QsS0FBTCxDQUFXRSxJQURyQjtBQUVJLHdDQUFZLEtBQUs4QyxVQUZyQjtBQUdJLDJDQUFlLEtBQUtqQyxhQUh4QjtBQUlJLHVDQUFXLEtBQUtELFNBSnBCLEdBREo7QUFBQTtBQUFBO0FBaENKLGlCQU5SO0FBK0NRO0FBQUE7QUFBQTtBQUNJLG1DQUFVLFFBRGQ7QUFFSSwrQkFBTyxFQUFFbUMsUUFBUSxNQUFWLEVBRlg7QUFHSSx1Q0FBYztBQUhsQjtBQUtJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLE9BQU8sRUFBRUMsVUFBVSxHQUFaLEVBQXBCO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLGdCQUFOO0FBQ0MseURBQUlDLE1BQU0sS0FBS25ELEtBQUwsQ0FBV08sS0FBakIsRUFBd0I2QyxJQUF4QixFQUFKLEdBQW9DTCxHQUFwQyxDQUF3QztBQUFBLHVDQUNyQyxvREFBTSxJQUFOLElBQVcsTUFBTUgsSUFBRSxDQUFuQixFQUFzQixRQUFRLENBQUMsQ0FBQyxPQUFLNUMsS0FBTCxDQUFXTSxXQUFiLEtBQTZCc0MsSUFBSSxDQUEvRCxFQUFrRSxTQUFTO0FBQUEsK0NBQU0sT0FBSy9CLFdBQUwsQ0FBaUIrQixJQUFFLENBQW5CLENBQU47QUFBQSxxQ0FBM0UsR0FEcUM7QUFBQSw2QkFBeEM7QUFERDtBQURKO0FBTEo7QUEvQ1IsYUFESjtBQStESDtBQXBQVTs7QUFBQTtBQUFBLG9COzs7Ozs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJTLFE7Ozs7Ozs7Ozs7O2lDQUVSO0FBQUE7O0FBQ0wsZ0JBQU1DLE9BQU87QUFDVCw0QkFBWSxDQURIO0FBRVQsMEJBQVUsQ0FGRDtBQUdULDBCQUFVO0FBSEQsYUFBYjtBQUtBLG1CQUNJO0FBQUE7QUFBQTtBQUNLQyx1QkFBT0gsSUFBUCxDQUFZRSxJQUFaLEVBQWtCUCxHQUFsQixDQUFzQixvQkFBWTtBQUMvQix3QkFBTVMsT0FBT0MsS0FBS0MsSUFBTCxDQUFVLE9BQUszRCxLQUFMLENBQVdHLElBQVgsQ0FBZ0J3QyxNQUFoQixHQUF5QlksS0FBS0ssUUFBTCxDQUFuQyxDQUFiO0FBQ0Esd0JBQUlDLGNBQWMsT0FBSzdELEtBQUwsQ0FBV0csSUFBWCxDQUFnQndDLE1BQWhCLEdBQXlCWSxLQUFLSyxRQUFMLENBQTNDO0FBQ0FDLGtDQUFjQSxnQkFBZ0IsQ0FBaEIsR0FBb0JOLEtBQUtLLFFBQUwsQ0FBcEIsR0FBcUNDLFdBQW5EO0FBQ0EsMkJBQU8sNkJBQUlULE1BQU1LLElBQU4sRUFBWUosSUFBWixFQUFKLEdBQXdCTCxHQUF4QixDQUE0QjtBQUFBLCtCQUMvQjtBQUFBLGtEQUFNLEdBQU47QUFBQSw4QkFBVSxTQUFTTyxLQUFLSyxRQUFMLENBQW5CLEVBQW1DLE1BQU1BLFFBQXpDO0FBQ0sseURBQUlSLE1BQU1VLFFBQVFMLE9BQU8sQ0FBZixHQUFtQkksV0FBbkIsR0FBaUNOLEtBQUtLLFFBQUwsQ0FBdkMsRUFBdURQLElBQXZELEVBQUosR0FBbUVMLEdBQW5FLENBQXVFO0FBQUEsdUNBQ3BFO0FBQUEsMERBQU0sTUFBTjtBQUFBO0FBQ0ksbUZBQUssTUFBTyxPQUFLaEQsS0FBTCxDQUFXRyxJQUFYLENBQWdCMkQsTUFBTVAsS0FBS0ssUUFBTCxDQUFOLEdBQXVCRyxHQUF2QyxFQUE0Q2pFLElBQXhEO0FBQ0ssOENBQU8sT0FBS0UsS0FBTCxDQUFXRyxJQUFYLENBQWdCMkQsTUFBTVAsS0FBS0ssUUFBTCxDQUFOLEdBQXVCRyxHQUF2QyxFQUE0Q2hFLElBRHhEO0FBRUssOENBQU8sT0FBS0MsS0FBTCxDQUFXRyxJQUFYLENBQWdCMkQsTUFBTVAsS0FBS0ssUUFBTCxDQUFOLEdBQXVCRyxHQUF2QyxFQUE0Q0MsSUFGeEQ7QUFHSyx1REFBZTtBQUFBLG1EQUFNLE9BQUtoRSxLQUFMLENBQVdpRCxVQUFYLENBQXNCLE9BQUtqRCxLQUFMLENBQVdHLElBQVgsQ0FBZ0IyRCxNQUFNUCxLQUFLSyxRQUFMLENBQU4sR0FBdUJHLEdBQXZDLEVBQTRDNUIsRUFBbEUsQ0FBTjtBQUFBLHlDQUhwQjtBQUlLLHVEQUFlO0FBQUEsbURBQU0sT0FBS25DLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUIsT0FBS2hCLEtBQUwsQ0FBV0csSUFBWCxDQUFnQjJELE1BQU1QLEtBQUtLLFFBQUwsQ0FBTixHQUF1QkcsR0FBdkMsQ0FBekIsQ0FBTjtBQUFBLHlDQUpwQjtBQUtLLHlEQUFpQjtBQUFBLG1EQUFNLE9BQUsvRCxLQUFMLENBQVdlLFNBQVgsQ0FBcUIrQyxNQUFNUCxLQUFLSyxRQUFMLENBQU4sR0FBdUJHLEdBQTVDLENBQU47QUFBQSx5Q0FMdEI7QUFESixpQ0FEb0U7QUFBQSw2QkFBdkU7QUFETCx5QkFEK0I7QUFBQSxxQkFBNUIsQ0FBUDtBQWNILGlCQWxCQTtBQURMLGFBREo7QUF1Qkg7Ozs7OztrQkEvQmdCVCxRIiwiZmlsZSI6IjAuOWNkMzg2NzAxZjBjMjk1NGQ4MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBNYXBzR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL01hcHNHcmlkJ1xuXG5jb25zdCByZXN1bHRSZW5kZXJlciA9ICh7IG5hbWUsIGRlc2MgfSkgPT4gPExhYmVsIGNvbnRlbnQ9e25hbWV9Lz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRNYXA6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMCxcbiAgICAgICAgICAgIHNpZGViYXJJc1Zpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyID0gdGhpcy50b2dnbGVTaWRlYmFyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBnb1RvQ2FudmFzKGlkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2FudmFzLycrIGlkKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICBjb25zdCBuZXdNYXAgPSB0aGlzLnN0YXRlLm5ld01hcFxuICAgICAgICBuZXdNYXBbbmFtZV0gPSB2YWx1ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5ld01hcCxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcGFnZUNoYW5nZWQocGFnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICBmZXRjaCgnL3Byb2plY3RzP3BhZ2U9JytwYWdlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFwczoganNvbi5wcm9qZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGpzb24uY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiBqc29uLnBhZ2VzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgYWRkTWFwKCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uZXdNYXAubmFtZSB8fCAnVW50aXRsZWQnICsgdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBkZXNjOiB0aGlzLnN0YXRlLm5ld01hcC5kZXNjXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgbWFwcy5wdXNoKGpzb24ucHJvamVjdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXBzLCBwYWdlczoganNvbi5wYWdlcyB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzL3JlbW92ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnN0YXRlLm1hcHNbaV0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXBzfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcblxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZWJhcihtYXApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaWRlYmFySXNWaXNpYmxlOiAhdGhpcy5zdGF0ZS5zaWRlYmFySXNWaXNpYmxlIHx8IG1hcCAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcCxcbiAgICAgICAgICAgIHNlbGVjdGVkTWFwOiBtYXBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICAgICAgey8qPFNpZGVCYXIgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaWRlYmFySXNWaXNpYmxlfSBvYmplY3Q9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNYXB9Lz4qL31cbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgc3RyZXRjaGVkIHNvdXJjZT17dGhpcy5zdGF0ZS5tYXBzfSByZXN1bHRSZW5kZXJlcj17cmVzdWx0UmVuZGVyZXJ9IHNlYXJjaEJ5PSduYW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWFwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGVzYyhvcHRpb25hbCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcHNHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHM9e3RoaXMuc3RhdGUubWFwc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29Ub0NhbnZhcz17dGhpcy5nb1RvQ2FudmFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU1hcD17dGhpcy5kZWxldGVNYXB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkodGhpcy5zdGF0ZS5wYWdlcykua2V5cygpXS5tYXAoaSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e35+dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHNHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjb2xzKS5tYXAoY29sc05hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSb3dDb2xzID0gdGhpcy5wcm9wcy5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSb3dDb2xzID0gbGFzdFJvd0NvbHMgPT09IDAgPyBjb2xzW2NvbHNOYW1lXSA6IGxhc3RSb3dDb2xzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJvdyA9PT0gcm93cyAtIDEgPyBsYXN0Um93Q29scyA6IGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9eyB0aGlzLnByb3BzLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXsgdGhpcy5wcm9wcy5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMucHJvcHMubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FyZENsaWNrZWQ9eygpID0+IHRoaXMucHJvcHMuZ29Ub0NhbnZhcyh0aGlzLnByb3BzLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbmZvQ2xpY2tlZD17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVTaWRlYmFyKHRoaXMucHJvcHMubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUNsaWNrZWQ9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlTWFwKHJvdyAqIGNvbHNbY29sc05hbWVdICsgY29sKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcHNHcmlkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==