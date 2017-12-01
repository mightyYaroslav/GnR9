webpackHotUpdate(0,{

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
            searchQuery: '',
            value: '',
            users: []
        };
        _this.searchUser = _this.searchUser.bind(_this);
        _this.addUser = _this.addUser.bind(_this);
        return _this;
    }

    _createClass(MapUsersSearch, [{
        key: 'searchUser',
        value: function searchUser(e, _ref) {
            var _this2 = this;

            var searchQuery = _ref.searchQuery;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJlIiwiZmV0Y2giLCJ1c2VybmFtZSIsImhlYWRlcnMiLCJBdXRoIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwidXNlcklkIiwibWFwIiwidGV4dCIsInUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxFQURKO0FBRVRDLG1CQUFPLEVBRkU7QUFHVEMsbUJBQU87QUFIRSxTQUFiO0FBS0EsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQVJlO0FBU2xCOzs7O21DQUVVRSxDLFFBQW9CO0FBQUE7O0FBQUEsZ0JBQWZOLFdBQWUsUUFBZkEsV0FBZTs7QUFDM0JPLDBDQUE0QkMsUUFBNUIsRUFBd0M7QUFDcENDLHlCQUFTO0FBQ0wsaURBQTJCQyxLQUFLQyxRQUFMO0FBRHRCO0FBRDJCLGFBQXhDLEVBS0tDLElBTEwsQ0FLVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQU9ELElBQUlFLElBQUosRUFBUCxDQURKLEtBR0ksT0FBS0MsUUFBTCxDQUFjO0FBQ1ZDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JKLDRCQUFJSztBQUF4QjtBQURGLGlCQUFkO0FBR1AsYUFaTCxFQWFLTixJQWJMLENBYVUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQVo7QUFDQSx1QkFBS0MsUUFBTCxDQUFjO0FBQ1ZkLDJCQUFPYSxLQUFLYjtBQURGLGlCQUFkO0FBR0gsYUFsQkwsRUFtQktxQixLQW5CTCxDQW1CVztBQUFBLHVCQUFPLE9BQUtQLFFBQUwsQ0FBYztBQUN4QkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQk87QUFBcEI7QUFEWSxpQkFBZCxDQUFQO0FBQUEsYUFuQlg7QUFzQkg7OztnQ0FFT0MsTSxFQUFRLENBRWY7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQ0ksMkJBREo7QUFFSSx5QkFBUyxLQUFLMUIsS0FBTCxDQUFXRyxLQUFYLENBQWlCd0IsR0FBakIsQ0FBcUIsYUFBSztBQUFDLDJCQUFPLEVBQUNDLE1BQU1DLEVBQUVDLElBQVQsRUFBZTVCLE9BQU8yQixFQUFFQyxJQUF4QixFQUFQO0FBQXFDLGlCQUFoRSxDQUZiO0FBR0ksNkJBQWEseUJBSGpCO0FBSUksd0JBQVEsS0FBSzFCLFVBSmpCO0FBS0k7QUFMSixjQURKO0FBU0g7Ozs7OztrQkFwRGdCTixjIiwiZmlsZSI6IjAuYTZmMjA1YTA3YzA2Y2I4MTc0YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFVzZXJzU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgdXNlcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRVc2VyID0gdGhpcy5hZGRVc2VyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBzZWFyY2hVc2VyKGUsIHsgc2VhcmNoUXVlcnkgfSkge1xuICAgICAgICBmZXRjaChgL3Byb2ZpbGVzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24pKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyczoganNvbi51c2VycyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBhZGRVc2VyKHVzZXJJZCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnVzZXJzLm1hcCh1ID0+IHtyZXR1cm4ge3RleHQ6IHUubmFtZSwgdmFsdWU6IHUubmFtZX19KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1NlYXJjaCB1c2VyIGJ5IHVzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuc2VhcmNoVXNlcn1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwVXNlcnNTZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9