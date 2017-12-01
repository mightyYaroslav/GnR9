webpackHotUpdate(0,{

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialNetworksLogin = function (_Component) {
    _inherits(SocialNetworksLogin, _Component);

    function SocialNetworksLogin(props) {
        _classCallCheck(this, SocialNetworksLogin);

        var _this = _possibleConstructorReturn(this, (SocialNetworksLogin.__proto__ || Object.getPrototypeOf(SocialNetworksLogin)).call(this, props));

        _this.githubAuth = _this.githubAuth.bind(_this);
        return _this;
    }

    _createClass(SocialNetworksLogin, [{
        key: 'githubAuth',
        value: function githubAuth() {
            fetch('/auth/login/github', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            // .then(res => {
            //     if(res.status === 200)
            //         return res.json()
            //     else if(res.status === 400)
            //         this.setState({
            //             errorLabel: <Label as='a' color='red'>Can't login</Label>
            //         })
            //     else
            //         this.setState({
            //             errorLabel: <Label as='a'  color='red'>{res.statusText}</Label>
            //         })
            // })
            // .then(json => {
            //     console.log('JSON: ', json)
            //     // Auth.authenticate(json.token, json.user)
            //     // this.redirect()
            // })
            // .catch(err => this.setState({
            //     errorLabel: <Label as='a'  color='red'>{err || "Error"}</Label>
            // }))
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Segment,
                { padded: true },
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { fluid: true, color: 'black', onClick: this.githubAuth },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'github' }),
                    'Log in with GitHub'
                ),
                _react2.default.createElement(
                    _semanticUiReact.Divider,
                    { horizontal: true },
                    'Or'
                ),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { disabled: true, fluid: true, color: 'red' },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'google plus' }),
                    'Log in with Google'
                )
            );
        }
    }]);

    return SocialNetworksLogin;
}(_react.Component);

exports.default = SocialNetworksLogin;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sIm5hbWVzIjpbIlNvY2lhbE5ldHdvcmtzTG9naW4iLCJwcm9wcyIsImdpdGh1YkF1dGgiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUFFakIsaUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBRmU7QUFHbEI7Ozs7cUNBRVk7QUFDVEMsa0JBQU0sb0JBQU4sRUFBNEI7QUFDeEJDLHdCQUFRLE1BRGdCO0FBRXhCQyx5QkFBUztBQUNMLG9DQUFnQixrQkFEWDtBQUVMLG1EQUErQjtBQUYxQjtBQUZlLGFBQTVCO0FBT0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQVMsWUFBVDtBQUNJO0FBQUE7QUFBQSxzQkFBUSxXQUFSLEVBQWMsT0FBTSxPQUFwQixFQUE0QixTQUFTLEtBQUtKLFVBQTFDO0FBQ0ksMkVBQU0sTUFBSyxRQUFYLEdBREo7QUFBQTtBQUFBLGlCQURKO0FBS0k7QUFBQTtBQUFBLHNCQUFTLGdCQUFUO0FBQUE7QUFBQSxpQkFMSjtBQU1JO0FBQUE7QUFBQSxzQkFBUSxjQUFSLEVBQWlCLFdBQWpCLEVBQXVCLE9BQU0sS0FBN0I7QUFDSSwyRUFBTSxNQUFLLGFBQVgsR0FESjtBQUFBO0FBQUE7QUFOSixhQURKO0FBYUg7Ozs7OztrQkFuRGdCRixtQiIsImZpbGUiOiIwLmM4ZGUxNGRlNTBlYjg3NzE4ZGY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0J1dHRvbiwgRGl2aWRlciwgSWNvbiwgTGFiZWwsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NpYWxOZXR3b3Jrc0xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmdpdGh1YkF1dGggPSB0aGlzLmdpdGh1YkF1dGguYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGdpdGh1YkF1dGgoKSB7XG4gICAgICAgIGZldGNoKCcvYXV0aC9sb2dpbi9naXRodWInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLy8gLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAvLyAgICAgZWxzZSBpZihyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgZWxzZVxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdKU09OOiAnLCBqc29uKVxuICAgICAgICAgICAgLy8gICAgIC8vIEF1dGguYXV0aGVudGljYXRlKGpzb24udG9rZW4sIGpzb24udXNlcilcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnJlZGlyZWN0KClcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntlcnIgfHwgXCJFcnJvclwifTwvTGFiZWw+XG4gICAgICAgICAgICAvLyB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmbHVpZCBjb2xvcj0nYmxhY2snIG9uQ2xpY2s9e3RoaXMuZ2l0aHViQXV0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2dpdGh1YicvPlxuICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBHaXRIdWJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBob3Jpem9udGFsPk9yPC9EaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgZmx1aWQgY29sb3I9J3JlZCc+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2dvb2dsZSBwbHVzJy8+XG4gICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL1NvY2lhbE5ldHdvcmtzTG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9