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

var _reactRouterDom = __webpack_require__(74);

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
}(_react.Component));

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(18);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _ConfirmExampleConfirm = __webpack_require__(898);

var _ConfirmExampleConfirm2 = _interopRequireDefault(_ConfirmExampleConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Card,
                null,
                _react2.default.createElement(_semanticUiReact.Image, { src: _logo2.default }),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Card.Header,
                        null,
                        this.props.name
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Meta,
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'date' },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'time' }),
                            this.props.date
                        )
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Description,
                        null,
                        this.props.desc
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui two buttons' },
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { onClick: this.goToCanvas },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'info letter' })
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { onClick: this.props.onDeleteClicked },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'trash' })
                        )
                    )
                )
            );
        }
    }]);

    return Map;
}(_react.Component);

Map.PropTypes = {
    name: _propTypes2.default.string,
    date: _propTypes2.default.string,
    desc: _propTypes2.default.string
};

exports.default = Map;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJuZXdNYXAiLCJuYW1lIiwiZGVzYyIsImxvYWRpbmciLCJwYWdlIiwiaGFuZGxlSXRlbUNsaWNrIiwiYmluZCIsImFkZE1hcCIsImRlbGV0ZU1hcCIsImhhbmRsZUNoYW5nZSIsInBhZ2VDaGFuZ2VkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwiY2F0Y2giLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsImJvZHkiLCJsZW5ndGgiLCJwdXNoIiwicHJvamVjdCIsImkiLCJwcm9qZWN0SWQiLCJpZCIsInNwbGljZSIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY29sc05hbWUiLCJsYXN0Um93Q29scyIsIkFycmF5Iiwicm93IiwiY29sIiwiZGF0ZSIsIk1hcCIsImdvVG9DYW52YXMiLCJvbkRlbGV0ZUNsaWNrZWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztrQkFFZTtBQUFBOztBQUVYLGtCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLFNBREg7QUFFVEMsa0JBQUssRUFGSTtBQUdUQyxvQkFBUTtBQUNKQyxzQkFBTSxFQURGO0FBRUpDLHNCQUFNO0FBRkYsYUFIQztBQU9UQyxxQkFBUyxJQVBBO0FBUVRDLGtCQUFNO0FBUkcsU0FBYjtBQVVBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFDQSxjQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUNBLGNBQUtHLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkgsSUFBbEIsT0FBcEI7QUFDQSxjQUFLSSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJKLElBQWpCLE9BQW5CO0FBaEJlO0FBaUJsQjs7QUFuQlU7QUFBQTtBQUFBLDZDQXFCVTtBQUFBOztBQUNqQkssa0JBQU0sV0FBTixFQUFtQjtBQUNmQyx3QkFBUSxLQURPO0FBRWZDLHlCQUFTO0FBQ0wsb0NBQWdCLGtCQURYO0FBRUwsaURBQTJCLGVBQUtDLFFBQUw7QUFGdEI7QUFGTSxhQUFuQixFQU9LQyxJQVBMLENBT1UsZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDSSxPQUFPRCxJQUFJRSxJQUFKLEVBQVAsQ0FESixLQUdJLE9BQUtDLFFBQUwsQ0FBYztBQUNWQyxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CSiw0QkFBSUs7QUFBeEIscUJBREY7QUFFVmxCLDZCQUFTO0FBRkMsaUJBQWQ7QUFJUCxhQWZMLEVBZ0JLWSxJQWhCTCxDQWdCVSxnQkFBUTtBQUNWTyx3QkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVQLEtBQUtRLFFBQXBCLENBQVo7QUFDQSx1QkFBS1AsUUFBTCxDQUFjO0FBQ1ZwQiwwQkFBTW1CLEtBQUtRLFFBREQ7QUFFVnZCLDZCQUFTO0FBRkMsaUJBQWQ7QUFJSCxhQXRCTCxFQXVCS3dCLEtBdkJMLENBdUJXO0FBQUEsdUJBQU8sT0FBS1IsUUFBTCxDQUFjO0FBQ3hCQyxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CUTtBQUFwQixxQkFEWTtBQUV4QnpCLDZCQUFTO0FBRmUsaUJBQWQsQ0FBUDtBQUFBLGFBdkJYO0FBMkJIO0FBakRVO0FBQUE7QUFBQSxxQ0FtREUwQixDQW5ERixFQW1ESztBQUFBLDRCQUNVQSxFQUFFQyxNQURaO0FBQUEsZ0JBQ0w3QixJQURLLGFBQ0xBLElBREs7QUFBQSxnQkFDQzhCLEtBREQsYUFDQ0EsS0FERDs7QUFFWixnQkFBTS9CLFNBQVMsS0FBS0gsS0FBTCxDQUFXRyxNQUExQjtBQUNBQSxtQkFBT0MsSUFBUCxJQUFlOEIsS0FBZjtBQUNBLGlCQUFLWixRQUFMLENBQWM7QUFDVm5CLDhCQURVO0FBRVZvQiw0QkFBWTtBQUZGLGFBQWQ7QUFJSDtBQTNEVTtBQUFBO0FBQUEsb0NBNkRDUyxDQTdERCxFQTZESTtBQUNYLGlCQUFLVixRQUFMLENBQWMsRUFBRWYsTUFBTXlCLEVBQUVDLE1BQUYsQ0FBUzdCLElBQWpCLEVBQWQ7QUFDQStCLGtCQUFNLEtBQUtuQyxLQUFMLENBQVdPLElBQWpCO0FBQ0g7QUFoRVU7QUFBQTtBQUFBLGlDQWtFRjtBQUFBOztBQUNMTyxrQkFBTSxlQUFOLEVBQXVCO0FBQ25CQyx3QkFBUSxNQURXO0FBRW5CQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLGlEQUEyQixlQUFLQyxRQUFMO0FBRnRCLGlCQUZVO0FBTW5CbUIsc0JBQU1ULEtBQUtDLFNBQUwsQ0FBZTtBQUNqQnhCLDBCQUFNLEtBQUtKLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkMsSUFBbEIsSUFBMEIsYUFBYSxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JtQyxNQUQ1QztBQUVqQmhDLDBCQUFNLEtBQUtMLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkU7QUFGUCxpQkFBZjtBQU5hLGFBQXZCLEVBV0NhLElBWEQsQ0FXTSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUF1QjtBQUNuQiwyQkFBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNILDJCQUFLQyxRQUFMLENBQWM7QUFDVkMsb0NBQVk7QUFBQTtBQUFBLDhCQUFPLE9BQU0sS0FBYjtBQUFvQkosZ0NBQUlLO0FBQXhCLHlCQURGO0FBRVZsQixpQ0FBUztBQUZDLHFCQUFkO0FBSUg7QUFDSixhQXBCRCxFQXFCQ1ksSUFyQkQsQ0FxQk0sZ0JBQVE7QUFDVixvQkFBSWhCLE9BQU8sT0FBS0YsS0FBTCxDQUFXRSxJQUF0QjtBQUNBQSxxQkFBS29DLElBQUwsQ0FBVWpCLEtBQUtrQixPQUFmO0FBQ0EsdUJBQUtqQixRQUFMLENBQWMsRUFBRXBCLFVBQUYsRUFBZDtBQUNILGFBekJELEVBMEJDNEIsS0ExQkQsQ0EwQk87QUFBQSx1QkFBTyxPQUFLUixRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JRO0FBQXBCLHFCQURZO0FBRXhCekIsNkJBQVM7QUFGZSxpQkFBZCxDQUFQO0FBQUEsYUExQlA7QUE4Qkg7QUFqR1U7QUFBQTtBQUFBLGtDQW1HRGtDLENBbkdDLEVBbUdFO0FBQUE7O0FBQ1QxQixrQkFBTSxrQkFBTixFQUEwQjtBQUN0QkMsd0JBQVEsTUFEYztBQUV0QkMseUJBQVM7QUFDTCxvQ0FBZ0Isa0JBRFg7QUFFTCxpREFBMkIsZUFBS0MsUUFBTDtBQUZ0QixpQkFGYTtBQU10Qm1CLHNCQUFNVCxLQUFLQyxTQUFMLENBQWU7QUFDakJhLCtCQUFXLEtBQUt6QyxLQUFMLENBQVdFLElBQVgsQ0FBZ0JzQyxDQUFoQixFQUFtQkU7QUFEYixpQkFBZjtBQU5nQixhQUExQixFQVVLeEIsSUFWTCxDQVVVLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQXVCO0FBQ25CLHdCQUFJbEIsT0FBTyxPQUFLRixLQUFMLENBQVdFLElBQXRCO0FBQ0FBLHlCQUFLeUMsTUFBTCxDQUFZSCxDQUFaLEVBQWUsQ0FBZjtBQUNBLDJCQUFLbEIsUUFBTCxDQUFjLEVBQUNwQixVQUFELEVBQWQ7QUFDSCxpQkFKRCxNQUlPO0FBQ0gsMkJBQUtvQixRQUFMLENBQWM7QUFDVkMsb0NBQVk7QUFBQTtBQUFBLDhCQUFPLE9BQU0sS0FBYjtBQUFvQkosZ0NBQUlLO0FBQXhCLHlCQURGO0FBRVZsQixpQ0FBUztBQUZDLHFCQUFkO0FBSUg7QUFDSixhQXJCTCxFQXNCS3dCLEtBdEJMLENBc0JXO0FBQUEsdUJBQU8sT0FBS1IsUUFBTCxDQUFjO0FBQ3hCQyxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CUTtBQUFwQixxQkFEWTtBQUV4QnpCLDZCQUFTO0FBRmUsaUJBQWQsQ0FBUDtBQUFBLGFBdEJYO0FBMkJIO0FBL0hVO0FBQUE7QUFBQSx3Q0FpSUswQixDQWpJTCxRQWlJZ0I7QUFBQSxnQkFBUDVCLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtrQixRQUFMLENBQWMsRUFBQ3JCLFlBQVlHLElBQWIsRUFBZDtBQUNIO0FBbklVO0FBQUE7QUFBQSxpQ0FxSUY7QUFBQTs7QUFBQSxnQkFDRUgsVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLGdCQUFNMkMsT0FBTztBQUNULDRCQUFZLENBREg7QUFFVCwwQkFBVSxDQUZEO0FBR1QsMEJBQVU7QUFIRCxhQUFiOztBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBSVE7QUFBQTtBQUFBLHNCQUFRLFFBQVEsS0FBSzVDLEtBQUwsQ0FBV00sT0FBM0IsRUFBb0MsY0FBcEM7QUFDQTtBQURBLGlCQUpSO0FBT1E7QUFBQTtBQUFBO0FBRUk7QUFBQSw4Q0FBTSxNQUFOO0FBQUEsMEJBQWEsT0FBTyxDQUFwQjtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFOLEVBQVksY0FBWjtBQUNJO0FBQUEsc0RBQU0sSUFBTjtBQUFBLGtDQUFXLE1BQUssS0FBaEI7QUFDQTtBQUFBO0FBQUEsc0NBQU0sVUFBVSxLQUFLSSxNQUFyQjtBQUNJLHdGQUFNLEtBQU47QUFDQSw4Q0FBSyxNQURMO0FBRUEscURBQVksTUFGWjtBQUdBLHVFQUhBO0FBSUEsK0NBQU8sS0FBS1YsS0FBTCxDQUFXRyxNQUFYLENBQWtCQyxJQUp6QjtBQUtBLGtEQUFVLEtBQUtRO0FBTGYsc0NBREo7QUFRSSx3RkFBTSxLQUFOO0FBQ0EsOENBQUssTUFETDtBQUVBLHFEQUFZLGdCQUZaO0FBR0EsMEVBSEE7QUFJQSwrQ0FBTyxLQUFLWixLQUFMLENBQVdHLE1BQVgsQ0FBa0JFLElBSnpCO0FBS0Esa0RBQVUsS0FBS087QUFMZixzQ0FSSjtBQWVJO0FBQUE7QUFBQSwwQ0FBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBZko7QUFEQSw2QkFESjtBQXNCSSxnRkFBTSxJQUFOLElBQVcsTUFBSyxTQUFoQixFQUEwQixRQUFRWCxlQUFlLFNBQWpEO0FBQ1cseUNBQVMsS0FBS08sZUFEekIsR0F0Qko7QUF3QkksZ0ZBQU0sSUFBTixJQUFXLE1BQUssUUFBaEIsRUFBeUIsUUFBUVAsZUFBZSxRQUFoRDtBQUNXLHlDQUFTLEtBQUtPLGVBRHpCO0FBeEJKO0FBREoscUJBRko7QUFnQ0k7QUFBQSw4Q0FBTSxNQUFOO0FBQUEsMEJBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0k7QUFBQTtBQUFBO0FBQ0txQyxtQ0FBT0MsSUFBUCxDQUFZRixJQUFaLEVBQWtCRyxHQUFsQixDQUFzQixvQkFBWTtBQUMvQixvQ0FBTUMsT0FBT0MsS0FBS0MsSUFBTCxDQUFVLE9BQUtsRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JtQyxNQUFoQixHQUF5Qk8sS0FBS08sUUFBTCxDQUFuQyxDQUFiO0FBQ0Esb0NBQUlDLGNBQWMsT0FBS3BELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQm1DLE1BQWhCLEdBQXlCTyxLQUFLTyxRQUFMLENBQTNDO0FBQ0FDLDhDQUFjQSxnQkFBZ0IsQ0FBaEIsR0FBb0JSLEtBQUtPLFFBQUwsQ0FBcEIsR0FBcUNDLFdBQW5EO0FBQ0EsdUNBQU8sNkJBQUlDLE1BQU1MLElBQU4sRUFBWUYsSUFBWixFQUFKLEdBQXdCQyxHQUF4QixDQUE0QjtBQUFBLDJDQUMzQjtBQUFBLDhEQUFNLEdBQU47QUFBQSwwQ0FBVSxTQUFTSCxLQUFLTyxRQUFMLENBQW5CLEVBQW1DLE1BQU1BLFFBQXpDO0FBQ0sscUVBQUlFLE1BQU1DLFFBQVFOLE9BQU8sQ0FBZixHQUFtQkksV0FBbkIsR0FBaUNSLEtBQUtPLFFBQUwsQ0FBdkMsRUFBdURMLElBQXZELEVBQUosR0FBbUVDLEdBQW5FLENBQXVFO0FBQUEsbURBQ3BFO0FBQUEsc0VBQU0sTUFBTjtBQUFBO0FBQ0ksK0ZBQUssTUFBTyxPQUFLL0MsS0FBTCxDQUFXRSxJQUFYLENBQWdCb0QsTUFBTVYsS0FBS08sUUFBTCxDQUFOLEdBQXVCSSxHQUF2QyxFQUE0Q25ELElBQXhEO0FBQ0ssMERBQU8sT0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCb0QsTUFBTVYsS0FBS08sUUFBTCxDQUFOLEdBQXVCSSxHQUF2QyxFQUE0Q2xELElBRHhEO0FBRUssMERBQU8sT0FBS0wsS0FBTCxDQUFXRSxJQUFYLENBQWdCb0QsTUFBTVYsS0FBS08sUUFBTCxDQUFOLEdBQXVCSSxHQUF2QyxFQUE0Q0MsSUFGeEQ7QUFHSyxxRUFBaUI7QUFBQSwrREFBTSxPQUFLN0MsU0FBTCxDQUFlMkMsTUFBTVYsS0FBS08sUUFBTCxDQUFOLEdBQXVCSSxHQUF0QyxDQUFOO0FBQUEscURBSHRCO0FBREosNkNBRG9FO0FBQUEseUNBQXZFO0FBREwscUNBRDJCO0FBQUEsaUNBQTVCLENBQVA7QUFZSCw2QkFoQkE7QUFETDtBQURKO0FBaENKLGlCQVBSO0FBOERRO0FBQUE7QUFBQSxzQkFBTSxnQkFBTjtBQUNBLHdFQUFNLElBQU4sSUFBVyxNQUFLLEdBQWhCLEVBQW9CLFFBQVEsS0FBS3ZELEtBQUwsQ0FBV08sSUFBWCxLQUFvQixHQUFoRCxFQUFxRCxTQUFTLEtBQUtNLFdBQW5FLEdBREE7QUFFQTtBQUFBLDhDQUFNLElBQU47QUFBQSwwQkFBVyxjQUFYO0FBQUE7QUFBQSxxQkFGQTtBQUdBLHdFQUFNLElBQU4sSUFBVyxNQUFLLElBQWhCLEVBQXFCLFFBQVEsS0FBS2IsS0FBTCxDQUFXTyxJQUFYLEtBQW9CLElBQWpELEVBQXVELFNBQVMsS0FBS00sV0FBckUsR0FIQTtBQUlBLHdFQUFNLElBQU4sSUFBVyxNQUFLLElBQWhCLEVBQXFCLFFBQVEsS0FBS2IsS0FBTCxDQUFXTyxJQUFYLEtBQW9CLElBQWpELEVBQXVELFNBQVMsS0FBS00sV0FBckUsR0FKQTtBQUtBLHdFQUFNLElBQU4sSUFBVyxNQUFLLElBQWhCLEVBQXFCLFFBQVEsS0FBS2IsS0FBTCxDQUFXTyxJQUFYLEtBQW9CLElBQWpELEVBQXVELFNBQVMsS0FBS00sV0FBckU7QUFMQTtBQTlEUixhQURKO0FBd0VIO0FBck5VOztBQUFBO0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU00QyxHOzs7Ozs7Ozs7OztpQ0FJTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHdFQUFPLG1CQUFQLEdBREo7QUFFSTtBQUFBLDBDQUFNLE9BQU47QUFBQTtBQUNJO0FBQUEsOENBQU0sTUFBTjtBQUFBO0FBQ0ssNkJBQUsxRCxLQUFMLENBQVdLO0FBRGhCLHFCQURKO0FBSUk7QUFBQSw4Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxNQUFoQjtBQUNJLG1GQUFNLE1BQUssTUFBWCxHQURKO0FBRUssaUNBQUtMLEtBQUwsQ0FBV3lEO0FBRmhCO0FBREoscUJBSko7QUFVSTtBQUFBLDhDQUFNLFdBQU47QUFBQTtBQUNLLDZCQUFLekQsS0FBTCxDQUFXTTtBQURoQjtBQVZKLGlCQUZKO0FBZ0JJO0FBQUEsMENBQU0sT0FBTjtBQUFBLHNCQUFjLFdBQWQ7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtxRCxVQUF0QjtBQUFrQyxtRkFBTSxNQUFLLGFBQVg7QUFBbEMseUJBRko7QUFHSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLM0QsS0FBTCxDQUFXNEQsZUFBNUI7QUFBNkMsbUZBQU0sTUFBSyxPQUFYO0FBQTdDO0FBSEo7QUFESjtBQWhCSixhQURKO0FBMkJIOzs7Ozs7QUFHTEYsSUFBSUcsU0FBSixHQUFnQjtBQUNaeEQsVUFBTSxvQkFBVXlELE1BREo7QUFFWkwsVUFBTSxvQkFBVUssTUFGSjtBQUdaeEQsVUFBTSxvQkFBVXdEO0FBSEosQ0FBaEI7O2tCQU1lSixHIiwiZmlsZSI6IjAuYjk1MjAxYWJmY2Y0OTRiNTMyMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIEZvcm0sIElucHV0LCBMYWJlbCwgVGV4dEFyZWEsIFNlZ21lbnQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b24sIExvYWRlciwgRGltbWVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgbWFwczpbXSxcbiAgICAgICAgICAgIG5ld01hcDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZCA9IHRoaXMucGFnZUNoYW5nZWQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24ucHJvamVjdHMpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXBzOiBqc29uLnByb2plY3RzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5ld01hcCA9IHRoaXMuc3RhdGUubmV3TWFwXG4gICAgICAgIG5ld01hcFtuYW1lXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3TWFwLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWdlQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBlLnRhcmdldC5uYW1lIH0pXG4gICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucGFnZSlcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld01hcC5uYW1lIHx8ICdVbnRpdGxlZCcgKyB0aGlzLnN0YXRlLm1hcHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUubmV3TWFwLmRlc2NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgICAgICBtYXBzLnB1c2goanNvbi5wcm9qZWN0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9qZWN0cy9yZW1vdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5zdGF0ZS5tYXBzW2ldLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgICAgICAgICAgICAgbWFwcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBjb2xzID0ge1xuICAgICAgICAgICAgJ2NvbXB1dGVyJzogNCxcbiAgICAgICAgICAgICd0YWJsZXQnOiAyLFxuICAgICAgICAgICAgJ21vYmlsZSc6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIHsvKjxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9eyovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgeyAvKjxTZWFyY2hFeGFtcGxlU3RhbmRhcmQgc3RyZXRjaGVkIHNvdXJjZT17bWFwc30vPiAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGZsdWlkIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2FkZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNYXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZXNjKG9wdGlvbmFsKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3TWFwLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAvIGNvbHNbY29sc05hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSb3dDb2xzID0gdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Um93Q29scyA9IGxhc3RSb3dDb2xzID09PSAwID8gY29sc1tjb2xzTmFtZV0gOiBsYXN0Um93Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5BcnJheShyb3dzKS5rZXlzKCldLm1hcChyb3cgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHJvdyA9PT0gcm93cyAtIDEgPyBsYXN0Um93Q29scyA6IGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsgdGhpcy5zdGF0ZS5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5kYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUNsaWNrZWQ9eygpID0+IHRoaXMuZGVsZXRlTWFwKHJvdyAqIGNvbHNbY29sc05hbWVdICsgY29sKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9JzEnIGFjdGl2ZT17dGhpcy5zdGF0ZS5wYWdlID09PSAnMSd9IG9uQ2xpY2s9e3RoaXMucGFnZUNoYW5nZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gZGlzYWJsZWQ+Li4uPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nMTAnIGFjdGl2ZT17dGhpcy5zdGF0ZS5wYWdlID09PSAnMTAnfSBvbkNsaWNrPXt0aGlzLnBhZ2VDaGFuZ2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9JzExJyBhY3RpdmU9e3RoaXMuc3RhdGUucGFnZSA9PT0gJzExJ30gb25DbGljaz17dGhpcy5wYWdlQ2hhbmdlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPScxMicgYWN0aXZlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcxMid9IG9uQ2xpY2s9e3RoaXMucGFnZUNoYW5nZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2FyZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IENvbmZpcm1FeGFtcGxlIGZyb20gJy4vQ29uZmlybUV4YW1wbGVDb25maXJtJ1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299Lz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd0aW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdOYW1lOiAnICsgdGhpcy5wcm9wcy5uYW1lICsgJyBEZXNjOiAnICsgdGhpcy5wcm9wcy5kZXNjKX0+PEljb24gbmFtZT0naW5mbyBsZXR0ZXInLz48L0J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5nb1RvQ2FudmFzfT48SWNvbiBuYW1lPSdpbmZvIGxldHRlcicvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRGVsZXRlQ2xpY2tlZH0+PEljb24gbmFtZT0ndHJhc2gnLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxDb25maXJtRXhhbXBsZSBjb250ZW50PXs8SWNvbiBuYW1lPSd0cmFzaCcvPn0vPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFwLlByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzYzogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwic291cmNlUm9vdCI6IiJ9