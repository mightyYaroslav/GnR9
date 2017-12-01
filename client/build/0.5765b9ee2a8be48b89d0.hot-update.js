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
            console.log('toggleSidebar');
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
            );
        }
    }]);

    return Maps;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbInJlc3VsdFJlbmRlcmVyIiwibmFtZSIsImRlc2MiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJzZWxlY3RlZE1hcCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VzIiwic2lkZWJhcklzVmlzaWJsZSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJoYW5kbGVDaGFuZ2UiLCJwYWdlQ2hhbmdlZCIsImRlbGV0ZU1hcCIsInRvZ2dsZVNpZGViYXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwibWFwIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIiwiQXJyYXkiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUFvQix3REFBTyxTQUFTRCxJQUFoQixHQUFwQjtBQUFBLENBQXZCOztrQkFFZTtBQUFBOztBQUVYLGtCQUFZRSxLQUFaLEVBQW1CO0FBQUE7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QXVCLE9BQU8sRUFBOUI7QUFDSTtBQUNJLGtDQUFNLEtBQUtULEtBQUwsQ0FBV0UsSUFEckI7QUFFSSx3Q0FBWSxLQUFLOEMsVUFGckI7QUFHSSwyQ0FBZSxLQUFLakMsYUFIeEI7QUFJSSx1Q0FBVyxLQUFLRDtBQUpwQjtBQURKO0FBaENKLGlCQU5SO0FBK0NRO0FBQUE7QUFBQTtBQUNJLG1DQUFVLFFBRGQ7QUFFSSwrQkFBTyxFQUFFbUMsUUFBUSxNQUFWLEVBRlg7QUFHSSx1Q0FBYztBQUhsQjtBQUtJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLE9BQU8sRUFBRUMsVUFBVSxHQUFaLEVBQXBCO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLGdCQUFOO0FBQ0MseURBQUlDLE1BQU0sS0FBS25ELEtBQUwsQ0FBV08sS0FBakIsRUFBd0I2QyxJQUF4QixFQUFKLEdBQW9DTCxHQUFwQyxDQUF3QztBQUFBLHVDQUNyQyxvREFBTSxJQUFOLElBQVcsTUFBTUgsSUFBRSxDQUFuQixFQUFzQixRQUFRLENBQUMsQ0FBQyxPQUFLNUMsS0FBTCxDQUFXTSxXQUFiLEtBQTZCc0MsSUFBSSxDQUEvRCxFQUFrRSxTQUFTO0FBQUEsK0NBQU0sT0FBSy9CLFdBQUwsQ0FBaUIrQixJQUFFLENBQW5CLENBQU47QUFBQSxxQ0FBM0UsR0FEcUM7QUFBQSw2QkFBeEM7QUFERDtBQURKO0FBTEo7QUEvQ1IsYUFESjtBQStESDtBQXZQVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuNTc2NWI5ZWUyYThiZTQ4Yjg5ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBNYXBzR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL01hcHNHcmlkJ1xuXG5jb25zdCByZXN1bHRSZW5kZXJlciA9ICh7IG5hbWUsIGRlc2MgfSkgPT4gPExhYmVsIGNvbnRlbnQ9e25hbWV9Lz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRNYXA6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBwYWdlczogMCxcbiAgICAgICAgICAgIHNpZGViYXJJc1Zpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyID0gdGhpcy50b2dnbGVTaWRlYmFyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBnb1RvQ2FudmFzKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVTaWRlYmFyJylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGZldGNoKCcvcHJvamVjdHM/cGFnZT0nK3BhZ2UsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld01hcC5uYW1lIHx8ICdVbnRpdGxlZCcgKyB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUubmV3TWFwLmRlc2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMsIHBhZ2VzOiBqc29uLnBhZ2VzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVNYXAnKVxuICAgICAgICBmZXRjaCgnL3Byb2plY3RzL3JlbW92ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnN0YXRlLm1hcHNbaV0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICAgICAgICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXBzfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcblxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZWJhcihtYXApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZVNpZGViYXInKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNpZGViYXJJc1Zpc2libGU6ICF0aGlzLnN0YXRlLnNpZGViYXJJc1Zpc2libGUgfHwgbWFwICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkTWFwLFxuICAgICAgICAgICAgc2VsZWN0ZWRNYXA6IG1hcFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8U2lkZUJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnNpZGViYXJJc1Zpc2libGV9IG9iamVjdD17dGhpcy5zdGF0ZS5zZWxlY3RlZE1hcH0vPiovfVxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBzdHJldGNoZWQgc291cmNlPXt0aGlzLnN0YXRlLm1hcHN9IHJlc3VsdFJlbmRlcmVyPXtyZXN1bHRSZW5kZXJlcn0gc2VhcmNoQnk9J25hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJpdmF0ZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwc0dyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcz17dGhpcy5zdGF0ZS5tYXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb1RvQ2FudmFzPXt0aGlzLmdvVG9DYW52YXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVNpZGViYXI9e3RoaXMudG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTWFwPXt0aGlzLmRlbGV0ZU1hcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkodGhpcy5zdGF0ZS5wYWdlcykua2V5cygpXS5tYXAoaSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e35+dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=