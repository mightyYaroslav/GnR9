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

var _SearchExampleStandard = __webpack_require__(908);

var _SearchExampleStandard2 = _interopRequireDefault(_SearchExampleStandard);

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
                                return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: i + 1, active: _this6.state.currentPage === i + 1, onClick: function onClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwibWFwcyIsIm5ld01hcCIsIm5hbWUiLCJkZXNjIiwibG9hZGluZyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwicGFnZUNoYW5nZWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjb2xzTmFtZSIsImxhc3RSb3dDb2xzIiwiQXJyYXkiLCJyb3ciLCJjb2wiLCJkYXRlIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFFWCxrQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxTQURIO0FBRVRDLGtCQUFLLEVBRkk7QUFHVEMsb0JBQVE7QUFDSkMsc0JBQU0sRUFERjtBQUVKQyxzQkFBTTtBQUZGLGFBSEM7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QUFMLENBQVdRLEtBQWpCLEVBQXdCd0MsSUFBeEIsRUFBSixHQUFvQ0MsR0FBcEMsQ0FBd0M7QUFBQSx1Q0FDckMsb0RBQU0sSUFBTixJQUFXLE1BQU1OLElBQUUsQ0FBbkIsRUFBc0IsUUFBUSxPQUFLM0MsS0FBTCxDQUFXTyxXQUFYLEtBQTJCb0MsSUFBSSxDQUE3RCxFQUFnRSxTQUFTO0FBQUEsK0NBQU0sT0FBSzdCLFdBQUwsQ0FBaUI2QixJQUFFLENBQW5CLENBQU47QUFBQSxxQ0FBekUsR0FEcUM7QUFBQSw2QkFBeEM7QUFERDtBQURBO0FBSEE7QUEvRFIsYUFESjtBQTZFSDtBQTdQVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuNWMzODY4MWMwNzI0ZWYzY2VjNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICAgcGFnZXM6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGZldGNoKCcvcHJvamVjdHM/cGFnZT0nK3BhZ2UsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld01hcC5uYW1lIHx8ICdVbnRpdGxlZCcgKyB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUubmV3TWFwLmRlc2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMsIHBhZ2VzOiBqc29uLnBhZ2VzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvcmVtb3ZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuc3RhdGUubWFwc1tpXS5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcHN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICB7Lyo8U2lkZWJhclJpZ2h0T3ZlcmxheSBjb250ZW50PXsqL31cblxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIHsgLyo8U2VhcmNoRXhhbXBsZVN0YW5kYXJkIHN0cmV0Y2hlZCBzb3VyY2U9e21hcHN9Lz4gKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGVzYyhvcHRpb25hbCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMuc3RhdGUubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJvd0NvbHMgPSBsYXN0Um93Q29scyA9PT0gMCA/IGNvbHNbY29sc05hbWVdIDogbGFzdFJvd0NvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbmZvQ2xpY2tlZD17KCkgPT4gdGhpcy5nb1RvQ2FudmFzKHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0aGlzLnN0YXRlLnBhZ2VzKS5rZXlzKCldLm1hcChpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IGkgKyAxfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhZ2VDaGFuZ2VkKGkrMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==