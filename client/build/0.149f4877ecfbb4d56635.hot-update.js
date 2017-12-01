webpackHotUpdate(0,{

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

var _MapUsersSearch = __webpack_require__(921);

var _MapUsersSearch2 = _interopRequireDefault(_MapUsersSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInfoSideBar = function (_Component) {
    _inherits(MapInfoSideBar, _Component);

    function MapInfoSideBar(props) {
        _classCallCheck(this, MapInfoSideBar);

        var _this = _possibleConstructorReturn(this, (MapInfoSideBar.__proto__ || Object.getPrototypeOf(MapInfoSideBar)).call(this, props));

        _this.searchUser = _this.searchUser.bind(_this);
        return _this;
    }

    _createClass(MapInfoSideBar, [{
        key: 'searchUser',
        value: function searchUser(username) {
            var _this2 = this;

            fetch('/profiles?username=' + username, {
                headers: {
                    "Authorization": 'bearer ' + Auth.getToken()
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
                console.log(JSON.stringify(json));
                _this2.setState({ profiles: json.users, loading: false, pages: json.pages, currentPage: json.currentPage });
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
        key: 'render',
        value: function render() {
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
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        'Name: ',
                        this.props.object.name
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        'Descrption: ',
                        this.props.object.desc
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        null,
                        _react2.default.createElement(_MapUsersSearch2.default, null)
                    )
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

/***/ }),

/***/ 921:
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

var MapUsersSearch = function (_Component) {
    _inherits(MapUsersSearch, _Component);

    function MapUsersSearch(props) {
        _classCallCheck(this, MapUsersSearch);

        var _this = _possibleConstructorReturn(this, (MapUsersSearch.__proto__ || Object.getPrototypeOf(MapUsersSearch)).call(this, props));

        _this.state = {
            users: []
        };
        _this.searchUser = _this.searchUser.bind(_this);
        _this.addUser = _this.addUser.bind(_this);
        return _this;
    }

    _createClass(MapUsersSearch, [{
        key: 'searchUser',
        value: function searchUser(username) {
            var _this2 = this;

            fetch('/profiles?username=' + username, {
                headers: {
                    "Authorization": 'bearer ' + Auth.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    )
                });
            }).then(function (json) {
                console.log(JSON.stringify(json));
                _this2.setState({
                    users: json.users
                });
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    )
                });
            });
        }
    }, {
        key: 'addUser',
        value: function addUser(userId) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Dropdown, {
                fluid: true,
                options: this.state.users,
                placeholder: 'Search user by username',
                search: this.searchUser,
                selection: true
            });
        }
    }]);

    return MapUsersSearch;
}(_react.Component);

exports.default = MapUsersSearch;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBJbmZvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBJbmZvU2lkZUJhciIsInByb3BzIiwic2VhcmNoVXNlciIsImJpbmQiLCJ1c2VybmFtZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGgiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0U3RhdGUiLCJlcnJvckxhYmVsIiwic3RhdHVzVGV4dCIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2ZpbGVzIiwidXNlcnMiLCJwYWdlcyIsImN1cnJlbnRQYWdlIiwiY2F0Y2giLCJlcnIiLCJ2aXNpYmxlIiwib2JqZWN0IiwibmFtZSIsImRlc2MiLCJjaGlsZHJlbiIsIk1hcFVzZXJzU2VhcmNoIiwic3RhdGUiLCJhZGRVc2VyIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBRWpCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUZlO0FBR2xCOzs7O21DQUVVQyxRLEVBQVU7QUFBQTs7QUFDakJDLDBDQUE0QkQsUUFBNUIsRUFBd0M7QUFDcENFLHlCQUFTO0FBQ0wsaURBQTJCQyxLQUFLQyxRQUFMO0FBRHRCO0FBRDJCLGFBQXhDLEVBS0NDLElBTEQsQ0FLTSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQU9ELElBQUlFLElBQUosRUFBUCxDQURKLEtBR0ksT0FBS0MsUUFBTCxDQUFjO0FBQ1ZDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFN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QkFESjtBQUVJLHlCQUFTLEtBQUtGLEtBQUwsQ0FBV1gsS0FGeEI7QUFHSSw2QkFBYSx5QkFIakI7QUFJSSx3QkFBUSxLQUFLcEIsVUFKakI7QUFLSTtBQUxKLGNBREo7QUFTSDs7Ozs7O2tCQWxEZ0I4QixjIiwiZmlsZSI6IjAuMTQ5ZjQ4NzdlY2ZiYjRkNTY2MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBNYXBVc2Vyc1NlYXJjaCBmcm9tICcuL01hcFVzZXJzU2VhcmNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBJbmZvU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBzZWFyY2hVc2VyKHVzZXJuYW1lKSB7XG4gICAgICAgIGZldGNoKGAvcHJvZmlsZXM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UsIHBhZ2VzOiBqc29uLnBhZ2VzLCBjdXJyZW50UGFnZToganNvbi5jdXJyZW50UGFnZSB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2lkZWJhci5QdXNoYWJsZT5cbiAgICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgICAgICBhcz17TWVudX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPSdvdmVybGF5J1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nbGFiZWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiB7dGhpcy5wcm9wcy5vYmplY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcnB0aW9uOiB7dGhpcy5wcm9wcy5vYmplY3QuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwVXNlcnNTZWFyY2gvPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGFzPXtDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cbiAgICAgICAgICAgIDwvU2lkZWJhci5QdXNoYWJsZT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXBJbmZvU2lkZWJhci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFVzZXJzU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRVc2VyID0gdGhpcy5hZGRVc2VyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBzZWFyY2hVc2VyKHVzZXJuYW1lKSB7XG4gICAgICAgIGZldGNoKGAvcHJvZmlsZXM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiBqc29uLnVzZXJzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZFVzZXIodXNlcklkKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUudXNlcnN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggdXNlciBieSB1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLnNlYXJjaFVzZXJ9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcFVzZXJzU2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==