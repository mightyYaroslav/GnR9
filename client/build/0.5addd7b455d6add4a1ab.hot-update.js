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

            console.log(searchQuery, value);
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
                onChange: this.handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZmV0Y2giLCJ1c2VybmFtZSIsImhlYWRlcnMiLCJBdXRoIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yTGFiZWwiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxFQURKO0FBRVRDLG1CQUFPLEVBRkU7QUFHVEMsbUJBQU87QUFIRSxTQUFiO0FBS0EsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLGNBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFUZTtBQVVsQjs7OztxQ0FFWUcsQyxRQUEyQjtBQUFBLGdCQUF0QlAsV0FBc0IsUUFBdEJBLFdBQXNCO0FBQUEsZ0JBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDcENPLG9CQUFRQyxHQUFSLENBQVlULFdBQVosRUFBeUJDLEtBQXpCO0FBQ0EsaUJBQUtTLFFBQUwsQ0FBYyxFQUFFVix3QkFBRixFQUFlQyxZQUFmLEVBQWQ7QUFDSDs7O21DQUVVTSxDLFNBQW9CO0FBQUE7O0FBQUEsZ0JBQWZQLFdBQWUsU0FBZkEsV0FBZTs7QUFDM0JXLDBDQUE0QkMsUUFBNUIsRUFBd0M7QUFDcENDLHlCQUFTO0FBQ0wsaURBQTJCQyxLQUFLQyxRQUFMO0FBRHRCO0FBRDJCLGFBQXhDLEVBS0tDLElBTEwsQ0FLVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQU9ELElBQUlFLElBQUosRUFBUCxDQURKLEtBR0ksT0FBS1QsUUFBTCxDQUFjO0FBQ1ZVLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JILDRCQUFJSTtBQUF4QjtBQURGLGlCQUFkO0FBR1AsYUFaTCxFQWFLTCxJQWJMLENBYVUsZ0JBQVE7QUFDVlIsd0JBQVFDLEdBQVIsQ0FBWWEsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQVo7QUFDQSx1QkFBS1QsUUFBTCxDQUFjO0FBQ1ZSLDJCQUFPaUIsS0FBS2pCO0FBREYsaUJBQWQ7QUFHSCxhQWxCTCxFQW1CS3NCLEtBbkJMLENBbUJXO0FBQUEsdUJBQU8sT0FBS2QsUUFBTCxDQUFjO0FBQ3hCVSxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CSztBQUFwQjtBQURZLGlCQUFkLENBQVA7QUFBQSxhQW5CWDtBQXNCSDs7O2dDQUVPQyxNLEVBQVEsQ0FFZjs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFDSSwyQkFESjtBQUVJLHlCQUFTLEtBQUszQixLQUFMLENBQVdHLEtBRnhCO0FBR0ksNkJBQWEseUJBSGpCO0FBSUksd0JBQVEsS0FBS0MsVUFKakI7QUFLSSwwQkFBVSxLQUFLRyxZQUxuQjtBQU1JLDZCQUFhLEtBQUtQLEtBQUwsQ0FBV0MsV0FONUI7QUFPSSx1QkFBTyxLQUFLRCxLQUFMLENBQVdFLEtBUHRCO0FBUUk7QUFSSixjQURKO0FBWUg7Ozs7OztrQkE3RGdCSixjIiwiZmlsZSI6IjAuNWFkZGQ3YjQ1NWQ2YWRkNGExYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2lkZWJhciwgU2VnbWVudCwgQnV0dG9uLCBNZW51LCBJbWFnZSwgSWNvbiwgSGVhZGVyLCBMYWJlbCwgQ29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFVzZXJzU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgdXNlcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRVc2VyID0gdGhpcy5hZGRVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUsIHsgc2VhcmNoUXVlcnksIHZhbHVlIH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUXVlcnksIHZhbHVlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUXVlcnksIHZhbHVlIH0pXG4gICAgfVxuXG4gICAgc2VhcmNoVXNlcihlLCB7IHNlYXJjaFF1ZXJ5IH0pIHtcbiAgICAgICAgZmV0Y2goYC9wcm9maWxlcz91c2VybmFtZT0ke3VzZXJuYW1lfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGpzb24udXNlcnMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VySWQpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS51c2Vyc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1NlYXJjaCB1c2VyIGJ5IHVzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuc2VhcmNoVXNlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcFVzZXJzU2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==