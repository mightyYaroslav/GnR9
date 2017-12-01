webpackHotUpdate(0,{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

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
            user.image = 'data:image;base64,' + new Buffer(user.image).toString('base64');
            console.log('User', user);
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
        value: function updateUser(state) {
            var user = Auth.getUser();
            user.email = state.email;
            user.name = state.email;
            user.image = state.imageUrl;
            console.log('User2', user);
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'getRole',
        value: function getRole() {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(902).Buffer))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJpbWFnZSIsIkJ1ZmZlciIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJwYXJzZSIsInN0YXRlIiwiZ2V0VXNlciIsImVtYWlsIiwibmFtZSIsImltYWdlVXJsIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImdldFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7cUNBRUdDLEssRUFBT0MsSSxFQUFNO0FBQzdCQSxpQkFBS0MsS0FBTCwwQkFBa0MsSUFBSUMsTUFBSixDQUFXRixLQUFLQyxLQUFoQixFQUF1QkUsUUFBdkIsQ0FBZ0MsUUFBaEMsQ0FBbEM7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CTCxJQUFwQjtBQUNBTSx5QkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4QlIsS0FBOUI7QUFDQU8seUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLEtBQUtDLFNBQUwsQ0FBZVQsSUFBZixDQUE3QjtBQUNIOzs7eUNBRXVCO0FBQ3BCTSx5QkFBYUksVUFBYixDQUF3QixPQUF4QjtBQUNBSix5QkFBYUksVUFBYixDQUF3QixNQUF4QjtBQUNIOzs7bUNBRWlCO0FBQ2QsbUJBQU9KLGFBQWFLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBUDtBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9ILEtBQUtJLEtBQUwsQ0FBV04sYUFBYUssT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDs7O21DQUVpQkUsSyxFQUFPO0FBQ3JCLGdCQUFJYixPQUFPRixLQUFLZ0IsT0FBTCxFQUFYO0FBQ0FkLGlCQUFLZSxLQUFMLEdBQWFGLE1BQU1FLEtBQW5CO0FBQ0FmLGlCQUFLZ0IsSUFBTCxHQUFZSCxNQUFNRSxLQUFsQjtBQUNBZixpQkFBS0MsS0FBTCxHQUFhWSxNQUFNSSxRQUFuQjtBQUNBYixvQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJMLElBQXJCO0FBQ0FNLHlCQUFhSSxVQUFiLENBQXdCLE1BQXhCO0FBQ0FKLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxLQUFLQyxTQUFMLENBQWVULElBQWYsQ0FBN0I7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPRixLQUFLZ0IsT0FBTCxHQUFlSSxJQUF0QjtBQUNIOzs7MENBRXdCO0FBQ3JCLG1CQUFPWixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXpDO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT2IsS0FBS3FCLGVBQUwsTUFBMEJyQixLQUFLc0IsT0FBTCxPQUFtQixPQUFwRDtBQUNIOzs7Ozs7a0JBMUNnQnRCLEkiLCJmaWxlIjoiMC45YWVjMmQxMjBkODFjZTdiMjdiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKHRva2VuLCB1c2VyKSB7XG4gICAgICAgIHVzZXIuaW1hZ2UgPSBgZGF0YTppbWFnZTtiYXNlNjQsJHtuZXcgQnVmZmVyKHVzZXIuaW1hZ2UpLnRvU3RyaW5nKCdiYXNlNjQnKX1gXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyJywgdXNlcilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlYXV0aGVudGljYXRlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRva2VuKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVXNlcihzdGF0ZSkge1xuICAgICAgICBsZXQgdXNlciA9IEF1dGguZ2V0VXNlcigpXG4gICAgICAgIHVzZXIuZW1haWwgPSBzdGF0ZS5lbWFpbFxuICAgICAgICB1c2VyLm5hbWUgPSBzdGF0ZS5lbWFpbFxuICAgICAgICB1c2VyLmltYWdlID0gc3RhdGUuaW1hZ2VVcmxcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIyJywgdXNlcilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5nZXRVc2VyKCkucm9sZVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBpc0FkbWluKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJiBBdXRoLmdldFJvbGUoKSA9PT0gJ2FkbWluJ1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9