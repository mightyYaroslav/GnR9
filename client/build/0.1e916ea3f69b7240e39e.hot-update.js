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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwicGFyc2UiLCJzdGF0ZSIsImdldFVzZXIiLCJlbWFpbCIsIm5hbWUiLCJpbWFnZVVybCIsInJvbGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRSb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7O3FDQUVHQyxLLEVBQU9DLEksRUFBTTtBQUM3QkEsaUJBQUtDLEtBQUwsMEJBQWtDRCxLQUFLQyxLQUF2QztBQUNBQyxvQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JILElBQXBCO0FBQ0FJLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCTixLQUE5QjtBQUNBSyx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEJJLHlCQUFhSSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FKLHlCQUFhSSxVQUFiLENBQXdCLE1BQXhCO0FBQ0g7OzttQ0FFaUI7QUFDZCxtQkFBT0osYUFBYUssT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0gsS0FBS0ksS0FBTCxDQUFXTixhQUFhSyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOzs7bUNBRWlCRSxLLEVBQU87QUFDckIsZ0JBQUlYLE9BQU9GLEtBQUtjLE9BQUwsRUFBWDtBQUNBWixpQkFBS2EsS0FBTCxHQUFhRixNQUFNRSxLQUFuQjtBQUNBYixpQkFBS2MsSUFBTCxHQUFZSCxNQUFNRSxLQUFsQjtBQUNBYixpQkFBS0MsS0FBTCxHQUFhVSxNQUFNSSxRQUFuQjtBQUNBWCx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQTdCO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0YsS0FBS2MsT0FBTCxHQUFlSSxJQUF0QjtBQUNIOzs7MENBRXdCO0FBQ3JCLG1CQUFPWixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXpDO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT1gsS0FBS21CLGVBQUwsTUFBMEJuQixLQUFLb0IsT0FBTCxPQUFtQixPQUFwRDtBQUNIOzs7Ozs7a0JBeENnQnBCLEkiLCJmaWxlIjoiMC4xZTkxNmVhM2Y2OWI3MjQwZTM5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKHRva2VuLCB1c2VyKSB7XG4gICAgICAgIHVzZXIuaW1hZ2UgPSBgZGF0YTppbWFnZTtiYXNlNjQsJHt1c2VyLmltYWdlfWBcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXInLCB1c2VyKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhdXRoZW50aWNhdGUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVc2VyKHN0YXRlKSB7XG4gICAgICAgIGxldCB1c2VyID0gQXV0aC5nZXRVc2VyKClcbiAgICAgICAgdXNlci5lbWFpbCA9IHN0YXRlLmVtYWlsXG4gICAgICAgIHVzZXIubmFtZSA9IHN0YXRlLmVtYWlsXG4gICAgICAgIHVzZXIuaW1hZ2UgPSBzdGF0ZS5pbWFnZVVybFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5nZXRVc2VyKCkucm9sZVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBpc0FkbWluKCkge1xuICAgICAgICByZXR1cm4gQXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSAmJiBBdXRoLmdldFJvbGUoKSA9PT0gJ2FkbWluJ1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9