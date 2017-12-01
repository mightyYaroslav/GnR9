webpackHotUpdate(0,{

/***/ 82:
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

            if (FileReader.prototype.readAsBinaryString === undefined) {
                FileReader.prototype.readAsBinaryString = function (fileData) {
                    var binary = "";
                    var pt = this;
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var bytes = new Uint8Array(reader.result);
                        var length = bytes.byteLength;
                        for (var i = 0; i < length; i++) {
                            binary += String.fromCharCode(bytes[i]);
                        }
                        //pt.result  - readonly so assign content to another property
                        pt.content = binary;
                        pt.onload(); // thanks to @Denis comment
                    };
                    reader.readAsArrayBuffer(fileData);
                };
            }

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = void 0;
                if (e) {
                    data = e.target.result;
                } else {
                    data = reader.content;
                }
                user.image = data;
            };
            reader.readAsBinaryString(user.image);

            user.imageUrl = 'data:image;base64,' + new Buffer(user.image).toString('base64');
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
            user.name = state.name;
            user.image = state.imageUrl;
            console.log('User2', user);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(882).Buffer))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJGaWxlUmVhZGVyIiwicHJvdG90eXBlIiwicmVhZEFzQmluYXJ5U3RyaW5nIiwidW5kZWZpbmVkIiwiZmlsZURhdGEiLCJiaW5hcnkiLCJwdCIsInJlYWRlciIsIm9ubG9hZCIsImUiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJyZXN1bHQiLCJsZW5ndGgiLCJieXRlTGVuZ3RoIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNvbnRlbnQiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImRhdGEiLCJ0YXJnZXQiLCJpbWFnZSIsImltYWdlVXJsIiwiQnVmZmVyIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlIiwic3RhdGUiLCJnZXRVc2VyIiwiZW1haWwiLCJuYW1lIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImdldFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7Ozs7Ozs7cUNBRUdDLEssRUFBT0MsSSxFQUFNOztBQUU3QixnQkFBSUMsV0FBV0MsU0FBWCxDQUFxQkMsa0JBQXJCLEtBQTRDQyxTQUFoRCxFQUEyRDtBQUN2REgsMkJBQVdDLFNBQVgsQ0FBcUJDLGtCQUFyQixHQUEwQyxVQUFVRSxRQUFWLEVBQW9CO0FBQzFELHdCQUFJQyxTQUFTLEVBQWI7QUFDQSx3QkFBSUMsS0FBSyxJQUFUO0FBQ0Esd0JBQUlDLFNBQVMsSUFBSVAsVUFBSixFQUFiO0FBQ0FPLDJCQUFPQyxNQUFQLEdBQWdCLFVBQVVDLENBQVYsRUFBYTtBQUN6Qiw0QkFBSUMsUUFBUSxJQUFJQyxVQUFKLENBQWVKLE9BQU9LLE1BQXRCLENBQVo7QUFDQSw0QkFBSUMsU0FBU0gsTUFBTUksVUFBbkI7QUFDQSw2QkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQXBCLEVBQTRCRSxHQUE1QixFQUFpQztBQUM3QlYsc0NBQVVXLE9BQU9DLFlBQVAsQ0FBb0JQLE1BQU1LLENBQU4sQ0FBcEIsQ0FBVjtBQUNIO0FBQ0Q7QUFDQVQsMkJBQUdZLE9BQUgsR0FBYWIsTUFBYjtBQUNBQywyQkFBR0UsTUFBSCxHQVJ5QixDQVFaO0FBQ2hCLHFCQVREO0FBVUFELDJCQUFPWSxpQkFBUCxDQUF5QmYsUUFBekI7QUFDSCxpQkFmRDtBQWdCSDs7QUFFRCxnQkFBTUcsU0FBUyxJQUFJUCxVQUFKLEVBQWY7QUFDQU8sbUJBQU9DLE1BQVAsR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLG9CQUFJVyxhQUFKO0FBQ0Esb0JBQUdYLENBQUgsRUFBTTtBQUNGVywyQkFBT1gsRUFBRVksTUFBRixDQUFTVCxNQUFoQjtBQUNILGlCQUZELE1BRU87QUFDSFEsMkJBQU9iLE9BQU9XLE9BQWQ7QUFDSDtBQUNEbkIscUJBQUt1QixLQUFMLEdBQWFGLElBQWI7QUFDSCxhQVJEO0FBU0FiLG1CQUFPTCxrQkFBUCxDQUEwQkgsS0FBS3VCLEtBQS9COztBQUVBdkIsaUJBQUt3QixRQUFMLDBCQUFxQyxJQUFJQyxNQUFKLENBQVd6QixLQUFLdUIsS0FBaEIsRUFBdUJHLFFBQXZCLENBQWdDLFFBQWhDLENBQXJDO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQjVCLElBQXBCO0FBQ0E2Qix5QkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4Qi9CLEtBQTlCO0FBQ0E4Qix5QkFBYUMsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsS0FBS0MsU0FBTCxDQUFlaEMsSUFBZixDQUE3QjtBQUNIOzs7eUNBRXVCO0FBQ3BCNkIseUJBQWFJLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUoseUJBQWFJLFVBQWIsQ0FBd0IsTUFBeEI7QUFDSDs7O21DQUVpQjtBQUNkLG1CQUFPSixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLENBQVA7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPSCxLQUFLSSxLQUFMLENBQVdOLGFBQWFLLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0g7OzttQ0FFaUJFLEssRUFBTztBQUNyQixnQkFBSXBDLE9BQU9GLEtBQUt1QyxPQUFMLEVBQVg7QUFDQXJDLGlCQUFLc0MsS0FBTCxHQUFhRixNQUFNRSxLQUFuQjtBQUNBdEMsaUJBQUt1QyxJQUFMLEdBQVlILE1BQU1HLElBQWxCO0FBQ0F2QyxpQkFBS3VCLEtBQUwsR0FBYWEsTUFBTVosUUFBbkI7QUFDQUcsb0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCNUIsSUFBckI7QUFDQTZCLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxLQUFLQyxTQUFMLENBQWVoQyxJQUFmLENBQTdCO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT0YsS0FBS3VDLE9BQUwsR0FBZUcsSUFBdEI7QUFDSDs7OzBDQUV3QjtBQUNyQixtQkFBT1gsYUFBYUssT0FBYixDQUFxQixPQUFyQixNQUFrQyxJQUF6QztBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9wQyxLQUFLMkMsZUFBTCxNQUEwQjNDLEtBQUs0QyxPQUFMLE9BQW1CLE9BQXBEO0FBQ0g7Ozs7OztrQkF6RWdCNUMsSSIsImZpbGUiOiIwLjViMzEwMjkyMGI5N2I3MzUxNjhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIHtcblxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUodG9rZW4sIHVzZXIpIHtcblxuICAgICAgICBpZiAoRmlsZVJlYWRlci5wcm90b3R5cGUucmVhZEFzQmluYXJ5U3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEZpbGVSZWFkZXIucHJvdG90eXBlLnJlYWRBc0JpbmFyeVN0cmluZyA9IGZ1bmN0aW9uIChmaWxlRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5hcnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHZhciBwdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vcHQucmVzdWx0ICAtIHJlYWRvbmx5IHNvIGFzc2lnbiBjb250ZW50IHRvIGFub3RoZXIgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgcHQuY29udGVudCA9IGJpbmFyeTtcbiAgICAgICAgICAgICAgICAgICAgcHQub25sb2FkKCk7IC8vIHRoYW5rcyB0byBARGVuaXMgY29tbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgaWYoZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBlLnRhcmdldC5yZXN1bHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHJlYWRlci5jb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyLmltYWdlID0gZGF0YVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcodXNlci5pbWFnZSlcblxuICAgICAgICB1c2VyLmltYWdlVXJsID0gYGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcih1c2VyLmltYWdlKS50b1N0cmluZygnYmFzZTY0Jyl9YFxuICAgICAgICBjb25zb2xlLmxvZygnVXNlcicsIHVzZXIpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVzZXIoc3RhdGUpIHtcbiAgICAgICAgbGV0IHVzZXIgPSBBdXRoLmdldFVzZXIoKVxuICAgICAgICB1c2VyLmVtYWlsID0gc3RhdGUuZW1haWxcbiAgICAgICAgdXNlci5uYW1lID0gc3RhdGUubmFtZVxuICAgICAgICB1c2VyLmltYWdlID0gc3RhdGUuaW1hZ2VVcmxcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIyJywgdXNlcilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Um9sZSgpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguZ2V0VXNlcigpLnJvbGVcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==