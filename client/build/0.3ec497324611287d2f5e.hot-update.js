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
            var _this2 = this;

            fetch('/auth/login/github', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    )
                });
            }).then(function (json) {
                console.log('JSON: ', json);
                // Auth.authenticate(json.token, json.user)
                // this.redirect()
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err || "Error"
                    )
                });
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sIm5hbWVzIjpbIlNvY2lhbE5ldHdvcmtzTG9naW4iLCJwcm9wcyIsImdpdGh1YkF1dGgiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzZXRTdGF0ZSIsImVycm9yTGFiZWwiLCJzdGF0dXNUZXh0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUFFakIsaUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBRmU7QUFHbEI7Ozs7cUNBRVk7QUFBQTs7QUFDVEMsa0JBQU0sb0JBQU4sRUFBNEI7QUFDeEJDLHdCQUFRLE1BRGdCO0FBRXhCQyx5QkFBUztBQUNMLG9DQUFnQjtBQURYO0FBRmUsYUFBNUIsRUFNS0MsSUFOTCxDQU1VLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FFSyxJQUFHRixJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDRCxPQUFLRSxRQUFMLENBQWM7QUFDVkMsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLElBQUcsR0FBVixFQUFjLE9BQU0sS0FBcEI7QUFBQTtBQUFBO0FBREYsaUJBQWQsRUFEQyxLQUtELE9BQUtELFFBQUwsQ0FBYztBQUNWQyxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sSUFBRyxHQUFWLEVBQWUsT0FBTSxLQUFyQjtBQUE0QkosNEJBQUlLO0FBQWhDO0FBREYsaUJBQWQ7QUFHUCxhQWpCTCxFQWtCS04sSUFsQkwsQ0FrQlUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxJQUF0QjtBQUNBO0FBQ0E7QUFDSCxhQXRCTCxFQXVCS00sS0F2QkwsQ0F1Qlc7QUFBQSx1QkFBTyxPQUFLTCxRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxJQUFHLEdBQVYsRUFBZSxPQUFNLEtBQXJCO0FBQTRCSywrQkFBTztBQUFuQztBQURZLGlCQUFkLENBQVA7QUFBQSxhQXZCWDtBQTBCSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFTLFlBQVQ7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBUixFQUFjLE9BQU0sT0FBcEIsRUFBNEIsU0FBUyxLQUFLZixVQUExQztBQUNJLDJFQUFNLE1BQUssUUFBWCxHQURKO0FBQUE7QUFBQSxpQkFESjtBQUtJO0FBQUE7QUFBQSxzQkFBUyxnQkFBVDtBQUFBO0FBQUEsaUJBTEo7QUFNSTtBQUFBO0FBQUEsc0JBQVEsY0FBUixFQUFpQixXQUFqQixFQUF1QixPQUFNLEtBQTdCO0FBQ0ksMkVBQU0sTUFBSyxhQUFYLEdBREo7QUFBQTtBQUFBO0FBTkosYUFESjtBQWFIOzs7Ozs7a0JBbERnQkYsbUIiLCJmaWxlIjoiMC4zZWM0OTczMjQ2MTEyODdkMmY1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERpdmlkZXIsIEljb24sIExhYmVsLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29jaWFsTmV0d29ya3NMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5naXRodWJBdXRoID0gdGhpcy5naXRodWJBdXRoLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBnaXRodWJBdXRoKCkge1xuICAgICAgICBmZXRjaCgnL2F1dGgvbG9naW4vZ2l0aHViJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSlNPTjogJywganNvbilcbiAgICAgICAgICAgICAgICAvLyBBdXRoLmF1dGhlbnRpY2F0ZShqc29uLnRva2VuLCBqc29uLnVzZXIpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWRpcmVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57ZXJyIHx8IFwiRXJyb3JcIn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZmx1aWQgY29sb3I9J2JsYWNrJyBvbkNsaWNrPXt0aGlzLmdpdGh1YkF1dGh9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdnaXRodWInLz5cbiAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggR2l0SHViXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgaG9yaXpvbnRhbD5PcjwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIGZsdWlkIGNvbG9yPSdyZWQnPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdnb29nbGUgcGx1cycvPlxuICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBHb29nbGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==