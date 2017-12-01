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
                    "Content-Type": "application/json"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sIm5hbWVzIjpbIlNvY2lhbE5ldHdvcmtzTG9naW4iLCJwcm9wcyIsImdpdGh1YkF1dGgiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUFFakIsaUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBRmU7QUFHbEI7Ozs7cUNBRVk7QUFDVEMsa0JBQU0sb0JBQU4sRUFBNEI7QUFDeEJDLHdCQUFRLE1BRGdCO0FBRXhCQyx5QkFBUztBQUNMLG9DQUFnQjtBQURYO0FBRmUsYUFBNUI7QUFNSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBUyxZQUFUO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFdBQVIsRUFBYyxPQUFNLE9BQXBCLEVBQTRCLFNBQVMsS0FBS0osVUFBMUM7QUFDSSwyRUFBTSxNQUFLLFFBQVgsR0FESjtBQUFBO0FBQUEsaUJBREo7QUFLSTtBQUFBO0FBQUEsc0JBQVMsZ0JBQVQ7QUFBQTtBQUFBLGlCQUxKO0FBTUk7QUFBQTtBQUFBLHNCQUFRLGNBQVIsRUFBaUIsV0FBakIsRUFBdUIsT0FBTSxLQUE3QjtBQUNJLDJFQUFNLE1BQUssYUFBWCxHQURKO0FBQUE7QUFBQTtBQU5KLGFBREo7QUFhSDs7Ozs7O2tCQWxEZ0JGLG1CIiwiZmlsZSI6IjAuMDNhMTZkNzVkNjc5MDQ1MzcwYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBEaXZpZGVyLCBJY29uLCBMYWJlbCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2lhbE5ldHdvcmtzTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuZ2l0aHViQXV0aCA9IHRoaXMuZ2l0aHViQXV0aC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgZ2l0aHViQXV0aCgpIHtcbiAgICAgICAgZmV0Y2goJy9hdXRoL2xvZ2luL2dpdGh1YicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0pTT046ICcsIGpzb24pXG4gICAgICAgICAgICAvLyAgICAgLy8gQXV0aC5hdXRoZW50aWNhdGUoanNvbi50b2tlbiwganNvbi51c2VyKVxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e2VyciB8fCBcIkVycm9yXCJ9PC9MYWJlbD5cbiAgICAgICAgICAgIC8vIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGZsdWlkIGNvbG9yPSdibGFjaycgb25DbGljaz17dGhpcy5naXRodWJBdXRofT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZ2l0aHViJy8+XG4gICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdpdEh1YlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhvcml6b250YWw+T3I8L0RpdmlkZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCBmbHVpZCBjb2xvcj0ncmVkJz5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZ29vZ2xlIHBsdXMnLz5cbiAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggR29vZ2xlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvU29jaWFsTmV0d29ya3NMb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=