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

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { color: 'red', pointing: 'above' });

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
                        { color: 'red' },
                        _react2.default.createElement(
                            'div',
                            null,
                            'Can\'t login'
                        )
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        _react2.default.createElement(
                            'div',
                            null,
                            res.statusText
                        )
                    )
                });
            }).then(function (json) {
                _Auth2.default.authenticate(json.token, json.user);
                _this2.redirect();
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        _react2.default.createElement(
                            'div',
                            null,
                            err
                        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJoaXN0b3J5IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwiYXV0aGVudGljYXRlIiwidG9rZW4iLCJ1c2VyIiwicmVkaXJlY3QiLCJjYXRjaCIsImVyciIsImlzRW1haWwiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwibWluTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxPQUFNLEtBQWIsRUFBbUIsVUFBUyxPQUE1QixHQUFuQjs7a0JBRWU7QUFBQTs7QUFFWCw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxFQURFO0FBRVRDLHNCQUFVLEVBRkQ7QUFHVEosd0JBQVk7QUFISCxTQUFiO0FBS0EsY0FBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLGNBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFSZTtBQVNsQjs7QUFYVTtBQUFBO0FBQUEsbUNBYUE7QUFDUCxpQkFBS0wsS0FBTCxDQUFXTyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixVQUF4QjtBQUNIO0FBZlU7QUFB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ImZpbGUiOiIwLmNiOGRjYzg5NjhhOThkOGVkMzgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybXN5LXNlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHtCdXR0b24sIExhYmVsfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgQXV0aCBmcm9tICcuLi8uLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBFbWFpbExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Byb2ZpbGUnKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9hdXRoL2xvZ2luJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+PGRpdj5DYW4ndCBsb2dpbjwvZGl2PjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz48ZGl2PntyZXMuc3RhdHVzVGV4dH08L2Rpdj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGguYXV0aGVudGljYXRlKGpzb24udG9rZW4sIGpzb24udXNlcilcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz48ZGl2PntlcnJ9PC9kaXY+PC9MYWJlbD5cbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxuXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL0VtYWlsTG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9