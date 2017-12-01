webpackHotUpdate(0,{

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(931);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(934);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(22);

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

var _Auth = __webpack_require__(74);

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
                                return _context.abrupt('return', (res ? res.json() : []).map(function (u) {
                                    return { text: u.name, value: u.name };
                                }));

                            case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJvcHRpb25zIiwicXVlcnkiLCJmZXRjaCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInJlcyIsImpzb24iLCJtYXAiLCJ0ZXh0IiwidSIsIm5hbWUiLCJ1c2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLGM7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBKQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxFQURKO0FBRVRDLG1CQUFPLEVBRkU7QUFHVEMsbUJBQU87QUFIRSxTQUFiO0FBS0EsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQVJlO0FBU2xCOzs7OztpSEFFZ0JFLE8sRUFBU0MsSzs7Ozs7Ozt1Q0FDSkMsOEJBQTRCRCxLQUE1QixFQUFxQztBQUNuREUsNkNBQVM7QUFDTCxxRUFBMkIsZUFBS0MsUUFBTDtBQUR0QjtBQUQwQyxpQ0FBckMsQzs7O0FBQVpDLG1DO2lFQUtDLENBQUNBLE1BQU1BLElBQUlDLElBQUosRUFBTixHQUFtQixFQUFwQixFQUF3QkMsR0FBeEIsQ0FBNEIsYUFBSztBQUFFLDJDQUFPLEVBQUVDLE1BQU1DLEVBQUVDLElBQVYsRUFBZ0JmLE9BQU9jLEVBQUVDLElBQXpCLEVBQVA7QUFBdUMsaUNBQTFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHSEMsTSxFQUFRLENBRWY7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQ0ksMkJBREo7QUFFSSx5QkFBUyxLQUFLbEIsS0FBTCxDQUFXRyxLQUFYLENBQWlCVyxHQUFqQixDQUFxQixhQUFLO0FBQUMsMkJBQU8sRUFBQ0MsTUFBTUMsRUFBRUMsSUFBVCxFQUFlZixPQUFPYyxFQUFFQyxJQUF4QixFQUFQO0FBQXFDLGlCQUFoRSxDQUZiO0FBR0ksNkJBQWEseUJBSGpCO0FBSUksd0JBQVEsS0FBS2IsVUFKakI7QUFLSTtBQUxKLGNBREo7QUFTSDs7Ozs7a0JBcENnQk4sYyIsImZpbGUiOiIwLmFlNmYxMzg3NzZmZTkwMDBjZDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpZGViYXIsIFNlZ21lbnQsIEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlciwgTGFiZWwsIENvbnRhaW5lciwgRHJvcGRvd259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBVc2Vyc1NlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoVXNlciA9IHRoaXMuc2VhcmNoVXNlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkVXNlciA9IHRoaXMuYWRkVXNlci5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgYXN5bmMgc2VhcmNoVXNlcihvcHRpb25zLCBxdWVyeSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL3Byb2ZpbGVzP3VzZXJuYW1lPSR7cXVlcnl9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIChyZXMgPyByZXMuanNvbigpIDogW10pLm1hcCh1ID0+IHsgcmV0dXJuIHsgdGV4dDogdS5uYW1lLCB2YWx1ZTogdS5uYW1lIH19KVxuICAgIH1cblxuICAgIGFkZFVzZXIodXNlcklkKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUudXNlcnMubWFwKHUgPT4ge3JldHVybiB7dGV4dDogdS5uYW1lLCB2YWx1ZTogdS5uYW1lfX0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU2VhcmNoIHVzZXIgYnkgdXNlcm5hbWUnfVxuICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5zZWFyY2hVc2VyfVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=