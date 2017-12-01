webpackHotUpdate(0,{

/***/ 159:
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
            return JSON.parse(localStorage.getItem('user'));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user) {
            localStorage.removeItem('user');
            localStorage.setItem('user', user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlIiwiZ2V0VXNlciIsInJvbGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRSb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7O3FDQUVHQyxLLEVBQU9DLEksRUFBTTtBQUM3QkMsb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZSxFQUFFTCxZQUFGLEVBQVNDLFVBQVQsRUFBZixDQUFaO0FBQ0FLLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCUCxLQUE5QjtBQUNBTSx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkgsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEJLLHlCQUFhRSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FGLHlCQUFhRSxVQUFiLENBQXdCLE1BQXhCO0FBQ0g7OzttQ0FFaUI7QUFDZCxtQkFBT0YsYUFBYUcsT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0wsS0FBS00sS0FBTCxDQUFXSixhQUFhRyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOzs7bUNBRWlCUixJLEVBQU07QUFDcEJLLHlCQUFhRSxVQUFiLENBQXdCLE1BQXhCO0FBQ0FGLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCTixJQUE3QjtBQUNIOzs7a0NBRWdCO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZSixLQUFLWSxPQUFMLEdBQWVDLElBQTNCO0FBQ0EsbUJBQU9iLEtBQUtZLE9BQUwsR0FBZUMsSUFBdEI7QUFDSDs7OzBDQUV3QjtBQUNyQixtQkFBT04sYUFBYUcsT0FBYixDQUFxQixPQUFyQixNQUFrQyxJQUF6QztBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9WLEtBQUtjLGVBQUwsTUFBMEJkLEtBQUtlLE9BQUwsT0FBbUIsT0FBcEQ7QUFDSDs7Ozs7O2tCQXZDZ0JmLEkiLCJmaWxlIjoiMC45MjQ3NDQzY2YzN2VmMTI5MDUyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKHRva2VuLCB1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRoZW50aWNhdGUnKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7IHRva2VuLCB1c2VyIH0pKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhdXRoZW50aWNhdGUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVc2VyKHVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXIpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJvbGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRSb2xlJylcbiAgICAgICAgY29uc29sZS5sb2coQXV0aC5nZXRVc2VyKCkucm9sZSlcbiAgICAgICAgcmV0dXJuIEF1dGguZ2V0VXNlcigpLnJvbGVcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==