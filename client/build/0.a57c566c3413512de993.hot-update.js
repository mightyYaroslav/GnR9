webpackHotUpdate(0,{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
    function Auth() {
        _classCallCheck(this, Auth);
    }

    _createClass(Auth, null, [{
        key: 'authenticate',
        value: function authenticate(token, user) {
            console.log('authenticate');
            console.log(JSON.stringify({ token: token, user: user }));
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'deauthenticate',
        value: function deauthenticate() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            return localStorage.getItem('token');
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            // localStorage.removeItem('user')
            // localStorage.removeItem('token')
            return JSON.parse(localStorage.getItem('user'));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(state) {
            var user = Auth.getUser();
            user.email = state.email;
            user.name = state.email;

            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'getRole',
        value: function getRole() {
            console.log('getRole');
            console.log(Auth.getUser().role);
            return Auth.getUser().role;
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            console.log('isAuthenticated');
            console.log(localStorage.getItem('token'));
            return localStorage.getItem('token') !== null;
        }
    }, {
        key: 'isAdmin',
        value: function isAdmin() {
            return Auth.isAuthenticated() && Auth.getRole() === 'admin';
        }
    }]);

    return Auth;
}();

exports.default = Auth;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlIiwic3RhdGUiLCJnZXRVc2VyIiwiZW1haWwiLCJuYW1lIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImdldFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7cUNBRUdDLEssRUFBT0MsSSxFQUFNO0FBQzdCQyxvQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlLEVBQUVMLFlBQUYsRUFBU0MsVUFBVCxFQUFmLENBQVo7QUFDQUsseUJBQWFDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJQLEtBQTlCO0FBQ0FNLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSCxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FBN0I7QUFDSDs7O3lDQUV1QjtBQUNwQksseUJBQWFFLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUYseUJBQWFFLFVBQWIsQ0FBd0IsTUFBeEI7QUFDSDs7O21DQUVpQjtBQUNkLG1CQUFPRixhQUFhRyxPQUFiLENBQXFCLE9BQXJCLENBQVA7QUFDSDs7O2tDQUVnQjtBQUNiO0FBQ0E7QUFDQSxtQkFBT0wsS0FBS00sS0FBTCxDQUFXSixhQUFhRyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOzs7bUNBRWlCRSxLLEVBQU87QUFDckIsZ0JBQUlWLE9BQU9GLEtBQUthLE9BQUwsRUFBWDtBQUNBWCxpQkFBS1ksS0FBTCxHQUFhRixNQUFNRSxLQUFuQjtBQUNBWixpQkFBS2EsSUFBTCxHQUFZSCxNQUFNRSxLQUFsQjs7QUFFQVAseUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJILEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUE3QjtBQUNIOzs7a0NBRWdCO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZSixLQUFLYSxPQUFMLEdBQWVHLElBQTNCO0FBQ0EsbUJBQU9oQixLQUFLYSxPQUFMLEdBQWVHLElBQXRCO0FBQ0g7OzswQ0FFd0I7QUFDckJiLG9CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWUcsYUFBYUcsT0FBYixDQUFxQixPQUFyQixDQUFaO0FBQ0EsbUJBQU9ILGFBQWFHLE9BQWIsQ0FBcUIsT0FBckIsTUFBa0MsSUFBekM7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPVixLQUFLaUIsZUFBTCxNQUEwQmpCLEtBQUtrQixPQUFMLE9BQW1CLE9BQXBEO0FBQ0g7Ozs7OztrQkE5Q2dCbEIsSSIsImZpbGUiOiIwLmE1N2M1NjZjMzQxMzUxMmRlOTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIHtcblxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUodG9rZW4sIHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0ZScpXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHsgdG9rZW4sIHVzZXIgfSkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFVzZXIoKSB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVXNlcihzdGF0ZSkge1xuICAgICAgICBsZXQgdXNlciA9IEF1dGguZ2V0VXNlcigpXG4gICAgICAgIHVzZXIuZW1haWwgPSBzdGF0ZS5lbWFpbFxuICAgICAgICB1c2VyLm5hbWUgPSBzdGF0ZS5lbWFpbFxuICAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Um9sZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFJvbGUnKVxuICAgICAgICBjb25zb2xlLmxvZyhBdXRoLmdldFVzZXIoKS5yb2xlKVxuICAgICAgICByZXR1cm4gQXV0aC5nZXRVc2VyKCkucm9sZVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0F1dGhlbnRpY2F0ZWQnKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGlzQWRtaW4oKSB7XG4gICAgICAgIHJldHVybiBBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmIEF1dGguZ2V0Um9sZSgpID09PSAnYWRtaW4nXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQXV0aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=