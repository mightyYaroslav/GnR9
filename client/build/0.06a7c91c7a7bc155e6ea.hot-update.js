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
                    "Origin": "http://localhost:3001"
                },
                redirect: 'error'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sIm5hbWVzIjpbIlNvY2lhbE5ldHdvcmtzTG9naW4iLCJwcm9wcyIsImdpdGh1YkF1dGgiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVkaXJlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsbUI7OztBQUVqQixpQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhJQUNUQSxLQURTOztBQUVmLGNBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFGZTtBQUdsQjs7OztxQ0FFWTtBQUNUQyxrQkFBTSxvQkFBTixFQUE0QjtBQUN4QkMsd0JBQVEsTUFEZ0I7QUFFeEJDLHlCQUFTO0FBQ0wsOEJBQVU7QUFETCxpQkFGZTtBQUt4QkMsMEJBQVU7QUFMYyxhQUE1QjtBQU9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFTLFlBQVQ7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBUixFQUFjLE9BQU0sT0FBcEIsRUFBNEIsU0FBUyxLQUFLTCxVQUExQztBQUNJLDJFQUFNLE1BQUssUUFBWCxHQURKO0FBQUE7QUFBQSxpQkFESjtBQUtJO0FBQUE7QUFBQSxzQkFBUyxnQkFBVDtBQUFBO0FBQUEsaUJBTEo7QUFNSTtBQUFBO0FBQUEsc0JBQVEsY0FBUixFQUFpQixXQUFqQixFQUF1QixPQUFNLEtBQTdCO0FBQ0ksMkVBQU0sTUFBSyxhQUFYLEdBREo7QUFBQTtBQUFBO0FBTkosYUFESjtBQWFIOzs7Ozs7a0JBbkRnQkYsbUIiLCJmaWxlIjoiMC4wNmE3YzkxYzdhN2JjMTU1ZTZlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERpdmlkZXIsIEljb24sIExhYmVsLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29jaWFsTmV0d29ya3NMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5naXRodWJBdXRoID0gdGhpcy5naXRodWJBdXRoLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBnaXRodWJBdXRoKCkge1xuICAgICAgICBmZXRjaCgnL2F1dGgvbG9naW4vZ2l0aHViJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJPcmlnaW5cIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZXJyb3InXG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIC8vICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0pTT046ICcsIGpzb24pXG4gICAgICAgICAgICAvLyAgICAgLy8gQXV0aC5hdXRoZW50aWNhdGUoanNvbi50b2tlbiwganNvbi51c2VyKVxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e2VyciB8fCBcIkVycm9yXCJ9PC9MYWJlbD5cbiAgICAgICAgICAgIC8vIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGZsdWlkIGNvbG9yPSdibGFjaycgb25DbGljaz17dGhpcy5naXRodWJBdXRofT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZ2l0aHViJy8+XG4gICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdpdEh1YlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhvcml6b250YWw+T3I8L0RpdmlkZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCBmbHVpZCBjb2xvcj0ncmVkJz5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nZ29vZ2xlIHBsdXMnLz5cbiAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggR29vZ2xlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvU29jaWFsTmV0d29ya3NMb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=