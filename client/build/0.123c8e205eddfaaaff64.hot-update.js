webpackHotUpdate(0,{

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _navbar = __webpack_require__(73);

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
                if (res.status === 200) _this2.redirect();
                // else if(res.status === 400)
                //     this.setState({
                //         errorLabel: <Label as='a'  color='red'>A user with such email already exists!</Label>
                //     })
                else _this2.setState({
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZWdpc3RyYXRpb24uanMiXSwibmFtZXMiOlsiZXJyb3JMYWJlbCIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiaGlzdG9yeSIsInB1c2giLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJyZWRpcmVjdCIsInN0YXR1c1RleHQiLCJjYXRjaCIsImVyciIsImhlaWdodCIsIm1heFdpZHRoIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsImlzRW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsd0RBQU8sSUFBRyxPQUFWLEVBQWtCLE9BQU0sS0FBeEIsRUFBOEIsVUFBUyxPQUF2QyxHQUFuQjs7a0JBRWU7QUFBQTs7QUFFWCw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVSxFQUREO0FBRVRDLG1CQUFPLEVBRkU7QUFHVEMsc0JBQVUsRUFIRDtBQUlUTCx3QkFBWTtBQUpILFNBQWI7QUFNQSxjQUFLTSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRlO0FBVWxCOztBQVpVO0FBQUE7QUFBQSxtQ0FjQTtBQUNQLGlCQUFLTixLQUFMLENBQVdRLE9BQVgsQ0FBbUJD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Q0FBV0csUUFIdEI7QUFJSSw4Q0FBVSxLQUFLQyxZQUpuQjtBQUtJLDBDQUFLLFVBTFQ7QUFNSSwyREFOSjtBQU9JLGtEQVBKO0FBUUksaURBQWE7QUFDVHlCLG1EQUFXLENBREY7QUFFVEMsbURBQVc7QUFGRixxQ0FSakI7QUFZSSxzREFBa0I7QUFDZEQsbURBQVcsb0RBREc7QUFFZEMsbURBQVcscURBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWnRCO0FBaUJJLGdEQUFZakM7QUFqQmhCLGtDQXZDSjtBQTBESTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQTFESjtBQUZKO0FBREo7QUFISjtBQUZKLGFBREo7QUEwRUg7QUFsSVU7O0FBQUE7QUFBQSxvQiIsImZpbGUiOiIwLjEyM2M4ZTIwNWVkZGZhYWFmZjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtCdXR0b24sIEdyaWQsIExhYmVsLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBTb2NpYWxOZXR3b3Jrc0xvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvU29jaWFsTmV0d29ya3NMb2dpbidcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBhcz0nbGFiZWwnIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJylcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGZldGNoKCcvYXV0aC9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgIGNvbG9yPSdyZWQnPkEgdXNlciB3aXRoIHN1Y2ggZW1haWwgYWxyZWFkeSBleGlzdHMhPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyAgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnICBjb2xvcj0ncmVkJz57ZXJyIHx8IFwiRXJyb3JcIn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8R3JpZCB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTmV0d29ya3NMb2dpbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1Bhc3N3b3JkIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQYXNzd29yZCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9SZWdpc3RyYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9