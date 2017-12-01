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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJpbWFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJwYXJzZSIsInN0YXRlIiwiZ2V0VXNlciIsImVtYWlsIiwibmFtZSIsImltYWdlVXJsIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImdldFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7cUNBRUdDLEssRUFBT0MsSSxFQUFNO0FBQzdCQSxpQkFBS0MsS0FBTCwwQkFBa0NELEtBQUtDLEtBQXZDO0FBQ0FDLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixLQUE5QjtBQUNBRyx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsS0FBS0MsU0FBTCxDQUFlTCxJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEJFLHlCQUFhSSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FKLHlCQUFhSSxVQUFiLENBQXdCLE1BQXhCO0FBQ0g7OzttQ0FFaUI7QUFDZCxtQkFBT0osYUFBYUssT0FBYixDQUFxQixPQUFyQixDQUFQO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0gsS0FBS0ksS0FBTCxDQUFXTixhQUFhSyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOzs7bUNBRWlCRSxLLEVBQU87QUFDckIsZ0JBQUlULE9BQU9GLEtBQUtZLE9BQUwsRUFBWDtBQUNBVixpQkFBS1csS0FBTCxHQUFhRixNQUFNRSxLQUFuQjtBQUNBWCxpQkFBS1ksSUFBTCxHQUFZSCxNQUFNRSxLQUFsQjtBQUNBWCxpQkFBS0MsS0FBTCxHQUFhUSxNQUFNSSxRQUFuQjtBQUNBWCx5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsS0FBS0MsU0FBTCxDQUFlTCxJQUFmLENBQTdCO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0YsS0FBS1ksT0FBTCxHQUFlSSxJQUF0QjtBQUNIOzs7MENBRXdCO0FBQ3JCLG1CQUFPWixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXpDO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT1QsS0FBS2lCLGVBQUwsTUFBMEJqQixLQUFLa0IsT0FBTCxPQUFtQixPQUFwRDtBQUNIOzs7Ozs7a0JBdkNnQmxCLEkiLCJmaWxlIjoiMC40OTIwN2E3MTEyM2MwODAxOTg0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICBzdGF0aWMgYXV0aGVudGljYXRlKHRva2VuLCB1c2VyKSB7XG4gICAgICAgIHVzZXIuaW1hZ2UgPSBgZGF0YTppbWFnZTtiYXNlNjQsJHt1c2VyLmltYWdlfWBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlYXV0aGVudGljYXRlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRva2VuKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVXNlcihzdGF0ZSkge1xuICAgICAgICBsZXQgdXNlciA9IEF1dGguZ2V0VXNlcigpXG4gICAgICAgIHVzZXIuZW1haWwgPSBzdGF0ZS5lbWFpbFxuICAgICAgICB1c2VyLm5hbWUgPSBzdGF0ZS5lbWFpbFxuICAgICAgICB1c2VyLmltYWdlID0gc3RhdGUuaW1hZ2VVcmxcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Um9sZSgpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguZ2V0VXNlcigpLnJvbGVcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==