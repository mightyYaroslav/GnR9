webpackHotUpdate(0,{

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(921);

var _regenerator2 = _interopRequireDefault(_regenerator);

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

                                console.log(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJvcHRpb25zIiwicXVlcnkiLCJmZXRjaCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWFwIiwidGV4dCIsInUiLCJuYW1lIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxjOzs7QUFFakIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSkFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyxtQkFBTyxFQUZFO0FBR1RDLG1CQUFPO0FBSEUsU0FBYjtBQUtBLGNBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFSZTtBQVNsQjs7Ozs7aUhBRWdCRSxPLEVBQVNDLEs7Ozs7Ozs7dUNBQ0pDLDhCQUE0QkQsS0FBNUIsRUFBcUM7QUFDbkRFLDZDQUFTO0FBQ0wscUVBQTJCLGVBQUtDLFFBQUw7QUFEdEI7QUFEMEMsaUNBQXJDLEM7OztBQUFaQyxtQzs7QUFLTkMsd0NBQVFDLEdBQVIsQ0FBWUYsR0FBWjtpRUFDTyxDQUFDQSxNQUFNQSxJQUFJRyxJQUFKLEVBQU4sR0FBbUIsRUFBcEIsRUFBd0JDLEdBQXhCLENBQTRCLGFBQUs7QUFBRSwyQ0FBTyxFQUFFQyxNQUFNQyxFQUFFQyxJQUFWLEVBQWdCakIsT0FBT2dCLEVBQUVDLElBQXpCLEVBQVA7QUFBdUMsaUNBQTFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHSEMsTSxFQUFRLENBRWY7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQ0ksMkJBREo7QUFFSSx5QkFBUyxLQUFLcEIsS0FBTCxDQUFXRyxLQUFYLENBQWlCYSxHQUFqQixDQUFxQixhQUFLO0FBQUMsMkJBQU8sRUFBQ0MsTUFBTUMsRUFBRUMsSUFBVCxFQUFlakIsT0FBT2dCLEVBQUVDLElBQXhCLEVBQVA7QUFBcUMsaUJBQWhFLENBRmI7QUFHSSw2QkFBYSx5QkFIakI7QUFJSSx3QkFBUSxLQUFLZixVQUpqQjtBQUtJO0FBTEosY0FESjtBQVNIOzs7OztrQkFyQ2dCTixjIiwiZmlsZSI6IjAuNjFjYzE2M2U5MTUyZTY5MmYyNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFVzZXJzU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgdXNlcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRVc2VyID0gdGhpcy5hZGRVc2VyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBhc3luYyBzZWFyY2hVc2VyKG9wdGlvbnMsIHF1ZXJ5KSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvcHJvZmlsZXM/dXNlcm5hbWU9JHtxdWVyeX1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHJldHVybiAocmVzID8gcmVzLmpzb24oKSA6IFtdKS5tYXAodSA9PiB7IHJldHVybiB7IHRleHQ6IHUubmFtZSwgdmFsdWU6IHUubmFtZSB9fSlcbiAgICB9XG5cbiAgICBhZGRVc2VyKHVzZXJJZCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnVzZXJzLm1hcCh1ID0+IHtyZXR1cm4ge3RleHQ6IHUubmFtZSwgdmFsdWU6IHUubmFtZX19KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1NlYXJjaCB1c2VyIGJ5IHVzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuc2VhcmNoVXNlcn1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwVXNlcnNTZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9