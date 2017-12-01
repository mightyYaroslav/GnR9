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
        _this.deleteMap = _this.deleteMap.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.pageChanged = _this.pageChanged.bind(_this);
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
                                                    onCardClicked: function onCardClicked() {
                                                        return _this6.goToCanvas(_this6.state.maps[row * cols[colsName] + col].id);
                                                    },
                                                    onInfoClicked: function onInfoClicked() {
                                                        return _this6.toggleSidebar(_this6.state.maps[row * cols[colsName] + col]);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbInJlc3VsdFJlbmRlcmVyIiwibmFtZSIsImRlc2MiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJzZWxlY3RlZE1hcCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VzIiwic2lkZWJhcklzVmlzaWJsZSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJkZWxldGVNYXAiLCJoYW5kbGVDaGFuZ2UiLCJwYWdlQ2hhbmdlZCIsInRvZ2dsZVNpZGViYXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwibWFwIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjb2xzTmFtZSIsImxhc3RSb3dDb2xzIiwiQXJyYXkiLCJyb3ciLCJjb2wiLCJkYXRlIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FBb0Isd0RB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LENBQU47QUFBQSxxQ0FBM0UsR0FEcUM7QUFBQSw2QkFBeEM7QUFERDtBQURBO0FBSEE7QUEvRFIsYUFESjtBQTZFSDtBQXZRVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuZDBhYzIwZTNhYWE5NDk4MmJkOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgcmVzdWx0UmVuZGVyZXIgPSAoeyBuYW1lLCBkZXNjIH0pID0+IDxMYWJlbCBjb250ZW50PXtuYW1lfS8+XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdwcml2YXRlJyxcbiAgICAgICAgICAgIG1hcHM6W10sXG4gICAgICAgICAgICBuZXdNYXA6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTWFwOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICAgcGFnZXM6IDAsXG4gICAgICAgICAgICBzaWRlYmFySXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZE1hcCA9IHRoaXMuYWRkTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVNYXAgPSB0aGlzLmRlbGV0ZU1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkID0gdGhpcy5wYWdlQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMudG9nZ2xlU2lkZWJhciA9IHRoaXMudG9nZ2xlU2lkZWJhci5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFwczoganNvbi5wcm9qZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGpzb24uY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiBqc29uLnBhZ2VzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZ29Ub0NhbnZhcyhpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cz9wYWdlPScrcGFnZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3TWFwLm5hbWUgfHwgJ1VudGl0bGVkJyArIHRoaXMuc3RhdGUubWFwcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5uZXdNYXAuZGVzY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgIG1hcHMucHVzaChqc29uLnByb2plY3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcywgcGFnZXM6IGpzb24ucGFnZXMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9yZW1vdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5tYXBzW2ldLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgICAgICAgICAgbWFwcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHRvZ2dsZVNpZGViYXIobWFwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2lkZWJhcklzVmlzaWJsZTogIXRoaXMuc3RhdGUuc2lkZWJhcklzVmlzaWJsZSB8fCBtYXAgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRNYXAsXG4gICAgICAgICAgICBzZWxlY3RlZE1hcDogbWFwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxTaWRlQmFyIHZpc2libGU9e3RoaXMuc3RhdGUuc2lkZWJhcklzVmlzaWJsZX0gb2JqZWN0PXt0aGlzLnN0YXRlLnNlbGVjdGVkTWFwfS8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIHN0cmV0Y2hlZCBzb3VyY2U9e3RoaXMuc3RhdGUubWFwc30gcmVzdWx0UmVuZGVyZXI9e3Jlc3VsdFJlbmRlcmVyfSBzZWFyY2hCeT0nbmFtZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAvIGNvbHNbY29sc05hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSb3dDb2xzID0gdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Um93Q29scyA9IGxhc3RSb3dDb2xzID09PSAwID8gY29sc1tjb2xzTmFtZV0gOiBsYXN0Um93Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5BcnJheShyb3dzKS5rZXlzKCldLm1hcChyb3cgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJvdyA9PT0gcm93cyAtIDEgPyBsYXN0Um93Q29scyA6IGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhcmRDbGlja2VkPXsoKSA9PiB0aGlzLmdvVG9DYW52YXModGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbmZvQ2xpY2tlZD17KCkgPT4gdGhpcy50b2dnbGVTaWRlYmFyKHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0aGlzLnN0YXRlLnBhZ2VzKS5rZXlzKCldLm1hcChpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e35+dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01hcHMuanMiXSwic291cmNlUm9vdCI6IiJ9