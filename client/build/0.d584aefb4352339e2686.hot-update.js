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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJ0b2tlbiIsInVzZXIiLCJGaWxlUmVhZGVyIiwicHJvdG90eXBlIiwicmVhZEFzQmluYXJ5U3RyaW5nIiwidW5kZWZpbmVkIiwiZmlsZURhdGEiLCJiaW5hcnkiLCJwdCIsInJlYWRlciIsIm9ubG9hZCIsImUiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJyZXN1bHQiLCJsZW5ndGgiLCJieXRlTGVuZ3RoIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNvbnRlbnQiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImltYWdlVXJsIiwiQnVmZmVyIiwiaW1hZ2UiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwicGFyc2UiLCJzdGF0ZSIsImdldFVzZXIiLCJlbWFpbCIsIm5hbWUiLCJyb2xlIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0Um9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsSTs7Ozs7OztxQ0FFR0MsSyxFQUFPQyxJLEVBQU07O0FBRTdCLGdCQUFJQyxXQUFXQyxTQUFYLENBQXFCQyxrQkFBckIsS0FBNENDLFNBQWhELEVBQTJEO0FBQ3ZESCwyQkFBV0MsU0FBWCxDQUFxQkMsa0JBQXJCLEdBQTBDLFVBQVVFLFFBQVYsRUFBb0I7QUFDMUQsd0JBQUlDLFNBQVMsRUFBYjtBQUNBLHdCQUFJQyxLQUFLLElBQVQ7QUFDQSx3QkFBSUMsU0FBUyxJQUFJUCxVQUFKLEVBQWI7QUFDQU8sMkJBQU9DLE1BQVAsR0FBZ0IsVUFBVUMsQ0FBVixFQUFhO0FBQ3pCLDRCQUFJQyxRQUFRLElBQUlDLFVBQUosQ0FBZUosT0FBT0ssTUFBdEIsQ0FBWjtBQUNBLDRCQUFJQyxTQUFTSCxNQUFNSSxVQUFuQjtBQUNBLDZCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsTUFBcEIsRUFBNEJFLEdBQTVCLEVBQWlDO0FBQzdCVixzQ0FBVVcsT0FBT0MsWUFBUCxDQUFvQlAsTUFBTUssQ0FBTixDQUFwQixDQUFWO0FBQ0g7QUFDRDtBQUNBVCwyQkFBR1ksT0FBSCxHQUFhYixNQUFiO0FBQ0FDLDJCQUFHRSxNQUFILEdBUnlCLENBUVo7QUFDaEIscUJBVEQ7QUFVQUQsMkJBQU9ZLGlCQUFQLENBQXlCZixRQUF6QjtBQUNILGlCQWZEO0FBZ0JIOztBQUVETCxpQkFBS3FCLFFBQUwsMEJBQXFDLElBQUlDLE1BQUosQ0FBV3RCLEtBQUt1QixLQUFoQixFQUF1QkMsUUFBdkIsQ0FBZ0MsUUFBaEMsQ0FBckM7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CMUIsSUFBcEI7QUFDQTJCLHlCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCN0IsS0FBOUI7QUFDQTRCLHlCQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxLQUFLQyxTQUFMLENBQWU5QixJQUFmLENBQTdCO0FBQ0g7Ozt5Q0FFdUI7QUFDcEIyQix5QkFBYUksVUFBYixDQUF3QixPQUF4QjtBQUNBSix5QkFBYUksVUFBYixDQUF3QixNQUF4QjtBQUNIOzs7bUNBRWlCO0FBQ2QsbUJBQU9KLGFBQWFLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBUDtBQUNIOzs7a0NBRWdCO0FBQ2IsbUJBQU9ILEtBQUtJLEtBQUwsQ0FBV04sYUFBYUssT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDs7O21DQUVpQkUsSyxFQUFPO0FBQ3JCLGdCQUFJbEMsT0FBT0YsS0FBS3FDLE9BQUwsRUFBWDtBQUNBbkMsaUJBQUtvQyxLQUFMLEdBQWFGLE1BQU1FLEtBQW5CO0FBQ0FwQyxpQkFBS3FDLElBQUwsR0FBWUgsTUFBTUcsSUFBbEI7QUFDQXJDLGlCQUFLdUIsS0FBTCxHQUFhVyxNQUFNYixRQUFuQjtBQUNBSSxvQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUIxQixJQUFyQjtBQUNBMkIseUJBQWFDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLEtBQUtDLFNBQUwsQ0FBZTlCLElBQWYsQ0FBN0I7QUFDSDs7O2tDQUVnQjtBQUNiLG1CQUFPRixLQUFLcUMsT0FBTCxHQUFlRyxJQUF0QjtBQUNIOzs7MENBRXdCO0FBQ3JCLG1CQUFPWCxhQUFhSyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXpDO0FBQ0g7OztrQ0FFZ0I7QUFDYixtQkFBT2xDLEtBQUt5QyxlQUFMLE1BQTBCekMsS0FBSzBDLE9BQUwsT0FBbUIsT0FBcEQ7QUFDSDs7Ozs7O2tCQTdEZ0IxQyxJIiwiZmlsZSI6IjAuZDU4NGFlZmI0MzUyMzM5ZTI2ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGgge1xuXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0ZSh0b2tlbiwgdXNlcikge1xuXG4gICAgICAgIGlmIChGaWxlUmVhZGVyLnByb3RvdHlwZS5yZWFkQXNCaW5hcnlTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgRmlsZVJlYWRlci5wcm90b3R5cGUucmVhZEFzQmluYXJ5U3RyaW5nID0gZnVuY3Rpb24gKGZpbGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmFyeSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdmFyIHB0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9wdC5yZXN1bHQgIC0gcmVhZG9ubHkgc28gYXNzaWduIGNvbnRlbnQgdG8gYW5vdGhlciBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICBwdC5jb250ZW50ID0gYmluYXJ5O1xuICAgICAgICAgICAgICAgICAgICBwdC5vbmxvYWQoKTsgLy8gdGhhbmtzIHRvIEBEZW5pcyBjb21tZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1c2VyLmltYWdlVXJsID0gYGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcih1c2VyLmltYWdlKS50b1N0cmluZygnYmFzZTY0Jyl9YFxuICAgICAgICBjb25zb2xlLmxvZygnVXNlcicsIHVzZXIpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVzZXIoc3RhdGUpIHtcbiAgICAgICAgbGV0IHVzZXIgPSBBdXRoLmdldFVzZXIoKVxuICAgICAgICB1c2VyLmVtYWlsID0gc3RhdGUuZW1haWxcbiAgICAgICAgdXNlci5uYW1lID0gc3RhdGUubmFtZVxuICAgICAgICB1c2VyLmltYWdlID0gc3RhdGUuaW1hZ2VVcmxcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIyJywgdXNlcilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Um9sZSgpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguZ2V0VXNlcigpLnJvbGVcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBZG1pbigpIHtcbiAgICAgICAgcmV0dXJuIEF1dGguaXNBdXRoZW50aWNhdGVkKCkgJiYgQXV0aC5nZXRSb2xlKCkgPT09ICdhZG1pbidcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9BdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==