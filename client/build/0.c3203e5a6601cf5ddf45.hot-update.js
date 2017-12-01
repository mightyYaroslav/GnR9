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

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { as: 'a', color: 'red', pointing: 'above' });

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

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _navbar = __webpack_require__(74);

var _navbar2 = _interopRequireDefault(_navbar);

var _formsySemanticUiReact = __webpack_require__(256);

var _reactRouterDom = __webpack_require__(86);

var _semanticUiReact = __webpack_require__(18);

var _SocialNetworksLogin = __webpack_require__(478);

var _SocialNetworksLogin2 = _interopRequireDefault(_SocialNetworksLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { as: 'a', color: 'red', pointing: 'above' });

exports.default = (0, _reactRouterDom.withRouter)(function (_Component) {
    _inherits(RegistrationForm, _Component);

    function RegistrationForm(props) {
        _classCallCheck(this, RegistrationForm);

        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

        _this.state = {
            username: '',
            email: '',
            password: '',
            errorLabel: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(RegistrationForm, [{
        key: 'redirect',
        value: function redirect() {
            this.props.history.push('/login');
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

            fetch('/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(function (res) {
                if (res.status === 200) _this2.redirect();else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'A user with such email already exists!'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    )
                });
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
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Grid,
                    { textAlign: 'center',
                        style: { height: '100%' },
                        verticalAlign: 'middle' },
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { style: { maxWidth: 450 } },
                        _react2.default.createElement(
                            _semanticUiReact.Segment,
                            { stacked: true },
                            _react2.default.createElement(_SocialNetworksLogin2.default, null),
                            _react2.default.createElement(
                                _formsySemanticUiReact.Form,
                                { onValidSubmit: this.handleSubmit },
                                this.state.errorLabel,
                                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                                    placeholder: 'Username',
                                    name: 'username',
                                    value: this.state.username,
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
                                    placeholder: 'Email',
                                    labelPosition: 'left',
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
                                    'Sign Up'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RegistrationForm;
}(_react.Component));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJlcnJvckxhYmVsIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsImF1dGhlbnRpY2F0ZSIsInRva2VuIiwidXNlciIsInJlZGlyZWN0IiwiY2F0Y2giLCJlcnIiLCJpc0VtYWlsIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsIm1pbkxlbmd0aCIsInVzZXJuYW1lIiwiaGVpZ2h0IiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLHdEQUFPLElBQUcsR0FBVixFQUFjLE9BQU0sS0FBcEIsRUFBMEIsVUFBUyxPQUFuQyxHQUFuQjs7a0JBRWU7QUFBQTs7QUFFWCw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxFQURFO0FBRVRDLHNCQUFVLEVBRkQ7QUFHVEosd0JBQVk7QUFISCxTQUFiO0FBS0EsY0FBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLGNBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFSZTtBQVNsQjs7QUFYVTtBQUFBO0FBQUEsbUNBYUE7QUFDUCxpQkFBS0wsS0FBTCxDQUFXTyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixVQUF4QjtBQUNIO0FBZlU7QUFBQTtBQUFBLHFDQWlCRUMsQ0FqQkYsRUFpQks7QUFBQTs7QUFBQSw0QkFDWUEsRUFBRUMsTUFEZDtBQUFBLGdCQUNKQyxJQURJLGFBQ0pBLElBREk7QUFBQSxnQkFDRUMsS0FERixhQUNFQSxLQURGOztBQUVaLGlCQUFLQyxRQUFMLDZDQUNLRixJQURMLEVBQ1lDLEtBRFosNENBRWdCLEVBRmhCO0FBSUg7QUF2QlU7QUFBQTtBQUFBLHFDQXlCRUgsQ0F6QkYsRUF5Qks7QUFBQTs7QUFDWkssa0JBQU0sYUFBTixFQUFxQjtBQUNqQkMsd0JBQVEsTUFEUztBQUVqQkMseUJBQVM7QUFDTCxvQ0FBZ0I7QUFEWCxpQkFGUTtBQUtqQkMsc0JBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNqQmpCLDJCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FERDtBQUVqQkMsOEJBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUZKLGlCQUFmO0FBTFcsYUFBckIsRUFVS2lCLElBVkwsQ0FVVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQU9ELElBQUlFLElBQUosRUFBUCxDQURKLEtBRUssSUFBR0YsSUFBSUMsTUFBSixLQUFlLEdBQWxCLEVBQ0QsT0FBS1QsUUFBTCxDQUFjO0FBQ1ZkLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxJQUFHLEdBQVYsRUFBYyxPQUFNLEtBQXBCO0FBQUE7QUFBQTtBQURGLGlCQUFkLEVBREMsS0FLRCxPQUFLYyxRQUFMLENBQWM7QUFDVmQsZ0NBQVk7QUFBQTtBQUFBLDBCQUFPLElBQUcsR0FBVixFQUFlLE9BQU0sS0FBckI7QUFBNEJzQiw0QkFBSUc7QUFBaEM7QUFERixpQkFBZDtBQUdQLGFBckJMLEVBc0JLSixJQXRCTCxDQXNCVSxnQkFBUTtBQUNWLCtCQUFLSyxZQUFMLENBQWtCRixLQUFLRyxLQUF2QixFQUE4QkgsS0FBS0ksSUFBbkM7QUFDQSx1QkFBS0MsUUFBTDtBQUNILGFBekJMLEVBMEJLQyxLQTFCTCxDQTBCVztBQUFBLHVCQUFPLE9BQUtoQixRQUFMLENBQWM7QUFDeEJkLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxJQUFHLEdBQVYsRUFBZSxPQUFNLEtBQXJCO0FBQTRCK0I7QUFBNUI7QUFEWSxpQkFBZCxDQUFQO0FBQUEsYUExQlg7QUE2Qkg7QUF2RFU7QUFBQTtBQUFBLGlDQXlERjtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxlQUFlLEtBQUt4QixZQUExQjtBQUNLLHFCQUFLTCxLQUFMLENBQVdGLFVBRGhCO0FBRUksMEVBQU0sS0FBTjtBQUNJLGlDQUFZLE9BRGhCO0FBRUksMEJBQUssT0FGVDtBQUdJLDJCQUFPLEtBQUtFLEtBQUwsQ0FBV0MsS0FIdEI7QUFJSSw4QkFBVSxLQUFLRSxZQUpuQjtBQUtJLDJDQUxKO0FBTUksa0NBTko7QUFPSSxpQ0FBYTtBQUNUMkIsaUNBQVMsSUFEQTtBQUVUQyxtQ0FBVztBQUZGLHFCQVBqQjtBQVdJLHNDQUFrQjtBQUNkRCxpQ0FBUyx1QkFESztBQUVkQyxtQ0FBVyxrREFGRztBQUdkQyxnREFBd0I7QUFIVixxQkFYdEI7QUFnQkksZ0NBQVlsQztBQWhCaEIsa0JBRko7QUFvQkksMEVBQU0sS0FBTjtBQUNJLGlDQUFZLFVBRGhCO0FBRUksMEJBQUssVUFGVDtBQUdJLDJCQUFPLEtBQUtFLEtBQUwsQ0FBV0UsUUFIdEI7QUFJSSw4QkFBVSxLQUFLQyxZQUpuQjtBQUtJLDBCQUFLLFVBTFQ7QUFNSSwyQ0FOSjtBQU9JLGtDQVBKO0FBUUksaUNBQWE7QUFDVDhCLG1DQUFXLENBREY7QUFFVEYsbUNBQVc7QUFGRixxQkFSakI7QUFZSSxzQ0FBa0I7QUFDZEUsbUNBQVcsb0RBREc7QUFFZEYsbUNBQVcscURBRkc7QUFHZEMsZ0RBQXdCO0FBSFYscUJBWnRCO0FBaUJJLGdDQUFZbEM7QUFqQmhCLGtCQXBCSjtBQXVDSTtBQUFBO0FBQUEsc0JBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQXZDSixhQURKO0FBMkNIO0FBckdVOztBQUFBO0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxJQUFHLEdBQVYsRUFBYyxPQUFNLEtBQXBCLEVBQTBCLFVBQVMsT0FBbkMsR0FBbkI7O2tCQUVlO0FBQUE7O0FBRVgsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVGtDLHNCQUFVLEVBREQ7QUFFVGpDLG1CQUFPLEVBRkU7QUFHVEMsc0JBQVUsRUFIRDtBQUlUSix3QkFBWTtBQUpILFNBQWI7QUFNQSxjQUFLSyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRlO0FBVWxCOztBQVpVO0FBQUE7QUFBQSxtQ0FjQTtBQUNQLGlCQUFLTCxLQUFMLENBQVdPLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCO0FBQ0g7QUFoQlU7QUFBQTtBQUFBLHFDQWtCRUMsQ0FsQkYsRUFrQks7QUFBQTs7QUFBQSw0QkFDWUEsRUFBRUMsTUFEZDtBQUFBLGdCQUNKQyxJQURJLGFBQ0pBLElBREk7QUFBQSxnQkFDRUMsS0FERixhQUNFQSxLQURGOztBQUVaLGlCQUFLQyxRQUFMLDZDQUNLRixJQURMLEVBQ1lDLEtBRFosNENBRWdCLEVBRmhCO0FBSUg7QUF4QlU7QUFBQTtBQUFBLHFDQTBCRUgsQ0ExQkYsRUEwQks7QUFBQTs7QUFDWkssa0JBQU0sZ0JBQU4sRUFBd0I7QUFDcEJDLHdCQUFRLE1BRFk7QUFFcEJDLHlCQUFTO0FBQ0wsb0NBQWdCO0FBRFgsaUJBRlc7QUFLcEJDLHNCQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDakJnQiw4QkFBVSxLQUFLbEMsS0FBTCxDQUFXa0MsUUFESjtBQUVqQmpDLDJCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FGRDtBQUdqQkMsOEJBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUhKLGlCQUFmO0FBTGMsYUFBeEIsRUFXS2lCLElBWEwsQ0FXVSxlQUFPO0FBQ1Qsb0JBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNJLE9BQUtNLFFBQUwsR0FESixLQUVLLElBQUdQLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUNELE9BQUtULFFBQUwsQ0FBYztBQUNWZCxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sSUFBRyxHQUFWLEVBQWUsT0FBTSxLQUFyQjtBQUFBO0FBQUE7QUFERixpQkFBZCxFQURDLEtBS0QsT0FBS2MsUUFBTCxDQUFjO0FBQ1ZkLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxJQUFHLEdBQVYsRUFBZSxPQUFNLEtBQXJCO0FBQTRCc0IsNEJBQUlHO0FBQWhDO0FBREYsaUJBQWQ7QUFHUCxhQXRCTCxFQXVCS0ssS0F2QkwsQ0F1Qlc7QUFBQSx1QkFBTyxPQUFLaEIsUUFBTCxDQUFjO0FBQ3hCZCxnQ0FBWTtBQUFBO0FBQUEsMEJBQU8sSUFBRyxHQUFWLEVBQWUsT0FBTSxLQUFyQjtBQUE0QitCO0FBQTVCO0FBRFksaUJBQWQsQ0FBUDtBQUFBLGFBdkJYO0FBMEJIO0FBckRVO0FBQUE7QUFBQSxpQ0F1REY7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSxxRUFESjtBQUVJO0FBQUE7QUFBQSxzQkFBTSxXQUFVLFFBQWhCO0FBQ00sK0JBQU8sRUFBRU0sUUFBUSxNQUFWLEVBRGI7QUFFTSx1Q0FBYyxRQUZwQjtBQUdJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLE9BQU8sRUFBRUMsVUFBVSxHQUFaLEVBQXBCO0FBQ0k7QUFBQTtBQUFBLDhCQUFTLGFBQVQ7QUFDSSw4RkFESjtBQUVJO0FBQUE7QUFBQSxrQ0FBTSxlQUFlLEtBQUsvQixZQUExQjtBQUNLLHFDQUFLTCxLQUFMLENBQVdGLFVBRGhCO0FBRUksMEZBQU0sS0FBTjtBQUNJLGlEQUFZLFVBRGhCO0FBRUksMENBQUssVUFGVDtBQUdJLDJDQUFPLEtBQUtFLEtBQUwsQ0FBV2tDLFFBSHRCO0FBSUksOENBQVUsS0FBSy9CLFlBSm5CO0FBS0ksMkRBTEo7QUFNSSxrREFOSjtBQU9JLGlEQUFhO0FBQ1Q4QixtREFBVyxDQURGO0FBRVRGLG1EQUFXO0FBRkYscUNBUGpCO0FBV0ksc0RBQWtCO0FBQ2RFLG1EQUFXLG9EQURHO0FBRWRGLG1EQUFXLHFEQUZHO0FBR2RDLGdFQUF3QjtBQUhWLHFDQVh0QjtBQWdCSSxnREFBWWxDO0FBaEJoQixrQ0FGSjtBQW9CSSwwRkFBTSxLQUFOO0FBQ0ksaURBQVksT0FEaEI7QUFFSSxtREFBYyxNQUZsQjtBQUdJLDBDQUFLLE9BSFQ7QUFJSSwyQ0FBTyxLQUFLRSxLQUFMLENBQVdDLEtBSnRCO0FBS0ksOENBQVUsS0FBS0UsWUFMbkI7QUFNSSwyREFOSjtBQU9JLGtEQVBKO0FBUUksaURBQWE7QUFDVDJCLGlEQUFTLElBREE7QUFFVEMsbURBQVc7QUFGRixxQ0FSakI7QUFZSSxzREFBa0I7QUFDZEQsaURBQVMsdUJBREs7QUFFZEMsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWnRCO0FBaUJJLGdEQUFZbEM7QUFqQmhCLGtDQXBCSjtBQXVDSSwwRkFBTSxLQUFOO0FBQ0ksaURBQVksVUFEaEI7QUFFSSwwQ0FBSyxVQUZUO0FBR0ksMkNBQU8sS0FBS0UsS0FBTCxDQUFXRSxRQUh0QjtBQUlJLDhDQUFVLEtBQUtDLFlBSm5CO0FBS0ksMENBQUssVUFMVDtBQU1JLDJEQU5KO0FBT0ksa0RBUEo7QUFRSSxpREFBYTtBQUNUOEIsbURBQVcsQ0FERjtBQUVURixtREFBVztBQUZGLHFDQVJqQjtBQVlJLHNEQUFrQjtBQUNkRSxtREFBVyxvREFERztBQUVkRixtREFBVyxxREFGRztBQUdkQyxnRUFBd0I7QUFIVixxQ0FadEI7QUFpQkksZ0RBQVlsQztBQWpCaEIsa0NBdkNKO0FBMERJO0FBQUE7QUFBQSxzQ0FBUSxhQUFSLEVBQWdCLFdBQWhCLEVBQXNCLE1BQUssUUFBM0I7QUFBQTtBQUFBO0FBMURKO0FBRko7QUFESjtBQUhKO0FBRkosYUFESjtBQTBFSDtBQWxJVTs7QUFBQTtBQUFBLG9CIiwiZmlsZSI6IjAuYzMyMDNlNWE2NjAxY2Y1ZGRmNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQge0J1dHRvbiwgTGFiZWx9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20ncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBBdXRoIGZyb20gJy4uLy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBhcz0nYScgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBFbWFpbExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Byb2ZpbGUnKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9hdXRoL2xvZ2luJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC5hdXRoZW50aWNhdGUoanNvbi50b2tlbiwganNvbi51c2VyKVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdFbWFpbCBzaG91bGQgYmUgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdQYXNzd29yZCBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQYXNzd29yZCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+TG9nIEluPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIClcbiAgICB9XG5cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvRW1haWxMb2dpbi5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgTGFiZWwsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFNvY2lhbE5ldHdvcmtzTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9mb3Jtcy9Tb2NpYWxOZXR3b3Jrc0xvZ2luJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGFzPSdhJyBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNsYXNzIFJlZ2lzdHJhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZWRpcmVjdCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBmZXRjaCgnL2F1dGgvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KClcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz5BIHVzZXIgd2l0aCBzdWNoIGVtYWlsIGFscmVhZHkgZXhpc3RzITwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8R3JpZCB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTmV0d29ya3NMb2dpbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1Bhc3N3b3JkIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQYXNzd29yZCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWdpc3RyYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9