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
                        Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        Label,
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
                        Label,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luLmpzIl0sIm5hbWVzIjpbIlNvY2lhbE5ldHdvcmtzTG9naW4iLCJwcm9wcyIsImdpdGh1YkF1dGgiLCJiaW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzZXRTdGF0ZSIsImVycm9yTGFiZWwiLCJzdGF0dXNUZXh0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUFFakIsaUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBRmU7QUFHbEI7Ozs7cUNBRVk7QUFBQTs7QUFDVEMsa0JBQU0sb0JBQU4sRUFBNEI7QUFDeEJDLHdCQUFRLE1BRGdCO0FBRXhCQyx5QkFBUztBQUNMLG9DQUFnQjtBQURYO0FBRmUsYUFBNUIsRUFNS0MsSUFOTCxDQU1VLGVBQU87QUFDVCxvQkFBR0MsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FFSyxJQUFHRixJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFDRCxPQUFLRSxRQUFMLENBQWM7QUFDVkMsZ0NBQVk7QUFBQyw2QkFBRDtBQUFBLDBCQUFPLElBQUcsR0FBVixFQUFjLE9BQU0sS0FBcEI7QUFBQTtBQUFBO0FBREYsaUJBQWQsRUFEQyxLQUtELE9BQUtELFFBQUwsQ0FBYztBQUNWQyxnQ0FBWTtBQUFDLDZCQUFEO0FBQUEsMEJBQU8sSUFBRyxHQUFWLEVBQWUsT0FBTSxLQUFyQjtBQUE0QkosNEJBQUlLO0FBQWhDO0FBREYsaUJBQWQ7QUFHUCxhQWpCTCxFQWtCS04sSUFsQkwsQ0FrQlUsZ0JBQVE7QUFDVk8sd0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxJQUF0QjtBQUNBO0FBQ0E7QUFDSCxhQXRCTCxFQXVCS00sS0F2QkwsQ0F1Qlc7QUFBQSx1QkFBTyxPQUFLTCxRQUFMLENBQWM7QUFDeEJDLGdDQUFZO0FBQUMsNkJBQUQ7QUFBQSwwQkFBTyxJQUFHLEdBQVYsRUFBZSxPQUFNLEtBQXJCO0FBQTRCSywrQkFBTztBQUFuQztBQURZLGlCQUFkLENBQVA7QUFBQSxhQXZCWDtBQTBCSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFTLFlBQVQ7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBUixFQUFjLE9BQU0sT0FBcEIsRUFBNEIsU0FBUyxLQUFLZixVQUExQztBQUNJLDJFQUFNLE1BQUssUUFBWCxHQURKO0FBQUE7QUFBQSxpQkFESjtBQUtJO0FBQUE7QUFBQSxzQkFBUyxnQkFBVDtBQUFBO0FBQUEsaUJBTEo7QUFNSTtBQUFBO0FBQUEsc0JBQVEsY0FBUixFQUFpQixXQUFqQixFQUF1QixPQUFNLEtBQTdCO0FBQ0ksMkVBQU0sTUFBSyxhQUFYLEdBREo7QUFBQTtBQUFBO0FBTkosYUFESjtBQWFIOzs7Ozs7a0JBbERnQkYsbUIiLCJmaWxlIjoiMC5hNTRiM2VlMGIxYjUwODMwOWFmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b24sIERpdmlkZXIsIEljb24sIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NpYWxOZXR3b3Jrc0xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmdpdGh1YkF1dGggPSB0aGlzLmdpdGh1YkF1dGguYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGdpdGh1YkF1dGgoKSB7XG4gICAgICAgIGZldGNoKCcvYXV0aC9sb2dpbi9naXRodWInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdKU09OOiAnLCBqc29uKVxuICAgICAgICAgICAgICAgIC8vIEF1dGguYXV0aGVudGljYXRlKGpzb24udG9rZW4sIGpzb24udXNlcilcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZGlyZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntlcnIgfHwgXCJFcnJvclwifTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmbHVpZCBjb2xvcj0nYmxhY2snIG9uQ2xpY2s9e3RoaXMuZ2l0aHViQXV0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2dpdGh1YicvPlxuICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBHaXRIdWJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBob3Jpem9udGFsPk9yPC9EaXZpZGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgZmx1aWQgY29sb3I9J3JlZCc+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2dvb2dsZSBwbHVzJy8+XG4gICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL1NvY2lhbE5ldHdvcmtzTG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9