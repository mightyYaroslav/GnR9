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
        value: function searchUser(options, query) {
            var _this2 = this;

            fetch('/profiles?username=' + query, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBVc2Vyc1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJNYXBVc2Vyc1NlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsInZhbHVlIiwidXNlcnMiLCJzZWFyY2hVc2VyIiwiYmluZCIsImFkZFVzZXIiLCJvcHRpb25zIiwicXVlcnkiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRoIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwidXNlcklkIiwibWFwIiwidGV4dCIsInUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxFQURKO0FBRVRDLG1CQUFPLEVBRkU7QUFHVEMsbUJBQU87QUFIRSxTQUFiO0FBS0EsY0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQVJlO0FBU2xCOzs7O21DQUVVRSxPLEVBQVNDLEssRUFBTztBQUFBOztBQUN2QkMsMENBQTRCRCxLQUE1QixFQUFxQztBQUNqQ0UseUJBQVM7QUFDTCxpREFBMkJDLEtBQUtDLFFBQUw7QUFEdEI7QUFEd0IsYUFBckMsRUFLS0MsSUFMTCxDQUtVLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FHSSxPQUFLQyxRQUFMLENBQWM7QUFDVkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLE9BQU0sS0FBYjtBQUFvQkosNEJBQUlLO0FBQXhCO0FBREYsaUJBQWQ7QUFHUCxhQVpMLEVBYUtOLElBYkwsQ0FhVSxnQkFBUTtBQUNWTyx3QkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVQLElBQWYsQ0FBWjtBQUNBLHVCQUFLQyxRQUFMLENBQWM7QUFDVmQsMkJBQU9hLEtBQUtiO0FBREYsaUJBQWQ7QUFHSCxhQWxCTCxFQW1CS3FCLEtBbkJMLENBbUJXO0FBQUEsdUJBQU8sT0FBS1AsUUFBTCxDQUFjO0FBQ3hCQyxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sT0FBTSxLQUFiO0FBQW9CTztBQUFwQjtBQURZLGlCQUFkLENBQVA7QUFBQSxhQW5CWDtBQXNCSDs7O2dDQUVPQyxNLEVBQVEsQ0FFZjs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFDSSwyQkFESjtBQUVJLHlCQUFTLEtBQUsxQixLQUFMLENBQVdHLEtBQVgsQ0FBaUJ3QixHQUFqQixDQUFxQixhQUFLO0FBQUMsMkJBQU8sRUFBQ0MsTUFBTUMsRUFBRUMsSUFBVCxFQUFlNUIsT0FBTzJCLEVBQUVDLElBQXhCLEVBQVA7QUFBcUMsaUJBQWhFLENBRmI7QUFHSSw2QkFBYSx5QkFIakI7QUFJSSx3QkFBUSxLQUFLMUIsVUFKakI7QUFLSTtBQUxKLGNBREo7QUFTSDs7Ozs7O2tCQXBEZ0JOLGMiLCJmaWxlIjoiMC4yYWJjZjRkMzI3MmYzODQ3NzYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTaWRlYmFyLCBTZWdtZW50LCBCdXR0b24sIE1lbnUsIEltYWdlLCBJY29uLCBIZWFkZXIsIExhYmVsLCBDb250YWluZXIsIERyb3Bkb3dufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwVXNlcnNTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICB1c2VyczogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlYXJjaFVzZXIgPSB0aGlzLnNlYXJjaFVzZXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZFVzZXIgPSB0aGlzLmFkZFVzZXIuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHNlYXJjaFVzZXIob3B0aW9ucywgcXVlcnkpIHtcbiAgICAgICAgZmV0Y2goYC9wcm9maWxlcz91c2VybmFtZT0ke3F1ZXJ5fWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGpzb24udXNlcnMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VySWQpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS51c2Vycy5tYXAodSA9PiB7cmV0dXJuIHt0ZXh0OiB1Lm5hbWUsIHZhbHVlOiB1Lm5hbWV9fSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggdXNlciBieSB1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLnNlYXJjaFVzZXJ9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcFVzZXJzU2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==