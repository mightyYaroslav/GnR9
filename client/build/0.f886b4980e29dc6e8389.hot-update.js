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

var _Sidebar = __webpack_require__(912);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

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
            console.log('toggleSidebar');
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
                _react2.default.createElement(
                    _semanticUiReact.Dimmer,
                    { active: this.state.loading, inverted: true },
                    _react2.default.createElement(_semanticUiReact.Loader, null)
                ),
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _Sidebar2.default,
                    {
                        visible: this.state.sidebarIsVisible,
                        object: this.state.selectedMap
                    },
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
                                    return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: ~~_this6.state.currentPage === i + 1, onClick: function onClick() {
                                            return _this6.pageChanged(i + 1);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbInJlc3VsdFJlbmRlcmVyIiwibmFtZSIsImRlc2MiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJzZWxlY3RlZE1hcCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VzIiwic2lkZWJhcklzVmlzaWJsZSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJoYW5kbGVDaGFuZ2UiLCJwYWdlQ2hhbmdlZCIsImRlbGV0ZU1hcCIsInRvZ2dsZVNpZGViYXIiLCJnb1RvQ2FudmFzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJpZCIsImhpc3RvcnkiLCJwdXNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFnZSIsImJvZHkiLCJsZW5ndGgiLCJwcm9qZWN0IiwiaSIsInByb2plY3RJZCIsInNwbGljZSIsIm1hcCIsImhlaWdodCIsIm1heFdpZHRoIiwiQXJyYXkiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUFvQix3REFBTyxTQUFTRCxJQUFoQixHQUFwQjtBQUFBLENBQXZCOztrQkFFZTtBQUFBOztBQUVYLGtCQUFZRSxLQUFaLEVBQW1CO0FBQUE7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Qko7QUF3Qkksb0ZBQU0sSUFBTixJQUFXLE1BQUssUUFBaEIsRUFBeUIsUUFBUVIsZUFBZSxRQUFoRDtBQUNXLDZDQUFTLEtBQUtRLGVBRHpCO0FBeEJKO0FBRkEseUJBREo7QUFnQ0k7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0k7QUFDSSxzQ0FBTSxLQUFLVCxLQUFMLENBQVdFLElBRHJCO0FBRUksNENBQVksS0FBS2MsVUFGckI7QUFHSSwrQ0FBZSxLQUFLRCxhQUh4QjtBQUlJLDJDQUFXLEtBQUtEO0FBSnBCO0FBREo7QUFoQ0oscUJBSkE7QUE2Q0E7QUFBQTtBQUFBO0FBQ0ksdUNBQVUsUUFEZDtBQUVJLG1DQUFPLEVBQUVtQyxRQUFRLE1BQVYsRUFGWDtBQUdJLDJDQUFjO0FBSGxCO0FBS0k7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsT0FBTyxFQUFFQyxVQUFVLEdBQVosRUFBcEI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sZ0JBQU47QUFDQyw2REFBSUMsTUFBTSxLQUFLbkQsS0FBTCxDQUFXTyxLQUFqQixFQUF3QjZDLElBQXhCLEVBQUosR0FBb0NKLEdBQXBDLENBQXdDO0FBQUEsMkNBQ3JDLG9EQUFNLElBQU4sSUFBVyxNQUFNSCxJQUFFLENBQW5CLEVBQXNCLFFBQVEsQ0FBQyxDQUFDLE9BQUs3QyxLQUFMLENBQVdNLFdBQWIsS0FBNkJ1QyxJQUFJLENBQS9ELEVBQWtFLFNBQVM7QUFBQSxtREFBTSxPQUFLaEMsV0FBTCxDQUFpQmdDLElBQUUsQ0FBbkIsQ0FBTjtBQUFBLHlDQUEzRSxHQURxQztBQUFBLGlDQUF4QztBQUREO0FBREo7QUFMSjtBQTdDQTtBQUxKLGFBREo7QUFtRUg7QUE1UFU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLmY4ODZiNDk4MGUyOWRjNmU4Mzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBGb3JtLCBJbnB1dCwgTGFiZWwsIFRleHRBcmVhLCBTZWdtZW50LCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9uLCBMb2FkZXIsIERpbW1lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcidcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTWFwc0dyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9NYXBzR3JpZCdcblxuY29uc3QgcmVzdWx0UmVuZGVyZXIgPSAoeyBuYW1lLCBkZXNjIH0pID0+IDxMYWJlbCBjb250ZW50PXtuYW1lfS8+XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdwcml2YXRlJyxcbiAgICAgICAgICAgIG1hcHM6W10sXG4gICAgICAgICAgICBuZXdNYXA6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTWFwOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgICAgIHBhZ2VzOiAwLFxuICAgICAgICAgICAgc2lkZWJhcklzVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkID0gdGhpcy5wYWdlQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnRvZ2dsZVNpZGViYXIgPSB0aGlzLnRvZ2dsZVNpZGViYXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdvVG9DYW52YXMgPSB0aGlzLmdvVG9DYW52YXMuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvVG9DYW52YXMnKVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhbnZhcy8nKyBpZClcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgbmV3TWFwID0gdGhpcy5zdGF0ZS5uZXdNYXBcbiAgICAgICAgbmV3TWFwW25hbWVdID0gdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdNYXAsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cz9wYWdlPScrcGFnZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3TWFwLm5hbWUgfHwgJ1VudGl0bGVkJyArIHRoaXMuc3RhdGUubWFwcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5uZXdNYXAuZGVzY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgIG1hcHMucHVzaChqc29uLnByb2plY3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcywgcGFnZXM6IGpzb24ucGFnZXMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZU1hcCcpXG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvcmVtb3ZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuc3RhdGUubWFwc1tpXS5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcHN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyKG1hcCkge1xuICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlU2lkZWJhcicpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2lkZWJhcklzVmlzaWJsZTogIXRoaXMuc3RhdGUuc2lkZWJhcklzVmlzaWJsZSB8fCBtYXAgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRNYXAsXG4gICAgICAgICAgICBzZWxlY3RlZE1hcDogbWFwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2lkZUJhclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNpZGViYXJJc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdD17dGhpcy5zdGF0ZS5zZWxlY3RlZE1hcH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgc3RyZXRjaGVkIHNvdXJjZT17dGhpcy5zdGF0ZS5tYXBzfSByZXN1bHRSZW5kZXJlcj17cmVzdWx0UmVuZGVyZXJ9IHNlYXJjaEJ5PSduYW1lJy8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWFwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcHNHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcz17dGhpcy5zdGF0ZS5tYXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvVG9DYW52YXM9e3RoaXMuZ29Ub0NhbnZhc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTWFwPXt0aGlzLmRlbGV0ZU1hcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHRoaXMuc3RhdGUucGFnZXMpLmtleXMoKV0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e35+dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1NpZGVCYXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=