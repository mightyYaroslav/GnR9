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
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(MapUsersSearch, [{
        key: 'handleChange',
        value: function handleChange(e, _ref) {
            var searchQuery = _ref.searchQuery,
                value = _ref.value;

            this.setState({ searchQuery: searchQuery, value: value });
        }
    }, {
        key: 'searchUser',
        value: function searchUser(e, _ref2) {
            var _this2 = this;

            var searchQuery = _ref2.searchQuery;

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
                onSearchChange: this.s,
                searchQuery: this.state.searchQuery,
                value: this.state.value,
                selection: true
            });
        }
    }]);

    return MapUsersSearch;
}(_react.Component);

exports.default = MapUsersSearch;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJmZXRjaCIsInVzZXJuYW1lIiwiaGVhZGVycyIsIkF1dGgiLCJnZXRUb2tlbiIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwidXNlcklkIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxjOzs7QUFFakIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyxtQkFBTyxFQUZFO0FBR1RDLG1CQUFPO0FBSEUsU0FBYjtBQUtBLGNBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxjQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBVGU7QUFVbEI7Ozs7cUNBRVlHLEMsUUFBMkI7QUFBQSxnQkFBdEJQLFdBQXNCLFFBQXRCQSxXQUFzQjtBQUFBLGdCQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3BDLGlCQUFLTyxRQUFMLENBQWMsRUFBRVIsd0JBQUYsRUFBZUMsWUFBZixFQUFkO0FBQ0g7OzttQ0FFVU0sQyxTQUFvQjtBQUFBOztBQUFBLGdCQUFmUCxXQUFlLFNBQWZBLFdBQWU7O0FBQzNCUywwQ0FBNEJDLFFBQTVCLEVBQXdDO0FBQ3BDQyx5QkFBUztBQUNMLGlEQUEyQkMsS0FBS0MsUUFBTDtBQUR0QjtBQUQyQixhQUF4QyxFQUtLQyxJQUxMLENBS1UsZUFBTztBQUNULG9CQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDSSxPQUFPRCxJQUFJRSxJQUFKLEVBQVAsQ0FESixLQUdJLE9BQUtULFFBQUwsQ0FBYztBQUNWVSxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CSCw0QkFBSUk7QUFBeEI7QUFERixpQkFBZDtBQUdQLGFBWkwsRUFhS0wsSUFiTCxDQWFVLGdCQUFRO0FBQ1ZNLHdCQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZU4sSUFBZixDQUFaO0FBQ0EsdUJBQUtULFFBQUwsQ0FBYztBQUNWTiwyQkFBT2UsS0FBS2Y7QUFERixpQkFBZDtBQUdILGFBbEJMLEVBbUJLc0IsS0FuQkwsQ0FtQlc7QUFBQSx1QkFBTyxPQUFLaEIsUUFBTCxDQUFjO0FBQ3hCVSxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CTztBQUFwQjtBQURZLGlCQUFkLENBQVA7QUFBQSxhQW5CWDtBQXNCSDs7O2dDQUVPQyxNLEVBQVEsQ0FFZjs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFDSSwyQkFESjtBQUVJLHlCQUFTLEtBQUszQixLQUFMLENBQVdHLEtBRnhCO0FBR0ksNkJBQWEseUJBSGpCO0FBSUksd0JBQVEsS0FBS0MsVUFKakI7QUFLSSxnQ0FBZ0IsS0FBS3dCLENBTHpCO0FBTUksNkJBQWEsS0FBSzVCLEtBQUwsQ0FBV0MsV0FONUI7QUFPSSx1QkFBTyxLQUFLRCxLQUFMLENBQVdFLEtBUHRCO0FBUUk7QUFSSixjQURKO0FBWUg7Ozs7OztrQkE1RGdCSixjIiwiZmlsZSI6IjAuZTQ0MzdmZWVmNTk1YmM0M2E5YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFVzZXJzU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgdXNlcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRVc2VyID0gdGhpcy5hZGRVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUsIHsgc2VhcmNoUXVlcnksIHZhbHVlIH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFF1ZXJ5LCB2YWx1ZSB9KVxuICAgIH1cblxuICAgIHNlYXJjaFVzZXIoZSwgeyBzZWFyY2hRdWVyeSB9KSB7XG4gICAgICAgIGZldGNoKGAvcHJvZmlsZXM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbikpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiBqc29uLnVzZXJzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZFVzZXIodXNlcklkKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUudXNlcnN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggdXNlciBieSB1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLnNlYXJjaFVzZXJ9XG4gICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuc31cbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwVXNlcnNTZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9