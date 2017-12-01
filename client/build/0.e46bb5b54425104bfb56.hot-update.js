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
            localStorage.setItem('user');
            localStorage.removeItem('token');
            return JSON.parse(localStorage.getItem('user'));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user) {
            localStorage.removeItem('user');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlIiwiZ2V0VXNlciIsInJvbGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRSb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7O3FDQUVHQyxLLEVBQU9DLEksRUFBTTtBQUM3QkMsb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZSxFQUFFTCxZQUFGLEVBQVNDLFVBQVQsRUFBZixDQUFaO0FBQ0FLLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCUCxLQUE5QjtBQUNBTSx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkgsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEJLLHlCQUFhRSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FGLHlCQUFhRSxVQUFiLENBQXdCLE1BQXhCO0FBQ0g7OzttQ0FFaUI7QUFDZCxtQkFBT0YsYUFBYUcsT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0g7OztrQ0FFZ0I7QUFDYkgseUJBQWFDLE9BQWIsQ0FBcUIsTUFBckI7QUFDQUQseUJBQWFFLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQSxtQkFBT0osS0FBS00sS0FBTCxDQUFXSixhQUFhRyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOzs7bUNBRWlCUixJLEVBQU07QUFDcEJLLHlCQUFhRSxVQUFiLENBQXdCLE1BQXhCO0FBQ0FGLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSCxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FBN0I7QUFDSDs7O2tDQUVnQjtBQUNiQyxvQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWUosS0FBS1ksT0FBTCxHQUFlQyxJQUEzQjtBQUNBLG1CQUFPYixLQUFLWSxPQUFMLEdBQWVDLElBQXRCO0FBQ0g7OzswQ0FFd0I7QUFDckJWLG9CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWUcsYUFBYUcsT0FBYixDQUFxQixPQUFyQixDQUFaO0FBQ0EsbUJBQU9ILGFBQWFHLE9BQWIsQ0FBcUIsT0FBckIsTUFBa0MsSUFBekM7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPVixLQUFLYyxlQUFMLE1BQTBCZCxLQUFLZSxPQUFMLE9BQW1CLE9BQXBEO0FBQ0g7Ozs7OztrQkEzQ2dCZixJIiwiZmlsZSI6IjAuZTQ2YmI1YjU0NDI1MTA0YmZiNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGgge1xuXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0ZSh0b2tlbiwgdXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlJylcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeyB0b2tlbiwgdXNlciB9KSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlYXV0aGVudGljYXRlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRva2VuKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VXNlcigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVc2VyKHVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSb2xlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0Um9sZScpXG4gICAgICAgIGNvbnNvbGUubG9nKEF1dGguZ2V0VXNlcigpLnJvbGUpXG4gICAgICAgIHJldHVybiBBdXRoLmdldFVzZXIoKS5yb2xlXG4gICAgfVxuXG4gICAgc3RhdGljIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzQXV0aGVudGljYXRlZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==