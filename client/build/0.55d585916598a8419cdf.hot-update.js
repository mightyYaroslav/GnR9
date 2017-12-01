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

            user.image = 'data:image;base64,' + user.image;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJpbWFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJwYXJzZSIsInN0YXRlIiwiZ2V0VXNlciIsImVtYWlsIiwibmFtZSIsImltYWdlVXJsIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImdldFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7cUNBRUdDLEssRUFBT0MsSSxFQUFNOztBQUU3QkEsaUJBQUtDLEtBQUwsMEJBQWtDRCxLQUFLQyxLQUF2QztBQUNBQyx5QkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4QkosS0FBOUI7QUFDQUcseUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLEtBQUtDLFNBQUwsQ0FBZUwsSUFBZixDQUE3QjtBQUNIOzs7eUNBRXVCO0FBQ3BCRSx5QkFBYUksVUFBYixDQUF3QixPQUF4QjtBQUNBSix5QkFBYUksVUFBYixDQUF3QixNQUF4QjtBQUNIOzs7bUNBRWlCO0FBQ2QsbUJBQU9KLGFBQWFLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBUDtBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9ILEtBQUtJLEtBQUwsQ0FBV04sYUFBYUssT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDs7O21DQUVpQkUsSyxFQUFPO0FBQ3JCLGdCQUFJVCxPQUFPRixLQUFLWSxPQUFMLEVBQVg7QUFDQVYsaUJBQUtXLEtBQUwsR0FBYUYsTUFBTUUsS0FBbkI7QUFDQVgsaUJBQUtZLElBQUwsR0FBWUgsTUFBTUUsS0FBbEI7QUFDQVgsaUJBQUtDLEtBQUwsR0FBYVEsTUFBTUksUUFBbkI7QUFDQVgseUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLEtBQUtDLFNBQUwsQ0FBZUwsSUFBZixDQUE3QjtBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9GLEtBQUtZLE9BQUwsR0FBZUksSUFBdEI7QUFDSDs7OzBDQUV3QjtBQUNyQixtQkFBT1osYUFBYUssT0FBYixDQUFxQixPQUFyQixNQUFrQyxJQUF6QztBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9ULEtBQUtpQixlQUFMLE1BQTBCakIsS0FBS2tCLE9BQUwsT0FBbUIsT0FBcEQ7QUFDSDs7Ozs7O2tCQXhDZ0JsQixJIiwiZmlsZSI6IjAuNTVkNTg1OTE2NTk4YTg0MTljZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGgge1xuXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0ZSh0b2tlbiwgdXNlcikge1xuICAgICAgICBcbiAgICAgICAgdXNlci5pbWFnZSA9IGBkYXRhOmltYWdlO2Jhc2U2NCwke3VzZXIuaW1hZ2V9YFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhdXRoZW50aWNhdGUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVc2VyKHN0YXRlKSB7XG4gICAgICAgIGxldCB1c2VyID0gQXV0aC5nZXRVc2VyKClcbiAgICAgICAgdXNlci5lbWFpbCA9IHN0YXRlLmVtYWlsXG4gICAgICAgIHVzZXIubmFtZSA9IHN0YXRlLmVtYWlsXG4gICAgICAgIHVzZXIuaW1hZ2UgPSBzdGF0ZS5pbWFnZVVybFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5nZXRVc2VyKCkucm9sZVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBpc0FkbWluKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJiBBdXRoLmdldFJvbGUoKSA9PT0gJ2FkbWluJ1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9