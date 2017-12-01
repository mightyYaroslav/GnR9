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

var _SidebarRightOverlay = __webpack_require__(912);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

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
        value: function handleItemClick(e, _ref2) {
            var name = _ref2.name;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(909);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(SearchBar, _Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.resetComponent = _this.resetComponent.bind(_this);
        _this.handleResultSelect = _this.handleResultSelect.bind(_this);
        _this.handleSearchChange = _this.handleSearchChange.bind(_this);
        _this.goToCanvas = _this.goToCanvas.bind(_this);
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.resetComponent();
        }
    }, {
        key: 'resetComponent',
        value: function resetComponent() {
            this.setState({ isLoading: false, results: [], value: '' });
        }
    }, {
        key: 'handleResultSelect',
        value: function handleResultSelect(e, _ref) {
            var result = _ref.result;

            console.log(result);
            this.goToCanvas(result.id);
        }
    }, {
        key: 'handleSearchChange',
        value: function handleSearchChange(e, _ref2) {
            var _this2 = this;

            var value = _ref2.value;

            this.setState({ isLoading: true, value: value });

            setTimeout(function () {
                if (_this2.state.value.length < 1) return _this2.resetComponent();
                var re = new RegExp(_lodash2.default.escapeRegExp(_this2.state.value), 'i');
                _this2.setState({
                    isLoading: false,
                    results: _this2.props.source.filter(function (obj) {
                        return re.test(obj[_this2.props.searchBy]);
                    })
                });
            }, 500);
        }
    }, {
        key: 'goToCanvas',
        value: function goToCanvas(id) {
            this.props.history.push('/canvas/' + id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                value = _state.value,
                results = _state.results;

            return _react2.default.createElement(_semanticUiReact.Search, _extends({
                loading: isLoading,
                onResultSelect: this.handleResultSelect,
                onSearchChange: this.handleSearchChange,
                results: results,
                value: value
            }, this.props));
        }
    }]);

    return SearchBar;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJyZXN1bHRSZW5kZXJlciIsIm5hbWUiLCJkZXNjIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJtYXBzIiwibmV3TWFwIiwibG9hZGluZyIsImN1cnJlbnRQYWdlIiwicGFnZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiaGFuZGxlQ2hhbmdlIiwicGFnZUNoYW5nZWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdHMiLCJjYXRjaCIsImVyciIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlIiwiYm9keSIsImxlbmd0aCIsInByb2plY3QiLCJpIiwicHJvamVjdElkIiwic3BsaWNlIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjb2xzTmFtZSIsImxhc3RSb3dDb2xzIiwiQXJyYXkiLCJyb3ciLCJjb2wiLCJkYXRlIiwiZ29Ub0NhbnZhcyIsImhlaWdodCIsIm1heFdpZHRoIiwicmVzZXRDb21wb25lbnQiLCJoYW5kbGVSZXN1bHRTZWxlY3QiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJpc0xvYWRpbmciLCJyZXN1bHRzIiwicmVzdWx0Iiwic2V0VGltZW91dCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwic291cmNlIiwiZmlsdGVyIiwidGVzdCIsIm9iaiIsInNlYXJjaEJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztB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QUFXdUUsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFBQSwrQkFBT0osR0FBR0ssSUFBSCxDQUFRQyxJQUFJLE9BQUsxRSxLQUFMLENBQVcyRSxRQUFmLENBQVIsQ0FBUDtBQUFBLHFCQUF6QjtBQUZDLGlCQUFkO0FBSUgsYUFQRCxFQU9HLEdBUEg7QUFRSDtBQWxDVTtBQUFBO0FBQUEsbUNBb0NBM0MsRUFwQ0EsRUFvQ0k7QUFDWCxpQkFBS2hDLEtBQUwsQ0FBV2lDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLGFBQVlGLEVBQXBDO0FBQ0g7QUF0Q1U7QUFBQTtBQUFBLGlDQXdDRjtBQUFBLHlCQUNpQyxLQUFLL0IsS0FEdEM7QUFBQSxnQkFDRytELFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjM0IsS0FEZCxVQUNjQSxLQURkO0FBQUEsZ0JBQ3FCNEIsT0FEckIsVUFDcUJBLE9BRHJCOztBQUVMLG1CQUNJO0FBQ0kseUJBQVNELFNBRGI7QUFFSSxnQ0FBZ0IsS0FBS0Ysa0JBRnpCO0FBR0ksZ0NBQWdCLEtBQUtDLGtCQUh6QjtBQUlJLHlCQUFTRSxPQUpiO0FBS0ksdUJBQU81QjtBQUxYLGVBTVEsS0FBS3JDLEtBTmIsRUFESjtBQVVIO0FBcERVOztBQUFBO0FBQUEsb0IiLCJmaWxlIjoiMC5iYWQ2ZWZiNmRlYjI5NjcwYTI5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgRm9ybSwgSW5wdXQsIExhYmVsLCBUZXh0QXJlYSwgU2VnbWVudCwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbiwgTG9hZGVyLCBEaW1tZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCByZXN1bHRSZW5kZXJlciA9ICh7IG5hbWUsIGRlc2MgfSkgPT4gPExhYmVsIGNvbnRlbnQ9e25hbWV9Lz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICAgcGFnZXM6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbi5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHM6IGpzb24ucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBqc29uLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczoganNvbi5wYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIGZldGNoKCcvcHJvamVjdHM/cGFnZT0nK3BhZ2UsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IGpzb24ucGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld01hcC5uYW1lIHx8ICdVbnRpdGxlZCcgKyB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUubmV3TWFwLmRlc2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMsIHBhZ2VzOiBqc29uLnBhZ2VzIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvcmVtb3ZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuc3RhdGUubWFwc1tpXS5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICAgICAgICAgIG1hcHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcHN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICB7Lyo8U2lkZWJhclJpZ2h0T3ZlcmxheSBjb250ZW50PXsqL31cblxuICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBzdHJldGNoZWQgc291cmNlPXt0aGlzLnN0YXRlLm1hcHN9IHJlc3VsdFJlbmRlcmVyPXtyZXN1bHRSZW5kZXJlcn0gc2VhcmNoQnk9J25hbWUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGVzYyhvcHRpb25hbCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01hcC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMuc3RhdGUubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJvd0NvbHMgPSBsYXN0Um93Q29scyA9PT0gMCA/IGNvbHNbY29sc05hbWVdIDogbGFzdFJvd0NvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbmZvQ2xpY2tlZD17KCkgPT4gdGhpcy5nb1RvQ2FudmFzKHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSh0aGlzLnN0YXRlLnBhZ2VzKS5rZXlzKCldLm1hcChpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT17aSsxfSBhY3RpdmU9e35+dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gaSArIDF9IG9uQ2xpY2s9eygpID0+IHRoaXMucGFnZUNoYW5nZWQoaSsxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01hcHMuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2gsIEdyaWQsIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5yZXNldENvbXBvbmVudCA9IHRoaXMucmVzZXRDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyA9IHRoaXMuZ29Ub0NhbnZhcy5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Q29tcG9uZW50KClcbiAgICB9XG5cbiAgICByZXNldENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3VsdHM6IFtdLCB2YWx1ZTogJycgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXN1bHRTZWxlY3QoZSwgeyByZXN1bHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhcyhyZXN1bHQuaWQpXG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlKGUsIHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlLCB2YWx1ZSB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXMucmVzZXRDb21wb25lbnQoKVxuICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKF8uZXNjYXBlUmVnRXhwKHRoaXMuc3RhdGUudmFsdWUpLCAnaScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHRoaXMucHJvcHMuc291cmNlLmZpbHRlcihvYmogPT4gcmUudGVzdChvYmpbdGhpcy5wcm9wcy5zZWFyY2hCeV0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGdvVG9DYW52YXMoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jYW52YXMvJysgaWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgdmFsdWUsIHJlc3VsdHMgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgb25SZXN1bHRTZWxlY3Q9e3RoaXMuaGFuZGxlUmVzdWx0U2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==