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
            return JSON.parse(localStorage.getItem('user') || '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlIiwiZ2V0VXNlciIsInJvbGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRSb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7O3FDQUVHQyxLLEVBQU9DLEksRUFBTTtBQUM3QkMsb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZSxFQUFFTCxZQUFGLEVBQVNDLFVBQVQsRUFBZixDQUFaO0FBQ0FLLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCUCxLQUE5QjtBQUNBTSx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkgsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEJLLHlCQUFhRSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FGLHlCQUFhRSxVQUFiLENBQXdCLE1BQXhCO0FBQ0g7OzttQ0FFaUI7QUFDZCxtQkFBT0YsYUFBYUcsT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0wsS0FBS00sS0FBTCxDQUFXSixhQUFhRyxPQUFiLENBQXFCLE1BQXJCLEtBQWdDLEVBQTNDLENBQVA7QUFDSDs7O21DQUVpQlIsSSxFQUFNO0FBQ3BCSyx5QkFBYUUsVUFBYixDQUF3QixNQUF4QjtBQUNBRix5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkgsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQTdCO0FBQ0g7OztrQ0FFZ0I7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlKLEtBQUtZLE9BQUwsR0FBZUMsSUFBM0I7QUFDQSxtQkFBT2IsS0FBS1ksT0FBTCxHQUFlQyxJQUF0QjtBQUNIOzs7MENBRXdCO0FBQ3JCLG1CQUFPTixhQUFhRyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXpDO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT1YsS0FBS2MsZUFBTCxNQUEwQmQsS0FBS2UsT0FBTCxPQUFtQixPQUFwRDtBQUNIOzs7Ozs7a0JBdkNnQmYsSSIsImZpbGUiOiIwLjdlZmVmMTVhN2E0OGJlMzBmNTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIHtcblxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUodG9rZW4sIHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0ZScpXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHsgdG9rZW4sIHVzZXIgfSkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgfHwgJycpXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVzZXIodXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJvbGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRSb2xlJylcbiAgICAgICAgY29uc29sZS5sb2coQXV0aC5nZXRVc2VyKCkucm9sZSlcbiAgICAgICAgcmV0dXJuIEF1dGguZ2V0VXNlcigpLnJvbGVcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==