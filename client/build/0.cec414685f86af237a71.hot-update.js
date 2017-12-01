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
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected jsxTagEnd (61:68)\n\n\u001b[0m \u001b[90m 59 | \u001b[39m            })\n \u001b[90m 60 | \u001b[39m            \u001b[33m.\u001b[39m\u001b[36mcatch\u001b[39m(err \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 61 | \u001b[39m                errorLabel\u001b[33m:\u001b[39m \u001b[33m<\u001b[39m\u001b[33mLabel\u001b[39m as\u001b[33m=\u001b[39m\u001b[32m'a'\u001b[39m  color\u001b[33m=\u001b[39m\u001b[32m'red'\u001b[39m\u001b[33m>\u001b[39m{err}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mLabel\u001b[39m as\u001b[33m=\u001b[39m\u001b[32m'a'\u001b[39m \u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                                                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 62 | \u001b[39m            }))\n \u001b[90m 63 | \u001b[39m    }\n \u001b[90m 64 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

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
            image: 'data:image;base64,' + new Buffer(_Auth2.default.getUser().image).toString('base64')
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
                    name: this.state.name,
                    image: this.state.image
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
                _Auth2.default.updateUser(json.user);
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
                        _react2.default.createElement(
                            _semanticUiReact.Grid,
                            null,
                            this.state.errorLabel,
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { width: 4 },
                                _react2.default.createElement(
                                    _reactDropzone2.default,
                                    { ref: function ref(node) {
                                            _this3.state.dropzoneRef = node;
                                        }, onDrop: function onDrop(accepted, rejected) {
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                                var binaryFile = reader.result;
                                                console.log('Binary', binaryFile);
                                                _this3.setState({
                                                    image: 'data:image;base64,' + new Buffer(binaryFile).toString('base64')
                                                });
                                            };
                                            reader.readAsBinaryString(accepted[0]);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(897).Buffer))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9FbWFpbExvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiZXJyb3JMYWJlbCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImhpc3RvcnkiLCJwdXNoIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInN0YXR1c1RleHQiLCJhdXRoZW50aWNhdGUiLCJ0b2tlbiIsInVzZXIiLCJyZWRpcmVjdCIsImNhdGNoIiwiZXJyIiwiaXNFbWFpbCIsIm1heExlbmd0aCIsImlzRGVmYXVsdFJlcXVpcmVkVmFsdWUiLCJtaW5MZW5ndGgiLCJQcm9maWxlIiwiZ2V0VXNlciIsImRyb3B6b25lUmVmIiwiaW1hZ2UiLCJCdWZmZXIiLCJ0b1N0cmluZyIsImdldFRva2VuIiwidXBkYXRlVXNlciIsIm5vZGUiLCJhY2NlcHRlZCIsInJlamVjdGVkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImJpbmFyeUZpbGUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVhZEFzQmluYXJ5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxPQUFNLEtBQWIsRUFBbUIsVUFBUyxPQUE1QixHQUFuQjs7a0JBRWU7QUFBQTs7QUFFWCw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxF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LFlBSm5CO0FBS0ksMkRBTEo7QUFNSSxrREFOSjtBQU9JLGlEQUFhO0FBQ1Q4QixtREFBVyxDQURGO0FBRVRGLG1EQUFXO0FBRkYscUNBUGpCO0FBV0ksc0RBQWtCO0FBQ2RFLG1EQUFXLG9EQURHO0FBRWRGLG1EQUFXLHFEQUZHO0FBR2RDLGdFQUF3QjtBQUhWLHFDQVh0QjtBQWdCSSxnREFBWWxDO0FBaEJoQixrQ0FESjtBQW1CSSwwRkFBTSxLQUFOO0FBQ0ksMENBQUssT0FEVDtBQUVJLDJDQUFNLE9BRlY7QUFHSSwyQ0FBTyxLQUFLRSxLQUFMLENBQVdDLEtBSHRCO0FBSUksOENBQVUsS0FBS0UsWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVDJCLGlEQUFTLElBREE7QUFFVEMsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEQsaURBQVMsdUJBREs7QUFFZEMsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZbEM7QUFoQmhCLGtDQW5CSjtBQXFDSTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQXJDSjtBQXRCSjtBQURKO0FBREo7QUFGSixhQURKO0FBdUVIOzs7Ozs7a0JBaElnQm9DLE8iLCJmaWxlIjoiMC5jZWM0MTQ2ODVmODZhZjIzN2E3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QnV0dG9uLCBMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vLi4vbW9kdWxlcy9BdXRoJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgRW1haWxMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZWRpcmVjdCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcm9maWxlJylcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGZldGNoKCcvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGguYXV0aGVudGljYXRlKGpzb24udG9rZW4sIGpzb24udXNlcilcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD5cbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnUGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApXG4gICAgfVxuXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL0VtYWlsTG9naW4uanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogYGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcihBdXRoLmdldFVzZXIoKS5pbWFnZSkudG9TdHJpbmcoJ2Jhc2U2NCcpfWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5zdGF0ZS5pbWFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC51cGRhdGVVc2VyKGpzb24udXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcHpvbmVSZWYgPSBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uRHJvcD17KGFjY2VwdGVkLCByZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5hcnlGaWxlID0gcmVhZGVyLnJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCaW5hcnknLCBiaW5hcnlGaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogYGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcihiaW5hcnlGaWxlKS50b1N0cmluZygnYmFzZTY0Jyl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGFjY2VwdGVkWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBhcz0nYScgY29sb3I9J3RlYWwnIHJpYmJvbj5Ecm9wIG5ldyBhdmF0YXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdVc2VybmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==