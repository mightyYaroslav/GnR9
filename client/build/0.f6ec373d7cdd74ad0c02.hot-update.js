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
                        err || "Error"
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

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { as: 'label', color: 'red', pointing: 'above' });

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
                        err || "Error"
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

/***/ }),

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

var _reactDropzone = __webpack_require__(901);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(74);

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
            errorLabel: '',
            dropzoneRef: null,
            image: _Auth2.default.getUser().image
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

            var formData = new FormData();
            var _arr = ['email', 'name', 'image'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var field = _arr[_i];
                formData.append(field, this.state[field]);
            }fetch('/profile', {
                method: 'PUT',
                headers: {
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: formData
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
                _Auth2.default.updateUser(json.user);
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
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Segment,
                    { padded: true },
                    _react2.default.createElement(
                        _formsySemanticUiReact.Form,
                        { onValidSubmit: this.handleSubmit },
                        this.state.errorLabel,
                        _react2.default.createElement(
                            _semanticUiReact.Grid,
                            null,
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { width: 4 },
                                _react2.default.createElement(
                                    _reactDropzone2.default,
                                    { onDrop: function onDrop(accepted, rejected) {
                                            _this3.setState({
                                                image: accepted[0]
                                            });
                                            // const reader = new FileReader()
                                            // reader.onload = () => {
                                            //     const binaryFile = reader.result
                                            //     console.log('Binary', binaryFile)
                                            //     this.setState({
                                            //         image: new Buffer(binaryFile).toString('base64')
                                            //     })
                                            // }
                                            // console.log(accepted[0])
                                            // reader.readAsBinaryString(accepted[0])
                                        } },
                                    _react2.default.createElement(
                                        _semanticUiReact.Label,
                                        { as: 'a', color: 'teal', ribbon: true },
                                        'Drop new avatar'
                                    ),
                                    _react2.default.createElement(_semanticUiReact.Image, {
                                        src: this.state.image,
                                        circular: true })
                                )
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { stretched: true, width: 12 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJoaXN0b3J5IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwiYXV0aGVudGljYXRlIiwidG9rZW4iLCJ1c2VyIiwicmVkaXJlY3QiLCJjYXRjaCIsImVyciIsImlzRW1haWwiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwibWluTGVuZ3RoIiwidXNlcm5hbWUiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIlByb2ZpbGUiLCJnZXRVc2VyIiwiZHJvcHpvbmVSZWYiLCJpbWFnZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWVsZCIsImFwcGVuZCIsImdldFRva2VuIiwidXBkYXRlVXNlciIsImFjY2VwdGVkIiwicmVqZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLHdEQUFPLElBQUcsT0FBVixFQUFrQixPQUFNLEtBQXhCLEVBQThCLFVBQVMsT0FBdkMsR0FBbkI7O2tCQUVlO0FBQUE7O0FBRVgsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdB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LDJDQUFNLE9BRlY7QUFHSSwyQ0FBTyxLQUFLRSxLQUFMLENBQVdDLEtBSHRCO0FBSUksOENBQVUsS0FBS0UsWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVDJCLGlEQUFTLElBREE7QUFFVEMsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEQsaURBQVMsdUJBREs7QUFFZEMsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZbEM7QUFoQmhCLGtDQW5CSjtBQXFDSTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQXJDSjtBQXZCSjtBQUZKO0FBREo7QUFGSixhQURKO0FBeUVIOzs7Ozs7a0JBaklnQnVDLE8iLCJmaWxlIjoiMC5mNmVjMzczZDdjZGQ3NGFkMGMwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vLi4vbW9kdWxlcy9BdXRoJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGFzPSdsYWJlbCcgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjbGFzcyBFbWFpbExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Byb2ZpbGUnKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9hdXRoL2xvZ2luJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC5hdXRoZW50aWNhdGUoanNvbi50b2tlbiwganNvbi51c2VyKVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e2VyciB8fCBcIkVycm9yXCJ9PC9MYWJlbD5cbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxuXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL0VtYWlsTG9naW4uanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtCdXR0b24sIEdyaWQsIExhYmVsLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBTb2NpYWxOZXR3b3Jrc0xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvU29jaWFsTmV0d29ya3NMb2dpbidcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBhcz0nbGFiZWwnIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJylcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGZldGNoKCcvYXV0aC9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPkEgdXNlciB3aXRoIHN1Y2ggZW1haWwgYWxyZWFkeSBleGlzdHMhPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57ZXJyIHx8IFwiRXJyb3JcIn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8R3JpZCB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTmV0d29ya3NMb2dpbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1Bhc3N3b3JkIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQYXNzd29yZCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWdpc3RyYXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogQXV0aC5nZXRVc2VyKCkuaW1hZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgWydlbWFpbCcsICduYW1lJywgJ2ltYWdlJ10pXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGQsIHRoaXMuc3RhdGVbZmllbGRdKVxuXG4gICAgICAgIGZldGNoKCcvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcihqc29uLnVzZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntlcnIgfHwgXCJFcnJvclwifTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSBvbkRyb3A9eyhhY2NlcHRlZCwgcmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBhY2NlcHRlZFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgYmluYXJ5RmlsZSA9IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnQmluYXJ5JywgYmluYXJ5RmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaW1hZ2U6IG5ldyBCdWZmZXIoYmluYXJ5RmlsZSkudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY2VwdGVkWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhhY2NlcHRlZFswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgYXM9J2EnIGNvbG9yPSd0ZWFsJyByaWJib24+RHJvcCBuZXcgYXZhdGFyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdFbWFpbCBzaG91bGQgYmUgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ0VtYWlsIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvZmlsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=