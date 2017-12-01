webpackHotUpdate(0,{

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(17);

var _navbar = __webpack_require__(63);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchBar = __webpack_require__(909);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Map = __webpack_require__(484);

var _Map2 = _interopRequireDefault(_Map);

var _MapInfoSidebar = __webpack_require__(920);

var _MapInfoSidebar2 = _interopRequireDefault(_MapInfoSidebar);

var _Auth = __webpack_require__(73);

var _Auth2 = _interopRequireDefault(_Auth);

var _reactRouterDom = __webpack_require__(43);

var _MapsGrid = __webpack_require__(913);

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
            selectedMap: {},
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
        _this.goToCanvas = _this.goToCanvas.bind(_this);
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
        key: 'getUsers',
        value: function getUsers() {
            var _this3 = this;

            fetch('/profiles', {
                method: 'POST',
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
                console.log(JSON.stringify(json));
                _this3.setState({ profiles: json.users, loading: false, pages: json.pages, currentPage: json.currentPage });
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
        key: 'goToCanvas',
        value: function goToCanvas(id) {
            console.log('goToCanvas');
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
            var _this4 = this;

            this.setState({ loading: true });
            fetch('/projects?page=' + page, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this4.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                console.log(JSON.stringify(json.projects));
                _this4.setState({
                    maps: json.projects,
                    currentPage: json.currentPage,
                    pages: json.pages,
                    loading: false
                });
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
        key: 'addMap',
        value: function addMap() {
            var _this5 = this;

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
                    _this5.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).then(function (json) {
                var maps = _this5.state.maps;
                maps.push(json.project);
                _this5.setState({ maps: maps, pages: json.pages });
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
        key: 'deleteMap',
        value: function deleteMap(i) {
            var _this6 = this;

            console.log('deleteMap');
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
                    var maps = _this6.state.maps;
                    maps.splice(i, 1);
                    _this6.setState({ maps: maps });
                } else {
                    _this6.setState({
                        errorLabel: _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'red' },
                            res.statusText
                        ),
                        loading: false
                    });
                }
            }).catch(function (err) {
                return _this6.setState({
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
            console.log('toggleSidebar');
            this.setState({
                sidebarIsVisible: !this.state.sidebarIsVisible || map !== this.state.selectedMap,
                selectedMap: map
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

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
                    _MapInfoSidebar2.default,
                    {
                        visible: this.state.sidebarIsVisible,
                        object: this.state.selectedMap
                    },
                    _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { stackable: true, columns: 2 },
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { width: 4 },
                            _react2.default.createElement(_SearchBar2.default, { fluid: true, source: this.state.maps, resultRenderer: resultRenderer, searchBy: 'name' }),
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
                            { width: 12 },
                            _react2.default.createElement(_MapsGrid2.default, {
                                maps: this.state.maps,
                                goToCanvas: this.goToCanvas,
                                toggleSidebar: this.toggleSidebar,
                                deleteMap: this.deleteMap
                            })
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
                                    return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: ~~_this7.state.currentPage === i + 1, onClick: function onClick() {
                                            return _this7.pageChanged(i + 1);
                                        } });
                                })
                            )
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

var _semanticUiReact = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInfoSideBar = function (_Component) {
    _inherits(MapInfoSideBar, _Component);

    function MapInfoSideBar(props) {
        _classCallCheck(this, MapInfoSideBar);

        return _possibleConstructorReturn(this, (MapInfoSideBar.__proto__ || Object.getPrototypeOf(MapInfoSideBar)).call(this, props));
    }

    _createClass(MapInfoSideBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _semanticUiReact.Sidebar.Pushable,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Sidebar,
                    {
                        as: _semanticUiReact.Menu,
                        animation: 'overlay',
                        width: 'large',
                        direction: 'right',
                        visible: this.props.visible,
                        icon: 'labeled',
                        vertical: true
                    },
                    Object.keys(this.props.object).map(function (key) {
                        return _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            null,
                            key + ' : ' + _this2.props.object[key]
                        );
                    })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Sidebar.Pusher,
                    { as: _semanticUiReact.Container },
                    _react2.default.createElement(
                        _semanticUiReact.Segment,
                        { basic: true },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return MapInfoSideBar;
}(_react.Component);

exports.default = MapInfoSideBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcEluZm9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbInJlc3VsdFJlbmRlcmVyIiwibmFtZSIsImRlc2MiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJzZWxlY3RlZE1hcCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VzIiwic2lkZWJhcklzVmlzaWJsZSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJoYW5kbGVDaGFuZ2UiLCJwYWdlQ2hhbmdlZCIsImRlbGV0ZU1hcCIsInRvZ2dsZVNpZGViYXIiLCJnb1RvQ2FudmFzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJwcm9maWxlcyIsInVzZXJzIiwiaWQiLCJoaXN0b3J5IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhZ2UiLCJib2R5IiwibGVuZ3RoIiwicHJvamVjdCIsImkiLCJwcm9qZWN0SWQiLCJzcGxpY2UiLCJtYXAiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIkFycmF5Iiwia2V5cyIsIk1hcEluZm9TaWRlQmFyIiwidmlzaWJsZSIsIk9iamVjdCIsIm9iamVjdCIsImtleSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxRQUFHQyxJ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QTtBQUNJLGlEQURKO0FBRUksbUNBQVUsU0FGZDtBQUdJLCtCQUFNLE9BSFY7QUFJSSxtQ0FBVSxPQUpkO0FBS0ksaUNBQVMsS0FBS0EsS0FBTCxDQUFXeUQsT0FMeEI7QUFNSSw4QkFBSyxTQU5UO0FBT0k7QUFQSjtBQVNLQywyQkFBT0gsSUFBUCxDQUFZLEtBQUt2RCxLQUFMLENBQVcyRCxNQUF2QixFQUErQlIsR0FBL0IsQ0FBbUM7QUFBQSwrQkFDaEM7QUFBQSxrREFBTSxJQUFOO0FBQUE7QUFBWVMsa0NBQU0sS0FBTixHQUFjLE9BQUs1RCxLQUFMLENBQVcyRCxNQUFYLENBQWtCQyxHQUFsQjtBQUExQix5QkFEZ0M7QUFBQSxxQkFBbkM7QUFUTCxpQkFESjtBQWNJO0FBQUEsNkNBQVMsTUFBVDtBQUFBLHNCQUFnQiw4QkFBaEI7QUFDSTtBQUFBO0FBQUEsMEJBQVMsV0FBVDtBQUNLLDZCQUFLNUQsS0FBTCxDQUFXNkQ7QUFEaEI7QUFESjtBQWRKLGFBREo7QUFzQkg7Ozs7OztrQkE3QmdCTCxjIiwiZmlsZSI6IjAuNTYyZTc4MzljZWRhNTAyNWFiMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBNYXBJbmZvU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL01hcEluZm9TaWRlYmFyJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IE1hcHNHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwc0dyaWQnXG5cbmNvbnN0IHJlc3VsdFJlbmRlcmVyID0gKHsgbmFtZSwgZGVzYyB9KSA9PiA8TGFiZWwgY29udGVudD17bmFtZX0vPlxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBtYXBzOltdLFxuICAgICAgICAgICAgbmV3TWFwOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZE1hcDoge30sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMCxcbiAgICAgICAgICAgIHNpZGViYXJJc1Zpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyID0gdGhpcy50b2dnbGVTaWRlYmFyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzID0gdGhpcy5nb1RvQ2FudmFzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlcycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZXM6IGpzb24udXNlcnMsIGxvYWRpbmc6IGZhbHNlLCBwYWdlczoganNvbi5wYWdlcywgY3VycmVudFBhZ2U6IGpzb24uY3VycmVudFBhZ2UgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBnb1RvQ2FudmFzKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnb1RvQ2FudmFzJylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGZldGNoKCcvcHJvamVjdHM/cGFnZT0nK3BhZ2UsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld01hcC5uYW1lIHx8ICdVbnRpdGxlZCcgKyB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUubmV3TWFwLmRlc2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMsIHBhZ2VzOiBqc29uLnBhZ2VzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVNYXAnKVxuICAgICAgICBmZXRjaCgnL3Byb2plY3RzL3JlbW92ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnN0YXRlLm1hcHNbaV0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXBzfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcblxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZWJhcihtYXApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZVNpZGViYXInKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNpZGViYXJJc1Zpc2libGU6ICF0aGlzLnN0YXRlLnNpZGViYXJJc1Zpc2libGUgfHwgbWFwICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkTWFwLFxuICAgICAgICAgICAgc2VsZWN0ZWRNYXA6IG1hcFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgPE1hcEluZm9TaWRlQmFyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2lkZWJhcklzVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0PXt0aGlzLnN0YXRlLnNlbGVjdGVkTWFwfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R3JpZCBzdGFja2FibGUgY29sdW1ucz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgZmx1aWQgc291cmNlPXt0aGlzLnN0YXRlLm1hcHN9IHJlc3VsdFJlbmRlcmVyPXtyZXN1bHRSZW5kZXJlcn0gc2VhcmNoQnk9J25hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2Rlc2Mob3B0aW9uYWwpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdzaGFyZWQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NoYXJlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBzR3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHM9e3RoaXMuc3RhdGUubWFwc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb1RvQ2FudmFzPXt0aGlzLmdvVG9DYW52YXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2lkZWJhcj17dGhpcy50b2dnbGVTaWRlYmFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU1hcD17dGhpcy5kZWxldGVNYXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0aGlzLnN0YXRlLnBhZ2VzKS5rZXlzKCldLm1hcChpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9e2krMX0gYWN0aXZlPXt+fnRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IGkgKyAxfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhZ2VDaGFuZ2VkKGkrMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9NYXBJbmZvU2lkZUJhcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTaWRlYmFyLCBTZWdtZW50LCBCdXR0b24sIE1lbnUsIEltYWdlLCBJY29uLCBIZWFkZXIsIExhYmVsLCBDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBJbmZvU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cbiAgICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdvdmVybGF5J1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nbGFiZWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm9iamVjdCkubWFwKGtleSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPntrZXkgKyAnIDogJyArIHRoaXMucHJvcHMub2JqZWN0W2tleV19PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhci5QdXNoZXIgYXM9e0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxuICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcEluZm9TaWRlYmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==