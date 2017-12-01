webpackHotUpdate(0,{

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formsySemanticUiReact = __webpack_require__(256);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(73);

var _navbar2 = _interopRequireDefault(_navbar);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _Auth = __webpack_require__(100);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { color: 'red', pointing: 'above' });

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

        _this.state = {
            email: _Auth2.default.getUser().email,
            name: _Auth2.default.getUser().name,
            errorLabel: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Profile, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var _setState;

            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            this.setState((_setState = {}, _defineProperty(_setState, name, value), _defineProperty(_setState, 'errorLabel', ''), _setState));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            fetch('/profile', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    email: this.state.email,
                    name: this.state.name
                })
            }).then(function (res) {
                if (res.status === 200) return res.json();else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        'Can\'t login'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    )
                });
            }).then(function (json) {
                _Auth2.default.updateUser(json.user);
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
                    )
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Segment,
                    { padded: true },
                    _react2.default.createElement(
                        _semanticUiReact.Grid,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { width: 4 },
                            _react2.default.createElement(
                                _semanticUiReact.Label,
                                { as: 'a', color: 'teal', ribbon: true },
                                'Avatar'
                            ),
                            _react2.default.createElement(_semanticUiReact.Image, { src: _logo2.default, circular: true })
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { stretched: true, width: 12 },
                            _react2.default.createElement(
                                _formsySemanticUiReact.Form,
                                { onValidSubmit: this.handleSubmit },
                                this.state.errorLabel,
                                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                                    name: 'name',
                                    label: 'Username',
                                    value: this.state.name,
                                    onChange: this.handleChange,
                                    instantValidation: true,
                                    required: true,
                                    validations: {
                                        minLength: 5,
                                        maxLength: 20
                                    },
                                    validationErrors: {
                                        minLength: 'Username should not contain less than 5 characters',
                                        maxLength: 'Username should not contain more than 20 characters',
                                        isDefaultRequiredValue: 'Username is required'
                                    },
                                    errorLabel: errorLabel
                                }),
                                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                                    name: 'email',
                                    label: 'Email',
                                    value: this.state.email,
                                    onChange: this.handleChange,
                                    instantValidation: true,
                                    required: true,
                                    validations: {
                                        isEmail: true,
                                        maxLength: 50
                                    },
                                    validationErrors: {
                                        isEmail: 'Email should be valid',
                                        maxLength: 'Email should not contain more than 50 characters',
                                        isDefaultRequiredValue: 'Email is required'
                                    },
                                    errorLabel: errorLabel
                                }),
                                _react2.default.createElement(
                                    _semanticUiReact.Button,
                                    { primary: true, fluid: true, type: 'submit' },
                                    'Save'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = Profile;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwidXBkYXRlVXNlciIsInVzZXIiLCJjYXRjaCIsImVyciIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImlzRGVmYXVsdFJlcXVpcmVkVmFsdWUiLCJpc0VtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsd0RBQU8sT0FBTSxLQUFiLEVBQW1CLFVBQVMsT0FBNUIsR0FBbkI7O0lBRXFCQyxPOzs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sZUFBS0MsT0FBTCxHQUFlRCxLQURiO0FBRVRFLGtCQUFNLGVBQUtELE9BQUwsR0FBZUMsSUFGWjtBQUdUTix3QkFBWTtBQUhILFNBQWI7QUFLQSxjQUFLTyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVJlO0FBU2xCOzs7O3FDQUVZRSxDLEVBQUc7QUFBQTs7QUFBQSw0QkFDWUEsRUFBRUMsTUFEZDtBQUFBLGdCQUNKTCxJQURJLGFBQ0pBLElB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LFdBQWhCLEVBQXNCLE1BQUssUUFBM0I7QUFBQTtBQUFBO0FBdENKO0FBREo7QUFMSjtBQURKO0FBRkosYUFESjtBQXVESDs7Ozs7O2tCQTdHZ0JDLE8iLCJmaWxlIjoiMC5iNWI4YWZkOTUwY2I5YzdkOWNjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogQXV0aC5nZXRVc2VyKCkuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBBdXRoLmdldFVzZXIoKS5uYW1lLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBmZXRjaCgnL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcihqc29uLnVzZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgYXM9J2EnIGNvbG9yPSd0ZWFsJyByaWJib24+QXZhdGFyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBjaXJjdWxhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdVc2VybmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==