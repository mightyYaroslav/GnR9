webpackHotUpdate(0,{

/***/ 882:
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

var _reactRouterDom = __webpack_require__(86);

var _Auth = __webpack_require__(100);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { as: 'label', color: 'red', pointing: 'above' });

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(EmailLoginForm, _Component);

    function EmailLoginForm(props) {
        _classCallCheck(this, EmailLoginForm);

        var _this = _possibleConstructorReturn(this, (EmailLoginForm.__proto__ || Object.getPrototypeOf(EmailLoginForm)).call(this, props));

        _this.state = {
            email: '',
            password: '',
            errorLabel: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(EmailLoginForm, [{
        key: 'redirect',
        value: function redirect() {
            this.props.history.push('/profile');
        }
    }, {
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

            fetch('/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
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
                _Auth2.default.authenticate(json.token, json.user);
                _this2.redirect();
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err
                    )
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _formsySemanticUiReact.Form,
                { onValidSubmit: this.handleSubmit },
                this.state.errorLabel,
                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                    placeholder: 'Email',
                    name: 'email',
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
                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                    placeholder: 'Password',
                    name: 'password',
                    value: this.state.password,
                    onChange: this.handleChange,
                    type: 'password',
                    instantValidation: true,
                    required: true,
                    validations: {
                        minLength: 5,
                        maxLength: 20
                    },
                    validationErrors: {
                        minLength: 'Password should not contain less than 5 characters',
                        maxLength: 'Password should not contain more than 20 characters',
                        isDefaultRequiredValue: 'Password is required'
                    },
                    errorLabel: errorLabel
                }),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { primary: true, fluid: true, type: 'submit' },
                    'Log In'
                )
            );
        }
    }]);

    return EmailLoginForm;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJoaXN0b3J5IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwiYXV0aGVudGljYXRlIiwidG9rZW4iLCJ1c2VyIiwicmVkaXJlY3QiLCJjYXRjaCIsImVyciIsImlzRW1haWwiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwibWluTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxJQUFHLE9BQVYsRUFBa0IsT0FBTSxLQUF4QixFQUE4QixVQUFTLE9BQXZDLEdBQW5COztrQkFFZTtBQUFBOztBQUVYLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLEVBREU7QUFFVEMsc0JBQVUsRUFGRDtBQUdUSix3QkFBWTtBQUhILFNBQWI7QUFLQSxjQUFLSyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVJlO0FBU2xCOztBQVhVO0FBQUE7QUFBQSxtQ0FhQTtBQUNQLGlCQUFLTCxLQUFMLENBQVdPLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFVB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QiIsImZpbGUiOiIwLmE3ZDk4N2YzZTY3NDNmMmJjNjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybXN5LXNlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHtCdXR0b24sIExhYmVsfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgQXV0aCBmcm9tICcuLi8uLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgYXM9J2xhYmVsJyBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIEVtYWlsTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVkaXJlY3QoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcHJvZmlsZScpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBmZXRjaCgnL2F1dGgvbG9naW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBBdXRoLmF1dGhlbnRpY2F0ZShqc29uLnRva2VuLCBqc29uLnVzZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBvblZhbGlkU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ0VtYWlsIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1Bhc3N3b3JkIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1Bhc3N3b3JkIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKVxuICAgIH1cblxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==