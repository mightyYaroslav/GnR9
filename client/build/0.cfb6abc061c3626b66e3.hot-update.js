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
            query: '',
            users: []
        };
        _this.searchUser = _this.searchUser.bind(_this);
        _this.addUser = _this.addUser.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(MapUsersSearch, [{
        key: 'handleChange',
        value: function handleChange() {}
    }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJxdWVyeSIsInVzZXJzIiwic2VhcmNoVXNlciIsImJpbmQiLCJhZGRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNlYXJjaFF1ZXJ5IiwiZmV0Y2giLCJ1c2VybmFtZSIsImhlYWRlcnMiLCJBdXRoIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxFQURFO0FBRVRDLG1CQUFPO0FBRkUsU0FBYjtBQUlBLGNBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxjQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBUmU7QUFTbEI7Ozs7dUNBRWMsQ0FFZDs7O21DQUVVRyxDLFFBQW9CO0FBQUE7O0FBQUEsZ0JBQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFDM0JDLDBDQUE0QkMsUUFBNUIsRUFBd0M7QUFDcENDLHlCQUFTO0FBQ0wsaURBQTJCQyxLQUFLQyxRQUFMO0FBRHRCO0FBRDJCLGFBQXhDLEVBS0tDLElBTEwsQ0FLVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQU9ELElBQUlFLElBQUosRUFBUCxDQURKLEtBR0ksT0FBS0MsUUFBTCxDQUFjO0FBQ1ZDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JKLDRCQUFJSztBQUF4QjtBQURGLGlCQUFkO0FBR1AsYUFaTCxFQWFLTixJQWJMLENBYVUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQVo7QUFDQSx1QkFBS0MsUUFBTCxDQUFjO0FBQ1ZoQiwyQkFBT2UsS0FBS2Y7QUFERixpQkFBZDtBQUdILGFBbEJMLEVBbUJLdUIsS0FuQkwsQ0FtQlc7QUFBQSx1QkFBTyxPQUFLUCxRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JPO0FBQXBCO0FBRFksaUJBQWQsQ0FBUDtBQUFBLGFBbkJYO0FBc0JIOzs7Z0NBRU9DLE0sRUFBUSxDQUVmOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUNJLDJCQURKO0FBRUkseUJBQVMsS0FBSzNCLEtBQUwsQ0FBV0UsS0FGeEI7QUFHSSw2QkFBYSx5QkFIakI7QUFJSSx3QkFBUSxLQUFLQyxVQUpqQjtBQUtJO0FBTEosY0FESjtBQVNIOzs7Ozs7a0JBeERnQkwsYyIsImZpbGUiOiIwLmNmYjZhYmMwNjFjMzYyNmI2NmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpZGViYXIsIFNlZ21lbnQsIEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlciwgTGFiZWwsIENvbnRhaW5lciwgRHJvcGRvd259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBVc2Vyc1NlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgICAgIHVzZXJzOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoVXNlciA9IHRoaXMuc2VhcmNoVXNlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkVXNlciA9IHRoaXMuYWRkVXNlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2VhcmNoVXNlcihlLCB7IHNlYXJjaFF1ZXJ5IH0pIHtcbiAgICAgICAgZmV0Y2goYC9wcm9maWxlcz91c2VybmFtZT0ke3VzZXJuYW1lfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGpzb24udXNlcnMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VySWQpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS51c2Vyc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1NlYXJjaCB1c2VyIGJ5IHVzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuc2VhcmNoVXNlcn1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwVXNlcnNTZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9