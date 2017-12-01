webpackHotUpdate(0,{

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(921);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(77);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(924);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(23);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(17);

var _Auth = __webpack_require__(63);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapUsersSearch = function (_Component) {
    (0, _inherits3.default)(MapUsersSearch, _Component);

    function MapUsersSearch(props) {
        (0, _classCallCheck3.default)(this, MapUsersSearch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MapUsersSearch.__proto__ || (0, _getPrototypeOf2.default)(MapUsersSearch)).call(this, props));

        _this.state = {
            searchQuery: '',
            value: '',
            users: []
        };
        _this.searchUser = _this.searchUser.bind(_this);
        _this.addUser = _this.addUser.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(MapUsersSearch, [{
        key: 'searchUser',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options, query) {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('/profiles?username=' + query, {
                                    headers: {
                                        "Authorization": 'bearer ' + _Auth2.default.getToken()
                                    }
                                });

                            case 2:
                                res = _context.sent;

                                console.log((0, _stringify2.default)(res.json));
                                return _context.abrupt('return', (res ? res.json() : []).map(function (u) {
                                    return { text: u.name, value: u.name };
                                }));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function searchUser(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return searchUser;
        }()
    }, {
        key: 'addUser',
        value: function addUser(userId) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Dropdown, {
                fluid: true,
                options: this.state.users.map(function (u) {
                    return { text: u.name, value: u.name };
                }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJvcHRpb25zIiwicXVlcnkiLCJmZXRjaCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWFwIiwidGV4dCIsInUiLCJuYW1lIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsYzs7O0FBRWpCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEpBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhLEVBREo7QUFFVEMsbUJBQU8sRUFGRTtBQUdUQyxtQkFBTztBQUhFLFNBQWI7QUFLQSxjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBUmU7QUFTbEI7Ozs7O2lIQUVnQkUsTyxFQUFTQyxLOzs7Ozs7O3VDQUNKQyw4QkFBNEJELEtBQTVCLEVBQXFDO0FBQ25ERSw2Q0FBUztBQUNMLHFFQUEyQixlQUFLQyxRQUFMO0FBRHRCO0FBRDBDLGlDQUFyQyxDOzs7QUFBWkMsbUM7O0FBS05DLHdDQUFRQyxHQUFSLENBQVkseUJBQWVGLElBQUlHLElBQW5CLENBQVo7aUVBQ08sQ0FBQ0gsTUFBTUEsSUFBSUcsSUFBSixFQUFOLEdBQW1CLEVBQXBCLEVBQXdCQyxHQUF4QixDQUE0QixhQUFLO0FBQUUsMkNBQU8sRUFBRUMsTUFBTUMsRUFBRUMsSUFBVixFQUFnQmpCLE9BQU9nQixFQUFFQyxJQUF6QixFQUFQO0FBQXVDLGlDQUExRSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR0hDLE0sRUFBUSxDQUVmOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUNJLDJCQURKO0FBRUkseUJBQVMsS0FBS3BCLEtBQUwsQ0FBV0csS0FBWCxDQUFpQmEsR0FBakIsQ0FBcUIsYUFBSztBQUFDLDJCQUFPLEVBQUNDLE1BQU1DLEVBQUVDLElBQVQsRUFBZWpCLE9BQU9nQixFQUFFQyxJQUF4QixFQUFQO0FBQXFDLGlCQUFoRSxDQUZiO0FBR0ksNkJBQWEseUJBSGpCO0FBSUksd0JBQVEsS0FBS2YsVUFKakI7QUFLSTtBQUxKLGNBREo7QUFTSDs7Ozs7a0JBckNnQk4sYyIsImZpbGUiOiIwLmIyYWU0MWU3N2ZjMmQ2NWUyY2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpZGViYXIsIFNlZ21lbnQsIEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlciwgTGFiZWwsIENvbnRhaW5lciwgRHJvcGRvd259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBVc2Vyc1NlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoVXNlciA9IHRoaXMuc2VhcmNoVXNlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkVXNlciA9IHRoaXMuYWRkVXNlci5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgYXN5bmMgc2VhcmNoVXNlcihvcHRpb25zLCBxdWVyeSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL3Byb2ZpbGVzP3VzZXJuYW1lPSR7cXVlcnl9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzLmpzb24pKVxuICAgICAgICByZXR1cm4gKHJlcyA/IHJlcy5qc29uKCkgOiBbXSkubWFwKHUgPT4geyByZXR1cm4geyB0ZXh0OiB1Lm5hbWUsIHZhbHVlOiB1Lm5hbWUgfX0pXG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VySWQpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS51c2Vycy5tYXAodSA9PiB7cmV0dXJuIHt0ZXh0OiB1Lm5hbWUsIHZhbHVlOiB1Lm5hbWV9fSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggdXNlciBieSB1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLnNlYXJjaFVzZXJ9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcFVzZXJzU2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==