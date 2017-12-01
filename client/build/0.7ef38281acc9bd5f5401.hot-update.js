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

var _SearchBar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/SearchBar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Map = __webpack_require__(910);

var _Map2 = _interopRequireDefault(_Map);

var _SidebarRightOverlay = __webpack_require__(912);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

var _Auth = __webpack_require__(73);

var _Auth2 = _interopRequireDefault(_Auth);

var _reactRouterDom = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            loading: true,
            currentPage: 0,
            pages: 0
        };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.pageChanged = _this.pageChanged.bind(_this);
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
        value: function handleItemClick(e, _ref) {
            var name = _ref.name;

            this.setState({ activeItem: name });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

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
                        _react2.default.createElement(_SearchBar2.default, { stretched: true, source: this.state.maps }),
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
                                var rows = Math.ceil(_this6.state.maps.length / cols[colsName]);
                                var lastRowCols = _this6.state.maps.length % cols[colsName];
                                lastRowCols = lastRowCols === 0 ? cols[colsName] : lastRowCols;
                                return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: cols[colsName], only: colsName },
                                        [].concat(_toConsumableArray(Array(row === rows - 1 ? lastRowCols : cols[colsName]).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: _this6.state.maps[row * cols[colsName] + col].name,
                                                    desc: _this6.state.maps[row * cols[colsName] + col].desc,
                                                    date: _this6.state.maps[row * cols[colsName] + col].date,
                                                    onInfoClicked: function onInfoClicked() {
                                                        return _this6.goToCanvas(_this6.state.maps[row * cols[colsName] + col].id);
                                                    },
                                                    onDeleteClicked: function onDeleteClicked() {
                                                        return _this6.deleteMap(row * cols[colsName] + col);
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
                    _semanticUiReact.Grid,
                    { textAlign: 'center',
                        style: { height: '100%' },
                        verticalAlign: 'middle' },
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

/***/ 908:
false,

/***/ 909:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwibWFwcyIsIm5ld01hcCIsIm5hbWUiLCJkZXNjIiwibG9hZGluZyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwicGFnZUNoYW5nZWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjb2xzTmFtZSIsImxhc3RSb3dDb2xzIiwiQXJyYXkiLCJyb3ciLCJjb2wiLCJkYXRlIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFFWCxrQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxTQURIO0FBRVRDLGtCQUFLLEVBRkk7QUFHVEMsb0JBQVE7QUFDSkMsc0JBQU0sRUFERjtBQUVKQyxzQkFBTTtBQUZGLGFBSEM7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cEI7QUFDQTtBQUFBO0FBQUEsOEJBQU0sZ0JBQU47QUFDQyx5REFBSU4sTUFBTSxLQUFLdkQsS0FBTCxDQUFXUSxLQUFqQixFQUF3QndDLElBQXhCLEVBQUosR0FBb0NDLEdBQXBDLENBQXdDO0FBQUEsdUNBQ3JDLG9EQUFNLElBQU4sSUFBVyxNQUFNTixJQUFFLENBQW5CLEVBQXNCLFFBQVEsQ0FBQyxDQUFDLE9BQUszQyxLQUFMLENBQVdPLFdBQWIsS0FBNkJvQyxJQUFJLENBQS9ELEVBQWtFLFNBQVM7QUFBQSwrQ0FBTSxPQUFLN0IsV0FBTCxDQUFpQjZCLElBQUUsQ0FBbkIsQ0FBTjtBQUFBLHFDQUEzRSxHQURxQztBQUFBLDZCQUF4QztBQUREO0FBREE7QUFIQTtBQS9EUixhQURKO0FBNkVIO0FBN1BVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC43ZWYzODI4MWFjYzliZDVmNTQwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgRm9ybSwgSW5wdXQsIExhYmVsLCBUZXh0QXJlYSwgU2VnbWVudCwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbiwgTG9hZGVyLCBEaW1tZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAncHJpdmF0ZScsXG4gICAgICAgICAgICBtYXBzOltdLFxuICAgICAgICAgICAgbmV3TWFwOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZE1hcCA9IHRoaXMuYWRkTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVNYXAgPSB0aGlzLmRlbGV0ZU1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkID0gdGhpcy5wYWdlQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFwczoganNvbi5wcm9qZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGpzb24uY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiBqc29uLnBhZ2VzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZ29Ub0NhbnZhcyhpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cz9wYWdlPScrcGFnZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3TWFwLm5hbWUgfHwgJ1VudGl0bGVkJyArIHRoaXMuc3RhdGUubWFwcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5uZXdNYXAuZGVzY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgIG1hcHMucHVzaChqc29uLnByb2plY3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcywgcGFnZXM6IGpzb24ucGFnZXMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9yZW1vdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5tYXBzW2ldLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgICAgICAgICAgbWFwcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBjb2xzID0ge1xuICAgICAgICAgICAgJ2NvbXB1dGVyJzogNCxcbiAgICAgICAgICAgICd0YWJsZXQnOiAyLFxuICAgICAgICAgICAgJ21vYmlsZSc6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIHsvKjxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9eyovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIHN0cmV0Y2hlZCBzb3VyY2U9e3RoaXMuc3RhdGUubWFwc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAvIGNvbHNbY29sc05hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSb3dDb2xzID0gdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Um93Q29scyA9IGxhc3RSb3dDb2xzID09PSAwID8gY29sc1tjb2xzTmFtZV0gOiBsYXN0Um93Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5BcnJheShyb3dzKS5rZXlzKCldLm1hcChyb3cgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJvdyA9PT0gcm93cyAtIDEgPyBsYXN0Um93Q29scyA6IGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluZm9DbGlja2VkPXsoKSA9PiB0aGlzLmdvVG9DYW52YXModGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRoaXMuc3RhdGUucGFnZXMpLmtleXMoKV0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPXtpKzF9IGFjdGl2ZT17fn50aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBpICsgMX0gb25DbGljaz17KCkgPT4gdGhpcy5wYWdlQ2hhbmdlZChpKzEpfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=